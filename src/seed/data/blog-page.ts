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
      // \u2500\u2500\u2500 Systems & Panels \u2500\u2500\u2500
      {
        title: "How Much Does A Solar System Cost In Perth?",
        description: "A Complete Breakdown Of Solar Installation Costs, System Sizes, And What Influences Pricing In 2026.",
        image: null,
        imagePosition: "right",
        categoryKey: "Systems & Panels",
      },
      {
        title: "Solar System Size Guide For Australian Homes",
        description: "How Many Panels And Kilowatts Your Household Actually Needs, Based On Energy Usage, Roof Space, And Climate.",
        image: null,
        imagePosition: "left",
        categoryKey: "Systems & Panels",
      },
      {
        title: "Monocrystalline vs Polycrystalline Panels",
        description: "A Practical Comparison Of Panel Technologies, Efficiency Ratings, And Which One Delivers Better Long-Term Value.",
        image: null,
        imagePosition: "right",
        categoryKey: "Systems & Panels",
      },
      {
        title: "How To Choose The Right Solar Panel Brand",
        description: "The Key Factors To Weigh When Comparing Brands, From Performance Guarantees To Local Support And Warranty Terms.",
        image: null,
        imagePosition: "left",
        categoryKey: "Systems & Panels",
      },
      // \u2500\u2500\u2500 Inverters \u2500\u2500\u2500
      {
        title: "String Inverters vs Microinverters",
        description: "Which Inverter Technology Fits Your Roof, Your Shading, And Your Budget In 2026.",
        image: null,
        imagePosition: "right",
        categoryKey: "Inverters",
      },
      {
        title: "What Inverter Size Do I Need?",
        description: "How To Match Inverter Capacity With Panel Output For Maximum Harvest And No Lost Energy.",
        image: null,
        imagePosition: "left",
        categoryKey: "Inverters",
      },
      // \u2500\u2500\u2500 Rebates & Savings \u2500\u2500\u2500
      {
        title: "WA Solar & Battery Rebates Explained",
        description: "Learn About Available Government Rebates, Eligibility Criteria, And How To Maximise Your Savings.",
        image: null,
        imagePosition: "right",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "How STC Credits Reduce Your Solar Price",
        description: "Understanding The Small-Scale Technology Certificate Discount Applied To The Upfront Cost Of Your System.",
        image: null,
        imagePosition: "left",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "Does Solar Pay For Itself In Perth?",
        description: "Real Payback Timelines For A Typical WA Household, Accounting For Power Prices And Feed-In Tariffs.",
        image: null,
        imagePosition: "right",
        categoryKey: "Rebates & Savings",
      },
      {
        title: "The 2026 Battery Rebate: What You Need To Know",
        description: "Who Is Eligible, How The Rebate Is Applied, And What It Means For Your Battery Investment.",
        image: null,
        imagePosition: "left",
        categoryKey: "Rebates & Savings",
      },
      // \u2500\u2500\u2500 Batteries & Storage \u2500\u2500\u2500
      {
        title: "Is Battery Storage Worth It In 2026?",
        description: "Discover How Battery Storage Can Reduce Your Energy Bills And Whether It\u2019s The Right Investment For Your Home.",
        image: null,
        imagePosition: "right",
        categoryKey: "Batteries & Storage",
      },
      {
        title: "How Big A Battery Should I Get?",
        description: "Sizing Your Battery To Your Evening Usage, Backup Needs And Solar Generation Profile.",
        image: null,
        imagePosition: "left",
        categoryKey: "Batteries & Storage",
      },
      // \u2500\u2500\u2500 Perth-Specific \u2500\u2500\u2500
      {
        title: "Home EV Charging: Everything You Need To Know",
        description: "A Beginner-Friendly Guide To Installing EV Chargers At Home, Costs Involved, And Charging Efficiency Tips.",
        image: null,
        imagePosition: "right",
        categoryKey: "Perth-Specific",
      },
      {
        title: "Perth Weather And Solar Panel Performance",
        description: "How Our Summers, Heat And UV Exposure Affect Real-World Solar Output And What It Means For Your System.",
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
      "Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls \u2014 Just A Proper Engineering Recommendation.",
    buttonText: "Get My Free Quote",
    backgroundImage: null,
  },
];
