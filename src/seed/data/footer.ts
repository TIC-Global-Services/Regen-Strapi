// Flat single type — no `sections` dynamic zone. These keys map 1:1 to
// src/api/footer/content-types/footer/schema.json attributes.

export const footerData = {
  logo: null,
  backgroundImage: null,

  helpText: "Need help? Call our expert team on",
  helpPhoneLabel: "08 9456 3491",
  helpPhoneHref: "0894563491",

  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Solar", href: "/solar" },
    { label: "Battery Storage", href: "/battery/battery-storage" },
    { label: "EV Charging", href: "/ev-charging" },
    { label: "Commercial systems", href: "/commercial/case-studies" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Customer Reviews", href: "/reviews" },
  ],

  headOfficeTitle: "WA Head Office",
  headOffice: {
    address: "Head Office: 4/90 Catalano Circuit, Canning Vale WA 6155",
    phone: "1800 073 436",
    directLine: "08 9456 3491",
    email: "sales@regenpower.com",
    hours: "Mon – Fri 8:00am – 5:00pm AWST",
  },

  stateOfficesTitle: "Other State Offices",
  stateOffices: [
    {
      state: "South Australia",
      address: "Level 2, 70 Hindmarsh Square, Adelaide SA 5000",
      phone: "08 8311 1403",
      email: "sales.sa@regenpower.com",
    },
    {
      state: "New South Wales",
      address: "Level 17, 123 Pitt St, Sydney NSW 2000",
      phone: "02 8077 4232",
      email: "sales.nsw@regenpower.com",
    },
    {
      state: "Queensland",
      address: "15 Burke Street, Woolloongabba QLD 4102",
      phone: "07 3036 7421",
      email: "sales.qld@regenpower.com",
    },
    {
      state: "Victoria",
      address: "Level 23, Collins Square Tower Five, 727 Collins St, Melbourne VIC 3008",
      phone: "03 8676 8807",
      email: "sales.vic@regenpower.com",
    },
  ],

  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/regenpowerperth", icon: null },
    { label: "Instagram", href: "https://www.instagram.com/regenpowerperth/", icon: null },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/regen-power", icon: null },
    { label: "Twitter / X", href: "https://twitter.com/RegenPower2003", icon: null },
  ],

  copyrightText: "Copyright © 2026 Regen Power Pty Ltd. All rights reserved.",
  creditLabel: "Designed & Developed by",
  creditName: "TIC Global services",
  creditHref: null,
};
