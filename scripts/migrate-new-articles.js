'use strict';

/**
 * One-off: create the ~8 blog/press articles that exist live on regenpower.com but were
 * never migrated (published after the original wordpress_backup DB dump was taken).
 * Sourced from the live WordPress REST API (no DB dump available for these), plus SEO
 * metadata from the client's fresh SEO export (/Users/mano/Downloads/regenpower-seo-export.json,
 * copied to /tmp/seo-export.json for this run).
 *
 *   DRY_RUN=1 node scripts/migrate-new-articles.js   # preview only
 *   node scripts/migrate-new-articles.js             # create entries (idempotent: skips existing slugs)
 */

const path = require('path');
const os = require('os');
const fs = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const SEO_EXPORT = process.env.SEO_EXPORT || '/tmp/seo-export.json';

const ENTRIES = [
  { section: 'blog', slug: 'get-ready-for-the-rebates-how-to-prepare-your-home-for-a-solar-battery' },
  { section: 'press', slug: 'supporting-sustainable-business-excellence-regen-power-sponsors-the-2026-sustainability-award' },
  { section: 'blog', slug: 'solar-curtailment-perth-why-wa-throttles-your-panels' },
  { section: 'blog', slug: 'solar-quote-checklist-perth-12-things-to-check-in-2026' },
  { section: 'blog', slug: 'what-does-the-rebate-actually-do' },
  { section: 'blog', slug: 'regen-power-and-curtin-university-awarded-1-93-million-arc-linkage-grant-for-ai-driven-battery-adoption-research' },
  { section: 'blog', slug: 'where-can-you-install-a-home-battery-in-wa-2026-rules' },
  { section: 'press', slug: 'five-years-on-the-light-still-shines-regen-power-remembers-founder-professor-chem-nayar' },
];

function stripHtml(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&#8211;/g, '-').replace(/&#8217;/g, "'")
    .replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
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

async function fetchJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchWpPost(slug) {
  const url = `https://regenpower.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
  const list = await fetchJson(url);
  return list[0] || null;
}

async function downloadImage(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filename = decodeURIComponent(url.split('?')[0].split('/').pop()) || 'image.jpg';
  const mimetype = res.headers.get('content-type') || 'image/jpeg';
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'new-article-img-'));
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

async function uploadImage(strapi, url, name, folderName) {
  if (!url) return null;
  const file = await downloadImage(url);
  try {
    const [uploaded] = await strapi.plugin('upload').service('upload').upload({
      data: { fileInfo: { name: name || file.filename, folder: await folderId(strapi, folderName) } },
      files: { filepath: file.filepath, originalFilename: file.filename, mimetype: file.mimetype, size: file.size },
    });
    return uploaded?.id ?? null;
  } finally {
    await fs.rm(file.tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

function fit(t, n) {
  if (!t) return undefined;
  const s = String(t).replace(/\s+/g, ' ').trim();
  if (!s) return undefined;
  if (s.length <= n) return s;
  const cut = s.slice(0, n - 1).replace(/\s+\S*$/, '') || s.slice(0, n - 1);
  return `${cut.replace(/[ ,;:-]+$/, '')}…`;
}

function seoComponent(exp) {
  if (!exp) return undefined;
  const c = {};
  const metaTitle = fit(exp.metaTitle, 80); if (metaTitle) c.metaTitle = metaTitle;
  const metaDescription = fit(exp.metaDescription, 160); if (metaDescription) c.metaDescription = metaDescription;
  const ogTitle = fit(exp.ogTitle, 70); if (ogTitle) c.ogTitle = ogTitle;
  const ogDescription = fit(exp.ogDescription, 200); if (ogDescription) c.ogDescription = ogDescription;
  if (exp.focusKeyword) c.keywords = exp.focusKeyword;
  c.metaRobots = exp.noindex ? 'noindex, nofollow' : 'index, follow';
  return c;
}

async function main() {
  const seoBySlug = {};
  try {
    const seoExport = JSON.parse(await fs.readFile(SEO_EXPORT, 'utf8'));
    for (const e of seoExport) seoBySlug[e.slug] = e;
  } catch (e) {
    console.warn(`! could not read SEO export at ${SEO_EXPORT}: ${e.message} (continuing without SEO data)`);
  }

  const app = await createStrapi({ appDir: process.cwd(), distDir: path.join(process.cwd(), 'dist') }).load();
  app.log.level = 'error';

  const report = { created: [], skipped_existing: [], not_found: [], failed: [] };
  try {
    for (const { section, slug } of ENTRIES) {
      const uid = section === 'blog' ? 'api::blog-article.blog-article' : 'api::press-article.press-article';
      const folder = section === 'blog' ? 'Blog' : 'Press';

      const existing = await app.documents(uid).findFirst({ filters: { slug: { $eq: slug } } });
      if (existing) { console.log(`= skip (already exists): ${slug}`); report.skipped_existing.push(slug); continue; }

      console.log(`fetching ${slug} ...`);
      let post;
      try { post = await fetchWpPost(slug); } catch (e) { console.log(`  ! fetch failed: ${e.message}`); report.failed.push({ slug, error: e.message }); continue; }
      if (!post) { console.log(`  ! not found on live site (unpublished / draft-only)`); report.not_found.push(slug); continue; }

      const emb = post._embedded || {};
      const featured = (emb['wp:featuredmedia'] || [])[0];
      const terms = (emb['wp:term'] || []).flat().filter((t) => t.taxonomy === 'category').map((t) => t.name);
      const categories = terms
        .filter((n) => n.toLowerCase() !== 'uncategorized')
        .filter((n) => section !== 'press' || n.toLowerCase() !== 'press release');

      if (DRY_RUN) {
        console.log(`  would create: title="${post.title.rendered}" categories=${JSON.stringify(categories)} image=${!!featured} content_len=${post.content.rendered.length}`);
        report.created.push(slug);
        continue;
      }

      let imageId = null;
      try { imageId = await uploadImage(app, featured && featured.source_url, post.title.rendered, folder); }
      catch (e) { console.log(`  ! image upload failed: ${e.message}`); }

      const data = {
        title: post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&'),
        slug,
        description: makeDescription(post.excerpt.rendered, post.content.rendered),
        content: cleanContent(post.content.rendered),
        categories,
      };
      if (imageId) data.image = imageId;
      if (section === 'press') data.featured = false;
      const seo = seoComponent(seoBySlug[slug]);
      if (seo) data.seo = seo;

      const publishedAt = new Date(post.date_gmt ? `${post.date_gmt}Z` : post.date);
      const entry = await app.documents(uid).create({ data, status: 'published' });
      await app.db.query(uid).update({
        where: { documentId: entry.documentId },
        data: { publishedAt, createdAt: publishedAt, updatedAt: publishedAt },
      });
      console.log(`  + created: ${slug} (documentId ${entry.documentId})`);
      report.created.push(slug);
    }
  } finally {
    await app.destroy();
  }

  console.log('\n=== report ===');
  console.log(JSON.stringify(report, null, 2));
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
