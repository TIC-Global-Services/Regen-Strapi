export const batteryProductSections = [
  {
    __component: "battery-product.hero" as const,
    subtitle: "Solar Power Engineered For The",
    title: "Perth Climate",
    description:
      "WA's #1 Rated Solar Installer With 45,000+ Since 2003. CEC-Approved. Award Winner 2021–2026.",
    buttonText: "Get Your Free Quote",
    buttonLink: "/contact",
    showOverlay: true,
  },

  {
    __component: "battery-product.brand-matters" as const,
    topSubtitle: "Why",
    title: "Brand Matters For Batteries",
    description:
      "A battery is a 10+ year investment. We only install brands with proven local support, real warranties, and a track record of performance in Australian conditions.",
    cards: [
      {
        title: "WA-Approved & Tested",
        description:
          "All brands on Synergy's Supported Solutions list and CEC-approved for Australian conditions.",
      },
      {
        title: "Local Support Network",
        description:
          "Perth-based warranty and service — no waiting for interstate technicians.",
      },
      {
        title: "Proven Track Record",
        description:
          "Thousands of installations across Perth since 2003. We know what works in the WA climate.",
      },
    ],
  },

  {
    __component: "battery-product.our-brands" as const,
    topSubtitle: "Our",
    title: "Premium Battery Range",
    description:
      "Every brand we install meets strict criteria for safety, reliability, warranty support, and real-world performance in Perth's unique climate.",
    brands: [
      {
        title: "Tesla Powerwall 3",
        link: "#tesla",
        specs: [
          { label: "Capacity", value: "13.5 kWh" },
          { label: "Power", value: "5 kW continuous / 7 kW peak" },
          { label: "Warranty", value: "10 years" },
        ],
      },
      {
        title: "BYD Battery-Box Premium",
        link: "#byd",
        specs: [
          { label: "Capacity", value: "10.24 kWh – 20.48 kWh" },
          { label: "Power", value: "5 kW – 10 kW" },
          { label: "Warranty", value: "10 years" },
        ],
      },
      {
        title: "Alpha ESS SMILE-G3",
        link: "#alpha",
        specs: [
          { label: "Capacity", value: "10.1 kWh – 20.2 kWh" },
          { label: "Power", value: "5 kW" },
          { label: "Warranty", value: "10 years" },
        ],
      },
      {
        title: "SigenStor by Sigenergy",
        link: "#sigenergy",
        specs: [
          { label: "Capacity", value: "5 kWh – 30 kWh" },
          { label: "Power", value: "5 kW – 15 kW" },
          { label: "Warranty", value: "10 years" },
        ],
      },
      {
        title: "iStore Battery System",
        link: "#istore",
        specs: [
          { label: "Capacity", value: "9.8 kWh – 29.4 kWh" },
          { label: "Power", value: "5 kW" },
          { label: "Warranty", value: "10 years" },
        ],
      },
    ],
  },

  {
    __component: "battery-product.zero-interest" as const,
    subtitle: "Interest-Free Loans",
    title: "Up To $10,000 Available",
    description:
      "Eligible households can access up to $10,000 over 3–10 years interest-free through Plenti, plus stackable rebates of up to $7,900.",
    cards: [
      {
        type: "text",
        variant: "light-green",
        title: "$0 Interest",
        description: "3–10 year terms via Plenti, no early repayment fees.",
      },
      {
        type: "text",
        variant: "light-gray",
        title: "Federal Rebate",
        description: "~$3,720 off a 10kWh battery via the Cheaper Home Batteries Program.",
      },
      {
        type: "text",
        variant: "light-gray",
        title: "WA Rebate",
        description: "Up to $3,800 (Horizon Power) or $1,300 (Synergy) through the WA scheme.",
      },
    ],
    layout: "3",
  },

  {
    __component: "battery-product.key-terms" as const,
    topSubtitle: "Battery Basics",
    title: "Understanding The Key Terms",
    description:
      "Before choosing a battery, it helps to understand a few key concepts. Here's what they mean for your home.",
    keyTermsBlock: {
      title: "Key Terms Explained",
      items: [
        "Usable Capacity: The amount of energy you can actually use (e.g., 10 kWh)",
        "Round-Trip Efficiency: How much energy you get back vs what you put in (typically 90-95%)",
        "Depth of Discharge: How much of the battery you can safely use (usually 100% for LFP)",
        "Peak Power: The maximum power the battery can deliver at once",
      ],
    },
    eligibilityBlock: {
      title: "Eligibility For Rebates",
      items: [
        "Owner-occupier or landlord with tenant consent",
        "Combined household income under $210,000 for the federal program",
        "Existing solar system or installing simultaneously",
        "Connected to Synergy (SWIS) or Horizon Power network",
      ],
    },
    summaryText:
      "Not sure which battery is right for you? Our team can help match the right system to your home and budget — including maximising your available rebates.",
    ctaText: "Book A Free Assessment",
    ctaLink: "/contact",
  },

  {
    __component: "battery-product.what-we-check" as const,
    subtitle: "Every Install Is",
    title: "Engineered For Your Home",
    paragraphs: [
      "We assess your usage patterns, solar production, and roof orientation to determine the optimal battery size and configuration.",
      "Our engineers check your switchboard capacity, existing solar inverter compatibility, and potential for future expansion (EV charging, additional battery modules).",
      "We also verify your eligibility for all available rebates — federal, state, and any interest-free loan programs.",
      "The result is a tailored system that maximises your savings, not an off-the-shelf solution.",
    ],
  },

  {
    __component: "battery-product.compatible-products" as const,
    topSubtitle: "Compatible With",
    title: "Your Existing Solar System",
    description:
      "Most existing solar systems can be retrofitted with battery storage. Here's what we check.",
    leftTitle: "Compatible Setups",
    leftItems: [
      "Single-phase and three-phase homes",
      "Existing solar with any brand of inverter",
      "New solar + battery combined installs",
      "Systems from 3 kW to 30 kW+ solar arrays",
    ],
    rightTitle: "What We'll Check",
    rightItems: [
      "Existing inverter compatibility (AC coupling)",
      "Switchboard capacity and available breaker slots",
      "Roof space and orientation for additional panels",
      "Current energy usage patterns and peak demand",
    ],
  },

  {
    __component: "battery-product.homeowners" as const,
    topSubtitle: "What Our Customers Say",
    title: "Real Stories From Perth Homeowners",
    cards: [
      {
        title: "Sarah & Tom — Joondalup",
        description:
          "Our bills went from $600/quarter to under $50. The battery paid for itself faster than we expected.",
        textPosition: "bottom",
        footerTitle: "4.9★ Rated",
        footerDescription: "Google & ProductReview",
      },
      {
        title: "David — Mandurah",
        description:
          "The team walked us through every step. From rebate application to installation, it was seamless.",
        textPosition: "bottom",
        footerTitle: "10-Year Warranty",
        footerDescription: "On All Battery Systems",
      },
      {
        title: "Lisa — Fremantle",
        description:
          "Having backup power during the last storm was a game-changer. We didn't even notice the outage.",
        textPosition: "bottom",
        footerTitle: "23 Years",
        footerDescription: "Serving Perth",
      },
    ],
    showReadMore: true,
    centerButton: false,
  },

  {
    __component: "battery-product.comparison-table" as const,
    topSubtitle: "Compare Our Range",
    title: "Which Battery Is Right For You?",
    description:
      "Every home is different. Here's how our battery range compares across key specifications.",
    columns: [
      { heading: "Specification" },
      { heading: "Tesla Powerwall 3" },
      { heading: "BYD Battery-Box" },
      { heading: "Alpha ESS" },
      { heading: "SigenStor" },
      { heading: "iStore" },
    ],
    rows: [
      {
        label: "Usable Capacity",
        values: ["13.5 kWh", "10.24–20.48 kWh", "10.1–20.2 kWh", "5–30 kWh", "9.8–29.4 kWh"],
      },
      {
        label: "Peak Power",
        values: ["7 kW", "10 kW", "5 kW", "15 kW", "5 kW"],
      },
      {
        label: "Chemistry",
        values: ["LFP", "LFP", "LFP", "LFP", "LFP"],
      },
      {
        label: "Warranty",
        values: ["10 years", "10 years", "10 years", "10 years", "10 years"],
      },
      {
        label: "VPP Ready",
        values: ["Yes", "Yes", "Yes", "Yes", "No"],
      },
    ],
  },

  {
    __component: "shared.cta-banner" as const,
    subtitle: "Ready to take control of",
    mainTitle: "Your Energy Future?",
    description:
      "Book a free, no-obligation assessment and find out how much you could save with solar battery storage.",
    buttonText: "Get Your Free Quote",
    buttonHref: "/contact",
  },
];
