import type { Core } from '@strapi/strapi';
import { solarSections } from './data/solar-page';
import { brandsSections } from './data/brands-page';
import { dealsSections } from './data/deals-page';
import { rebatesSections } from './data/rebates-page';
import { faqSections } from './data/faq-page';
import { commercialOffGridSections } from './data/commercial-off-grid-page';
import { commercialSystemsSections } from './data/commercial-systems-page';
import { offGridSolutionsSections } from './data/off-grid-solutions-page';
import { researchDevelopmentSections } from './data/research-development-page';
import { portfolioSections } from './data/portfolio-page';
import { blogSections } from './data/blog-page';
import { pressMediaSections } from './data/press-media-page';
import { reviewsSections } from './data/reviews-page';
import { contactSections } from './data/contact-page';

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

  await seedSingleType(
    strapi,
    'api::commercial-off-grid-page.commercial-off-grid-page',
    'sections',
    commercialOffGridSections
  );
  await seedSingleType(
    strapi,
    'api::commercial-systems-page.commercial-systems-page',
    'sections',
    commercialSystemsSections
  );
  await seedSingleType(
    strapi,
    'api::off-grid-solutions-page.off-grid-solutions-page',
    'sections',
    offGridSolutionsSections
  );
  await seedSingleType(
    strapi,
    'api::research-development-page.research-development-page',
    'sections',
    researchDevelopmentSections
  );
  await seedSingleType(
    strapi,
    'api::portfolio-page.portfolio-page',
    'sections',
    portfolioSections
  );
  await seedSingleType(strapi, 'api::blog-page.blog-page', 'sections', blogSections);
  await seedSingleType(
    strapi,
    'api::press-media-page.press-media-page',
    'sections',
    pressMediaSections
  );
  await seedSingleType(
    strapi,
    'api::reviews-page.reviews-page',
    'sections',
    reviewsSections
  );
  await seedSingleType(
    strapi,
    'api::contact-page.contact-page',
    'sections',
    contactSections
  );

  strapi.log.info('[seed] All 14 pages seeded');
}
