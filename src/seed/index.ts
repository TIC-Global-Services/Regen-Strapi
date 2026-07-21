import type { Core } from "@strapi/strapi";
import type { UID } from "@strapi/types";

import { solarSections } from "./data/solar-page";
import { brandsSections } from "./data/brands-page";
import { dealsSections } from "./data/deals-page";
import { rebatesSections } from "./data/rebates-page";
import { faqSections } from "./data/faq-page";
import { commercialOffGridSections } from "./data/commercial-off-grid-page";
import { commercialSystemsSections } from "./data/commercial-systems-page";
import { offGridSolutionsSections } from "./data/off-grid-solutions-page";
import { researchDevelopmentSections } from "./data/research-development-page";
import { portfolioSections } from "./data/portfolio-page";
import { blogSections } from "./data/blog-page";
import { pressMediaSections } from "./data/press-media-page";
import { reviewsSections } from "./data/reviews-page";
import { contactSections } from "./data/contact-page";

const pages = [
  {
    uid: "api::solar-page.solar-page" as UID.ContentType,
    title: "Solar - Solar System",
    sections: solarSections,
    seo: {
      metaTitle: "Solar Power Systems | Regen Power",
      metaDescription:
        "Explore Regen Power's residential solar systems — Tier-1 panels, premium inverters, and expert installation built to last 25+ years.",
      keywords: "solar power, solar panels, solar system, Regen Power, residential solar",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::brands-page.brands-page" as UID.ContentType,
    title: "Solar - Brands We Carry",
    sections: brandsSections,
    seo: {
      metaTitle: "Solar Brands We Carry | Regen Power",
      metaDescription:
        "See the Tier-1 solar panel and inverter brands Regen Power installs — Fronius, SMA, Sungrow and more, hand-picked for performance and reliability.",
      keywords: "solar brands, Tier-1 panels, Fronius, SMA, Sungrow, inverter brands",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::deals-page.deals-page" as UID.ContentType,
    title: "Solar - Deals",
    sections: dealsSections,
    seo: {
      metaTitle: "Solar Deals & Packages | Regen Power",
      metaDescription:
        "Browse current solar package deals from Regen Power — flexible payment options and bundled savings on premium solar installations.",
      keywords: "solar deals, solar packages, solar discounts, Regen Power",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::rebates-page.rebates-page" as UID.ContentType,
    title: "Solar - Govt Rebates",
    sections: rebatesSections,
    seo: {
      metaTitle: "Government Solar Rebates | Regen Power",
      metaDescription:
        "Understand STCs, government rebates, and low-interest loan options available for your solar installation with Regen Power.",
      keywords: "solar rebates, STC, government incentives, solar loans",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::faq-page.faq-page" as UID.ContentType,
    title: "Solar - FAQ",
    sections: faqSections,
    seo: {
      metaTitle: "Solar FAQs | Regen Power",
      metaDescription:
        "Answers to common questions about going solar with Regen Power — installation, costs, warranties, and more.",
      keywords: "solar FAQ, solar questions, Regen Power",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::commercial-systems-page.commercial-systems-page" as UID.ContentType,
    title: "Commercial - Commercial Systems & Case Studies",
    sections: commercialSystemsSections,
    seo: {
      metaTitle: "Commercial Solar Systems & Case Studies | Regen Power",
      metaDescription:
        "Regen Power designs and installs commercial solar systems for businesses — explore packages, industries served, and real case studies.",
      keywords: "commercial solar, business solar systems, solar case studies",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::commercial-off-grid-page.commercial-off-grid-page" as UID.ContentType,
    title: "Commercial - Commercial Off Grid",
    sections: commercialOffGridSections,
    seo: {
      metaTitle: "Commercial Off-Grid Solar | Regen Power",
      metaDescription:
        "Reliable off-grid solar solutions for commercial sites with Regen Power — engineered for remote and independent power needs.",
      keywords: "commercial off-grid solar, off-grid power, remote solar systems",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::off-grid-solutions-page.off-grid-solutions-page" as UID.ContentType,
    title: "Commercial - Off Grid Solutions",
    sections: offGridSolutionsSections,
    seo: {
      metaTitle: "Off-Grid Solar Solutions | Regen Power",
      metaDescription:
        "Explore Regen Power's off-grid solar solutions — hybrid generators, battery storage, and independent power systems for any site.",
      keywords: "off-grid solar, hybrid generator, battery storage, independent power",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::research-development-page.research-development-page" as UID.ContentType,
    title: "Commercial - Research & Development",
    sections: researchDevelopmentSections,
    seo: {
      metaTitle: "Research & Development | Regen Power",
      metaDescription:
        "Discover the engineering and R&D behind Regen Power's solar technology — energy solutions built on real-world testing and innovation.",
      keywords: "solar R&D, Regen Power research, energy innovation",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::portfolio-page.portfolio-page" as UID.ContentType,
    title: "Commercial - Portfolio",
    sections: portfolioSections,
    seo: {
      metaTitle: "Our Portfolio | Regen Power",
      metaDescription:
        "Browse completed solar installations from Regen Power — real projects across residential, commercial, and off-grid sites.",
      keywords: "solar portfolio, solar projects, Regen Power installations",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::blog-page.blog-page" as UID.ContentType,
    title: "Blog",
    sections: blogSections,
    seo: {
      metaTitle: "Blog | Regen Power",
      metaDescription: "News, guides, and insights on solar energy from the Regen Power team.",
      keywords: "solar blog, solar news, Regen Power insights",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::press-media-page.press-media-page" as UID.ContentType,
    title: "Press & Media",
    sections: pressMediaSections,
    seo: {
      metaTitle: "Press & Media | Regen Power",
      metaDescription: "Latest press coverage, featured articles, and media mentions of Regen Power.",
      keywords: "Regen Power press, solar media coverage, news",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::reviews-page.reviews-page" as UID.ContentType,
    title: "Reviews",
    sections: reviewsSections,
    seo: {
      metaTitle: "Customer Reviews | Regen Power",
      metaDescription:
        "Read real customer reviews and testimonials about Regen Power's solar installations and service.",
      keywords: "solar reviews, customer testimonials, Regen Power reviews",
      metaRobots: "index, follow",
    },
  },
  {
    uid: "api::contact-page.contact-page" as UID.ContentType,
    title: "Contact",
    sections: contactSections,
    seo: {
      metaTitle: "Contact Us | Regen Power",
      metaDescription: "Get in touch with Regen Power for a solar quote, support, or general enquiries.",
      keywords: "contact Regen Power, solar quote, get in touch",
      metaRobots: "index, follow",
    },
  },
];

async function seedSingleType(strapi: Core.Strapi, page: (typeof pages)[number]) {
  const existing = await strapi.documents(page.uid).findFirst({
    status: "published",
    populate: ["seo"],
  } as any);

  if (existing) {
    if (!(existing as any).seo) {
      await strapi.documents(page.uid).update({
        documentId: existing.documentId,
        data: {
          seo: page.seo,
        } as any,
        status: "published",
      });
      strapi.log.info(`[seed] ${page.title} seo added`);
    } else {
      strapi.log.info(`[seed] ${page.title} already exists`);
    }
    return;
  }

  await strapi.documents(page.uid).create({
    data: {
      sections: page.sections,
      seo: page.seo,
    } as any,
    status: "published",
  });

  strapi.log.info(`[seed] ${page.title} created`);
}

export async function runSeed(strapi: Core.Strapi) {
  strapi.log.info("🌱 Starting Page Seeder...");

  for (const page of pages) {
    await seedSingleType(strapi, page);
  }

  strapi.log.info(`✅ ${pages.length} pages seeded successfully.`);
}
