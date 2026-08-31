'use strict';

/**
 * Fetch live CMS API (regen-cms.theinternetcompany.one) and save each
 * page's `?populate=deep` JSON to ~/Documents/api-data-regen/
 *
 * Unlike seed-compare (DB vs seed internally), this hits the PUBLIC
 * HTTP API — the same endpoint the Next.js frontend uses.
 *
 * Usage (from repo root):
 *   node scripts/fetch-live-api.js                          # all pages
 *   PAGES=promotion-page node scripts/fetch-live-api.js     # one page
 *   PAGES=promotion-page,about-page node scripts/fetch-live-api.js
 *   API_URL=https://regen-cms.theinternetcompany.one node scripts/fetch-live-api.js
 *   OUT_DIR=/tmp/dumps node scripts/fetch-live-api.js       # custom dir
 *   API_TOKEN=xxx node scripts/fetch-live-api.js            # if public role has no find
 *
 * Env:
 *   PAGES      exact apiName (promotion-page, about-page, ev-charging-page, ...) comma-separated; default all
 *   API_URL    base URL (default https://regen-cms.theinternetcompany.one)
 *   OUT_DIR    output dir (default ~/Documents/api-data-regen)
 *   API_TOKEN  Bearer token for Authorization header
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Live CMS base — local dev is http://localhost:1337 if you want
const API_URL = (process.env.API_URL || 'https://regen-cms.theinternetcompany.one').replace(/\/$/, '');
const OUT_DIR = process.env.OUT_DIR || path.join(os.homedir(), 'Documents', 'api-data-regen');
const TOKEN = process.env.API_TOKEN || process.env.STRAPI_API_TOKEN || '';

// Strapi 5: populate=deep is invalid (ValidationError 400). Use populate[sections][populate]=* + populate[seo][populate]=*
// Extra nested populate for media inside dynamiczone components is handled via populate param below.
const POPULATE_QS = 'populate[sections][populate]=*&populate[seo][populate]=*';
const COLLECTION_QS = 'populate=*&pagination[pageSize]=100';

// SingleTypes (GET /api/<slug>?<POPULATE_QS>) and collectionTypes (GET /api/<slug>?<COLLECTION_QS>)
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

const COLLECTION_TYPES = [
  // published only, pagination handled
  { apiName: 'portfolio-projects', out: 'portfolio-projects-api-data.json' },
  { apiName: 'blog-articles', out: 'blog-articles-api-data.json' },
  { apiName: 'press-articles', out: 'press-articles-api-data.json' },
  { apiName: 'testimonials', out: 'testimonials-api-data.json' },
];

const ALL = [...SINGLE_TYPES, ...COLLECTION_TYPES];

function parseFilter(raw) {
  if (!raw) return null;
  const toks = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (toks.length === 0) return null;
  // allow apiName or full uid like api::about-page.about-page
  const norm = toks.map(t => t.split('::').pop().split('.')[0].toLowerCase());
  return new Set(norm);
}

async function fetchJson(url) {
  const headers = { Accept: 'application/json' };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;
  const res = await fetch(url, { headers });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { _raw: text }; }
  return { status: res.status, ok: res.ok, json, url };
}

async function main() {
  const filter = parseFilter(process.env.PAGES);
  const targets = filter ? ALL.filter(t => filter.has(t.apiName.toLowerCase())) : ALL;
  if (filter && targets.length === 0) {
    console.error(`[fetch-live] PAGES="${process.env.PAGES}" matched nothing. Valid apiNames:`);
    for (const t of ALL) console.error(`  - ${t.apiName} -> ${t.out}`);
    process.exit(1);
  }
  if (filter) console.log(`[fetch-live] PAGES filter: ${[...filter].join(', ')} -> ${targets.length} target(s)`);
  console.log(`[fetch-live] API ${API_URL} -> ${OUT_DIR}`);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0, fail = 0;
  for (const t of targets) {
    const isCollection = COLLECTION_TYPES.some(c => c.apiName === t.apiName);
    const base = `${API_URL}/api/${t.apiName}`;
    const url = isCollection
      ? `${base}?${COLLECTION_QS}`
      : `${base}?${POPULATE_QS}`;
    const outPath = path.join(OUT_DIR, t.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const { status, ok: httpOk, json } = await fetchJson(url);
    if (!httpOk) {
      console.error(`[FAIL] ${t.apiName} ${status} ${url}`);
      // still save error body for debugging? skip to avoid overwriting good dump with 500
      const errPath = outPath.replace(/\.json$/, '.error.json');
      fs.writeFileSync(errPath, JSON.stringify({ url, status, body: json }, null, 2));
      console.error(`       saved error to ${errPath}`);
      fail++;
      continue;
    }
    // verify shape for singleTypes
    if (!isCollection && json.data === undefined) {
      console.warn(`[WARN] ${t.apiName} 200 but no 'data' key — saving anyway`);
    }
    fs.writeFileSync(outPath, JSON.stringify(json, null, 2));
    const sections = json.data?.sections?.length ?? json.data?.length ?? (Array.isArray(json.data) ? json.data.length : '-');
    console.log(`[OK] ${t.apiName} -> ${path.relative(OUT_DIR, outPath)} (${status}, sections/items: ${sections})`);
    ok++;
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed. Output: ${OUT_DIR}`);
  if (fail) process.exitCode = 1;
}

main().catch(e => { console.error(e); process.exit(1); });
