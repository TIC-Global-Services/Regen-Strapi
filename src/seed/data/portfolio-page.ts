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
    industries: [
      { label: "Commercial Office", value: "commercial-office" },
      { label: "Manufacturing", value: "manufacturing" },
      { label: "Agriculture", value: "agriculture" },
      { label: "Hospitality", value: "hospitality" },
      { label: "Residential", value: "residential" },
      { label: "EV Charging", value: "ev-charging" },
    ],
    systemSizes: [
      { label: "Under 10kW", value: "under-10kw" },
      { label: "10kW - 30kW", value: "10kw-30kw" },
      { label: "30kW - 100kW", value: "30kw-100kw" },
      { label: "100kW+", value: "100kw-plus" },
    ],
    locations: [
      { label: "Perth Metro", value: "perth-metro" },
      { label: "Fremantle", value: "fremantle" },
      { label: "Mandurah", value: "mandurah" },
      { label: "Bunbury", value: "bunbury" },
      { label: "Regional WA", value: "regional-wa" },
    ],
    searchPlaceholder: "Search",
    defaultIndustry: "commercial-office",
    defaultSize: "30kw-100kw",
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
