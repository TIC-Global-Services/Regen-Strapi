import type { UID } from "@strapi/types";

interface Section {
  __component: string;
  [key: string]: unknown;
}

export const homeSections: Section[] = [
  // ─── 1. Hero ─────────────────────────────────────────────────────────
  {
    __component: "home.hero",
    subtitle: "Step Into The",
    title: "Future Of Energy",
    description:
      "WA's #1 rated solar installer with 45,000+ installations since 2003.\nCEC-approved. ProductReview award winner 2021–2026.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    mediaType: "image",
    showOverlay: true,
  },

  // ─── 2. Awards & Recognition ─────────────────────────────────────────
  {
    __component: "home.awards",
    title: "Awards & Recognition",
    logos: [
      { alt: "Australian Technologies", src: null },
      { alt: "Fast 100 2020", src: null },
      { alt: "EUPD Research", src: null },
      { alt: "Financial Times", src: null },
      { alt: "Belmont Awards", src: null },
    ],
  },

  // ─── 3. Why Choose Us ────────────────────────────────────────────────
  {
    __component: "home.whychooseus",
    subtitle: "Why Choose",
    title: "Regen Power",
    // New generic stat-card grid. Mirrors the previous 4-card design exactly.
    cards: [
      {
        count: 6,
        prefix: null,
        suffix: "×",
        title: "Product Review Award\nWinner",
        description: null,
        icon: null,
        image: null,
        logo: null,
        stats: [],
      },
      {
        count: null,
        prefix: null,
        suffix: null,
        title: null,
        description: null,
        icon: null,
        image: null,
        logo: null,
        stats: [
          { count: 3000, prefix: null, suffix: "+", label: "Battery Installations" },
          { count: 45000, prefix: null, suffix: "+", label: "Solar Installations" },
        ],
      },
      {
        count: 23,
        prefix: null,
        suffix: null,
        title: "Years",
        description: "In business, operating from \n Canning Vale office",
        icon: null,
        image: null,
        logo: null,
        stats: [],
      },
      {
        // NOTE: the star icon (/star.svg) is a local frontend asset, not a
        // Strapi media item. Upload `star.svg` to the media library and set
        // `icon` to that media (or extend the schema to accept a raw path) so
        // the rating star renders through the generic `cards` path.
        count: 5,
        prefix: null,
        suffix: null,
        title: "Ratings On\nProductReview",
        description: null,
        icon: null,
        image: null,
        logo: null,
        stats: [],
      },
    ],
  },

  // ─── 4. Expertise ────────────────────────────────────────────────────
  {
    __component: "home.expertise",
    subtitle: "Our Energy",
    accentTitle: "Expertise",
    bgImage: null,
    items: [
      {
        title: "Residential Solar\n& Storage",
        image: null,
        icon: null,
      },
      {
        title: "Battery Storage\n& Smart Home",
        image: null,
        icon: null,
      },
      {
        title: "Commercial\n& Off-Grid",
        image: null,
        icon: null,
      },
      {
        title: "Electric Vehicle\nCharging",
        image: null,
        icon: null,
      },
    ],
  },

  // ─── 5. Science of Solar & Storage ──────────────────────────────────
  {
    __component: "home.solarandstorage",
    titleNormal: "The Science Of",
    titleAccent: "Solar & Storage",
    features: [
      {
        number: "01",
        title: "Capture Energy From The Sun",
        description:
          "High-efficiency solar panels installed on your roof absorb sunlight throughout the day and convert it into direct current (DC) electricity, creating clean and renewable energy for your home.",
        mediaType: "image",
        mediaSrc: null,
      },
      {
        number: "02",
        title: "Store Excess Power For Night",
        description:
          "Premium battery storage systems capture surplus solar generation during the day, giving you reliable power after sunset and complete blackout protection.",
        mediaType: "image",
        mediaSrc: null,
      },
      {
        number: "03",
        title: "Smart Home Integration",
        description:
          "Monitor and manage your household energy consumption in real-time, directing power to smart appliances and living areas for maximum efficiency.",
        mediaType: "image",
        mediaSrc: null,
      },
      
    ],
  },

  // ─── 6. Partners & Memberships ───────────────────────────────────────
  {
    __component: "home.patnersandmembership",
    subtitle: "Trusted Relationships",
    title: "Partners & Memberships",
    partnersTitle: "Partners",
    partners: [
      { name: "Tesla Energy Certified Installer", image: null },
      { name: "iStore Premium Partner", image: null },
    ],
    membershipsTitle: "Memberships",
    memberships: [
      { name: "Smart Energy Council", image: null },
      { name: "Clean Energy Council Member", image: null },
      { name: "Approved Seller", image: null },
    ],
  },

  // ─── 7. Three Ways To Pay ────────────────────────────────────────────
  {
    __component: "home.threewaystopay",
    subtitle: "Smart Solar Savings &",
    title: "Zero-Interest Financing",
    description: "",
    cards: [
      {
        title: "Federal STC Rebate",
        description:
          "Receive thousands off your solar system through the federal Government's small-scale technology certificate (STC) scheme. Applied as an upfront discount at point of sale.",
        image: null,
      },
      {
        title: "WA Battery Rebate",
        description:
          "Up to $1,300 rebate for eligible WA households installing a battery system under the distributed energy buyback scheme (DEBS) battery program.",
        image: null,
      },
      {
        title: "Interest-Free Loan Up To $10,000",
        description:
          "Through the WA battery rebate, eligible Synergy customers can access an interest-free loan of up to $10,000 repayable over 10 years.",
        image: null,
        ctaText: "Check Your Eligibility",
      },
    ],
  },

  // ─── 8. Craftsmanship ──────────────────────────────────────────────
  {
    __component: "home.craftmanship",
    subtitle: "Industry-Leading Brands &",
    title: "Craftsmanship",
    categories: [
      {
        label: "Inverters",
        logos: [
          { name: "AIKO", src: null },
          { name: "Canadian Solar", src: null },
          { name: "JA Solar", src: null },
          { name: "Jinko Solar", src: null },
          { name: "LONGi", src: null },
        ],
      },
      {
        label: "Panels",
        logos: [
          { name: "AIKO", src: null },
          { name: "Canadian Solar", src: null },
          { name: "JA Solar", src: null },
          { name: "Jinko Solar", src: null },
          { name: "LONGi", src: null },
          { name: "Trina Solar", src: null },
          { name: "Risen", src: null },
        ],
      },
      {
        label: "Battery Storage",
        logos: [
          { name: "Canadian Solar", src: null },
          { name: "JA Solar", src: null },
          { name: "LONGi", src: null },
          { name: "Trina Solar", src: null },
        ],
      },
      {
        label: "EV Charger",
        logos: [
          { name: "Jinko Solar", src: null },
          { name: "Risen", src: null },
          { name: "LONGi", src: null },
        ],
      },
    ],
  },

  // ─── 9. Real Stories ─────────────────────────────────────────────────
  {
    __component: "home.real-stories",
    subtitle: "Real Stories.",
    title: "Real Results.",
    badges: [
      {
        alt: "Google Rating 4.9 stars based on 1,385+ reviews",
        src: null,
      },
      {
        alt: "Best Rated Solar Installer — #1 Most Popular Western Australia 2026",
        src: null,
      },
      {
        alt: "Top Rated Solar Panel Installers",
        src: null,
      },
      {
        alt: "Top Rated Installers — Western Australia",
        src: null,
      },
    ],
    reviews: [
      {
        systemTitle: "10kW Solar + Battery System",
        quote:
          "The entire process was smooth from consultation to installation. Our power bills dropped almost immediately, and the team kept us informed every step of the way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        systemTitle: "10kW Solar + Battery System",
        quote:
          "The entire process was smooth from consultation to installation. Our power bills dropped almost immediately, and the team kept us informed every step of the way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        systemTitle: "10kW Solar + Battery System",
        quote:
          "The entire process was smooth from consultation to installation. Our power bills dropped almost immediately, and the team kept us informed every step of the way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
      },
      {
        systemTitle: "6.6kW Solar Panel System",
        quote:
          "Outstanding service from start to finish. The team was professional, punctual and the quality of the installation exceeded our expectations.",
        author: "James",
        location: "Joondalup",
        rating: 5,
      },
      {
        systemTitle: "13.2kW Commercial Solar",
        quote:
          "Best decision we made for our business. Energy costs cut in half and the ROI was faster than projected.",
        author: "Michelle",
        location: "Fremantle",
        rating: 5,
      },
    ],
  },

  // ─── 10. Latest News & Insights ──────────────────────────────────────
  {
    __component: "home.smartsolar",
    topSubtitle: "Explore Our",
    title: "Latest News & Insights",
    centerButtonText: "View All Articles",
    centerButtonLink: "/blog",
    cards: [
      {
        title: "STC Upfront Discount",
        description:
          "Federal STC and WA rebate values are deducted directly from your quoted price. You pay the post-rebate balance.",
        image: null,
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
      {
        title: "Plenti No-Interest Loan",
        description:
          "WA-funded no-interest loan from $2,001 to $10,000. Flexible 3–10 year terms, no early repayment fees.",
        image: null,
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
      {
        title: "Third-Party Finance",
        description:
          "We can refer you to accredited green-loan providers for larger systems or commercial installations.",
        image: null,
        textPosition: "top",
        footerTitle: "Best For",
        footerDescription: "Any installation — applied by default.",
      },
    ],
  },

  // ─── 11. Battery Quote CTA ──────────────────────────────────────────
  {
    __component: "home.battery-quote",
    subtitle: "Get Your Free Solar &",
    title: "Battery Quote",
    description:
      "Our technical sales team will design a system tailored to your home, usage, and budget. Most quotes delivered within 24 hours.",
    image: null,
  },
];
