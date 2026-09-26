'use strict';

/**
 * One-off: populate solar.timeline `badge` + `steps` on the existing solar-page timeline section
 * (draft and published) from scripts/data/solar-timeline-steps.json, via direct component-table
 * writes so no other section content is touched or re-created.
 * Idempotent: skips a timeline that already has steps.
 *
 *   DRY_RUN=1 node scripts/seed-solar-timeline.js   # preview only
 *   node scripts/seed-solar-timeline.js
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const DATA = require('./data/solar-timeline-steps.json');

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  const knex = app.db.connection;
  try {
    const rows = await knex('solar_pages_cmps').where({ component_type: 'solar.timeline', field: 'sections' }).select('entity_id', 'cmp_id');
    console.log(`timeline sections found: ${rows.length}`);
    for (const { entity_id, cmp_id } of rows) {
      const existing = await knex('components_solar_timeline_sections_cmps').where({ entity_id: cmp_id, field: 'steps' }).count({ n: '*' }).first();
      if (Number(existing.n) > 0) { console.log(`  - timeline ${cmp_id} (page row ${entity_id}) already has steps — skip`); continue; }
      console.log(`  ${DRY_RUN ? '[DRY] ' : ''}timeline ${cmp_id} (page row ${entity_id}): badge + ${DATA.steps.length} steps`);
      if (DRY_RUN) continue;
      await knex.transaction(async trx => {
        await trx('components_solar_timeline_sections').where({ id: cmp_id }).update({ badge: DATA.badge });
        for (let i = 0; i < DATA.steps.length; i++) {
          const [step] = await trx('components_solar_timeline_steps').insert({ title: DATA.steps[i].title, description: DATA.steps[i].description }).returning('id');
          const stepId = typeof step === 'object' ? step.id : step;
          await trx('components_solar_timeline_sections_cmps').insert({ entity_id: cmp_id, cmp_id: stepId, component_type: 'solar.timeline-step', field: 'steps', order: i + 1 });
        }
      });
    }
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
