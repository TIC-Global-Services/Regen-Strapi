'use strict';

/**
 * Wipe and reseed api::case-study.case-study from scripts/data/case-studies.json
 * (source: /Users/mano/Downloads/case_studies.json, copied in as-is).
 *
 * pdf is intentionally left null -- uploaded manually per case study via the
 * Strapi admin/CMS. Images are downloaded from the source `images[]` URLs
 * and re-uploaded into the Strapi media library (Case Studies folder).
 *
 * Usage:
 *   DRY_RUN=1 node scripts/seed-case-studies.js        # preview only, no writes
 *   SEED_LIMIT=2 node scripts/seed-case-studies.js      # test with a few rows
 *   node scripts/seed-case-studies.js                   # full run (wipes + reseeds)
 *
 * SKIP_WIPE=1 skips deleting existing case-study entries/assets first.
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const UID = 'api::case-study.case-study';
const DATA_FILE = path.join(__dirname, 'data', 'case-studies.json');
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

async function fetchImageFile(url) {
  if (!url) return null;
  const fixed = url.replace(/^http:\/\//, 'https://');
  try {
    const res = await fetch(fixed);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = decodeURIComponent(fixed.split('/').pop().split('?')[0]) || 'image.jpg';
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'case-study-seed-'));
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

async function wipeCaseStudies(strapi) {
  console.log('Wiping existing case-study entries + assets...');

  const folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name: 'Case Studies', parent: null } });
  if (folder) {
    const files = await strapi.db.query('plugin::upload.file').findMany({ where: { folder: folder.id } });
    const uploadService = strapi.plugin('upload').service('upload');
    for (const file of files) {
      await uploadService.remove(file).catch((err) => console.warn(`  ! failed to remove asset ${file.name}: ${err.message}`));
    }
    console.log(`  removed ${files.length} asset(s) from Case Studies folder`);
  }

  const { count } = await strapi.db.query(UID).deleteMany({});
  console.log(`  removed ${count} case-study entr${count === 1 ? 'y' : 'ies'}`);
}

async function seedCaseStudies(strapi) {
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  const rows = JSON.parse(raw);
  const items = LIMIT ? rows.slice(0, LIMIT) : rows;

  console.log(`\n== Case studies (${items.length}) ==`);

  let created = 0;
  let failed = 0;

  for (const row of items) {
    const slug = uniqueSlug(sanitizeSlug(row.slug, row.card_title));
    console.log(`- ${row.card_title}${slug !== row.slug ? ` (slug: ${slug})` : ''}`);
    if (DRY_RUN) continue;

    const imageIds = [];
    for (const imgUrl of row.images || []) {
      const id = await uploadImageToStrapi(strapi, imgUrl, undefined, 'Case Studies');
      if (id) imageIds.push(id);
    }

    const data = {
      cardTitle: row.card_title,
      slug,
      cardSubtitle: row.card_subtitle || null,
      location: row.location || null,
      locationDetails: row.location_details || null,
      revealText: row.reveal_text || null,
      // pdf intentionally omitted -- uploaded manually via CMS
      caseStudyDetails: (row.casestudydetails || []).map((d) => ({
        title: d.title || null,
        details: d.details || null,
      })),
      tables: (row.tables || []).map((t) => ({
        tableId: t.id || null,
        title: t.title || null,
        headers: t.headers || [],
        rows: t.rows || [],
      })),
    };
    if (imageIds.length) data.images = imageIds;

    try {
      await strapi.documents(UID).create({ data, status: 'published' });
      created += 1;
    } catch (err) {
      failed += 1;
      console.warn(`  ! create failed (${row.card_title}): ${err.message}`);
      if (err.details?.errors) {
        for (const e of err.details.errors) console.warn(`    - ${e.path}: ${e.message}`);
      }
    }
  }

  console.log(`Case studies: ${created} created, ${failed} failed, ${items.length} total`);
}

async function main() {
  console.log(`Source: ${DATA_FILE}`);
  if (DRY_RUN) console.log('DRY_RUN=1 -- listing only, no Strapi writes, no image fetches');
  if (LIMIT) console.log(`SEED_LIMIT=${LIMIT} -- capped`);
  if (SKIP_WIPE) console.log('SKIP_WIPE=1 -- keeping existing case-study entries/assets');

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    if (!DRY_RUN && !SKIP_WIPE) await wipeCaseStudies(app);
    await seedCaseStudies(app);
  } finally {
    // strapi.destroy() can throw "Error: aborted" tearing down the DB pool
    // even when every write above already completed successfully -- don't
    // let a teardown race fail the whole run.
    await app.destroy().catch((err) => console.warn(`  ! strapi teardown warning (safe to ignore): ${err.message}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
