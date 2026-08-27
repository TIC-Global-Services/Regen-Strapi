'use strict';

/**
 * Runs the page seeder (src/seed) against a running Strapi instance.
 *
 * Usage:
 *   npm run seed                              # safe:  all 22 pages, fills EMPTY/MISSING only
 *   FORCE=1 npm run seed                      # force: all 22 pages, overwrites
 *   PAGES=promotion npm run seed              # safe:  only promotion
 *   PAGES=promotion,solar,brands npm run seed # safe:  filtered set
 *   PAGES=promotion FORCE=1 npm run seed     # force: only promotion (for casing sync)
 *   PAGES=solar,home FORCE=1 npm run seed   # force: only solar+home
 *
 * PAGES matches substring of uid or slug:
 *   promotion  -> api::promotion-page.promotion-page
 *   solar      -> api::solar-page.solar-page
 *   brands     -> api::brands-page.brands-page
 *   battery    -> all battery-* pages
 *   government -> api::government-rebates-page.government-rebates-page
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');
const { runSeed } = require('../dist/src/seed');
const { pages } = require('../dist/src/seed');

function parsePagesFilter(raw) {
  if (!raw) return undefined;
  const tokens = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (tokens.length === 0) return undefined;
  // Resolve tokens to actual UIDs via substring match (uid or slug part)
  const matched = new Set();
  for (const tok of tokens) {
    let hit = false;
    for (const p of pages) {
      const uid = p.uid.toLowerCase();
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      // also allow matching the api name part: "promotion-page", "solar-page"
      const apiName = uid.split('::')[1]?.split('.')[0]?.toLowerCase() || '';
      if (uid.includes(tok) || apiName.includes(tok) || slug.includes(tok)) {
        matched.add(p.uid);
        hit = true;
      }
    }
    if (!hit) console.warn(`[seed] PAGES token "${tok}" matched no page — try: ${pages.map(p=>p.uid.split('::')[1].split('.')[0]).join(', ')}`);
  }
  const only = [...matched];
  if (only.length === 0) {
    console.error(`[seed] No pages matched PAGES="${raw}". Available:`);
    for (const p of pages) console.error(`  - ${p.uid}  (${p.title})`);
    process.exit(1);
  }
  return only;
}

async function main() {
  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();

  const force = process.env.FORCE === '1';
  const only = parsePagesFilter(process.env.PAGES);

  if (force) console.log(`FORCE=1 — will overwrite${only ? ` ${only.length} page(s)` : ' all pages'}`);
  if (only) console.log(`PAGES filter: ${only.join(', ')}`);
  if (!force && !only) console.log('Safe mode: fills EMPTY/MISSING only (use FORCE=1 to overwrite)');

  try {
    await runSeed(app, { force, ...(only ? { only } : {}) });
  } catch (err) {
    if (err.details) console.error(JSON.stringify(err.details, null, 2));
    throw err;
  } finally {
    await new Promise((r) => setTimeout(r, 500));
    try { await app.destroy(); } catch {}
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
