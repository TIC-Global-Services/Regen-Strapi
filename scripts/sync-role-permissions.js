'use strict';

/**
 * Sync Editor/Author admin-role permissions for every api::* content type with the current schema.
 *
 * Why: Strapi snapshots each role's per-field permission list ("seo.metaTitle", ...) when the role is
 * created. Fields added to components/content types later (e.g. shared.seo growing from 6 to 18
 * fields) are not added to Editor/Author automatically, and content types created later (footer,
 * navbar, promo-page, ...) get no Editor/Author permissions at all. Result: those fields are hidden
 * or read-only for non-super-admins.
 *
 * Additive only: never removes a field, action or permission; keeps existing conditions.
 * Mirrors Strapi's own defaults: Editor gets create/read/update/delete/publish, Author gets
 * create/read/update/delete limited to entries they created (admin::is-creator).
 *
 *   DRY_RUN=1 node scripts/sync-role-permissions.js   # preview only
 *   node scripts/sync-role-permissions.js             # apply (idempotent)
 */

const path = require('path');
const { createStrapi } = require('@strapi/strapi');

const DRY_RUN = !!process.env.DRY_RUN;

async function main() {
  const appDir = process.cwd();
  const app = await createStrapi({ appDir, distDir: path.join(appDir, 'dist') }).load();
  app.log.level = 'error';
  try {
    const admin = app.admin.services;
    const { actionProvider } = admin.permission;
    const cmActions = actionProvider.values().filter(a => a.section === 'contentTypes');
    // Same set Strapi uses for Editor/Author: visible api::* content types only.
    const desired = admin['content-type']
      .getPermissionsWithNestedFields(cmActions)
      .filter(p => p.subject && p.subject.startsWith('api::'));

    const roles = [
      { code: 'strapi-editor', conditions: [], skip: () => false },
      { code: 'strapi-author', conditions: ['admin::is-creator'], skip: p => p.action === 'plugin::content-manager.explorer.publish' },
    ];

    for (const { code, conditions, skip } of roles) {
      const role = await app.db.query('admin::role').findOne({ where: { code } });
      if (!role) { console.log(`role ${code} not found — skipped`); continue; }
      const existing = await app.db.query('admin::permission').findMany({ where: { role: role.id }, limit: 5000 });
      const byKey = new Map(existing.map(p => [`${p.action}|${p.subject}`, p]));

      const toCreate = [];
      let updated = 0;
      for (const want of desired) {
        if (skip(want)) continue;
        const key = `${want.action}|${want.subject}`;
        const have = byKey.get(key);
        const wantFields = want.properties.fields;
        if (!have) {
          toCreate.push({ action: want.action, subject: want.subject, properties: want.properties, conditions });
          continue;
        }
        if (!Array.isArray(wantFields)) continue;
        const haveFields = have.properties?.fields ?? [];
        const missing = wantFields.filter(f => !haveFields.includes(f));
        if (!missing.length) continue;
        updated++;
        console.log(`  [${code}] ${want.subject} ${want.action.split('.').pop()}: +${missing.length} fields (${missing.slice(0, 4).join(', ')}${missing.length > 4 ? ', …' : ''})`);
        if (!DRY_RUN) {
          await app.db.query('admin::permission').update({
            where: { id: have.id },
            data: { properties: { ...have.properties, fields: [...haveFields, ...missing] } },
          });
        }
      }
      const newSubjects = [...new Set(toCreate.map(p => p.subject))];
      console.log(`[${code}] fields extended on ${updated} permissions; ${toCreate.length} new permissions for ${newSubjects.length} content types${newSubjects.length ? ` (${newSubjects.join(', ')})` : ''}${DRY_RUN ? ' (DRY_RUN)' : ''}`);
      if (!DRY_RUN && toCreate.length) await admin.role.addPermissions(role.id, toCreate);
    }
  } finally {
    await app.destroy().catch(e => console.warn(`teardown warning (safe): ${e.message}`));
  }
}

main().catch(e => { console.error(e); process.exit(1); });
