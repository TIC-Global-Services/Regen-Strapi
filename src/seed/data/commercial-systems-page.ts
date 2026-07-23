export const commercialSystemsSections = [
  {
    __component: "commercial-systems.hero" as const,
    subtitle: "Commercial Solar In Perth,",
    mainTitle: "Designed By Engineers",
    description:
      "Commercial Solar Systems For Perth And WA Businesses Since 2003. 10kW To 1MW, In-House Engineers, Integrated Battery Storage, Full Rebate Management. Explore Case Studies And Request A Free Energy Assessment.",
    ctaText: "Book Energy Assessment",
    ctaLink: "#quote-form",
    backgroundImage: null,
  },
  {
    __component: "commercial-systems.stats-card-grid" as const,
    subtitle: "Commercial Power In WA Is The Highest It Has Ever Been",
    title: "And The Cheapest It Will Ever Be.",
    description:
      "Rising Commercial Power Tariffs Since 2018 And Falling Solar Costs (Now ~$110\u2013$140/W) Make Solar A Smart Investment, With Systems Typically Paying Back In 2\u20134 Years And Delivering Low-Cost Power Long-Term\u2014Especially For Businesses That Operate During The Day.",
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
      "Commercial Solar In Perth Divides Cleanly Into Three System Sizes \u2014 Each With Its Own Approval Pathway, Certificate Type, And Financial Logic. Pick The Band That Fits Your Roof And Your Bill, Then Talk To Us About Specifics.",
    tiers: [
      {
        title: "Small Business And SME",
        subtitle: "10kW To 39kW DC (30kVA AC)",
        description:
          "Systems Up To 30kVA Benefit From A Simplified Western Power Approval\u2014No GPU, Studies, Or Extra Fees. A ~39kW / 30kVA Setup Fits This Range, Maximizes Incentives, And Typically Pays Back In 2\u20133 Years.",
        image: null,
        ctaText: "See SME Case Studies",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "39kW DC, 30kVA Inverter, Optional 30\u201360kWh Battery" },
          { label: "Approval Pathway", value: "Streamlined Western Power Application, ~10 Days" },
          { label: "Certificate", value: "Federal STCs (One-Off, Applied As Upfront Discount)" },
          { label: "Anchor Case Study", value: "Saint Mary Coptic Church \u2014 Hospitality / Community" },
          { label: "Indicative Roof Area", value: "200\u2013300m\u00b2 Of Unshaded Roof" },
        ],
      },
      {
        title: "Mid-Market Commercial",
        subtitle: "50kW\u2013100kW DC",
        description:
          "Systems Over 30kVA AC Require A Western Power Engineering Study And A Grid Protection Unit (GPU), Adding $12,000\u2013$18,000 To The Project. Despite The Added Cost, 50\u2013100kW Systems Benefit From Economies Of Scale And Can Typically Achieve A Payback In Under Three Years.",
        image: null,
        ctaText: "See Mid-Market Case Studies",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "50kW, 70kW Or 100kW DC \u00b7 Three-Phase String Or Hybrid Inverters" },
          { label: "Approval Pathway", value: "Western Power Engineering Study + GPU (~6\u201310 Weeks)" },
          { label: "Certificate", value: "Federal STCs Applied As An Upfront Discount" },
          { label: "Anchor Case Study", value: "Smithfield & Kewdale Commercial Projects" },
          { label: "Indicative Roof Area", value: "400\u20131,000m\u00b2 Of Unshaded Roof" },
        ],
      },
      {
        title: "Large Commercial & Industrial",
        subtitle: "150kW\u20131MW+",
        description:
          "Systems Above 100kW Generate Large-Scale Generation Certificates (LGCs) Instead Of STCs, Creating An Ongoing Revenue Stream Alongside Electricity Bill Savings. A Typical 150kW System Can Generate 210 LGCs Annually, Delivering $8,400\u2013$12,600 In Additional Yearly Value.",
        image: null,
        ctaText: "Discuss A 100kW+ Project",
        ctaHref: "#",
        details: [
          { label: "Typical Install", value: "150kW, 300kW, 500kW Or 1MW+ \u00b7 Multiple Inverters \u00b7 Optional Battery Or Ground-Mount" },
          { label: "Approval Pathway", value: "Full Western Power Process \u00b7 LGC Accreditation And PPAs Where Applicable" },
          { label: "Certificate", value: "Large-Scale Generation Certificates (Ongoing Revenue)" },
          { label: "Anchor Case Study", value: "Banasurasagar Reservoir (International Scale)" },
          { label: "Indicative Roof Area", value: "1,000m\u00b2+ Of Unshaded Roof Or Ground-Mount Sites" },
        ],
      },
    ],
  },
  {
    __component: "commercial-systems.components-section" as const,
    title: "One Reliable System",
    description:
      "A Commercial Solar System Isn\u2019t Fundamentally Different From A Residential One \u2014 It\u2019s The Same Six Components, Scaled Up. The Differences Are In The Engineering: Three-Phase Wiring, Larger String Sizing, Switchboard Upgrades, And Grid-Protection Devices For Systems Above 30kVA. Here\u2019s How The Pieces Fit Together.",
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
          "High Continuous Daytime Load; Power-Factor Charges; Refrigeration That Never Sleeps. Solar Offsets The Highest-Cost Tariff Blocks.",
        caseStudy: "Smithfield Manufacturing, Kewdale Industrial",
        iconKey: "manufacturing",
      },
      {
        title: "Hospital & Accommodation",
        description:
          "Air-Conditioning, Kitchens, Laundries Running Through The Warmest Hours Of The Day. Demand Peaks At Lunchtime \u2014 Perfect Solar Match.",
        caseStudy: "Perth City YHA, Saint Mary Coptic Church Hall",
        iconKey: "hospitality",
      },
      {
        title: "Healthcare & Medical",
        description:
          "24/7 Operation, High HVAC Load, Sensitive Equipment. Solar With Battery Backup Reduces Both Running Costs And Outage Risk.",
        caseStudy: "Illawarra Medical Centre",
        iconKey: "healthcare",
      },
      {
        title: "Retail & Shopping Centres",
        description:
          "Trading Hours Align With Solar Peak. Multi-Tenancy Buildings Can Split Solar Between Common Areas And Tenants.",
        caseStudy: "Duncraig Retail, Dubbo Retail",
        iconKey: "retail",
      },
      {
        title: "Education & Community",
        description:
          "Schools, Churches, Community Halls \u2014 Daytime Occupancy, Fixed Budgets, ESG Mandates. Battery Shifts Production Into Evening Events.",
        caseStudy: "Saint Mary Coptic Church",
        iconKey: "education",
      },
      {
        title: "Agribusiness & Rural Enterprise",
        description:
          "Pumping, Dairy, Packing Sheds, Marron Farms, Vineyards. Often Combined With Off-Grid Microgrid.",
        caseStudy: "Banasurasagar Reservoir; Agricultural Off-Grid Case Studies",
        iconKey: "agribusiness",
      },
    ],
  },
  {
    __component: "commercial-systems.feature-card-grid" as const,
    topSubtitle: "Six Commercial Installs",
    title: "Six Different Briefs",
    bottomSubtitle:
      "The Fastest Payback In WA Commercial Solar Comes From Businesses Whose Operating Hours Line Up With Peak Solar Generation \u2014 Roughly 9am To 4pm. These Six Industries Are Where We\u2019ve Installed The Most Systems And Seen The Strongest Results.",
    cards: [
      {
        title: "Perth City YHA \u00b7 Perth, WA",
        description:
          "37kW Rooftop On-Grid\n30% Of Annual Electricity Offset, 39 Tonnes CO\u2082 Saved Per Year, 2.2-Year Payback.",
        image: null,
        textPosition: "top",
        footerTitle: "Read More",
        footerDescription: "",
      },
      {
        title: "Illawarra Medical Centre \u00b7 Wollongong, NSW",
        description:
          "Battery-Backed Medical Install\n24/7 Reliability, Reduced Grid Demand, Ongoing LGC Revenue Stream.",
        image: null,
        textPosition: "top",
        footerTitle: "Read More",
        footerDescription: "",
      },
      {
        title: "Smithfield Manufacturing \u00b7 Smithfield, NSW",
        description:
          "High-Daytime-Load Factory\nDirect Offset Of Peak Tariff Blocks, Full STC + LGC Stacking, Under-3-Year Payback.",
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
    title: "So You Don\u2019t Have To",
    ctaText: "Contact Us",
    ctaHref: "/contact",
    image: null,
    paragraphs: [
      { text: "Every Commercial Install We Complete Ships With Solarog-Based Monitoring. The Web And Mobile Dashboard Tracks Per-String Yield, Inverter Health, System Uptime, And CO\u2082 Offset In Real Time." },
      { text: "If Something Goes Wrong \u2014 A String Falls Offline, An Inverter Throws A Fault, Performance Drops Below Modelled Output \u2014 We See It Before You Do. Full-Service Maintenance Contracts Are Available; Talk To Us About Coverage." },
    ],
  },
  {
    __component: "commercial-systems.packages-grid" as const,
    subtitle: "Three Federal Incentives That Stack With Your",
    title: "Commercial Install",
    description:
      "Federal Incentives Reduce The Upfront Cost Of Commercial Solar Significantly\u2014But Only If You Understand Which Ones Apply At Your System Size. Here Are The Three That Matter In WA In 2026.",
    packages: [
      {
        title: "Small-scale Technology Certificates (STCs)",
        desc: "Systems Up To 100kw",
        bgClass: "bg-[#E5EFD5] text-black",
        items: [
          {
            label: "Federal STC Value",
            value:
              "$35\u2013$40 per certificate, calculated on expected production through 2030 \u2014 worth roughly $300\u2013$500 per kW installed in 2026, depending on the deeming year.",
          },
          {
            label: "How You Receive It",
            value:
              "Upfront discount on your invoice. We claim and assign the STCs as part of the project.",
          },
        ],
      },
      {
        title: "Large-scale Generation Certificates (LGCs)",
        desc: "Systems Above 100kw",
        bgClass: "bg-[#A0CF44] text-black",
        items: [
          {
            label: "LGC Market Value",
            value:
              "1 LGC per MWh produced. Currently $40\u2013$60 per LGC, traded on the open market. A 150kW Perth system creates ~210 LGCs/year \u2014 $8,400\u2013$12,600/year of additional revenue.",
          },
          {
            label: "How You Receive It",
            value:
              "Ongoing revenue stream until 2030. Requires LGC accreditation; we manage the registration.",
          },
        ],
      },
      {
        title: "Instant asset write-off",
        desc: "Eligible Businesses (Turnover Threshold Applies)",
        bgClass: "bg-[#E5EFD5] text-black",
        items: [
          {
            label: "Tax Benefit",
            value:
              "Full deduction in the year of purchase rather than depreciated over 10\u201315 years.",
          },
          {
            label: "How You Receive It",
            value:
              "Tax-time benefit. Confirm eligibility with your accountant \u2014 thresholds change annually.",
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
      "Commercial Solar Isn\u2019t A Product \u2014 It\u2019s A Project. The Right Design Depends On Roof Type, Electrical Infrastructure, Load Profile, Tariff Structure, Available Rebates, And Operational Constraints. Here\u2019s The Process We Run From Your First Call To System Handover.",
    steps: [
      {
        stepNumber: 1,
        title: "First Call & Bill Review",
        description:
          "We Review Your Synergy Or Horizon Bill To Understand Daytime Load, Tariff Block, And Site Constraints.",
        image: null,
      },
      {
        stepNumber: 2,
        title: "Site Inspection",
        description:
          "An Engineer Visits Site To Inspect Roof, Switchboard, And Load Profile. No Subcontractor.",
        image: null,
      },
      {
        stepNumber: 3,
        title: "System Design & Modelling",
        description:
          "In-House Engineers Build A Tailored Design, Payback Projection, And Yield Model For Your Approval.",
        image: null,
      },
      {
        stepNumber: 4,
        title: "Approval & Administration",
        description:
          "Western Power Application, Building Permit If Needed, Council DA If Required. We Manage All Paperwork.",
        image: null,
      },
      {
        stepNumber: 5,
        title: "Procurement & Staging",
        description:
          "Panels, Inverters, And Mounting Are Pre-Staged In Our Canning Vale Warehouse Before Site Delivery.",
        image: null,
      },
      {
        stepNumber: 6,
        title: "Installation",
        description:
          "In-House EC9676-Licensed Electricians Install Rail, Panels, And AC Infrastructure To Regen Standard.",
        image: null,
      },
      {
        stepNumber: 7,
        title: "Commissioning & Handover",
        description:
          "System Is Tested, Monitoring Is Provisioned, And You Receive Full Documentation And Rebate Paperwork.",
        image: null,
      },
    ],
  },
  {
    __component: "commercial-systems.five-things-section" as const,
    subtitle: "Five Things You Only Get From",
    title: "A 23-Year Engineered Installer",
    description:
      "Most Perth Commercial Installers Are Sales Businesses With A Contracted Install Crew. We\u2019re An Engineering Business With Our Own Electricians, Our Own R&D, And Our Own IP. Here\u2019s How That Shows Up On A Project.",
    items: [
      {
        number: 1,
        title: "Engineering Depth \u2014 Not Just Sales",
        description:
          "Prof Chem Nayar Holds The International Patent (PCT/AU2011/001068) Behind Regen\u2019s HybridGEN Technology, With Off-Grid Systems Deployed Across Australia And The Asia-Pacific Region.",
        highlight: false,
      },
      {
        number: 2,
        title: "In-House Electricians, Not Labour-Hire",
        description:
          "EC9676 Licensed Regen Electricians Install Regen Systems. Same Team, Same Standard, Every Project. No Surprise Subcontractor On The Day.",
        highlight: true,
      },
      {
        number: 3,
        title: "Tier-1 Only, No Budget Substitution",
        description:
          "Six Panel Brands And Four Inverter Brands, All CEC-Approved. We Don\u2019t Switch Components At Install Day To A Cheaper Equivalent.",
        highlight: false,
      },
      {
        number: 4,
        title: "Full Rebate And Paperwork Management",
        description:
          "STCs, LGCs, Western Power Application, GPU Certification, Synergy/Horizon Connection, DEBS Feed-In Registration, Building Permit. All Submitted By Our Canning Vale Office.",
        highlight: true,
      },
      {
        number: 5,
        title: "23 Years And Still Answering The Phone",
        description:
          "When You Call Us In 2035 About A Tariff Change Or An Inverter Warranty Claim, The Business Answering Will Be The Same One That Installed The System. Six Consecutive ProductReview Awards Say We\u2019re Good At That.",
        highlight: false,
      },
    ],
  },
  {
    __component: "shared.faq" as const,
    title: "FAQ",
    sectionTitle: "FAQ",
    listTitle: "Frequently Asked Questions",
    image: null,
    items: [
      {
        question: "Q1. What Size Solar System Do I Need?",
        answer:
          "For a Perth small business, a 10\u201330kW system is the typical starting point. For mid-market and industrial, we size against your daytime load profile and tariff structure \u2014 a free energy assessment gives you a number within 30 minutes.",
      },
      {
        question: "Q2. How much will a solar system save me in Perth?",
        answer:
          "Most Perth commercial installs pay back in 2\u20134 years. Daytime self-consumption is the lever: businesses operating during sunlight hours see 80%+ of generated kWh used directly, avoiding low-value feed-in tariffs entirely.",
      },
      {
        question: "Q3. What\u2019s The Difference Between A Hybrid And A String Inverter?",
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
          "Small commercial systems (under 30kVA) are typically completed in 1\u20133 days. Mid-market and large-scale projects are staged over 1\u20134 weeks depending on roof access, switchboard works, and grid connection scheduling.",
      },
      {
        question: "Q7. Will My System Work If There\u2019s A Blackout?",
        answer:
          "Standard string inverters shut down during blackouts to protect grid workers. If you need backup during outages, a hybrid inverter + battery configured for emergency power supply (EPS) is required.",
      },
      {
        question: "Q8. How Much Is The Federal STC Rebate In 2026?",
        answer:
          "STCs degress on 1 January each year until 2030. In 2026, a 30kW commercial system typically receives $300\u2013$500 per kW as an upfront discount, applied directly to your invoice.",
      },
    ],
  },
  {
    __component: "commercial-systems.commercial-form" as const,
    subtitle: "Tell Us About Your Facility",
    title: "We Will Come Back With A Number",
    description:
      "A Commercial Energy Assessment Is Free And Takes About 30 Minutes \u2014 Most Of It On A Screen-Share With Your Last 12 Months Of Synergy Or Horizon Bills. We\u2019ll Come Back Inside A Week With A Sized System, A Rebate-Applied Price, And A Payback Projection Your Accountant Can Model.",
    image: null,
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
