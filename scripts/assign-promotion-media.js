'use strict';

/**
 * Link uploaded promotion-page media (Media Library/promotion-page) to
 * promotion-page component rows via files_related_mph.
 *
 * Like assign-about-badges.js but for 47 slots across 15 related_type values.
 * Writes to BOTH draft and published versions (draftAndPublish) so admin shows badges.
 *
 * Reads:
 *   - scripts/data/promotion-manifest.json  (47 assignments: file -> related_type.field + where)
 *   - Media Library/promotion-page (incl. subfolders) to resolve file ids
 *   - promotion-page document ids via direct component tables (WHERE-based, not DOM traversal)
 *
 * Media on components lives in files_related_mph (file_id, related_id, related_type, field, "order")
 * NOT as a column on the component tables. We DELETE then INSERT per (related_id, field).
 *
 * Usage:
 *   node scripts/assign-promotion-media.js                   # writes draft+published
 *   DRY_RUN=1 node scripts/assign-promotion-media.js         # preview only
 *   FOLDER="promotion-page" node scripts/assign-promotion-media.js
 *
 * Manifest "where" semantics:
 *   - match=="singleton" → all rows in that component table (hero, battery-rebates, etc.)
 *   - where:{col:val}     → rows WHERE col LIKE '%val%' (case-insensitive, handles \\n in titles)
 *   - whereIndex          → pick nth match (for duplicate titles like "10 Years Repayment" x2)
 *   - parent              → nested-card: find parent limited-spot-card by value, then its nestedCard id
 */

const path = require('path');
const fs = require('fs');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = process.env.DRY_RUN === '1';
const FOLDER_PATH = (process.env.FOLDER || 'promotion-page').replace(/^\/+|\/+$/g, '');
const MANIFEST_FILE = path.join(__dirname, 'data', 'promotion-manifest.json');

// Strapi 5 maps component "promotion.foo-bar" => table "components_promotion_foo_bars"
// but some are irregular (e.g. find-out-whies). Query information_schema to resolve.
const COMPONENT_TO_TABLE = {
  'promotion.hero': 'components_promotion_heroes',
  'promotion.limited-spot-card': 'components_promotion_limited_spot_cards',
  'promotion.nested-card': 'components_promotion_nested_cards',
  'promotion.trust-feature': 'components_promotion_trust_features',
  'promotion.free-quotation': 'components_promotion_free_quotations',
  'promotion.battery-rebates': 'components_promotion_battery_rebates',
  'promotion.brand-logo': 'components_promotion_brand_logos',
  'promotion.battery-card': 'components_promotion_battery_cards',
  'promotion.badge-logo': 'components_promotion_badge_logos',
  'promotion.battery-package': 'components_promotion_battery_packages',
  'promotion.battery-package-item': 'components_promotion_battery_package_items',
  'promotion.financing-grid-item': 'components_promotion_financing_grid_items',
  'promotion.about-regen': 'components_promotion_about_regens',
  'promotion.award-item': 'components_promotion_award_items',
  'promotion.faq-highlight-card': 'components_promotion_faq_highlight_cards',
};

function loadManifest() {
  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error(`Missing ${MANIFEST_FILE}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
}

async function resolveFolderSubtreeIds(strapi, folderPath) {
  const parts = folderPath.split('/').filter(Boolean);
  let parent = null;
  let folder = null;
  for (const name of parts) {
    folder = await strapi.db.query('plugin::upload.folder').findOne({ where: { name, parent } });
    if (!folder) {
      console.error(`Folder not found: "${folderPath}" — missing "${name}" under parent ${parent ?? 'root'}`);
      process.exit(1);
    }
    parent = folder.id;
  }
  // BFS descendants
  const ids = [folder.id];
  const queue = [folder.id];
  while (queue.length) {
    const cur = queue.shift();
    const children = await strapi.db.query('plugin::upload.folder').findMany({ where: { parent: cur } });
    for (const c of children) { ids.push(c.id); queue.push(c.id); }
  }
  return ids;
}

async function findComponentRows(strapi, relatedType, entry) {
  const table = COMPONENT_TO_TABLE[relatedType];
  if (!table) throw new Error(`Unknown related_type ${relatedType} — add to COMPONENT_TO_TABLE`);

  // singleton: all rows
  if (entry.match === 'singleton') {
    const r = await strapi.db.connection.raw(`SELECT id FROM ${table}`);
    return r.rows.map(row => row.id);
  }

  // parent-lookup for nested-card — Strapi 5 stores single components in a _cmps link table, not a FK column
  if (entry.parent) {
    const parentTable = entry.parent.table;
    const whereCol = Object.keys(entry.parent.where)[0];
    const whereVal = entry.parent.where[whereCol];
    const pr = await strapi.db.connection.raw(
      `SELECT id FROM ${parentTable} WHERE ${whereCol} ILIKE ?`,
      [`%${whereVal}%`]
    );
    if (pr.rows.length === 0) {
      console.warn(`  ! parent not found: ${parentTable} WHERE ${whereCol} ILIKE '%${whereVal}%'`);
      return [];
    }
    const cmpsTable = `${parentTable}_cmps`;
    const nestedIds = [];
    for (const row of pr.rows) {
      // Strapi 5 cmps tables use (entity_id, cmp_id) — entity_id is parent id, cmp_id is nested-card id
      // Try to auto-detect columns if naming differs
      const colRes = await strapi.db.connection.raw(
        `SELECT column_name FROM information_schema.columns WHERE table_name='${cmpsTable}' ORDER BY ordinal_position`
      );
      if (colRes.rows.length === 0) {
        console.warn(`  ! cmps table ${cmpsTable} not found`);
        continue;
      }
      const cmpCols = colRes.rows.map(r => r.column_name);
      const entityCol = cmpCols.find(c => /entity|parent|owner|left/i.test(c)) || cmpCols[0];
      const cmpCol = cmpCols.find(c => /cmp|component|child|right|nested/i.test(c) && c !== entityCol) || cmpCols[1] || cmpCols[cmpCols.length - 1];
      const r = await strapi.db.connection.raw(
        `SELECT "${cmpCol}" as cmp_id FROM ${cmpsTable} WHERE "${entityCol}" = ?`,
        [row.id]
      );
      for (const rr of r.rows) if (rr.cmp_id) nestedIds.push(rr.cmp_id);
    }
    if (nestedIds.length === 0) {
      console.warn(`  ! parent ${whereVal} has no nestedCard link (parent ids: ${pr.rows.map(r=>r.id).join(',')}, cmps table: ${cmpsTable})`);
      return [];
    }
    return nestedIds;
  }

  // where-based repeatable lookup
  if (entry.where) {
    const col = Object.keys(entry.where)[0];
    const val = entry.where[col];
    // LIKE handles \n in titles ("Excellent \nCustomer...")
    const r = await strapi.db.connection.raw(
      `SELECT id FROM ${table} WHERE ${col} ILIKE ? ORDER BY id`,
      [`%${val}%`]
    );
    if (r.rows.length === 0) {
      console.warn(`  ! no rows: ${table} WHERE ${col} ILIKE '%${val}%'`);
      return [];
    }
    if (entry.whereIndex != null) {
      const picked = r.rows[entry.whereIndex];
      if (!picked) {
        console.warn(`  ! whereIndex ${entry.whereIndex} out of range for ${val} (${r.rows.length} matches)`);
        return [];
      }
      return [picked.id];
    }
    return r.rows.map(row => row.id);
  }

  throw new Error(`Manifest entry missing match/where/parent: ${JSON.stringify(entry)}`);
}

async function main() {
  const manifest = loadManifest();
  const assignments = manifest.assignments || manifest;
  console.log(`Manifest: ${assignments.length} assignments`);
  console.log(`Folder: ${FOLDER_PATH}${DRY_RUN ? ' (DRY_RUN)' : ''}`);

  const appDir = process.cwd();
  const distDir = path.join(appDir, 'dist');
  const app = await createStrapi({ appDir, distDir }).load();
  app.log.level = 'error';

  try {
    const folderIds = await resolveFolderSubtreeIds(app, FOLDER_PATH);
    console.log(`Folder "${FOLDER_PATH}" subtree ids: [${folderIds.join(', ')}]`);

    const files = await app.db.query('plugin::upload.file').findMany({ where: { folder: { $in: folderIds } } });
    console.log(`Files in subtree: ${files.length}`);
    if (files.length === 0) {
      console.error(`No files in "${FOLDER_PATH}". Run upload first: node scripts/upload-promotion-media.js`);
      process.exit(1);
    }
    const byName = new Map(files.map(f => [f.name.toLowerCase(), f]));
    const byNameNoExt = new Map(files.map(f => [f.name.replace(/\.[^.]+$/, '').toLowerCase(), f]));

    function resolveFileId(fileName) {
      const lower = fileName.toLowerCase();
      let f = byName.get(lower) || byNameNoExt.get(lower.replace(/\.[^.]+$/, ''));
      if (!f) {
        // strip subfolder prefix if manifest stores it
        const base = lower.split('/').pop();
        f = byName.get(base);
      }
      return f?.id ?? null;
    }

    // Preview
    let missingFiles = 0;
    for (const a of assignments) {
      const fid = resolveFileId(a.file);
      if (!fid) { console.warn(`  ! NO FILE for ${a.related_type}.${a.field} -> "${a.file}"`); missingFiles++; }
    }
    if (missingFiles) console.warn(`Missing ${missingFiles} files — upload first!`);

    // Collect all target related_ids (draft+published => naturally both versions' rows are in table)
    // components are versioned: draft + published keep separate row ids. Our findComponentRows
    // returns ALL rows matching the WHERE, which covers both versions already.
    let totalLinks = 0, totalSkipped = 0, totalTargets = 0;
    const ops = []; // { related_type, field, related_id, fileId }

    for (const a of assignments) {
      const fileId = resolveFileId(a.file);
      if (!fileId) continue;
      const relatedIds = await findComponentRows(app, a.related_type, a);
      if (relatedIds.length === 0) {
        console.warn(`  ! no targets for ${a.related_type}.${a.field} (${a.file}) where=${JSON.stringify(a.where || a.match)}`);
        continue;
      }
      totalTargets += relatedIds.length;
      for (const rid of relatedIds) ops.push({ related_type: a.related_type, field: a.field, related_id: rid, fileId, file: a.file });
    }

    console.log(`Targets: ${totalTargets} component rows across ${assignments.length} assignments`);
    console.log(`Planned links: ${ops.length} (one INSERT per draft+published row)`);
    if (ops.length > 0) {
      for (const o of ops.slice(0, 8)) console.log(`  - ${o.related_type}.${o.field} id=${o.related_id} <- ${o.file} (file ${o.fileId})`);
      if (ops.length > 8) console.log(`  ... and ${ops.length - 8} more`);
    }

    if (DRY_RUN) {
      console.log('\nDRY_RUN=1 — no writes. Remove DRY_RUN to assign.');
      return;
    }

    // Group by (related_type, field, related_id) to dedupe sig_energy.png triple etc.
    // Last file wins per slot (should be same file for deduped sig_energy anyway)
    const dedup = new Map();
    for (const o of ops) dedup.set(`${o.related_type}|${o.field}|${o.related_id}`, o);
    console.log(`Deduped ops: ${dedup.size} (from ${ops.length}, sig_energy.png dedup etc.)`);

    for (const o of dedup.values()) {
      await app.db.connection.raw(
        'DELETE FROM files_related_mph WHERE related_type = ? AND field = ? AND related_id = ?',
        [o.related_type, o.field, o.related_id]
      );
      await app.db.connection.raw(
        'INSERT INTO files_related_mph (file_id, related_id, related_type, field, "order") VALUES (?, ?, ?, ?, ?)',
        [o.fileId, o.related_id, o.related_type, o.field, 1]
      );
      totalLinks++;
    }

    console.log(`\n✅ Linked ${totalLinks} slots (${totalSkipped} skipped) — Media Library/${FOLDER_PATH} -> promotion-page`);
    console.log(`Verify: curl -s -G "https://regen-cms.theinternetcompany.one/api/promotion-page" --data-urlencode "populate[sections][populate]=*" | jq '.data.sections[0] | {title, bg: .backgroundImage.url}'`);
    console.log(`DB check: SELECT related_type, field, count(*) FROM files_related_mph WHERE related_type LIKE 'promotion.%' GROUP BY related_type, field ORDER BY related_type;`);
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
