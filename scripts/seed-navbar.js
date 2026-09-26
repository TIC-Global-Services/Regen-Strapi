'use strict';

/**
 * One-off: create + publish the navbar single type with the current hardcoded nav,
 * uploading the two logos from scripts/data/navbar-assets into Media Library/navbar.
 *
 *   DRY_RUN=1 node scripts/seed-navbar.js   # preview only
 *   node scripts/seed-navbar.js             # idempotent: skips if a navbar already exists
 */

const path = require('path');
const fsp = require('fs/promises');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;
const ASSETS_DIR = path.join(__dirname, 'data', 'navbar-assets');
const UID = 'api::navbar.navbar';

const link = (label, href, subItems = []) => ({ label, href, openInNewTab: false, subItems: subItems.map(([l, h]) => ({ label: l, href: h, openInNewTab: false })) });

const ITEMS = [
  link('Solar System', '/solar/solar-system', [
    ['Solar System', '/solar/solar-system'],
    ['Brand we carry', '/solar/brands'],
    ['Solar Deals', '/solar/deals'],
    ['Government rebates', '/solar/government-rebates'],
    ['Faq', '/solar/faq'],
  ]),
  link('Battery Storage', '/battery/battery-storage', [
    ['Battery Storage', '/battery/battery-storage'],
    ['Battery Product', '/battery/battery-product'],
    ['Smart Home Battery System', '/battery/smart-home-battery-system'],
    ['Government Rebates', '/battery/government-rebates'],
    ['Brands We Carry', '/battery/brands-we-carry'],
  ]),
  link('EV Charging', '/ev-charging'),
  link('Commercial & Off Grid', '/commercial/commercial-off-grid', [
    ['Commercial & Off Grid', '/commercial/commercial-off-grid'],
    ['Commercial Systems & Case Studies', '/commercial/case-studies'],
    ['Off-Grid Solutions', '/commercial/off-grid-solutions'],
    ['Research & Development', '/commercial/research-and-development'],
    ['Portfolio', '/commercial/portfolio'],
  ]),
  link('About Us', '/about'),
  link('Reviews', '/reviews'),
  link('Press & Media', '/press-media', [
    ['Blogs', '/blog'],
    ['Press Releases', '/press-media'],
  ]),
  link('Contact Us', '/contact'),
];

async function getOrCreateFolder(strapi, name) {
  let folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent: null } });
  if (!folder) folder = await strapi.plugin('upload').service('folder').create({ name, parent: null });
  return folder.id;
}

async function uploadLogo(strapi, folderId, filename) {
  const existing = await strapi.db.query('plugin::upload.file').findOne({ where: { name: filename, folder: folderId } });
  if (existing) { console.log(`  - reuse ${filename} id=${existing.id}`); return existing.id; }
  const full = path.join(ASSETS_DIR, filename);
  const stat = await fsp.stat(full);
  const [f] = await strapi.plugin('upload').service('upload').upload({
    data: { fileInfo: { name: filename, folder: folderId } },
    files: { filepath: full, originalFilename: filename, mimetype: 'image/png', size: stat.size },
  });
  console.log(`  ✓ uploaded ${filename} id=${f.id}`);
  return f.id;
}

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  try {
    const existing = await app.documents(UID).findFirst({ status: 'published' });
    if (existing) { console.log('navbar already exists — nothing to do'); return; }

    console.log(`items: ${ITEMS.length}, subItems: ${ITEMS.reduce((n, i) => n + i.subItems.length, 0)}${DRY_RUN ? ' (DRY_RUN)' : ''}`);
    if (DRY_RUN) return;

    const folderId = await getOrCreateFolder(app, 'navbar');
    const logo = await uploadLogo(app, folderId, 'regen_logo_nav.png');
    const logoLight = await uploadLogo(app, folderId, 'regen_logo_footer.png');

    const doc = await app.documents(UID).create({
      data: {
        logo, logoLight,
        logoAlt: 'Regen Power', logoHref: '/',
        items: ITEMS,
        showCta: true, ctaText: 'Speak to Us', ctaHref: 'tel:+61894563491',
      },
      status: 'published',
    });
    console.log(`created navbar documentId=${doc.documentId}`);
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
