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

const pages = [
  {
    uid: 'api::solar-page.solar-page',
    title: 'Solar - Solar System',
    sections: solarSections,
  },
  {
    uid: 'api::brands-page.brands-page',
    title: 'Solar - Brands We Carry',
    sections: brandsSections,
  },
  {
    uid: 'api::deals-page.deals-page',
    title: 'Solar - Deals',
    sections: dealsSections,
  },
  {
    uid: 'api::rebates-page.rebates-page',
    title: 'Solar - Govt Rebates',
    sections: rebatesSections,
  },
  {
    uid: 'api::faq-page.faq-page',
    title: 'Solar - FAQ',
    sections: faqSections,
  },
  {
    uid: 'api::commercial-off-grid-page.commercial-off-grid-page',
    title: 'Commercial - Commercial Off Grid',
    sections: commercialOffGridSections,
  },
  {
    uid: 'api::portfolio-page.portfolio-page',
    title: 'Commercial - Portfolio',
    sections: portfolioSections,
  },
  {
    uid: 'api::research-development-page.research-development-page',
    title: 'Commercial - Research & Development',
    sections: researchDevelopmentSections,
  },
  {
    uid: 'api::commercial-systems-page.commercial-systems-page',
    title: 'Commercial - Commercial Systems & Case Studies',
    sections: commercialSystemsSections,
  },
  {
    uid: 'api::off-grid-solutions-page.off-grid-solutions-page',
    title: 'Commercial - Off Grid Solutions',
    sections: offGridSolutionsSections,
  },
  
  
  {
    uid: 'api::blog-page.blog-page',
    title: 'Blog',
    sections: blogSections,
  },
  {
    uid: 'api::press-media-page.press-media-page',
    title: 'Press & Media',
    sections: pressMediaSections,
  },
  {
    uid: 'api::reviews-page.reviews-page',
    title: 'Reviews',
    sections: reviewsSections,
  },
  {
    uid: 'api::contact-page.contact-page',
    title: 'Contact',
    sections: contactSections,
  },
];


async function seedSingleType(
  strapi: Core.Strapi,
  page: (typeof pages)[number]
) {
  const existing = await strapi.db.query(page.uid).findOne({
    where: {
      publishedAt: {
        $notNull: true,
      },
    },
  });

  if (existing) {
    strapi.log.info(`[seed] ${page.title} already exists, skipping`);
    return;
  }

  await strapi.entityService.create(page.uid as any, {
    data: {
      title: page.title,
      sections: page.sections,
      publishedAt: new Date(),
    } as any,
  });

  strapi.log.info(`[seed] ${page.title} seeded successfully`);
}

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info('[seed] Starting data seeding...');

  for (const page of pages) {
    await seedSingleType(strapi, page);
  }

  strapi.log.info(`[seed] Successfully seeded ${pages.length} pages`);
}
