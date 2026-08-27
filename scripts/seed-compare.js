'use strict';

/**
 * Compare live DB (Strapi documents) vs seed files (src/seed/data/*.ts)
 * without writing anything.
 *
 * Checks all 22 pages from src/seed/index.ts pages[]:
 *  - MISSING : no document in DB
 *  - EMPTY   : document exists but sections is empty
 *  - OK      : sections.length + hash + SEO match
 *  - DIFF    : length or content differs — shows where
 *
 * Usage:
 *   npm run build          # required — reads from dist/src/seed
 *   npm run seed:compare            # check local DB (this machine)
 *   # on VPS:
 *   git pull && npm run build && npm run seed:compare
 *
 * Env:
 *   COMPARE_VERBOSE=1  show full section diff
 *   COMPARE_PAGE=promotion  filter to one uid substring
 */

const path = require('path');
const crypto = require('crypto');
const { createStrapi } = require('@strapi/strapi');

// Reuse dist seed — must build first
let pages;
try {
  ({ pages } = require('../dist/src/seed'));
  // some builds export differently
  if (!pages) pages = require('../dist/src/seed').pages;
} catch (e) {
  console.error('Failed to load dist/src/seed. Run `npm run build` first.');
  console.error(e.message);
  process.exit(1);
}

const VERBOSE = process.env.COMPARE_VERBOSE === '1';
const FILTER = (process.env.COMPARE_PAGE || '').toLowerCase();

// Same sanitize as src/seed/index.ts — seed nulls on string fields are stripped
const mediaNullOk = new Set([
  'backgroundImage','batteryImage','bgImage','image','icon','logo','videoThumbnail','centerImage','imagePath','logoPath','bgImage','metaImage',
]);
function sanitizeSections(sections) {
  function clean(obj) {
    if (Array.isArray(obj)) return obj.map(clean);
    if (obj && typeof obj === 'object') {
      const out = {};
      for (const [k, v] of Object.entries(obj)) {
        if (v === null && !mediaNullOk.has(k)) continue;
        out[k] = clean(v);
      }
      return out;
    }
    return obj;
  }
  return (sections || []).map(clean);
}

// Strip Strapi meta from DB so it compares with seed
const META_KEYS = new Set(['id','documentId','createdAt','updatedAt','publishedAt','createdBy','updatedBy','locale','localizations']);
function stripMeta(obj) {
  if (Array.isArray(obj)) return obj.map(stripMeta);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (META_KEYS.has(k)) continue;
      // media object — normalize to null vs {url} for comparison
      // keep as-is but strip its meta too
      out[k] = stripMeta(v);
    }
    return out;
  }
  return obj;
}

function normalizeDbSections(dbSections) {
  if (!Array.isArray(dbSections)) return [];
  return dbSections.map(s => {
    const n = stripMeta(s);
    // DB json fields come through as-is (string[]), seed is same
    return n;
  });
}

function hash(obj) {
  return crypto.createHash('sha1').update(JSON.stringify(obj)).digest('hex').slice(0, 8);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function firstDiff(a, b, path = '') {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return `${path}: length ${a.length} vs ${b.length}`;
    for (let i = 0; i < a.length; i++) {
      const d = firstDiff(a[i], b[i], `${path}[${i}]`);
      if (d) return d;
    }
    return null;
  }
  if (a && typeof a === 'object' && b && typeof b === 'object') {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      if (!(k in a)) return `${path}.${k}: missing in seed`;
      if (!(k in b)) return `${path}.${k}: missing in DB`;
      const d = firstDiff(a[k], b[k], path ? `${path}.${k}` : k);
      if (d) return d;
    }
    return null;
  }
  if (!deepEqual(a, b)) {
    const av = JSON.stringify(a)?.slice(0, 120);
    const bv = JSON.stringify(b)?.slice(0, 120);
    return `${path}: seed=${av} vs db=${bv}`;
  }
  return null;
}

async function main() {
  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();

  const targets = FILTER ? pages.filter(p => p.uid.toLowerCase().includes(FILTER) || p.title.toLowerCase().includes(FILTER)) : pages;
  if (FILTER && targets.length === 0) {
    console.error(`No pages matched filter "${FILTER}"`);
    await app.destroy().catch(()=>{});
    process.exit(1);
  }

  const pagesLen = Array.isArray(pages) ? pages.length : 0;
  console.log(`\n🌱 DB vs Seed — ${targets.length} page${targets.length===1?'':'s'}${FILTER?` (filter: ${FILTER})`:''}\n`);
  console.log(`Seed source: dist/src/seed (${pagesLen} total pages defined)`);
  const dbName = app.config.get('database.connection.connection.database') || app.config.get('database.connection.connection.filename') || 'configured DB';
  console.log(`DB: ${dbName} via strapi.documents()\n`);

  let ok = 0, diff = 0, missing = 0, empty = 0;

  for (const page of targets) {
    const fieldName = page.fieldName || 'sections';
    const seedSections = sanitizeSections(page.sections || []);
    const seedSeo = page.seo || null;
    const seedHash = hash(seedSections);

    let dbDoc = null;
    try {
      dbDoc = await app.documents(page.uid).findFirst({ status: 'published', populate: '*' });
      // fallback: draft if no published
      if (!dbDoc) dbDoc = await app.documents(page.uid).findFirst({ populate: '*' });
    } catch (e) {
      console.log(`[ERR] ${page.title} (${page.uid}) — fetch failed: ${e.message}`);
      diff++;
      continue;
    }

    if (!dbDoc) {
      console.log(`[MISSING] ${page.title} (${page.uid}) — no document in DB | seed: ${seedSections.length} sections, hash ${seedHash}`);
      missing++;
      continue;
    }

    const dbSectionsRaw = dbDoc[fieldName] || dbDoc.sections || [];
    if (!Array.isArray(dbSectionsRaw) || dbSectionsRaw.length === 0) {
      console.log(`[EMPTY]   ${page.title} (${page.uid}) — DB has 0 sections | seed: ${seedSections.length} sections, hash ${seedHash} → run npm run seed / seed:promotion`);
      empty++;
      continue;
    }

    const dbSections = normalizeDbSections(dbSectionsRaw);
    const dbHash = hash(dbSections);
    const dbSeo = stripMeta(dbDoc.seo || null);

    const lenMatch = dbSections.length === seedSections.length;
    const hashMatch = dbHash === seedHash;
    const seoMatch = deepEqual(stripMeta(seedSeo), dbSeo);

    // component order check
    const seedComps = seedSections.map(s=>s.__component).join(', ');
    const dbComps = dbSections.map(s=>s.__component).join(', ');
    const compsMatch = seedComps === dbComps;

    if (lenMatch && hashMatch && seoMatch && compsMatch) {
      console.log(`[OK]      ${page.title} (${page.uid}) — ${dbSections.length}/${seedSections.length} sections, hash ${dbHash} — match`);
      ok++;
    } else {
      diff++;
      const reasons = [];
      if (!lenMatch) reasons.push(`sections ${dbSections.length} vs ${seedSections.length}`);
      if (!hashMatch) reasons.push(`hash ${dbHash} vs ${seedHash}`);
      if (!compsMatch) reasons.push(`components differ`);
      if (!seoMatch) {
        const sd = firstDiff(stripMeta(seedSeo), dbSeo, 'seo');
        reasons.push(sd ? sd : `seo differs`);
      }
      // find first section diff
      let secDiff = null;
      if (lenMatch && !hashMatch) secDiff = firstDiff(seedSections, dbSections, 'sections');
      else if (!lenMatch) secDiff = `seed components: [${seedComps}] vs db: [${dbComps}]`;

      console.log(`[DIFF]    ${page.title} (${page.uid}) — ${dbSections.length}/${seedSections.length} sections, db:${dbHash} seed:${seedHash} — ${reasons.join(' | ')}`);
      if (secDiff) console.log(`          → ${secDiff.slice(0, 300)}`);
      if (VERBOSE) {
        console.log('  seed hash', seedHash, 'db hash', dbHash);
        console.log('  seed comps', seedComps);
        console.log('  db   comps', dbComps);
      }
    }
  }

  console.log(`\n────────────────────────────────────────`);
  console.log(`Result: ${ok} OK, ${diff} DIFF, ${empty} EMPTY, ${missing} MISSING — ${targets.length} checked`);
  if (diff || empty || missing) {
    console.log(`Next: npm run seed              (fills EMPTY only, safe)`);
    console.log(`      npm run seed:promotion    (force-overwrites Promotion)`);
    console.log(`      COMPARE_VERBOSE=1 npm run seed:compare  (full diff)`);
    console.log(`      COMPARE_PAGE=promotion npm run seed:compare  (one page)`);
  }
  console.log('');

  await new Promise(r=>setTimeout(r,300));
  await app.destroy().catch(()=>{});
  process.exit(0);
}

main().catch(async (e)=>{
  console.error(e);
  if (e.details) console.error(JSON.stringify(e.details,null,2));
  process.exit(1);
});
