'use strict';

/**
 * One-off: add a solar.why-regen-power section to the solar-page (draft + published) directly after
 * solar.timeline, from scripts/data/solar-why-regen-power.json. Writes only the new component's
 * own rows plus the zone join row (later sections are shifted down one place), so no other section
 * content is touched or re-created. Stat logos reuse EXISTING media-library files (logoFileId);
 * nothing is uploaded.
 * Idempotent: skips a solar-page row that already has a solar.why-regen-power section.
 *
 *   DRY_RUN=1 node scripts/seed-solar-why-regen-power.js   # preview only
 *   node scripts/seed-solar-why-regen-power.js
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const DATA = require('./data/solar-why-regen-power.json');

const idOf = r => (r && typeof r === 'object' ? r.id : r);

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  const knex = app.db.connection;
  try {
    const anchors = await knex('solar_pages_cmps').where({ component_type: 'solar.timeline', field: 'sections' }).select('entity_id', 'order');
    console.log(`solar-page rows with a timeline: ${anchors.length}`);
    for (const { entity_id, order } of anchors) {
      const has = await knex('solar_pages_cmps').where({ entity_id, component_type: 'solar.why-regen-power', field: 'sections' }).first();
      if (has) { console.log(`  - page row ${entity_id} already has the section — skip`); continue; }
      const files = DATA.stats.filter(s => s.logoFileId).map(s => s.logoFileId);
      const found = await knex('files').whereIn('id', files).select('id', 'name');
      if (found.length !== new Set(files).size) throw new Error(`logo file(s) missing from media library: wanted ${files}, found ${found.map(f => f.id)}`);
      console.log(`  ${DRY_RUN ? '[DRY] ' : ''}page row ${entity_id}: insert after order ${order} (${DATA.stats.length} stats, ${DATA.awards.length} awards, ${DATA.paragraphs.length} paragraphs; logos ${found.map(f => `${f.id}=${f.name}`).join(', ')})`);
      if (DRY_RUN) continue;

      await knex.transaction(async trx => {
        const [sec] = await trx('components_solar_why_regen_powers').insert({ badge: DATA.badge, title: DATA.title, awards_title: DATA.awardsTitle }).returning('id');
        const secId = idOf(sec);
        const link = (cmpId, type, field, ord) => trx('components_solar_why_regen_powers_cmps').insert({ entity_id: secId, cmp_id: cmpId, component_type: type, field, order: ord });

        for (let i = 0; i < DATA.paragraphs.length; i++) {
          const p = DATA.paragraphs[i];
          const [r] = await trx('components_shared_intro_paragraphs').insert({ text: p.text, is_secondary: p.isSecondary }).returning('id');
          await link(idOf(r), 'shared.intro-paragraph', 'paragraphs', i + 1);
        }
        for (let i = 0; i < DATA.stats.length; i++) {
          const s = DATA.stats[i];
          const [r] = await trx('components_solar_why_regen_stats').insert({ value: s.value, label: s.label }).returning('id');
          const statId = idOf(r);
          await link(statId, 'solar.why-regen-stat', 'stats', i + 1);
          if (s.logoFileId) await trx('files_related_mph').insert({ file_id: s.logoFileId, related_id: statId, related_type: 'solar.why-regen-stat', field: 'logo', order: 1 });
        }
        for (let i = 0; i < DATA.awards.length; i++) {
          const [r] = await trx('components_solar_why_regen_awards').insert({ text: DATA.awards[i].text }).returning('id');
          await link(idOf(r), 'solar.why-regen-award', 'awards', i + 1);
        }

        await trx('solar_pages_cmps').where({ entity_id, field: 'sections' }).andWhere('order', '>', order).increment('order', 1);
        await trx('solar_pages_cmps').insert({ entity_id, cmp_id: secId, component_type: 'solar.why-regen-power', field: 'sections', order: order + 1 });
      });
    }
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
