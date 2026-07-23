export const blogSections = [
  {
    __component: "blog.hero" as const,
    subtitle: "Insights On Solar,",
    mainTitle: "Batteries & Smarter Energy",
    description:
      "Explore Expert Insights, Practical Solar Guides, Renewable Energy Trends, And The Latest Innovations Helping Australian Homes And Businesses Transition To Cleaner, More Efficient Energy Solutions. Stay Informed With Industry Updates And Actionable Advice From The Regen Power Team.",
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
      { title: "How Much Does A Solar System Cost In Perth?", description: "A Complete Breakdown Of Solar Installation Costs, System Sizes, And What Influences Pricing In 2026.", image: null, imagePosition: "right" },
      { title: "Is Battery Storage Worth It In 2026?", description: "Discover How Battery Storage Can Reduce Your Energy Bills And Whether It\u2019s The Right Investment For Your Home.", image: null, imagePosition: "left" },
      { title: "WA Solar & Battery Rebates Explained", description: "Learn About Available Government Rebates, Eligibility Criteria, And How To Maximize Your Savings.", image: null, imagePosition: "right" },
      { title: "Home EV Charging: Everything You Need To Know", description: "A Beginner-Friendly Guide To Installing EV Chargers At Home, Costs Involved, And Charging Efficiency Tips.", image: null, imagePosition: "left" },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Get A Solar System Designed",
    mainTitle: "For Your Home",
    description:
      "Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls \u2014 Just A Proper Engineering Recommendation.",
    buttonText: "Get My Free Quote",
    backgroundImage: null,
  },
];
