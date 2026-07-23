export const faqSections = [
  {
    __component: "faq.hero" as const,
    subtitle: "Solar Questions, Answered By Engineers Who've Been Doing This In",
    title: "Perth For 23 Years.",
    description: "Forty-plus questions Perth homeowners have asked over the last year, grouped so you can find the topic you are looking for fast. If yours is not here, a five-minute phone call usually does the trick.",
    ctaText: "Get Your Free Quote",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "faq.categorized-faq" as const,
    categories: [
      {
        categoryId: "systems-panels",
        label: "Systems & Panels",
        items: [
          { question: "Q1. What's N-Type TOPCon, and does it matter?", answer: "It is a newer cell architecture that improves efficiency and heat performance. In Perth, that matters because long hot afternoons punish weaker panel designs." },
          { question: "Q2. How long do panels last?", answer: "Modern Tier-1 panels commonly ship with 25-year product warranties and 25 to 30-year performance warranties. Real-world lifespan is usually longer, with gradual output degradation rather than sudden failure." },
          { question: "Q3. What size system do I need?", answer: "For many Perth homes, 6.6 kW is the baseline, but pools, air-conditioning, EV charging, and future battery plans can push the right answer to 10 kW or more." },
          { question: "Q4. Do panels work on cloudy days?", answer: "Yes. Output drops compared with full sun, but a correctly designed system still generates power in overcast conditions." },
        ],
      },
      {
        categoryId: "inverters",
        label: "Inverters",
        items: [
          { question: "Q1. What's the difference between a string and hybrid inverter?", answer: "A string inverter handles solar generation for immediate use or export. A hybrid inverter adds the control logic needed to integrate a battery later without replacing the core inverter." },
          { question: "Q2. Are premium inverters worth it in Perth?", answer: "Usually yes. Heat tolerance, firmware stability, local warranty support, and spare-part availability are more important than shaving a few hundred dollars off the install price." },
          { question: "Q3. Will my inverter work during a blackout?", answer: "Not by default. Standard grid-tied inverters shut down when the grid is down. Backup power needs the right battery and backup configuration." },
          { question: "Q4. Where should an inverter be installed?", answer: "Ideally in a shaded, ventilated location with safe cable runs and service access. Mounting an inverter in harsh direct sun shortens its life." },
        ],
      },
      {
        categoryId: "rebates-savings",
        label: "Rebates & Savings",
        items: [
          { question: "Q1. How much is the STC rebate in 2026?", answer: "It varies by system size, installation date, and zone. For a standard Perth home installing in 2026, the STC discount commonly lands around the low-thousands and is applied upfront by the installer." },
          { question: "Q2. Can I stack the WA battery rebate with the federal battery rebate?", answer: "Yes, if the installation matches the state retailer, VPP, product, and accreditation rules. The state and federal programs were designed to be stackable for eligible households." },
          { question: "Q3. Is the rebate the same for Synergy and Horizon Power customers?", answer: "No. The published WA Residential Battery Scheme rates differ between Synergy and Horizon Power customers, with Horizon carrying the higher per-kWh ceiling." },
          { question: "Q4. How quickly do solar savings show up on the bill?", answer: "Usually from the first full billing cycle after the meter and export settings are live. Usage timing still matters, especially for homes that consume more power at night." },
        ],
      },
      {
        categoryId: "installation-setup",
        label: "Installation & Setup",
        items: [
          { question: "Q1. How long does installation take?", answer: "A standard residential solar installation is usually completed in one day. Solar-plus-battery jobs can take longer depending on switchboard work and battery placement." },
          { question: "Q2. Do I need to be home for the install?", answer: "It helps, especially for final handover and any switchboard or access questions, but much of the roof and electrical work can proceed without you standing beside the crew all day." },
          { question: "Q3. What happens after I accept the quote?", answer: "The team confirms engineering, product allocation, approvals, installation scheduling, and post-install paperwork. Good installers also explain what happens with your retailer and export settings." },
          { question: "Q4. Will my roof need modifications?", answer: "Sometimes. Tile replacement, conduit planning, switchboard upgrades, and panel layout adjustments are common once the site is engineered properly." },
        ],
      },
      {
        categoryId: "batteries-storage",
        label: "Batteries & Storage",
        items: [
          { question: "Q1. Do I need a battery yet?", answer: "Not every household does. A battery makes the most sense when evening usage is high, feed-in tariffs are low, or blackout resilience matters to you." },
          { question: "Q2. What size battery is typical?", answer: "Around 10 kWh is a common residential starting point, but the correct size depends on evening demand, solar generation, and whether you want blackout backup." },
          { question: "Q3. Can I add a battery later?", answer: "Yes, provided the system is designed with that path in mind. Choosing a hybrid-ready inverter now usually makes the later battery add-on cleaner and cheaper." },
          { question: "Q4. How long do home batteries last?", answer: "Most quality batteries are warrantied for around 10 years, with throughput and retained-capacity conditions that define the usable life more precisely than the headline number alone." },
        ],
      },
      {
        categoryId: "perth-specific",
        label: "Perth-Specific",
        items: [
          { question: "Q1. Why is Perth different from the east coast for solar design?", answer: "The heat profile, tariff structures, and retailer rules are different. What looks good on a generic national quote can underperform once you account for Perth conditions." },
          { question: "Q2. What panel direction works best in Perth?", answer: "North is still strong, but east-west layouts often make sense when the goal is to stretch generation further into the day or match a household's morning and afternoon load." },
          { question: "Q3. How does sea air affect component choice?", answer: "Coastal exposure can be hard on frames, fixings, and electronics. Installers should specify corrosion-aware mounting and products that hold up in WA coastal conditions." },
          { question: "Q4. Do Perth homes usually export much power?", answer: "Many do at midday, but the value of that export is modest. That is why sizing, self-consumption, and battery strategy matter more than chasing a simple export number." },
        ],
      },
    ],
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "A Five-Minute Call Is Worth A Hundred",
    mainTitle: "FAQ Pages.",
    description: "Nothing above answers your exact question like one of our Perth-based energy advisors. No sales script, no pressure, and no obligation. Just a proper engineering conversation about what would work for your home.",
    buttonText: "Book A Free Consultation",
    backgroundImage: null,
  },
];
