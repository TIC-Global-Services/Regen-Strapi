export const commercialSystemsSections = [
  {
    __component: "commercial-systems.hero" as const,
    subtitle: "Commercial Solar In Perth,",
    mainTitle: "Designed By Engineers",
    description:
      "Commercial solar systems for Perth and WA businesses since 2003. 10 kW to 1 MW, in-house engineers, integrated battery storage, full rebate management. Explore case studies and request a free energy assessment.",
    ctaText: "Book Energy Assessment",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "commercial-systems.stats-card-grid" as const,
    subtitle: "Commercial Power In WA Is The Highest It Has Ever Been",
    title: "And The Cheapest It Will Ever Be.",
    description:
      "Rising commercial power tariffs since 2018 and falling solar costs (now ~$1.10–$1.40/W) make solar a smart investment, with systems typically paying back in 2–4 years and delivering low-cost power long-term — especially for businesses that operate during the day.",
    cardBackground: null,
    stats: [
      { value: "2-4 Years", label: "Typical Payback" },
      { value: "80% +", label: "Daytime Self-Consumption" },
      { value: "210 LGCs/Yr", label: "On A 150kW System" },
    ],
  },
  {
    __component: "commercial-systems.tiers-section" as const,
    title: "Three Different Financial Cases",
    description:
      "Commercial solar in Perth divides cleanly into three system sizes — each with its own approval pathway, certificate type, and financial logic. Pick the band that fits your roof and your bill, then talk to us about specifics.",
    tiers: [
      {
        title: "Small Business And SME",
        subtitle: "10kW To 39kW DC (30kVA AC)",
        description:
          "Systems up to 30 kVA benefit from a simplified Western Power approval — no GPU, studies, or extra fees. A ~39 kW / 30 kVA setup fits this range, maximizes incentives, and typically pays back in 2–3 years.",
        image: null,
        ctaText: "See SME Case Studies",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "39kW DC, 30kVA Inverter, Optional 30–60kWh Battery" },
          { label: "Approval Pathway", value: "Streamlined Western Power Application, ~10 Days" },
          { label: "Certificate", value: "Federal STCs (One-Off, Applied As Upfront Discount)" },
          { label: "Anchor Case Study", value: "Saint Mary Coptic Church — Hospitality / Community" },
          { label: "Indicative Roof Area", value: "200–300m² Of Unshaded Roof" },
        ],
      },
      {
        title: "Mid-Market Commercial",
        subtitle: "50kW–100kW DC",
        description:
          "Systems over 30 kVA AC require a Western Power engineering study and a grid protection unit (GPU), adding $12,000–$18,000 to the project. Despite the added cost, 50–100 kW systems benefit from economies of scale and can typically achieve a payback in under three years.",
        image: null,
        ctaText: "See Mid-Market Case Studies",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "50kW, 70kW Or 100kW DC · Three-Phase String Or Hybrid Inverters" },
          { label: "Approval Pathway", value: "Western Power Engineering Study + GPU (~6–10 Weeks)" },
          { label: "Certificate", value: "Federal STCs Applied As An Upfront Discount" },
          { label: "Anchor Case Study", value: "Smithfield & Kewdale Commercial Projects" },
          { label: "Indicative Roof Area", value: "400–1,000m² Of Unshaded Roof" },
        ],
      },
      {
        title: "Large Commercial & Industrial",
        subtitle: "150kW–1MW+",
        description:
          "Systems above 100 kW generate Large-scale Generation Certificates (LGCs) instead of STCs, creating an ongoing revenue stream alongside electricity bill savings. A typical 150 kW system can generate 210 LGCs annually, delivering $8,400–$12,600 in additional yearly value.",
        image: null,
        ctaText: "Discuss A 100kW+ Project",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "150kW, 300kW, 500kW Or 1MW+ · Multiple Inverters · Optional Battery Or Ground-Mount" },
          { label: "Approval Pathway", value: "Full Western Power Process · LGC Accreditation And PPAs Where Applicable" },
          { label: "Certificate", value: "Large-Scale Generation Certificates (Ongoing Revenue)" },
          { label: "Anchor Case Study", value: "Banasurasagar Reservoir (International Scale)" },
          { label: "Indicative Roof Area", value: "1,000m²+ Of Unshaded Roof Or Ground-Mount Sites" },
        ],
      },
    ],
  },
  {
    __component: "commercial-systems.components-section" as const,
    title: "One Reliable System",
    description:
      "A commercial solar system isn’t fundamentally different from a residential one — it’s the same six components, scaled up. The differences are in the engineering: three-phase wiring, larger string sizing, switchboard upgrades, and grid-protection devices for systems above 30 kVA. Here’s how the pieces fit together.",
    backgroundImage: null,
    items: [
      { letter: "A", title: "Solar Panels" },
      { letter: "B", title: "Inverters" },
      { letter: "C", title: "Switchboard & Metering" },
      { letter: "D", title: "Grid Protection Device" },
      { letter: "E", title: "Battery Storage" },
      { letter: "F", title: "Live Monitoring" },
    ],
  },
  {
    __component: "commercial-systems.industries-section" as const,
    subtitle: "Six Industries Where Commercial Solar",
    title: "Pays Back Fastest In WA.",
    industries: [
      {
        title: "Manufacturing & Cold Storage",
        description:
          "High continuous daytime load; power-factor charges; refrigeration that never sleeps. Solar offsets the highest-cost tariff blocks.",
        caseStudy: "Smithfield Manufacturing, Kewdale Industrial",
        icon: null,
      },
      {
        title: "Hospital & Accommodation",
        description:
          "Air-conditioning, kitchens, laundries running through the warmest hours of the day. Demand peaks at lunchtime — perfect solar match.",
        caseStudy: "Perth City YHA, Saint Mary Coptic Church Hall",
        icon: null,
      },
      {
        title: "Healthcare & Medical",
        description:
          "24/7 operation, high HVAC load, sensitive equipment. Solar with battery backup reduces both running costs and outage risk.",
        caseStudy: "Illawarra Medical Centre",
        icon: null,
      },
      {
        title: "Retail & Shopping Centres",
        description:
          "Trading hours align with solar peak. Multi-tenancy buildings can split solar between common areas and tenants.",
        caseStudy: "Duncraig Retail, Dubbo Retail",
        icon: null,
      },
      {
        title: "Education & Community",
        description:
          "Schools, churches, community halls — daytime occupancy, fixed budgets, ESG mandates. Battery shifts production into evening events.",
        caseStudy: "Saint Mary Coptic Church",
        icon: null,
      },
      {
        title: "Agribusiness & Rural Enterprise",
        description:
          "Pumping, dairy, packing sheds, marron farms, vineyards. Often combined with off-grid microgrid.",
        caseStudy: "Banasurasagar Reservoir; Agricultural Off-Grid Case Studies",
        icon: null,
      },
    ],
  },
  {
    __component: "commercial-systems.feature-card-grid" as const,
    topSubtitle: "Six Commercial Installs",
    title: "Six Different Briefs",
    bottomSubtitle:
      "The fastest payback in WA commercial solar comes from businesses whose operating hours line up with peak solar generation — roughly 9am to 4pm. These six industries are where we’ve installed the most systems and seen the strongest results.",
    cards: [
      {
        title: "Perth City YHA · Perth, WA",
        description:
          "37 kW rooftop on-grid\n30% of annual electricity offset, 39 tonnes CO₂ saved per year, 2.2-year payback.",
        image: null,
        textPosition: "top",
        footerTitle: "Read More",
        footerDescription: "",
      },
      {
        title: "Illawarra Medical Centre · Wollongong, NSW",
        description:
          "Battery-backed medical install\n24/7 reliability, reduced grid demand, ongoing LGC revenue stream.",
        image: null,
        textPosition: "top",
        footerTitle: "Read More",
        footerDescription: "",
      },
      {
        title: "Smithfield Manufacturing · Smithfield, NSW",
        description:
          "High-daytime-load factory\nDirect offset of peak tariff blocks, full STC + LGC stacking, under-3-year payback.",
        image: null,
        textPosition: "top",
        footerTitle: "Read More",
        footerDescription: "",
      },
    ],
  },
  {
    __component: "commercial-systems.watch-system-section" as const,
    subtitle: "We Watch Your System",
    title: "So You Don’t Have To",
    ctaText: "Contact Us",
    ctaHref: "/contact",
    image: null,
    paragraphs: [
      { text: "Every commercial install we complete ships with Solarog-based monitoring. The web and mobile dashboard tracks per-string yield, inverter health, system uptime, and CO₂ offset in real time." },
      { text: "If something goes wrong — a string falls offline, an inverter throws a fault, performance drops below modelled output — we see it before you do. Full-service maintenance contracts are available; talk to us about coverage." },
    ],
  },
  {
    __component: "commercial-systems.packages-grid" as const,
    subtitle: "Three Federal Incentives That Stack With Your",
    title: "Commercial Install",
    description:
      "Federal incentives reduce the upfront cost of commercial solar significantly — but only if you understand which ones apply at your system size. Here are the three that matter in WA in 2026.",
    packages: [
      {
        title: "Small-Scale Technology Certificates (STCs)",
        desc: "Systems up to 100 kW",
        bgClass: "bg-[#E5EFD5] text-black",
        items: [
          {
            label: "Federal STC Value",
            value:
              "$35–$40 per certificate, calculated on expected production through 2030 — worth roughly $300–$500 per kW installed in 2026, depending on the deeming year.",
          },
          {
            label: "How You Receive It",
            value:
              "Upfront discount on your invoice. We claim and assign the STCs as part of the project.",
          },
        ],
      },
      {
        title: "Large-Scale Generation Certificates (LGCs)",
        desc: "Systems above 100 kW",
        bgClass: "bg-[#A0CF44] text-black",
        items: [
          {
            label: "LGC Market Value",
            value:
              "1 LGC per MWh produced. Currently $40–$60 per LGC, traded on the open market. A 150 kW Perth system creates ~210 LGCs/year — $8,400–$12,600/year of additional revenue.",
          },
          {
            label: "How You Receive It",
            value:
              "Ongoing revenue stream until 2030. Requires LGC accreditation; we manage the registration.",
          },
        ],
      },
      {
        title: "Instant Asset Write-Off",
        desc: "Eligible businesses (turnover threshold applies)",
        bgClass: "bg-[#E5EFD5] text-black",
        items: [
          {
            label: "Tax Benefit",
            value:
              "Full deduction in the year of purchase rather than depreciated over 10–15 years.",
          },
          {
            label: "How You Receive It",
            value:
              "Tax-time benefit. Confirm eligibility with your accountant — thresholds change annually.",
          },
        ],
      },
    ],
  },
  {
    __component: "commercial-systems.process-flow" as const,
    subtitle: "Nine Steps From",
    title: "First Call To Handover",
    description:
      "Commercial solar isn’t a product — it’s a project. The right design depends on roof type, electrical infrastructure, load profile, tariff structure, available rebates, and operational constraints. Here’s the process we run from your first call to system handover.",
    steps: [
      {
        stepNumber: 1,
        title: "First Call & Bill Review",
        description:
          "We review your Synergy or Horizon bill to understand daytime load, tariff block, and site constraints.",
        image: null,
      },
      {
        stepNumber: 2,
        title: "Site Inspection",
        description:
          "An engineer visits site to inspect roof, switchboard, and load profile. No subcontractor.",
        image: null,
      },
      {
        stepNumber: 3,
        title: "System Design & Modelling",
        description:
          "In-house engineers build a tailored design, payback projection, and yield model for your approval.",
        image: null,
      },
      {
        stepNumber: 4,
        title: "Approval & Administration",
        description:
          "Western Power application, building permit if needed, council DA if required. We manage all paperwork.",
        image: null,
      },
      {
        stepNumber: 5,
        title: "Procurement & Staging",
        description:
          "Panels, inverters, and mounting are pre-staged in our Canning Vale warehouse before site delivery.",
        image: null,
      },
      {
        stepNumber: 6,
        title: "Installation",
        description:
          "In-house EC9676-licensed electricians install rail, panels, and AC infrastructure to Regen standard.",
        image: null,
      },
      {
        stepNumber: 7,
        title: "Commissioning & Handover",
        description:
          "System is tested, monitoring is provisioned, and you receive full documentation and rebate paperwork.",
        image: null,
      },
    ],
  },
  {
    __component: "commercial-systems.five-things-section" as const,
    subtitle: "Five Things You Only Get From",
    title: "A 23-Year Engineered Installer",
    description:
      "Most Perth commercial installers are sales businesses with a contracted install crew. We’re an engineering business with our own electricians, our own R&D, and our own IP. Here’s how that shows up on a project.",
    items: [
      {
        number: 1,
        title: "Engineering Depth — Not Just Sales",
        description:
          "Prof Chem Nayar holds the international patent (PCT/AU2011/001068) behind Regen’s HybridGEN technology, with off-grid systems deployed across Australia and the Asia-Pacific region.",
        highlight: false,
      },
      {
        number: 2,
        title: "In-House Electricians, Not Labour-Hire",
        description:
          "EC9676 licensed Regen electricians install Regen systems. Same team, same standard, every project. No surprise subcontractor on the day.",
        highlight: true,
      },
      {
        number: 3,
        title: "Tier-1 Only, No Budget Substitution",
        description:
          "Six panel brands and four inverter brands, all CEC-approved. We don’t switch components at install day to a cheaper equivalent.",
        highlight: false,
      },
      {
        number: 4,
        title: "Full Rebate And Paperwork Management",
        description:
          "STCs, LGCs, Western Power application, GPU certification, Synergy/Horizon connection, DEBS feed-in registration, building permit. All submitted by our Canning Vale office.",
        highlight: true,
      },
      {
        number: 5,
        title: "23 Years And Still Answering The Phone",
        description:
          "When you call us in 2035 about a tariff change or an inverter warranty claim, the business answering will be the same one that installed the system. Six consecutive ProductReview awards say we’re good at that.",
        highlight: false,
      },
    ],
  },
  {
    __component: "shared.faq" as const,
    title: "FAQ",
    sectionTitle: "Entries",
    listTitle: "Frequently Asked Questions",
    image: null,
    items: [
      {
        question: "Q1. What Size Solar System Do I Need?",
        answer:
          "For a Perth small business, a 10–30kW system is the typical starting point. For mid-market and industrial, we size against your daytime load profile and tariff structure — a free energy assessment gives you a number within 30 minutes.",
      },
      {
        question: "Q2. How Much Will A Solar System Save Me In Perth?",
        answer:
          "Most Perth commercial installs pay back in 2–4 years. Daytime self-consumption is the lever: businesses operating during sunlight hours see 80%+ of generated kWh used directly, avoiding low-value feed-in tariffs entirely.",
      },
      {
        question: "Q3. What’s The Difference Between A Hybrid And A String Inverter?",
        answer:
          "A string inverter is standard and converts solar power for immediate use or grid export. A hybrid inverter manages solar + battery in a single unit and is required for any system designed to add battery storage now or later.",
      },
      {
        question: "Q4. Do I Need A Battery?",
        answer:
          "Not always. If your load is mostly during solar production hours, a grid-tied system gives the best payback. A battery is recommended for medical, 24/7, or tariff-peaking operations where outage protection or evening shifting adds value.",
      },
      {
        question: "Q5. What Warranty Do I Get?",
        answer:
          "25-year panel product and performance warranty, 10-year inverter warranty (extendable to 20 on premium tiers), and 10-year Regen workmanship warranty backed by our local service team.",
      },
      {
        question: "Q6. How Long Does Installation Take?",
        answer:
          "Small commercial systems (under 30kVA) are typically completed in 1–3 days. Mid-market and large-scale projects are staged over 1–4 weeks depending on roof access, switchboard works, and grid connection scheduling.",
      },
      {
        question: "Q7. Will My System Work If There’s A Blackout?",
        answer:
          "Standard string inverters shut down during blackouts to protect grid workers. If you need backup during outages, a hybrid inverter + battery configured for emergency power supply (EPS) is required.",
      },
      {
        question: "Q8. How Much Is The Federal STC Rebate In 2026?",
        answer:
          "STCs degress on 1 January each year until 2030. In 2026, a 30kW commercial system typically receives $300–$500 per kW as an upfront discount, applied directly to your invoice.",
      },
    ],
  },
  {
    __component: "shared.form-section" as const,
    subtitle: null,
    title: null,
    description: null,
    image: null,
    video: null,
  },
  {
    __component: "shared.cta-banner" as const,
    subtitle: "Build Your",
    mainTitle: "Energy Strategy",
    description:
      "System size depends on your energy usage, roof space, and future needs. Our experts design systems that balance performance and cost for optimal ROI.",
    buttonText: "Get Started",
    buttonLink: "#quote-form",
    backgroundImage: null,
  },
];
