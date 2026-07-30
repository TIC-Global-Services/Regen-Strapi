import type { UID } from "@strapi/types";

interface Section {
  __component: string;
  [key: string]: unknown;
}

export const batteryProductSections: Section[] = [
  // ─── 1. Hero ─────────────────────────────────────────────────────────
  {
    __component: "battery-product.hero",
    subtitle: "Sigenergy SigenStor",
    title: "The Smartest Battery In Perth",
    description:
      "Five systems in one box. Hybrid inverter, battery, EV charger, energy management, and gateway — designed for the modern Australian home.",
    buttonText: "Get Your Free Quote",
    buttonLink: "/contact",
    showOverlay: true,
  },

  // ─── 2. Brand Matters ────────────────────────────────────────────────
  {
    __component: "battery-product.brand-matters",
    topSubtitle: "Why The Battery Brand Matters More Than",
    title: "The Badge Of The Box",
    description:
      "A Battery Is A 10–15 Year Investment, Three Things That Matter Well Beyond Installation Day",
    cards: [
      {
        title: "Will The Brand Still Be Here?",
        description:
          "35+ WA Solar Companies Have Closed In The Last Three Years. When They Went, Their Warranties Went With Them. Every Brand We Install Is Backed By A Manufacturer With Global Scale And An Australian Distribution Presence — The Warranty Survives Installer Failure.",
      },
      {
        title: "Is The Chemistry Safe?",
        description:
          "We Exclusively Install Lithium Iron Phosphate (LFP) Batteries. LFP Runs Cooler Than Older NMC Chemistry, Tolerates Higher Temperatures (Critical In Perth), And Has A Lower Thermal Runaway Risk. Every Brand On This Page Uses LFP.",
      },
      {
        title: "Can You Expand It Later?",
        description:
          "Modular Batteries Let You Start Smaller And Add Capacity As Your Needs Grow — Useful If You're Buying An EV Soon. Monolithic Units Stack Via Additional Full Units Rather Than Internal Modules.",
      },
      {
        title: "How Much Of It Can You Actually Use?",
        description:
          "Nominal Capacity And Usable Capacity Aren't The Same. Some Brands Reserve 10–15% For Battery Health, Others Offer 100% Depth Of Discharge. Every Spec We Publish Is Usable Capacity.",
      },
    ],
  },

  // ─── 3. Our Brands ───────────────────────────────────────────────────
  {
    __component: "battery-product.our-brands",
    topSubtitle: "Battery Brands",
    title: "Our Range",
    description: "Every system we install is approved for the WA rebate and VPP capable.",
    brands: [
      {
        title: "Tesla Powerwall 3 (The Benchmark)",
        specs: [
          { label: "Positioning", value: "The Category Benchmark" },
          { label: "Usable", value: "13.5 kWh · Chemistry: LFP · Warranty: 10 Years · Backup: Whole-Home Up To 10kW" },
          { label: "Features", value: "Integrated Solar Inverter, Tesla App, Native EV Integration, Stackable" },
        ],
      },
      {
        title: "BYD Battery-Box Premium HVS/HVM",
        specs: [
          { label: "Positioning", value: "The Scalable Modular LFP" },
          { label: "Usable", value: "5.1–22.1 kWh (HVS) · Chemistry: LFP · Warranty: 10yr Product + 10yr Performance · Backup: Via Backup Box" },
          { label: "Features", value: "Modular Stacking, Inverter-Agnostic, IP55 Outdoor-Rated, High Peak Output" },
        ],
      },
      {
        title: "Alpha ESS SMILE5",
        specs: [
          { label: "Positioning", value: "Flexible Hybrid For Smaller Homes" },
          { label: "Usable", value: "2.9–80 kWh (Modular) · Chemistry: LFP · Warranty: 10 Years · Backup: Yes" },
          { label: "Features", value: "5kW Single-Phase Hybrid Inverter Built-In, Wide Capacity Range, Grid-Interactive" },
        ],
      },
      {
        title: "iStore Battery",
        specs: [
          { label: "Positioning", value: "Slim, Modular, Australian-Supported" },
          { label: "Usable", value: "5 kWh Per Module, Up To 30 kWh · Chemistry: LFP · Warranty: 10 Years · Backup: Optional Backup Box" },
          { label: "Features", value: "100% Depth Of Discharge, 150mm Slim Depth, Wall Or Floor Mount, iStore Ecosystem" },
        ],
      },
      {
        title: "Sigenergy SigenStor",
        specs: [
          { label: "Positioning", value: "The 5-In-1 Next-Gen System" },
          { label: "Usable", value: "5–48 kWh Per Stack · Chemistry: LFP · Warranty: 10yr Battery + Inverter, 5yr Gateway · Backup: UPS-Grade, 0ms" },
          { label: "Features", value: "Integrated Hybrid Inverter, Optional 25kW DC EV Charger, V2H/V2G Ready, GPT-4 MySigen App" },
        ],
      },
      {
        title: "Anker Solix",
        specs: [
          { label: "Positioning", value: "Consumer-Tech Pedigree, Australian Launch" },
          { label: "Usable", value: "Scalable Modular Design · Chemistry: LFP · Warranty: 10 Years · Backup: Yes" },
          { label: "Features", value: "Anker Brand Reliability, Portable-Tech Heritage, Strong App UX, VPP Ready" },
        ],
      },
      {
        title: "Goodwe Lynx Home",
        specs: [
          { label: "Positioning", value: "Inverter-Matched Value Performer" },
          { label: "Usable", value: "Modular Up To ~22 kWh · Chemistry: LFP · Warranty: 10 Years · Backup: Yes" },
          { label: "Features", value: "Tight Inverter Integration With Goodwe ES Series, On Synergy SSL, Cost-Effective" },
        ],
      },
    ],
  },

  // ─── 4. Zero Interest (Solutions Portfolio) ──────────────────────────
  {
    __component: "battery-product.zero-interest",
    subtitle: "Zero Upfront",
    title: "Zero Interest",
    description:
      "The WA Government's Interest-Free Loan (Administered By Plenti) Lets Eligible Households Finance A Battery Without Any Out-Of-Pocket Cost.",
    layout: "6",
    cards: [
      {
        type: "text",
        variant: "light-gray",
        title: "Product Warranty Vs\nPerformance\nWarranty",
        description:
          "Product Warranty Covers Manufacturing Defects (Usually 10 Years). Performance Warranty Guarantees A Minimum Energy Throughput Or Capacity Retention — Typically 60-70% Of Original Capacity After 10 Years Or X MWh Minimum Throughput. Both Are Standard Across The Brands We Install.",
      },
      {
        type: "image",
        variant: "light-green",
        title: "",
        description: "",
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Workmanship\nWarranty",
        description:
          "Separate From The Manufacturer Warranty. We Provide A 5-Year Workmanship Warranty On Every Install. If The Install Caused An Issue, We Fix It. If The Product Failed, We Coordinate With The Manufacturer.",
      },
      {
        type: "text",
        variant: "light-gray",
        title: "What Voids A Battery\nWarranty",
        description:
          "Common Causes: DIY Electrical Work, Unauthorised Modifications, Installation Outside Temperature Specs, Not Enrolling In Required Firmware Updates. Our Installs Avoid All Of These — That's The Point Of A CEC-Accredited Installer.",
      },
      {
        type: "text",
        variant: "dark",
        title: "Aftercare Across 23\nYears Of Installs",
        description:
          "Many Of Our 45,000+ Installations Are Still Running 10, 15, Even 20 Years After Day One. We Stock Parts, Service Anywhere In WA, And Our Install Team Is The Same Team That Services It Later.",
      },
      {
        type: "image",
        variant: "light-green",
        title: "",
        description: "",
      },
    ],
  },

  // ─── 5. Key Terms ────────────────────────────────────────────────────
  {
    __component: "battery-product.key-terms",
    topSubtitle: "Zero Upfront",
    title: "Zero Interest",
    description:
      "The WA Government's Interest-Free Loan (Administered By Plenti) Lets Eligible Households Finance A Battery Without Any Out-Of-Pocket Cost.",
    keyTermsBlock: {
      title: "Key Terms:",
      items: [
        "Loan Amount: $2,001 To $10,000",
        "Term: 3 To 10 Years",
        "Interest Rate: 0%",
        "Early Repayment Fees: None",
        "Missed Payment Fees: Capped, Small",
      ],
    },
    eligibilityBlock: {
      title: "Eligibility:",
      items: [
        "Combined Household Income Under $210,000",
        "Standard Credit Check Applies",
        "WA Property, Synergy Or Horizon Power Customer",
        "Battery Must Be From An Approved Scheme Vendor (We're One)",
      ],
    },
    summaryText:
      "The Rebate Is Applied As An Upfront Discount; The Loan Covers The Balance. For Most Perth Households, This Means $0 Upfront And Modest Monthly Repayments — Replaced By The Savings The Battery Immediately Generates.",
    ctaText: "See If I Qualify For The Interest-Free Loan",
    ctaLink: "#contact",
  },

  // ─── 6. What We Check ────────────────────────────────────────────────
  {
    __component: "battery-product.what-we-check",
    subtitle: "What We Check",
    title: "Before We Quote You",
    paragraphs: [
      "We've Walked Away From Quotes That Looked Attractive On Paper Because Something At The Property Made The Install Unwise. Here's What We Check:",
      "Main Switchboard Capacity — Older Homes May Need A Switchboard Upgrade Before Battery Install",
      "Solar Inverter Compatibility (Existing Or New) — Which Batteries Work With What You Have",
      "Installation Location — Ventilation, Ambient Temperature, Protection From Direct Sun",
      "Network Connection Type — Synergy (SWIS) Or Horizon Power; Export Limits; ESM Requirements Post-1 May 2026",
      "Internet Reliability — Battery VPP, App And Monitoring All Require Stable Internet",
      "Roof And Solar Situation — For New Solar Installs Alongside Battery",
    ],
  },

  // ─── 7. Compatible Products ──────────────────────────────────────────
  {
    __component: "battery-product.compatible-products",
    topSubtitle: "Adding A Battery To Existing Solar Vs Going Solar",
    title: "+ Battery Together",
    leftTitle: "Adding To Existing Solar (Retrofit)",
    leftItems: [
      "AC coupling — the battery has its own inverter and connects to your switchboard (works with any existing inverter)",
      "DC coupling — if your existing inverter is a 'hybrid' inverter, the battery connects directly (more efficient)",
      "Some existing inverters aren't battery-ready and need replacement or supplementing",
    ],
    rightTitle: "Solar + Battery Together (New Install)",
    rightItems: [
      "Single hybrid inverter handling both (Sigenergy, Goodwe, Alpha ESS)",
      "Integrated design (Tesla Powerwall 3 has its own inverter)",
      "Optimised cabling and switchboard work (done once)",
      "Single rebate application and single approval",
    ],
  },

  // ─── 8. Homeowners ───────────────────────────────────────────────────
  {
    __component: "battery-product.homeowners",
    topSubtitle: "Perth Homeowners.",
    title: "Real Bills. Real Savings",
    showReadMore: true,
    centerButton: true,
    centerButtonText: "See 2,000+ Verified Reviews On ProductReview.com.au",
    cards: [
      {
        title: "How Solar Batteries\nAre Changing Modern Homes",
        description: "",
        textPosition: "top",
        footerTitle: "May 7, 2026",
        footerDescription:
          "Discover How Battery Storage Helps Homeowners Reduce Grid Dependence, Lower Electricity Bills, And Access Reliable Power Day And Night.",
      },
      {
        title: "5 Ways EV Charging\nWorks Better With Solar",
        description: "",
        textPosition: "top",
      },
      {
        title: "Why More Australians Are\nSwitching To Renewable\nEnergy",
        description: "",
        textPosition: "top",
      },
    ],
  },

  // ─── 9. Comparison Table ─────────────────────────────────────────────
  {
    __component: "battery-product.comparison-table",
    topSubtitle: "Side-By-Side",
    title: "Every Battery We Install",
    description:
      "Spec Sheets Are Easier To Parse Side By Side. Use The Filters To Narrow The Field To What Matters To You.",
    columns: [
      { heading: "Brand Model" },
      { heading: "Tesla\nPowerwall 3" },
      { heading: "BYD HVS" },
      { heading: "Alpha ESS\nSMILE5" },
      { heading: "iStore" },
      { heading: "Sigenergy\nSigenStor" },
      { heading: "Anker Solix" },
      { heading: "Goodwe\nLynx Home" },
    ],
    rows: [
      {
        label: "Usable kWh",
        values: [
          "13.5",
          "5.1–12.8 per tower",
          "2.9–80",
          "5–30",
          "5–48 per stack",
          "Modular",
          "Up to 22",
        ],
      },
      {
        label: "Chemistry",
        values: ["LFP", "LFP", "LFP", "LFP", "LFP", "LFP", "LFP"],
      },
      {
        label: "Warranty",
        values: [
          "10 yr",
          "10 yr + 10 yr perf",
          "10yr",
          "10yr",
          "10 yr (battery+inv), 5 yr gateway",
          "10yr",
          "10yr",
        ],
      },
      {
        label: "Backup",
        values: [
          "Whole home, 10kW",
          "Via backup box",
          "yes",
          "Optional box",
          "UPS 0ms",
          "yes",
          "yes",
        ],
      },
      {
        label: "Modular",
        values: [
          "Via extra units",
          "Yes (modular)",
          "yes",
          "Yes (5 kWh mods)",
          "Yes + EV-ready",
          "yes",
          "yes",
        ],
      },
    ],
  },

  // ─── 10. CTA Banner ──────────────────────────────────────────────────
  {
    __component: "shared.cta-banner",
    subtitle: "Ready To Get Started?",
    mainTitle: "Get Solar For Your Home",
    description:
      "Join 45,000+ satisfied WA homeowners who have chosen Regen Power for their energy needs.",
    buttonText: "Book A Free Consultation",
    buttonHref: "/contact",
  },
];
