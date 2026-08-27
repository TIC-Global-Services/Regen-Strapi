'use strict';

/**
 * Runs the page seeder (src/seed) against a running Strapi instance.
 *
 * Usage:
 *   npm run seed                                         # safe:  all 22 pages, fills EMPTY/MISSING only
 *   FORCE=1 npm run seed                                 # force: all 22 pages, overwrites
 *   PAGES=promotion-page npm run seed                    # safe:  only promotion (by apiName)
 *   PAGES=promotion-page,solar-page npm run seed        # safe:  filtered set (by apiName)
 *   PAGES=api::promotion-page.promotion-page npm run seed # safe:  by full UID (exact)
 *   PAGES=promotion-page FORCE=1 npm run seed           # force: only promotion
 *   PAGES=solar-page,home-page FORCE=1 npm run seed    # force: only solar+home
 *
 * PAGES accepts exact apiName or full UID (comma-separated):
 *   home-page, solar-page, promotion-page, brands-page,
 *   battery-product-page, battery-storage-page, etc.
 *   Run with a bad value to see the full list of valid IDs.
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');
const { runSeed } = require('../dist/src/seed');
const { pages } = require('../dist/src/seed');

function parsePagesFilter(raw) {
  if (!raw) return undefined;
  const tokens = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (tokens.length === 0) return undefined;
  // Exact ID match only — by apiName (home-page) or full UID (api::home-page.home-page)
  // No substring/prefix — so "home" won't hit "smart-home-battery-page"
  const byApiName = new Map(pages.map(p => [p.uid.split('::')[1].split('.')[0].toLowerCase(), p.uid]));
  const byUid = new Map(pages.map(p => [p.uid.toLowerCase(), p.uid]));
  const matched = new Set();
  for (const tok of tokens) {
    const uid = byUid.get(tok) || byApiName.get(tok);
    if (uid) matched.add(uid);
    else {
      console.warn(`[seed] PAGES token "${tok}" matched no page. Valid IDs:`);
      for (const p of pages) console.warn(`  - ${p.uid.split('::')[1].split('.')[0]}  (${p.uid})`);
    }
  }
  const only = [...matched];
  if (only.length === 0) {
    console.error(`[seed] No pages matched PAGES="${raw}".`);
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
