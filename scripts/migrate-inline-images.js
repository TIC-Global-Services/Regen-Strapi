'use strict';

/**
 * One-off: move inline WordPress media (regenpower.com/wp-content/uploads/...) referenced in
 * blog_articles.content / press_articles.content into the Strapi media library and rewrite the links.
 *
 *   DRY_RUN=1 node scripts/migrate-inline-images.js   # report only
 *   node scripts/migrate-inline-images.js             # download + upload + rewrite (single transaction)
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const BASE = (process.env.PUBLIC_BASE || 'https://strapi.regenpower.com').replace(/\/$/, '');
const DRY = !!process.env.DRY_RUN;
const MAP_FILE = process.env.MAP_FILE || '/tmp/inline-image-map.json';
const TABLES = [
  { table: 'blog_articles', folder: 'Blog' },
  { table: 'press_articles', folder: 'Press' },
];

const IMG_EXT = /\.(?:png|jpe?g|gif|webp)$/i;
const ARCHIVE_ALL = /https?:\/\/web\.archive\.org\/web\/\d+[a-z_]*\/https?:\/\/[^\s"'<>)\]\\]+/gi;
const RP = /h?ttps?:\/\/(?:www\.)?regenpower\.com\/wp-content\/uploads\/[^\s"'<>)\]\\]+/gi;
const MIME = {
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp',
  pdf: 'application/pdf', mp4: 'video/mp4',
};

const clean = (u) => u.replace(/[.,;:]+$/, '');
const canonical = (u) => u.replace(/-\d+x\d+(\.(?:png|jpe?g|gif|webp))$/i, '$1');

function extract(text) {
  const archives = (text.match(ARCHIVE_ALL) || []).map(clean);
  let rest = text;
  for (const a of archives) rest = rest.split(a).join(' ');
  const rp = (rest.match(RP) || []).map(clean);
  return { archives, rp };
}

async function download(url0) {
  const url = url0.replace(/^h?ttps?:\/\//, 'https://');
  const res = await fetch(url, { signal: AbortSignal.timeout(90000), redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filename = decodeURIComponent(url.split('?')[0].split('/').pop()) || 'file';
  const ext = (filename.split('.').pop() || '').toLowerCase();
  let mimetype = (res.headers.get('content-type') || '').split(';')[0].trim();
  if (!mimetype || mimetype === 'application/octet-stream' || mimetype === 'text/html') mimetype = MIME[ext] || mimetype;
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'inline-img-'));
  const filepath = path.join(tmpDir, filename);
  await fs.writeFile(filepath, buffer);
  return { filepath, filename, mimetype, size: buffer.length, tmpDir };
}

const folderCache = new Map();
async function folderId(strapi, name) {
  if (folderCache.has(name)) return folderCache.get(name);
  const existing = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent: null } });
  const f = existing || (await strapi.plugin('upload').service('folder').create({ name, parent: null }));
  folderCache.set(name, f.id);
  return f.id;
}

async function uploadFile(strapi, url, folderName) {
  const file = await download(url);
  try {
    const [uploaded] = await strapi.plugin('upload').service('upload').upload({
      data: { fileInfo: { name: file.filename, folder: await folderId(strapi, folderName) } },
      files: { filepath: file.filepath, originalFilename: file.filename, mimetype: file.mimetype, size: file.size },
    });
    return uploaded;
  } finally {
    await fs.rm(file.tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

function rewrite(content, mapping, archiveMap) {
  let out = content;
  // drop srcset/sizes on <img> tags that point at the old site (they list old thumbnail sizes)
  out = out.replace(/<img\b[^>]*>/gi, (tag) =>
    /wp-content\/uploads/i.test(tag) ? tag.replace(/\s+(?:srcset|sizes)=\\?"[^"]*?\\?"/gi, '') : tag,
  );
  // mask archive.org links so URLs embedded inside them are not touched
  const archives = [...new Set((out.match(ARCHIVE_ALL) || []).map(clean))].sort((a, b) => b.length - a.length);
  archives.forEach((a, i) => { out = out.split(a).join(`\u0000${i}\u0000`); });
  const keys = Object.keys(mapping).sort((a, b) => b.length - a.length);
  for (const k of keys) out = out.split(k).join(mapping[k]);
  archives.forEach((a, i) => { out = out.split(`\u0000${i}\u0000`).join(archiveMap[a] || a); });
  return out;
}

async function main() {
  const app = await createStrapi({ appDir: process.cwd(), distDir: path.join(process.cwd(), 'dist') }).load();
  app.log.level = 'error';
  const knex = app.db.connection;

  try {
    // ---- 1. collect ------------------------------------------------------------------
    const rowsByTable = {};
    const targets = new Map();          // canonical/unique url -> { folder, variants:Set }
    const archiveImages = new Map();    // archive image url -> folder
    for (const { table, folder } of TABLES) {
      const rows = await knex(table).select('id', 'content');
      rowsByTable[table] = rows;
      for (const r of rows) {
        const { archives, rp } = extract(r.content || '');
        for (const a of archives) if (IMG_EXT.test(a)) archiveImages.set(a, archiveImages.get(a) || folder);
        for (const u of rp) {
          const c = canonical(u);
          const t = targets.get(c) || { folder, variants: new Set() };
          t.variants.add(u);
          targets.set(c, t);
        }
      }
    }
    const nVariants = [...targets.values()].reduce((n, t) => n + t.variants.size, 0);
    console.log(`plan: ${targets.size} unique regenpower.com files (${nVariants} url variants) + ${archiveImages.size} archive.org image(s)`);
    if (DRY) { console.log('DRY_RUN: nothing downloaded or changed'); return; }

    // ---- 2. download + upload (each unique file once) --------------------------------
    const mapping = {};      // old url (each variant) -> new url
    const archiveMap = {};   // archive image url -> new url
    const failed = [];
    let done = 0;
    const jobs = [
      ...[...targets.entries()].map(([canon, t]) => ({ canon, folder: t.folder, variants: [...t.variants], archive: false })),
      ...[...archiveImages.entries()].map(([u, folder]) => ({ canon: u, folder, variants: [u], archive: true })),
    ];
    const queue = jobs.slice();
    async function worker() {
      while (queue.length) {
        const job = queue.shift();
        let uploaded = null, used = job.canon;
        try { uploaded = await uploadFile(app, job.canon, job.folder); }
        catch (e1) {
          const fallback = job.variants.find((v) => v !== job.canon);
          if (fallback) { try { uploaded = await uploadFile(app, fallback, job.folder); used = fallback; } catch (e2) { failed.push(`${job.canon} :: ${e2.message}`); } }
          else failed.push(`${job.canon} :: ${e1.message}`);
        }
        if (uploaded) {
          const newUrl = uploaded.url.startsWith('http') ? uploaded.url : BASE + uploaded.url;
          if (job.archive) archiveMap[job.canon] = newUrl;
          else { mapping[job.canon] = newUrl; for (const v of job.variants) mapping[v] = newUrl; }
        }
        done += 1;
        if (done % 20 === 0) console.log(`  uploaded ${done}/${jobs.length}`);
      }
    }
    await Promise.all([worker(), worker(), worker()]);
    console.log(`uploads finished: ${jobs.length - failed.length} ok, ${failed.length} failed`);
    failed.forEach((f) => console.log('  FAILED', f));
    await fs.writeFile(MAP_FILE, JSON.stringify({ mapping, archiveMap, failed }, null, 2));

    // ---- 3. rewrite content (one transaction, draft + published rows) ----------------
    let changedRows = 0;
    await knex.transaction(async (trx) => {
      for (const { table } of TABLES) {
        for (const r of rowsByTable[table]) {
          if (!r.content) continue;
          const next = rewrite(r.content, mapping, archiveMap);
          if (next !== r.content) { await trx(table).where({ id: r.id }).update({ content: next }); changedRows += 1; }
        }
      }
    });
    console.log(`rewrote content on ${changedRows} rows`);

    // ---- 4. verify -------------------------------------------------------------------
    for (const { table } of TABLES) {
      const rows = await knex(table).select('id', 'content');
      let left = 0;
      for (const r of rows) { const { rp } = extract(r.content || ''); left += rp.length; }
      console.log(`remaining regenpower.com/wp-content refs in ${table}: ${left}`);
    }
  } finally {
    await app.destroy();
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
