export const portfolioSections = [
  {
    __component: "portfolio.hero" as const,
    subtitle: "Our Work Across",
    mainTitle: "Western Australia",
    description:
      "80+ Installations Across Commercial, Residential, Off-Grid, And EV Charging\u2014Designed In-House And Installed By Regen Electricians. Filter By Industry, Size, Or Location, And Explore Each Project In Detail.",
    ctaText: "Get Your Free Quote",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "portfolio.filters" as const,
    filters: [
      { label: "All", value: "all" },
      { label: "Commercial Office", value: "commercial-office" },
      { label: "Manufacturing", value: "manufacturing" },
      { label: "Agriculture", value: "agriculture" },
      { label: "Hospitality", value: "hospitality" },
      { label: "Residential", value: "residential" },
      { label: "EV Charging", value: "ev-charging" },
    ],
    cards: [
      { title: "Fremantle Cold Storage Facility", description: "Industrial Manufacturing Facility In Metro Perth Cut Annual Energy Costs By 42% With A 75kW Solar System.", image: null },
      { title: "Perth CBD Office Tower", description: "A 150kW rooftop system powering a 12-storey commercial office tower in the Perth CBD.", image: null },
      { title: "Margaret River Winery", description: "30kW off-grid solar + battery system for a premium winery in the Margaret River region.", image: null },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Build Your",
    mainTitle: "Energy Strategy",
    description:
      "System Size Depends On Your Energy Usage, Roof Space, And Future Needs. Our Experts Design Systems That Balance Performance And Cost For Optimal ROI.",
    buttonText: "Get Started",
    backgroundImage: null,
  },
];
