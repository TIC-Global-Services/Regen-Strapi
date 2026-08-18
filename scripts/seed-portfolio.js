'use strict';

/**
 * Wipe and reseed api::portfolio-project.portfolio-project from a scraped
 * JSON export (scripts/data/portfolio-data.json).
 *
 * The source JSON has entries like:
 *   { id, title, slug, link, image, filters: [...], suburb, state, postcode,
 *     details: [ { Location, Task, Panels, Inverter, Date, Brand, Model,
 *                  "Battery size", "System size", "Panel Model",
 *                  "Inverter Model", Size, "Total Energy Yield Till Date",
 *                  "CO2 Saving Till Date" } ] }
 *
 * `link` is intentionally dropped (not stored). Images are downloaded from
 * the source `image` URL and re-uploaded into the Strapi media library
 * (Portfolio folder).
 *
 * Duplicate slugs in the source (13 collisions as of this export) get a
 * `-2`, `-3`, ... suffix instead of crashing the run. A row that still
 * fails to create (e.g. other validation error) is logged and skipped,
 * the rest of the run continues. Entries whose scraped detail block
 * doesn't match their suburb (a source-site scrape bug -- ~51/478 as of
 * this export) are seeded as-is but listed as "suspect" at the end for
 * manual review; there's no reliable way to auto-correct them.
 *
 * Usage:
 *   DRY_RUN=1 node scripts/seed-portfolio.js        # preview only, no writes
 *   SEED_LIMIT=5 node scripts/seed-portfolio.js      # test with a few rows
 *   node scripts/seed-portfolio.js                   # full run (wipes + reseeds)
 *
 * SKIP_WIPE=1 skips deleting existing portfolio entries/assets first.
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const UID = 'api::portfolio-project.portfolio-project';
const DATA_FILE = path.join(__dirname, 'data', 'portfolio-data.json');
const DRY_RUN = process.env.DRY_RUN === '1';
const LIMIT = process.env.SEED_LIMIT ? Number(process.env.SEED_LIMIT) : undefined;
const SKIP_WIPE = process.env.SKIP_WIPE === '1';

function sanitizeSlug(slug, fallbackTitle) {
  const base = (slug || fallbackTitle || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || require('crypto').randomUUID().slice(0, 8);
}

const seenSlugs = new Map();

function uniqueSlug(slug) {
  const count = seenSlugs.get(slug) || 0;
  seenSlugs.set(slug, count + 1);
  return count === 0 ? slug : `${slug}-${count + 1}`;
}

// Boilerplate the source site leaks into scraped text (nav links etc).
function stripBoilerplate(text) {
  return (text || '')
    .replace(/back to portfolio/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeDescription({ details, suburb, state, postcode, title }) {
  const parts = [];
  if (details.Task) parts.push(details.Task);
  else if (details['System size'] || details['System Size']) parts.push(`${details['System size'] || details['System Size']} solar system`);
  else if (details['Battery size'] || details['Battery Size']) parts.push(`${details['Battery size'] || details['Battery Size']} battery storage`);
  if (details.Brand) parts.push(`by ${details.Brand}`);

  const address = [suburb, state, postcode].filter(Boolean).join(' ');
  const summary = [parts.join(' '), address].filter(Boolean).join(' — ');
  return summary || title || '';
}

function buildContent(details) {
  const skip = new Set(['Location', 'Battery Size', 'System Size']);
  const lines = [];
  for (const [key, value] of Object.entries(details || {})) {
    if (skip.has(key) || !value) continue;
    lines.push(`**${key}:** ${stripBoilerplate(value)}`);
  }
  return lines.join('\n\n');
}

async function fetchImageFile(url) {
  if (!url) return null;
  const fixed = url.replace(/^http:\/\//, 'https://');
  try {
    const res = await fetch(fixed);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = decodeURIComponent(fixed.split('/').pop().split('?')[0]) || 'image.jpg';
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-seed-'));
    const filepath = path.join(tmpDir, filename);
    await fs.writeFile(filepath, buffer);
    const mimetype = res.headers.get('content-type') || 'image/jpeg';
    return { filepath, filename, mimetype, size: buffer.length, tmpDir };
  } catch (err) {
    console.warn(`  ! image download failed (${fixed}): ${err.message}`);
    return null;
  }
}

const folderCache = new Map();

async function getOrCreateFolder(strapi, name) {
  if (!name) return null;
  if (folderCache.has(name)) return folderCache.get(name);
  const existing = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent: null } });
  const folder = existing || (await strapi.plugin('upload').service('folder').create({ name, parent: null }));
  folderCache.set(name, folder.id);
  return folder.id;
}

async function uploadImageToStrapi(strapi, url, name, folderName) {
  const file = await fetchImageFile(url);
  if (!file) return null;
  try {
    const folderId = await getOrCreateFolder(strapi, folderName);
    const uploadService = strapi.plugin('upload').service('upload');
    const [uploaded] = await uploadService.upload({
      data: { fileInfo: { name: name || file.filename, folder: folderId } },
      files: {
        filepath: file.filepath,
        originalFilename: file.filename,
        mimetype: file.mimetype,
        size: file.size,
      },
    });
    return uploaded?.id ?? null;
  } catch (err) {
    console.warn(`  ! image upload failed (${url}): ${err.message}`);
    return null;
  } finally {
    await fs.rm(file.tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

async function wipePortfolio(strapi) {
  console.log('Wiping existing portfolio entries + assets...');

  const folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name: 'Portfolio', parent: null } });
  if (folder) {
    const files = await strapi.db.query('plugin::upload.file').findMany({ where: { folder: folder.id } });
    const uploadService = strapi.plugin('upload').service('upload');
    for (const file of files) {
      await uploadService.remove(file).catch((err) => console.warn(`  ! failed to remove asset ${file.name}: ${err.message}`));
    }
    console.log(`  removed ${files.length} asset(s) from Portfolio folder`);
  }

  const { count } = await strapi.db.query(UID).deleteMany({});
  console.log(`  removed ${count} portfolio entr${count === 1 ? 'y' : 'ies'}`);
}

async function seedPortfolio(strapi) {
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  const rows = JSON.parse(raw);
  const items = LIMIT ? rows.slice(0, LIMIT) : rows;

  console.log(`\n== Portfolio projects (${items.length}) ==`);

  const suspect = [];
  let created = 0;
  let failed = 0;

  for (const row of items) {
    const slug = uniqueSlug(sanitizeSlug(row.slug, row.title));
    console.log(`- ${row.title}${slug !== sanitizeSlug(row.slug, row.title) ? ` (deduped slug: ${slug})` : ''}`);
    if (DRY_RUN) continue;

    const details = (row.details && row.details[0]) || {};
    const rawLocation = stripBoilerplate(details.Location);
    const suburb = row.suburb || null;

    // Source site occasionally serves a mismatched detail block for a
    // project (wrong address/brand/model) -- flag rather than silently
    // trusting it.
    if (suburb && rawLocation && !rawLocation.toLowerCase().includes(suburb.toLowerCase())) {
      suspect.push({ id: row.id, title: row.title, expected: suburb, gotLocation: rawLocation });
    }

    const address = [row.suburb, row.state, row.postcode].filter(Boolean).join(', ');
    const location = address || rawLocation || null;

    const imageId = row.image ? await uploadImageToStrapi(strapi, row.image, row.title, 'Portfolio') : null;

    const data = {
      title: row.title,
      slug,
      description: makeDescription({ details, suburb: row.suburb, state: row.state, postcode: row.postcode, title: row.title }),
      content: buildContent(details),
      suburb: row.suburb || null,
      state: row.state || null,
      postcode: row.postcode || null,
      filters: row.filters || [],
      location,
      task: details.Task || null,
      date: details.Date || null,
      brand: details.Brand || null,
      model: details.Model || null,
      panels: details.Panels || null,
      panelModel: details['Panel Model'] || null,
      inverter: details.Inverter || null,
      inverterModel: details['Inverter Model'] || null,
      batterySize: details['Battery size'] || details['Battery Size'] || details.Size || null,
      systemSize: details['System size'] || details['System Size'] || null,
      energyYield: details['Total Energy Yield Till Date'] || null,
      co2Saving: details['CO2 Saving Till Date'] || null,
      featured: false,
    };
    if (imageId) data.image = imageId;

    try {
      await strapi.documents(UID).create({ data, status: 'published' });
      created += 1;
    } catch (err) {
      failed += 1;
      console.warn(`  ! create failed (${row.title}): ${err.message}`);
    }
  }

  console.log(`Portfolio projects: ${created} created, ${failed} failed, ${items.length} total`);
  if (suspect.length) {
    console.warn(`\n! ${suspect.length} entr${suspect.length === 1 ? 'y has' : 'ies have'} a detail block that doesn't match its suburb (source scrape issue, not auto-fixed):`);
    for (const s of suspect.slice(0, 20)) {
      console.warn(`  - [${s.id}] ${s.title} -- expected "${s.expected}", detail says "${s.gotLocation.slice(0, 80)}"`);
    }
    if (suspect.length > 20) console.warn(`  ...and ${suspect.length - 20} more`);
  }
}

async function main() {
  console.log(`Source: ${DATA_FILE}`);
  if (DRY_RUN) console.log('DRY_RUN=1 -- listing only, no Strapi writes, no image fetches');
  if (LIMIT) console.log(`SEED_LIMIT=${LIMIT} -- capped`);
  if (SKIP_WIPE) console.log('SKIP_WIPE=1 -- keeping existing portfolio entries/assets');

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    if (!DRY_RUN && !SKIP_WIPE) await wipePortfolio(app);
    await seedPortfolio(app);
  } finally {
    await app.destroy();
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
