'use strict';

/**
 * Assign already-uploaded award badge images to about-page cards.
 *
 * You uploaded 46 badges to Media Library/about-page/awardbadges (keeping
 * 01..50 filenames). This script looks up each file's id and writes
 * about.award-card.badge = mediaId per card, matching by title via
 * scripts/data/about-awards-manifest.json.
 *
 * 50 cards in src/seed/data/about-page.ts, 46 with badge, 4 milestones
 * intentionally stay null (no image on regenpower.com/about-us).
 *
 * Usage:
 *   node scripts/assign-about-badges.js              # live DB (VPS: docker exec ...)
 *   DRY_RUN=1 node scripts/assign-about-badges.js    # preview only, no writes
 *   FOLDER="about-page/awardbadges" node scripts/assign-about-badges.js  # custom path
 *
 * Env:
 *   DRY_RUN  1 to print what would be assigned without writing
 *   FOLDER   subpath under Media Library (default "about-page/awardbadges")
 *
 * On VPS:
 *   git add scripts/assign-about-badges.js scripts/data/about-awards-manifest.json
 *   git push
 *   ssh VPS "cd regen-power/strapi-cms && git pull && docker compose build --no-cache strapi && docker compose up -d"
 *   docker exec strapi-cms-strapi-1 node scripts/assign-about-badges.js
 *   curl -s "https://regen-cms.theinternetcompany.one/api/about-page?populate[sections][populate]=*" | jq '.data.sections[1].cards[0] | {title, badge: .badge.url}'
 */

const path = require('path');
const fs = require('fs');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = process.env.DRY_RUN === '1';
const FOLDER_PATH = (process.env.FOLDER || 'about-page/awardbadges').replace(/^\/+|\/+$/g, '');

const MANIFEST_FILE = path.join(__dirname, 'data', 'about-awards-manifest.json');
const ABOUT_UID = 'api::about-page.about-page';

function loadManifest() {
  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error(`Missing ${MANIFEST_FILE}. Copy Documents/api-data-regen/about-awards/manifest.json -> scripts/data/about-awards-manifest.json`);
    process.exit(1);
  }
  const raw = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  // Filter to entries that expect a badge
  return raw;
}

async function resolveFolderId(strapi, folderPath) {
  const parts = folderPath.split('/').filter(Boolean);
  let parent = null;
  let folder = null;
  for (const name of parts) {
    folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent } });
    if (!folder) {
      console.error(`Folder not found: "${folderPath}" — missing segment "${name}" under parent ${parent ?? 'root'}`);
      const siblings = await strapi.db.query('plugin::upload.folder').findMany({ where: { parent } });
      if (siblings.length) console.error(`  Available under ${parent ?? 'root'}: ${siblings.map(s => s.name).join(', ')}`);
      else console.error(`  No folders under ${parent ?? 'root'}`);
      process.exit(1);
    }
    parent = folder.id;
  }
  return folder.id;
}

async function main() {
  const manifest = loadManifest();
  console.log(`Manifest: ${manifest.length} entries, with file ${manifest.filter(m => m.localFile).length}`);
  console.log(`Folder: ${FOLDER_PATH}${DRY_RUN ? ' (DRY_RUN)' : ''}`);

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    const folderId = await resolveFolderId(app, FOLDER_PATH);
    console.log(`Folder "${FOLDER_PATH}" id=${folderId}`);

    const files = await app.db.query('plugin::upload.file').findMany({ where: { folder: folderId } });
    console.log(`Files in folder: ${files.length}`);
    if (files.length === 0) {
      console.error(`No files in "${FOLDER_PATH}". Did you upload to that exact path with original 01..50 names?`);
      process.exit(1);
    }

    // Index files by name and by hash (Strapi stores hash without ext)
    const byName = new Map(files.map(f => [f.name.toLowerCase(), f]));
    const byHash = new Map(files.map(f => [String(f.hash).toLowerCase(), f]));
    const byNameNoExt = new Map(files.map(f => [f.name.replace(/\.[^.]+$/, '').toLowerCase(), f]));

    let matched = 0, missing = 0, noBadge = 0;
    const urlMap = new Map(); // title -> file id

    for (const m of manifest) {
      if (!m.localFile) {
        noBadge++;
        continue;
      }
      const localLower = m.localFile.toLowerCase();
      const hash = localLower.replace(/\.[^.]+$/, '');
      let file = byName.get(localLower) || byHash.get(hash) || byNameNoExt.get(hash);
      // Fallback: match by slug part (after 02-2026-)
      if (!file) {
        const slugPart = localLower.split('-').slice(2).join('-').replace(/\.[^.]+$/, '').slice(0, 30);
        file = files.find(f => f.name.toLowerCase().includes(slugPart));
      }
      if (!file) {
        console.warn(`  ! NO FILE for "${m.title}" -> expected "${m.localFile}"`);
        missing++;
        continue;
      }
      urlMap.set(m.title, file.id);
      matched++;
    }
    console.log(`Matched: ${matched} badges, ${missing} missing files, ${noBadge} milestones intentionally without badge`);

    // Load current about-page sections (use dist seed as source of truth for order)
    let aboutDoc = await app.documents(ABOUT_UID).findFirst({ status: 'published', populate: '*' });
    if (!aboutDoc) aboutDoc = await app.documents(ABOUT_UID).findFirst({ populate: '*' });
    if (!aboutDoc) {
      console.error(`No document for ${ABOUT_UID}. Run PAGES=about-page npm run seed first.`);
      process.exit(1);
    }
    const sections = aboutDoc.sections || [];
    const awardsSection = sections.find(s => s.__component === 'about.awards');
    if (!awardsSection) {
      console.error('No about.awards section in live document. Seed about-page first.');
      process.exit(1);
    }
    const cards = awardsSection.cards || [];
    console.log(`Live cards: ${cards.length}`);

    // Build hydrated cards — assign badge id per title
    const hydratedCards = cards.map(card => {
      const id = urlMap.get(card.title) ?? null;
      // Strapi expects media relation as id (number) for single media
      return { ...card, badge: id ?? null };
    });

    // Also handle cards that are in seed/manifest but not yet in live (seed was 50, live may be older)
    // If live has fewer cards than manifest, we need to add missing ones — but this script is assign-only.
    // Warn if live is stale.
    const manifestWithBadge = new Set(manifest.filter(m => m.localFile).map(m => m.title));
    const liveTitles = new Set(cards.map(c => c.title));
    const newInManifest = [...manifestWithBadge].filter(t => !liveTitles.has(t));
    if (newInManifest.length) {
      console.warn(`\n! Live has ${cards.length} cards but manifest expects ${manifest.filter(m=>m.localFile).length} with badges.`);
      console.warn(`  ${newInManifest.length} titles in manifest not in live (reseed needed first):`);
      for (const t of newInManifest.slice(0, 10)) console.warn(`    - ${t}`);
      console.warn(`  Run: PAGES=about-page FORCE=1 npm run seed  first, then re-run this script.`);
    }

    // Preview
    for (const c of hydratedCards.slice(0, 5)) {
      const hasBadge = c.badge ? `badge id=${c.badge}` : 'no badge';
      console.log(`  - ${c.title.slice(0, 55)} -> ${hasBadge}`);
    }
    if (hydratedCards.length > 5) console.log(`  ... and ${hydratedCards.length - 5} more`);

    if (DRY_RUN) {
      console.log('\nDRY_RUN=1 — no writes. Remove DRY_RUN to assign.');
      return;
    }

    // Write back — only update sections, preserve other sections
    const newSections = sections.map(s => {
      if (s.__component !== 'about.awards') return s;
      return { ...s, cards: hydratedCards };
    });

    await app.documents(ABOUT_UID).update({
      documentId: aboutDoc.documentId,
      data: { sections: newSections } ,
      status: 'published',
    });

    console.log(`\n✅ Assigned badges to ${matched} cards in ${ABOUT_UID} (4 milestones remain null)`);
    console.log(`Verify: curl -s "http://localhost:1337/api/about-page?populate[sections][populate]=*" | jq '.data.sections[1].cards[0].badge'`);
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
