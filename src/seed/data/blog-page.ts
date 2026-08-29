export const blogSections = [
  {
    __component: "blog.hero" as const,
    subtitle: "Insights On Solar,",
    mainTitle: "Batteries & Smarter Energy",
    description:
      "Explore expert insights, practical solar guides, renewable energy trends, and the latest innovations helping Australian homes and businesses transition to cleaner, more efficient energy solutions. Stay informed with industry updates and actionable advice from the Regen Power team.",
    ctaText: "Get Your Free Quote",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "blog.category-filter" as const,
    categories: [
      { label: "Systems & Panels", value: "Systems & Panels" },
      { label: "Inverters", value: "Inverters" },
      { label: "Rebates & Savings", value: "Rebates & Savings" },
      { label: "Batteries & Storage", value: "Batteries & Storage" },
      { label: "Perth-Specific", value: "Perth-Specific" },
    ],
    defaultCategory: "Systems & Panels",
    cards: [
      // \u2500\u2500\u2500 Systems & Panels \u2500\u2500\u2500
      {
        title: "How Much Does A Solar System Cost In Perth?",
        description: "A complete breakdown of solar installation costs, system sizes, and what influences pricing in 2026.",
        image: null,
        imagePosition: "right",
        categoryKey: "Systems & Panels",
      },
      {
        title: "Solar System Size Guide For Australian Homes",
        description: "How many panels and kilowatts your household actually needs, based on energy usage, roof space, and climate.",
        image: null,
        imagePosition: "left",
        categoryKey: "Systems & Panels",
      },
      {
        title: "Monocrystalline Vs Polycrystalline Panels",
        description: "A practical comparison of panel technologies, efficiency ratings, and which one delivers better long-term value.",
        image: null,
        imagePosition: "right",
        categoryKey: "Systems & Panels",
      },
      {
        title: "How To Choose The Right Solar Panel Brand",
        description: "The key factors to weigh when comparing brands, from performance guarantees to local support and warranty terms.",
        image: null,
        imagePosition: "left",
        categoryKey: "Systems & Panels",
      },
      // \u2500\u2500\u2500 Inverters \u2500\u2500\u2500
      {
        title: "String Inverters Vs Microinverters",
        description: "Which inverter technology fits your roof, your shading, and your budget in 2026.",
        image: null,
        imagePosition: "right",
        categoryKey: "Inverters",
      },
      {
        title: "What Inverter Size Do I Need?",
        description: "How to match inverter capacity with panel output for maximum harvest and no lost energy.",
        image: null,
        imagePosition: "left",
        categoryKey: "Inverters",
      },
      // \u2500\u2500\u2500 Rebates & Savings \u2500\u2500\u2500
      {
        title: "WA Solar & Battery Rebates Explained",
        description: "Learn about available government rebates, eligibility criteria, and how to maximise your savings.",
        image: null,
        imagePosition: "right",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "How STC Credits Reduce Your Solar Price",
        description: "Understanding the small-scale technology certificate discount applied to the upfront cost of your system.",
        image: null,
        imagePosition: "left",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "Does Solar Pay For Itself In Perth?",
        description: "Real payback timelines for a typical WA household, accounting for power prices and feed-in tariffs.",
        image: null,
        imagePosition: "right",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "The 2026 Battery Rebate: What You Need To Know",
        description: "Who is eligible, how the rebate is applied, and what it means for your battery investment.",
        image: null,
        imagePosition: "left",
        categoryKey: "Rebates & Savings",
      },
      // \u2500\u2500\u2500 Batteries & Storage \u2500\u2500\u2500
      {
        title: "Is Battery Storage Worth It In 2026?",
        description: "Discover how battery storage can reduce your energy bills and whether it’s the right investment for your home.",
        image: null,
        imagePosition: "right",
        categoryKey: "Batteries & Storage",
      },
      {
        title: "How Big A Battery Should I Get?",
        description: "Sizing your battery to your evening usage, backup needs and solar generation profile.",
        image: null,
        imagePosition: "left",
        categoryKey: "Batteries & Storage",
      },
      // \u2500\u2500\u2500 Perth-Specific \u2500\u2500\u2500
      {
        title: "Home EV Charging: Everything You Need To Know",
        description: "A beginner-friendly guide to installing EV chargers at home, costs involved, and charging efficiency tips.",
        image: null,
        imagePosition: "right",
        categoryKey: "Perth-Specific",
      },
      {
        title: "Perth Weather And Solar Panel Performance",
        description: "How our summers, heat and UV exposure affect real-world solar output and what it means for your system.",
        image: null,
        imagePosition: "left",
        categoryKey: "Perth-Specific",
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Get A Solar System Designed",
    mainTitle: "For Your Home",
    description:
      "Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation.",
    buttonText: "Get My Free Quote",
    backgroundImage: null,
  },
  {
    __component: "shared.form-section" as const,
    subtitle: null,
    title: null,
    description: null,
    image: null,
    video: null,
  },
];
