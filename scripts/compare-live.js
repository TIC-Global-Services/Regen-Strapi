'use strict';

/**
 * Compare LIVE API dumps (~/Documents/api-data-regen/*.json from fetch-live-api.js)
 * vs local SEED files (dist/src/seed — built from src/seed/data/*.ts).
 *
 * This is OFFLINE — no DB, no Strapi boot, just files.
 * Run fetch:live first to refresh dumps.
 *
 * Usage:
 *   npm run build                          # must build first — reads dist/src/seed
 *   node scripts/compare-live.js           # all 23 singleTypes
 *   PAGES=promotion-page node scripts/compare-live.js
 *   PAGES=promotion-page,about-page node scripts/compare-live.js
 *   PAGES=promotion-page,ev-charging-page COMPARE_VERBOSE=1 node scripts/compare-live.js
 *   DUMP_DIR=/tmp/dumps node scripts/compare-live.js
 *
 * Env:
 *   PAGES            exact apiName (promotion-page, about-page, ...) comma-separated
 *   DUMP_DIR         dir with live JSON dumps (default ~/Documents/api-data-regen)
 *   COMPARE_VERBOSE  1 to show full first-diff path
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');

let pages;
try {
  ({ pages } = require('../dist/src/seed'));
  if (!pages) pages = require('../dist/src/seed').pages;
} catch (e) {
  console.error('Failed to load dist/src/seed. Run `npm run build` first.');
  console.error(e.message);
  process.exit(1);
}

const VERBOSE = process.env.COMPARE_VERBOSE === '1';
const DUMP_DIR = process.env.DUMP_DIR || path.join(os.homedir(), 'Documents', 'api-data-regen');

const SINGLE_TYPES = [
  { apiName: 'about-page', out: 'about-page-api-data.json' },
  { apiName: 'promotion-page', out: 'promotion-page-api-data.json' },
  { apiName: 'ev-charging-page', out: 'ev-charging-api-data.json' },
  { apiName: 'home-page', out: 'home-page-api-data.json' },
  { apiName: 'solar-page', out: 'solar-pages/solar-system-api-data.json' },
  { apiName: 'brands-page', out: 'solar-pages/solar-brands-api-data.json' },
  { apiName: 'deals-page', out: 'solar-pages/solar-deals-api-data.json' },
  { apiName: 'rebates-page', out: 'solar-pages/solar-government-rebates-api-data.json' },
  { apiName: 'faq-page', out: 'solar-pages/solar-faq-api-data.json' },
  { apiName: 'commercial-systems-page', out: 'commercial-pages/commercial-systems-api-data.json' },
  { apiName: 'commercial-off-grid-page', out: 'commercial-pages/commercial-off-grid-api-data.json' },
  { apiName: 'off-grid-solutions-page', out: 'commercial-pages/off-grid-solutions-api-data.json' },
  { apiName: 'research-development-page', out: 'commercial-pages/r&d-api-data.json' },
  { apiName: 'portfolio-page', out: 'commercial-pages/portfolio-api-data.json' },
  { apiName: 'blog-page', out: 'blog-page-api-data.json' },
  { apiName: 'press-media-page', out: 'press-media-page-api-data.json' },
  { apiName: 'reviews-page', out: 'reviews-page-api-data.json' },
  { apiName: 'contact-page', out: 'contact-page-api-data.json' },
  { apiName: 'battery-product-page', out: 'battery-pages/battery-product-api-data.json' },
  { apiName: 'battery-storage-page', out: 'battery-pages/battery-storage-api-data.json' },
  { apiName: 'smart-home-battery-page', out: 'battery-pages/smart-home-battery-api-data.json' },
  { apiName: 'battery-brands-page', out: 'battery-pages/battery-brands-api-data.json' },
  { apiName: 'government-rebates-page', out: 'battery-pages/battery-government-rebates-api-data.json' },
];

const byApiName = new Map(SINGLE_TYPES.map(t => [t.apiName.toLowerCase(), t]));
const byUid = new Map(pages.map(p => [p.uid.split('::')[1].split('.')[0].toLowerCase(), p]));

function parseFilter(raw) {
  if (!raw) return null;
  const toks = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  const set = new Set(toks.map(t => t.split('::').pop().split('.')[0].toLowerCase()));
  return set;
}

// Same sanitize as seed/index.ts — seed nulls on string fields are stripped
const mediaNullOk = new Set(['backgroundImage','batteryImage','bgImage','image','icon','logo','video','videoThumbnail','centerImage','imagePath','logoPath','badge','bgImage','metaImage']);
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

const META_KEYS = new Set(['id','documentId','createdAt','updatedAt','publishedAt','createdBy','updatedBy','locale','localizations']);
// Live has uploaded media (backgroundImage, image, badge, etc.) that seed intentionally leaves as null/omitted.
// Comparing raw media objects (with hash/size/formats/url) would always DIFF. Ignore media values for content compare.
const MEDIA_KEYS = new Set(['backgroundImage','batteryImage','bgImage','image','icon','logo','video','videoThumbnail','centerImage','imagePath','logoPath','badge','bgImage','background','thumbnail','previewUrl','formats','provider','provider_metadata','hash','ext','mime','size','url','width','height','alternativeText','caption','focalPoint','metaImage']);
function isMediaObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj) && ('url' in obj || 'hash' in obj) && ('provider' in obj || 'mime' in obj || 'ext' in obj);
}
function stripMeta(obj) {
  if (Array.isArray(obj)) return obj.map(stripMeta);
  if (obj && typeof obj === 'object') {
    if (isMediaObject(obj)) return null;
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (META_KEYS.has(k)) continue;
      // seo.metaImage / media keys where live has null but seed omits it — treat missing == null
      if (k === 'metaImage' || MEDIA_KEYS.has(k)) {
        // normalize both sides to _present_ as null so missing vs null compares equal
        const raw = v == null ? null : stripMeta(v);
        // if media object, collapse to null; if null/missing already, keep null
        out[k] = raw && typeof raw === 'object' && isMediaObject(raw) ? null : (raw ?? null);
        if (out[k] !== null && typeof out[k] === 'object') out[k] = null; // media object case from non-isMedia path
        // Actually simpler: always null for media keys
        out[k] = null;
        continue;
      }
      if (k === 'canonicalURL' && (v === null || v === undefined || v === '')) continue;
      out[k] = stripMeta(v);
    }
    return out;
  }
  return obj;
}

function stripMetaSeed(obj) {
  // Seed variant: also ensure metaImage present as null so missing==null
  if (Array.isArray(obj)) return obj.map(stripMetaSeed);
  if (obj && typeof obj === 'object') {
    if (isMediaObject(obj)) return null;
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (META_KEYS.has(k)) continue;
      if (MEDIA_KEYS.has(k) || k === 'metaImage') { out[k] = null; continue; }
      if (k === 'canonicalURL' && (v === null || v === undefined || v === '')) continue;
      out[k] = stripMetaSeed(v);
    }
    // Ensure seo.metaImage exists as null for seed even if omitted
    if ('metaTitle' in obj && !('metaImage' in out)) out['metaImage'] = null;
    return out;
  }
  return obj;
}

function normalizeLiveForCompare(liveSections, seedSections) {
  function align(live, seed) {
    if (Array.isArray(live) && Array.isArray(seed)) return live.map((d,i)=>align(d, seed[i]));
    if (live && typeof live === 'object' && seed && typeof seed === 'object') {
      const out = { ...stripMeta(live) };
      for (const k of Object.keys(seed)) {
        if (!(k in out) && seed[k] === null) out[k] = null;
        else if (k in out) out[k] = align(out[k], seed[k]);
      }
      return out;
    }
    return stripMeta(live);
  }
  // also normalize live sections array itself
  const liveNorm = Array.isArray(liveSections) ? liveSections.map(s => stripMeta(s)) : [];
  if (!Array.isArray(seedSections)) return liveNorm;
  // align length: if live has more/fewer, don't crash
  return align(liveNorm, seedSections);
}

function normalizeSections(sections) {
  if (!Array.isArray(sections)) return [];
  return sections.map(s => stripMeta(s));
}

function hash(obj) { return crypto.createHash('sha1').update(JSON.stringify(obj)).digest('hex').slice(0,8); }
function deepEqual(a,b) { return JSON.stringify(a)===JSON.stringify(b); }
function firstDiff(a,b,path='') {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length!==b.length) return `${path}: length ${a.length} vs ${b.length}`;
    for (let i=0;i<a.length;i++) { const d=firstDiff(a[i],b[i],`${path}[${i}]`); if(d) return d; }
    return null;
  }
  if (a && typeof a==='object' && b && typeof b==='object') {
    const keys=new Set([...Object.keys(a),...Object.keys(b)]);
    for (const k of keys) {
      if (!(k in a)) return `${path}.${k}: missing in SEED (extra in LIVE)`;
      if (!(k in b)) return `${path}.${k}: missing in LIVE (extra in SEED)`;
      const d=firstDiff(a[k],b[k], path?`${path}.${k}`:k);
      if(d) return d;
    }
    return null;
  }
  if (!deepEqual(a,b)) return `${path}: seed=${JSON.stringify(a)?.slice(0,140)} vs live=${JSON.stringify(b)?.slice(0,140)}`;
  return null;
}

function main() {
  const filter = parseFilter(process.env.PAGES);
  let targets = SINGLE_TYPES;
  if (filter) {
    const unknown = [...filter].filter(t => !byApiName.has(t));
    if (unknown.length) {
      console.error(`[compare-live] PAGES token(s) "${unknown.join(',')}" matched nothing. Valid apiNames:`);
      for (const t of SINGLE_TYPES) console.error(`  - ${t.apiName}`);
      process.exit(1);
    }
    targets = SINGLE_TYPES.filter(t => filter.has(t.apiName.toLowerCase()));
  }

  console.log(`\n📂 LIVE (file) vs SEED (dist) — ${targets.length} page(s)${filter?` (filter: ${[...filter].join(',')})`:''}`);
  console.log(`Live dumps: ${DUMP_DIR} (run npm run fetch:live to refresh)`);
  console.log(`Seed: dist/src/seed (${pages.length} total defined)\n`);

  let ok=0, diff=0, missing=0, empty=0;
  for (const t of targets) {
    const page = byUid.get(t.apiName.toLowerCase());
    if (!page) {
      console.log(`[SKIP] ${t.apiName} — no seed entry for this apiName (check src/seed/index.ts uid)`);
      continue;
    }
    const dumpPath = path.join(DUMP_DIR, t.out);
    if (!fs.existsSync(dumpPath)) {
      console.log(`[MISSING] ${page.title} (${page.uid}) — no dump at ${t.out} | run npm run fetch:live`);
      missing++;
      continue;
    }
    let dump;
    try { dump = JSON.parse(fs.readFileSync(dumpPath,'utf8')); } catch(e) {
      console.log(`[ERR] ${page.title} (${page.uid}) — bad JSON ${t.out}: ${e.message}`);
      diff++;
      continue;
    }
    const liveData = dump.data;
    if (liveData == null) {
      console.log(`[EMPTY]   ${page.title} (${page.uid}) — live data null (unpublished or 404) | seed: ${sanitizeSections(page.sections||[]).length} sections`);
      empty++;
      continue;
    }
    const liveSectionsRaw = liveData.sections || [];
    const liveSeoRaw = liveData.seo || null;
    const seedSections = sanitizeSections(page.sections || []);
    const seedSeo = stripMetaSeed(page.seo || null);
    const seedHash = hash(seedSections.map(s => stripMetaSeed(s)));

    const liveAligned = normalizeLiveForCompare(liveSectionsRaw, seedSections);
    const liveStripped = normalizeSections(liveSectionsRaw);
    const liveHash = hash(liveAligned.map(s => stripMetaSeed(s)));
    const liveSeo = stripMeta(liveSeoRaw);

    const lenMatch = liveStripped.length === seedSections.length;
    const hashMatch = liveHash === seedHash;
    const seoMatch = deepEqual(seedSeo, liveSeo);
    const seedComps = seedSections.map(s=>s.__component).join(', ');
    const liveComps = liveStripped.map(s=>s.__component).join(', ');
    const compsMatch = seedComps === liveComps;

    if (lenMatch && hashMatch && seoMatch && compsMatch) {
      console.log(`[OK]      ${page.title} (${page.uid}) — ${liveStripped.length}/${seedSections.length} sections, hash ${liveHash} — match`);
      ok++;
    } else {
      diff++;
      const reasons=[];
      if (!lenMatch) reasons.push(`sections ${liveStripped.length} vs ${seedSections.length}`);
      if (!hashMatch) reasons.push(`hash ${liveHash} vs ${seedHash}`);
      if (!compsMatch) reasons.push(`components differ`);
      if (!seoMatch) { const sd=firstDiff(seedSeo, liveSeo, 'seo'); reasons.push(sd?sd:'seo differs'); }
      let secDiff=null;
      if (lenMatch && !hashMatch) secDiff=firstDiff(seedSections, liveAligned, 'sections');
      else if (!lenMatch) secDiff=`seed components: [${seedComps}] vs live: [${liveComps}]`;
      console.log(`[DIFF]    ${page.title} (${page.uid}) — ${liveStripped.length}/${seedSections.length} sections, live:${liveHash} seed:${seedHash} — ${reasons.join(' | ')}`);
      if (secDiff) console.log(`          → ${secDiff.slice(0, 400)}`);
      if (VERBOSE) { console.log('  seed comps', seedComps); console.log('  live comps', liveComps); }
    }
  }

  console.log(`\n────────────────────────────────────────`);
  console.log(`Result: ${ok} OK, ${diff} DIFF, ${empty} EMPTY, ${missing} MISSING — ${targets.length} checked`);
  if (diff||empty||missing) {
    console.log(`Next: npm run fetch:live                          (refresh dumps from live)`);
    console.log(`      PAGES=promotion-page npm run compare:live   (one page)`);
    console.log(`      COMPARE_VERBOSE=1 npm run compare:live      (full diff)`);
    console.log(`      PAGES=promotion-page FORCE=1 npm run seed   (overwrite one page on DB)`);
    console.log(`      # then rebuild + reseed on VPS (see earlier guide)`);
  }
  console.log('');
}

main();
