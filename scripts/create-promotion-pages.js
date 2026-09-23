'use strict';

/**
 * One-off: create 6 promo-page (collection type, route /api/promotion-pages) entries,
 * each a full deep clone of the existing promotion-page single type's sections + seo,
 * with a per-slug hubspotFormId. The old promotion-page single type / /api/promotion-page
 * route is left untouched.
 *
 *   DRY_RUN=1 node scripts/create-promotion-pages.js   # preview only
 *   node scripts/create-promotion-pages.js             # create entries (idempotent: skips existing slugs)
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;

const ENTRIES = [
  { slug: 'solar-perth', title: 'Promotion - Solar Perth', hubspotFormId: '8da0d931-e481-4e7a-bb0e-9bdf0afe5522' },
  { slug: 'solar-perth-offer', title: 'Promotion - Solar Perth Offer', hubspotFormId: '8da0d931-e481-4e7a-bb0e-9bdf0afe5522' },
  { slug: 'solar-perth-packages', title: 'Promotion - Solar Perth Packages', hubspotFormId: '8da0d931-e481-4e7a-bb0e-9bdf0afe5522' },
  { slug: 'solar-system-perth', title: 'Promotion - Solar System Perth', hubspotFormId: '5ca75069-69da-4015-b63c-2fff558ff814' },
  { slug: 'solar-package-perth', title: 'Promotion - Solar Package Perth', hubspotFormId: '8da0d931-e481-4e7a-bb0e-9bdf0afe5522' },
  { slug: 'regen-solar-perth', title: 'Promotion - Regen Solar Perth', hubspotFormId: '8da0d931-e481-4e7a-bb0e-9bdf0afe5522' },
];

function buildPopulate(strapi, uid, depth = 0) {
  if (depth > 10) return true;
  const model = strapi.getModel(uid);
  const populate = {};
  for (const [key, attr] of Object.entries(model.attributes)) {
    if (attr.type === 'component') {
      const sub = buildPopulate(strapi, attr.component, depth + 1);
      populate[key] = sub === true ? true : { populate: sub };
    } else if (attr.type === 'dynamiczone') {
      const on = {};
      for (const compUid of attr.components) {
        const sub = buildPopulate(strapi, compUid, depth + 1);
        on[compUid] = sub === true ? true : { populate: sub };
      }
      populate[key] = { on };
    } else if (attr.type === 'media' || attr.type === 'relation') {
      populate[key] = true;
    }
  }
  return Object.keys(populate).length ? populate : true;
}

function cleanValue(strapi, uid, data) {
  if (data == null) return data;
  const model = strapi.getModel(uid);
  const out = {};
  for (const [key, attr] of Object.entries(model.attributes)) {
    if (!(key in data) || data[key] == null) continue;
    const val = data[key];
    if (attr.type === 'component') {
      out[key] = attr.repeatable
        ? val.map((v) => cleanValue(strapi, attr.component, v))
        : cleanValue(strapi, attr.component, val);
    } else if (attr.type === 'media') {
      out[key] = Array.isArray(val) ? val.map((m) => m.id) : val.id;
    } else if (attr.type === 'relation') {
      out[key] = Array.isArray(val) ? val.map((r) => r.id) : val.id;
    } else {
      out[key] = val;
    }
  }
  return out;
}

async function main() {
  const app = await createStrapi({ appDir: process.cwd(), distDir: path.join(process.cwd(), 'dist') }).load();
  app.log.level = 'error';

  const report = { created: [], skipped_existing: [] };
  try {
    const sourceUid = 'api::promotion-page.promotion-page';
    const targetUid = 'api::promo-page.promo-page';

    const populate = buildPopulate(app, sourceUid);
    const source = await app.documents(sourceUid).findFirst({ populate, status: 'published' });
    if (!source) throw new Error('source promotion-page entry not found (published)');

    const cleanedSections = (source.sections || []).map((s) => {
      const cleaned = cleanValue(app, s.__component, s);
      cleaned.__component = s.__component;
      return cleaned;
    });
    const cleanedSeo = source.seo ? cleanValue(app, 'shared.seo', source.seo) : undefined;

    console.log(`source sections: ${cleanedSections.length} components, seo: ${!!cleanedSeo}`);

    for (const entry of ENTRIES) {
      const existing = await app.documents(targetUid).findFirst({ filters: { slug: { $eq: entry.slug } } });
      if (existing) { console.log(`= skip (already exists): ${entry.slug}`); report.skipped_existing.push(entry.slug); continue; }

      if (DRY_RUN) {
        console.log(`  would create: ${entry.slug} (${entry.title}, hubspotFormId=${entry.hubspotFormId})`);
        report.created.push(entry.slug);
        continue;
      }

      const data = {
        slug: entry.slug,
        title: entry.title,
        hubspotFormId: entry.hubspotFormId,
        sections: cleanedSections,
      };
      if (cleanedSeo) data.seo = cleanedSeo;

      const created = await app.documents(targetUid).create({ data, status: 'published' });
      console.log(`  + created: ${entry.slug} (documentId ${created.documentId})`);
      report.created.push(entry.slug);
    }
  } finally {
    await app.destroy();
  }

  console.log('\n=== report ===');
  console.log(JSON.stringify(report, null, 2));
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
