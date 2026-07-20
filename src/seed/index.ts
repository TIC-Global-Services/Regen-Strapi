import type { Core } from '@strapi/strapi';
import { solarSections } from './data/solar-page';
import { brandsSections } from './data/brands-page';
import { dealsSections } from './data/deals-page';
import { rebatesSections } from './data/rebates-page';
import { faqSections } from './data/faq-page';

async function seedSingleType(
  strapi: Core.Strapi,
  uid: string,
  field: string,
  sections: unknown[]
) {
  const existing = await strapi.db.query(uid).findOne({
    where: { publishedAt: { $notNull: true } },
  });

  if (existing) {
    strapi.log.info(`[seed] ${uid} already seeded, skipping`);
    return;
  }

  await strapi.entityService.create(uid as any, {
    data: {
      [field]: sections,
      publishedAt: new Date(),
    } as any,
  });

  strapi.log.info(`[seed] ${uid} seeded`);
}

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info('[seed] Starting data seeding...');

  await seedSingleType(strapi, 'api::solar-page.solar-page', 'sections', solarSections);
  await seedSingleType(strapi, 'api::brands-page.brands-page', 'sections', brandsSections);
  await seedSingleType(strapi, 'api::deals-page.deals-page', 'sections', dealsSections);
  await seedSingleType(strapi, 'api::rebates-page.rebates-page', 'sections', rebatesSections);
  await seedSingleType(strapi, 'api::faq-page.faq-page', 'sections', faqSections);

  strapi.log.info('[seed] All 5 pages seeded');
}
