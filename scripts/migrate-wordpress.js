'use strict';

/**
 * One-off migration: WordPress (wordpress_backup MySQL dump) -> Strapi.
 *
 * Maps:
 *   post_type=post, NOT in category "Press Release"  -> api::blog-article.blog-article
 *   post_type=post, IN category "Press Release"      -> api::press-article.press-article
 *   post_type=portfolio                               -> api::portfolio-project.portfolio-project
 *
 * publishedAt / createdAt / updatedAt are backdated to the original WP post_date.
 * Featured images are pulled from the live site (regenpower.com) via the WP
 * attachment guid and uploaded into the Strapi media library.
 *
 * Usage:
 *   DRY_RUN=1 node scripts/migrate-wordpress.js        # preview only, no writes
 *   MIGRATE_LIMIT=5 node scripts/migrate-wordpress.js  # test with a few rows per type
 *   node scripts/migrate-wordpress.js                  # full run
 *
 * Re-running is safe: entries are matched by slug and skipped if already present.
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const crypto = require('crypto');
const mysql = require('mysql2/promise');
const { createStrapi } = require('@strapi/strapi');

const WP_DB = {
  host: process.env.WP_DB_HOST || '127.0.0.1',
  port: Number(process.env.WP_DB_PORT || 3306),
  user: process.env.WP_DB_USER || 'root',
  password: process.env.WP_DB_PASSWORD || 'root',
  database: process.env.WP_DB_NAME || 'wordpress_backup',
  dateStrings: true,
};
const PREFIX = process.env.WP_DB_PREFIX || 'wprv_';
const PRESS_CATEGORY_TERM_ID = Number(process.env.WP_PRESS_TERM_ID || 1);
const DRY_RUN = process.env.DRY_RUN === '1';
const LIMIT = process.env.MIGRATE_LIMIT ? Number(process.env.MIGRATE_LIMIT) : undefined;

function stripHtml(html) {
  return (html || '')
    .replace(/<!--\s*\/?wp:[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8211;|&ndash;/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanContent(html) {
  return (html || '').replace(/<!--\s*\/?wp:[\s\S]*?-->/g, '').trim();
}

function makeDescription(excerpt, content, max = 160) {
  const source = stripHtml(excerpt) || stripHtml(content);
  if (!source) return '';
  if (source.length <= max) return source;
  return `${source.slice(0, max - 1).trimEnd()}…`;
}

function sanitizeSlug(slug, fallbackTitle) {
  const base = (slug || fallbackTitle || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || crypto.randomUUID().slice(0, 8);
}

function toIsoDate(gmt, local) {
  const raw = gmt && gmt !== '0000-00-00 00:00:00' ? gmt : local;
  const d = new Date(`${raw.replace(' ', 'T')}Z`);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

async function fetchImageFile(guid) {
  if (!guid) return null;
  const url = guid.replace(/^http:\/\//, 'https://');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filename = decodeURIComponent(url.split('/').pop().split('?')[0]) || 'image.jpg';
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'wp-migrate-'));
    const filepath = path.join(tmpDir, filename);
    await fs.writeFile(filepath, buffer);
    const mimetype = res.headers.get('content-type') || 'image/jpeg';
    return { filepath, filename, mimetype, size: buffer.length, tmpDir };
  } catch (err) {
    console.warn(`  ! image download failed (${url}): ${err.message}`);
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

async function uploadImageToStrapi(strapi, guid, name, folderName) {
  const file = await fetchImageFile(guid);
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
    console.warn(`  ! image upload failed (${guid}): ${err.message}`);
    return null;
  } finally {
    await fs.rm(file.tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

async function getCategories(conn, postId, excludeNames = []) {
  const [rows] = await conn.execute(
    `SELECT t.name FROM ${PREFIX}term_relationships tr
     JOIN ${PREFIX}term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
     JOIN ${PREFIX}terms t ON t.term_id = tt.term_id
     WHERE tt.taxonomy = 'category' AND tr.object_id = ?`,
    [postId]
  );
  const exclude = new Set(['uncategorized', ...excludeNames.map((n) => n.toLowerCase())]);
  return rows.map((r) => r.name).filter((n) => !exclude.has(n.toLowerCase()));
}

async function getThumbnailGuid(conn, postId) {
  const [rows] = await conn.execute(
    `SELECT att.guid FROM ${PREFIX}postmeta pm
     JOIN ${PREFIX}posts att ON att.ID = pm.meta_value
     WHERE pm.post_id = ? AND pm.meta_key = '_thumbnail_id' LIMIT 1`,
    [postId]
  );
  return rows[0]?.guid || null;
}

async function entryExists(strapi, uid, slug) {
  const existing = await strapi.documents(uid).findFirst({
    filters: { slug: { $eq: slug } },
    status: 'published',
  });
  return Boolean(existing);
}

async function upsertEntry(strapi, uid, data, publishedAt) {
  const entry = await strapi.documents(uid).create({ data, status: 'published' });
  await strapi.db.query(uid).update({
    where: { documentId: entry.documentId },
    data: { publishedAt, createdAt: publishedAt, updatedAt: publishedAt },
  });
  return entry;
}

async function migrateBlog(strapi, conn) {
  console.log('\n== Blog articles ==');
  const [rows] = await conn.execute(
    `SELECT p.ID, p.post_title, p.post_name, p.post_excerpt, p.post_content, p.post_date, p.post_date_gmt
     FROM ${PREFIX}posts p
     WHERE p.post_type = 'post' AND p.post_status = 'publish'
       AND p.ID NOT IN (
         SELECT tr.object_id FROM ${PREFIX}term_relationships tr
         JOIN ${PREFIX}term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
         WHERE tt.taxonomy = 'category' AND tt.term_id = ?
       )
     ORDER BY p.post_date ASC${LIMIT ? ` LIMIT ${LIMIT}` : ''}`,
    [PRESS_CATEGORY_TERM_ID]
  );

  for (const row of rows) {
    const slug = sanitizeSlug(row.post_name, row.post_title);
    const publishedAt = toIsoDate(row.post_date_gmt, row.post_date);
    console.log(`- ${row.post_title} (${publishedAt.toISOString().slice(0, 10)})`);
    if (DRY_RUN) continue;
    if (await entryExists(strapi, 'api::blog-article.blog-article', slug)) {
      console.log(`  = skip (exists): ${slug}`);
      continue;
    }

    const categories = await getCategories(conn, row.ID);
    const guid = await getThumbnailGuid(conn, row.ID);
    const imageId = guid ? await uploadImageToStrapi(strapi, guid, row.post_title, 'Blog') : null;

    const data = {
      title: row.post_title,
      slug,
      description: makeDescription(row.post_excerpt, row.post_content),
      content: cleanContent(row.post_content),
      categories,
    };
    if (imageId) data.image = imageId;

    await upsertEntry(strapi, 'api::blog-article.blog-article', data, publishedAt);
  }
  console.log(`Blog articles: ${rows.length} processed`);
}

async function migratePress(strapi, conn) {
  console.log('\n== Press articles ==');
  const [rows] = await conn.execute(
    `SELECT p.ID, p.post_title, p.post_name, p.post_excerpt, p.post_content, p.post_date, p.post_date_gmt
     FROM ${PREFIX}posts p
     WHERE p.post_type = 'post' AND p.post_status = 'publish'
       AND p.ID IN (
         SELECT tr.object_id FROM ${PREFIX}term_relationships tr
         JOIN ${PREFIX}term_taxonomy tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
         WHERE tt.taxonomy = 'category' AND tt.term_id = ?
       )
     ORDER BY p.post_date ASC${LIMIT ? ` LIMIT ${LIMIT}` : ''}`,
    [PRESS_CATEGORY_TERM_ID]
  );

  for (const row of rows) {
    const slug = sanitizeSlug(row.post_name, row.post_title);
    const publishedAt = toIsoDate(row.post_date_gmt, row.post_date);
    console.log(`- ${row.post_title} (${publishedAt.toISOString().slice(0, 10)})`);
    if (DRY_RUN) continue;
    if (await entryExists(strapi, 'api::press-article.press-article', slug)) {
      console.log(`  = skip (exists): ${slug}`);
      continue;
    }

    const categories = await getCategories(conn, row.ID, ['Press Release']);
    const guid = await getThumbnailGuid(conn, row.ID);
    const imageId = guid ? await uploadImageToStrapi(strapi, guid, row.post_title, 'Press') : null;

    const data = {
      title: row.post_title,
      slug,
      description: makeDescription(row.post_excerpt, row.post_content),
      content: cleanContent(row.post_content),
      categories,
      featured: false,
    };
    if (imageId) data.image = imageId;

    await upsertEntry(strapi, 'api::press-article.press-article', data, publishedAt);
  }
  console.log(`Press articles: ${rows.length} processed`);
}

async function migratePortfolio(strapi, conn) {
  console.log('\n== Portfolio projects ==');
  const [rows] = await conn.execute(
    `SELECT p.ID, p.post_title, p.post_name, p.post_excerpt, p.post_content, p.post_date, p.post_date_gmt
     FROM ${PREFIX}posts p
     WHERE p.post_type = 'portfolio' AND p.post_status = 'publish'
     ORDER BY p.post_date ASC${LIMIT ? ` LIMIT ${LIMIT}` : ''}`
  );

  for (const row of rows) {
    const slug = sanitizeSlug(row.post_name, row.post_title);
    const publishedAt = toIsoDate(row.post_date_gmt, row.post_date);
    console.log(`- ${row.post_title} (${publishedAt.toISOString().slice(0, 10)})`);
    if (DRY_RUN) continue;
    if (await entryExists(strapi, 'api::portfolio-project.portfolio-project', slug)) {
      console.log(`  = skip (exists): ${slug}`);
      continue;
    }

    const guid = await getThumbnailGuid(conn, row.ID);
    const imageId = guid ? await uploadImageToStrapi(strapi, guid, row.post_title, 'Portfolio') : null;

    const data = {
      title: row.post_title,
      slug,
      description: makeDescription(row.post_excerpt, row.post_content),
      content: cleanContent(row.post_content),
      featured: false,
    };
    if (imageId) data.image = imageId;

    await upsertEntry(strapi, 'api::portfolio-project.portfolio-project', data, publishedAt);
  }
  console.log(`Portfolio projects: ${rows.length} processed`);
}

async function main() {
  console.log(`WP source: ${WP_DB.user}@${WP_DB.host}:${WP_DB.port}/${WP_DB.database} (prefix ${PREFIX})`);
  if (DRY_RUN) console.log('DRY_RUN=1 -- listing only, no Strapi writes, no image fetches');
  if (LIMIT) console.log(`MIGRATE_LIMIT=${LIMIT} -- capped per content type`);

  const conn = await mysql.createConnection(WP_DB);

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    await migrateBlog(app, conn);
    await migratePress(app, conn);
    await migratePortfolio(app, conn);
  } finally {
    await conn.end();
    await app.destroy();
  }

  console.log('\nDone.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
