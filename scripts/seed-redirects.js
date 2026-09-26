'use strict';

/**
 * One-off: seed the redirect collection from scripts/data/redirects-seed.json.
 * Idempotent: skips sources that already exist (never overwrites editor changes).
 *
 *   DRY_RUN=1 node scripts/seed-redirects.js   # preview only
 *   node scripts/seed-redirects.js
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const UID = 'api::redirect.redirect';
const SEED = require('./data/redirects-seed.json');

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  try {
    let created = 0, skipped = 0;
    for (const r of SEED) {
      const existing = await app.documents(UID).findFirst({ filters: { source: r.source } });
      if (existing) { skipped++; continue; }
      console.log(`  ${DRY_RUN ? '[DRY] would create' : '✓'} ${r.source} -> ${r.destination}`);
      if (!DRY_RUN) await app.documents(UID).create({ data: { source: r.source, destination: r.destination, permanent: r.permanent ?? true, enabled: true } });
      created++;
    }
    console.log(`Done: ${created} created, ${skipped} skipped of ${SEED.length}`);
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
