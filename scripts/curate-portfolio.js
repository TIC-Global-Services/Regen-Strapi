'use strict';

/**
 * One-off: curate the portfolio to the client-approved list (scripts/data/portfolio-curation.json).
 *  1. Sets `filters` on both the draft and published row of every listed project.
 *  2. Unpublishes every other published project (draft is kept, so it is reversible in the admin).
 * Idempotent. Projects on the list that no longer exist are reported, never created.
 *
 *   DRY_RUN=1 node scripts/curate-portfolio.js   # preview only
 *   node scripts/curate-portfolio.js
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const UID = 'api::portfolio-project.portfolio-project';
const KEEP = require('./data/portfolio-curation.json');

const same = (a, b) => JSON.stringify([...(a || [])].sort()) === JSON.stringify([...b].sort());

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  try {
    const keepIds = new Set(KEEP.map(k => k.documentId));
    const published = await app.db.query(UID).findMany({ where: { publishedAt: { $notNull: true } }, limit: 5000 });
    const pubByDoc = new Map(published.map(p => [p.documentId, p]));

    let missing = 0, changed = 0, ok = 0;
    for (const k of KEEP) {
      const pub = pubByDoc.get(k.documentId);
      if (!pub) { console.log(`  ! not published/not found: ${k.title}`); missing++; continue; }
      if (same(pub.filters, k.filters)) { ok++; continue; }
      console.log(`  ${DRY_RUN ? '[DRY] ' : ''}${JSON.stringify(pub.filters)} -> ${JSON.stringify(k.filters)} | ${k.title.slice(0, 60)}`);
      if (!DRY_RUN) await app.db.query(UID).updateMany({ where: { documentId: k.documentId }, data: { filters: k.filters } });
      changed++;
    }

    const extras = published.filter(p => !keepIds.has(p.documentId));
    console.log(`\nkeep: ${KEEP.length} (already correct ${ok}, filters changed ${changed}, missing ${missing}); unpublish: ${extras.length}${DRY_RUN ? ' (DRY_RUN)' : ''}`);
    if (!DRY_RUN) {
      for (const p of extras) await app.documents(UID).unpublish({ documentId: p.documentId });
      console.log(`unpublished ${extras.length}`);
    }
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
