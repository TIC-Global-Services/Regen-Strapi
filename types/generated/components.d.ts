import type { Schema, Struct } from '@strapi/strapi';

export interface BrandsBrandCard extends Struct.ComponentSchema {
  collectionName: 'components_brands_brand_cards';
  info: {
    displayName: 'brandCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isDark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    middleTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandsBrandsGrid extends Struct.ComponentSchema {
  collectionName: 'components_brands_brands_grid_sections';
  info: {
    displayName: 'brandsGrid';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'brands.brand-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsCriteriaList extends Struct.ComponentSchema {
  collectionName: 'components_brands_criteria_list_sections';
  info: {
    displayName: 'criteriaList';
  };
  attributes: {
    introText: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'brands.feature-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_brands_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandsHero extends Struct.ComponentSchema {
  collectionName: 'components_brands_hero_sections';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsHybridSpecialty extends Struct.ComponentSchema {
  collectionName: 'components_brands_hybrid_specialty_sections';
  info: {
    displayName: 'hybridSpecialty';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsInverterBrand extends Struct.ComponentSchema {
  collectionName: 'components_brands_inverter_brands';
  info: {
    displayName: 'inverterBrand';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    origin: Schema.Attribute.String;
    positioning: Schema.Attribute.Text;
    range: Schema.Attribute.String;
    warranty: Schema.Attribute.String;
  };
}

export interface BrandsInvertersSlider extends Struct.ComponentSchema {
  collectionName: 'components_brands_inverters_slider_sections';
  info: {
    displayName: 'invertersSlider';
  };
  attributes: {
    inverters: Schema.Attribute.Component<'brands.inverter-brand', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_brands_philosophy_sections';
  info: {
    displayName: 'philosophy';
  };
  attributes: {
    badge: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.intro-paragraph', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandsTier1Means extends Struct.ComponentSchema {
  collectionName: 'components_brands_tier1_means_sections';
  info: {
    displayName: 'tier1Means';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DealsDealsGrid extends Struct.ComponentSchema {
  collectionName: 'components_deals_deals_grid_sections';
  info: {
    displayName: 'dealsGrid';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    promotions: Schema.Attribute.Component<'deals.promotion', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DealsHero extends Struct.ComponentSchema {
  collectionName: 'components_deals_hero_sections';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DealsPaymentCard extends Struct.ComponentSchema {
  collectionName: 'components_deals_payment_cards';
  info: {
    displayName: 'paymentCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    footerDescription: Schema.Attribute.String;
    footerTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DealsPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_deals_philosophy_sections';
  info: {
    displayName: 'philosophy';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<'shared.intro-paragraph', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DealsPromotion extends Struct.ComponentSchema {
  collectionName: 'components_deals_promotions';
  info: {
    displayName: 'promotion';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DealsWaysToPay extends Struct.ComponentSchema {
  collectionName: 'components_deals_ways_to_pay_sections';
  info: {
    displayName: 'waysToPay';
  };
  attributes: {
    bottomSubtitle: Schema.Attribute.Text;
    cards: Schema.Attribute.Component<'deals.payment-card', true>;
    title: Schema.Attribute.String;
    topSubtitle: Schema.Attribute.String;
  };
}

export interface DealsWhyMatters extends Struct.ComponentSchema {
  collectionName: 'components_deals_why_matters_sections';
  info: {
    displayName: 'whyMatters';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introText: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'brands.feature-item', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface FaqCategorizedFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_categorized_faq_sections';
  info: {
    displayName: 'categorizedFaq';
  };
  attributes: {
    categories: Schema.Attribute.Component<'faq.category', true>;
  };
}

export interface FaqCategory extends Struct.ComponentSchema {
  collectionName: 'components_faq_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    items: Schema.Attribute.Component<'solar.faq-item', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqHero extends Struct.ComponentSchema {
  collectionName: 'components_faq_hero_sections';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeAwards extends Struct.ComponentSchema {
  collectionName: 'components_home_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    logos: Schema.Attribute.Component<'shared.imagegroup', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeCraftmanship extends Struct.ComponentSchema {
  collectionName: 'components_home_craftmanships';
  info: {
    displayName: 'craftmanship';
  };
  attributes: {
    batteryStorage: Schema.Attribute.Component<'shared.imagegroup', true>;
    evCharge: Schema.Attribute.Component<'shared.imagegroup', true>;
    inverts: Schema.Attribute.Component<'shared.imagegroup', true>;
    panal: Schema.Attribute.Component<'shared.imagegroup', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeExpertise extends Struct.ComponentSchema {
  collectionName: 'components_home_expertise';
  info: {
    displayName: 'expertise';
  };
  attributes: {
    data: Schema.Attribute.Component<'shared.cardgroup', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    buttontext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isButton: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomePatnersandmembership extends Struct.ComponentSchema {
  collectionName: 'components_home_patnersandmemberships';
  info: {
    displayName: 'patnersandmembership';
  };
  attributes: {
    membership: Schema.Attribute.Component<'shared.imagegroup', true>;
    patners: Schema.Attribute.Component<'shared.imagegroup', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeRealStories extends Struct.ComponentSchema {
  collectionName: 'components_home_real_stories';
  info: {
    displayName: 'realStories';
  };
  attributes: {
    certificates: Schema.Attribute.Component<'shared.imagegroup', true>;
    reviews: Schema.Attribute.Component<'shared.testimonial', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSmartsolar extends Struct.ComponentSchema {
  collectionName: 'components_home_smartsolars';
  info: {
    displayName: 'smartsolar';
  };
  attributes: {
    data: Schema.Attribute.Component<'shared.cardgroup', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSolarandstorage extends Struct.ComponentSchema {
  collectionName: 'components_home_solarandstorages';
  info: {
    displayName: 'solarandstorage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomeThreewayCard extends Struct.ComponentSchema {
  collectionName: 'components_home_threeway_cards';
  info: {
    displayName: 'threeway.card';
  };
  attributes: {
    badgesubtitle: Schema.Attribute.String;
    badgetitle: Schema.Attribute.String;
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeThreewaystopay extends Struct.ComponentSchema {
  collectionName: 'components_home_threewaystopays';
  info: {
    displayName: 'threewaystopay';
  };
  attributes: {
    data: Schema.Attribute.Component<'home.threeway-card', false>;
    description: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhychooseus extends Struct.ComponentSchema {
  collectionName: 'components_home_whychooseuses';
  info: {
    displayName: 'whychooseus';
  };
  attributes: {
    data: Schema.Attribute.Component<'shared.cardgroup', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RebatesEligibilityChecker extends Struct.ComponentSchema {
  collectionName: 'components_rebates_eligibility_checker_sections';
  info: {
    displayName: 'eligibilityChecker';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface RebatesHero extends Struct.ComponentSchema {
  collectionName: 'components_rebates_hero_sections';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RebatesLoanBenefit extends Struct.ComponentSchema {
  collectionName: 'components_rebates_loan_benefits';
  info: {
    displayName: 'loanBenefit';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RebatesLoanBenefits extends Struct.ComponentSchema {
  collectionName: 'components_rebates_loan_benefits_sections';
  info: {
    displayName: 'loanBenefits';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'rebates.loan-benefit', true>;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RebatesProgram extends Struct.ComponentSchema {
  collectionName: 'components_rebates_programs';
  info: {
    displayName: 'program';
  };
  attributes: {
    badge: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RebatesRebatePrograms extends Struct.ComponentSchema {
  collectionName: 'components_rebates_rebate_programs_sections';
  info: {
    displayName: 'rebatePrograms';
  };
  attributes: {
    description: Schema.Attribute.Text;
    programs: Schema.Attribute.Component<'rebates.program', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RebatesStcExplainer extends Struct.ComponentSchema {
  collectionName: 'components_rebates_stc_explainer_sections';
  info: {
    displayName: 'stcExplainer';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<'shared.intro-paragraph', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RebatesUtilityCard extends Struct.ComponentSchema {
  collectionName: 'components_rebates_utility_cards';
  info: {
    displayName: 'utilityCard';
  };
  attributes: {
    cap: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    maximumRebate: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    perKwh: Schema.Attribute.String;
  };
}

export interface RebatesUtilityCards extends Struct.ComponentSchema {
  collectionName: 'components_rebates_utility_cards_sections';
  info: {
    displayName: 'utilityCards';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'rebates.utility-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardgroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardgroups';
  info: {
    displayName: 'cardgroup';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SharedImagegroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_imagegroups';
  info: {
    displayName: 'imagegroup';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedIntroParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_intro_paragraphs';
  info: {
    displayName: 'introParagraph';
  };
  attributes: {
    isSecondary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedSplitSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_split_sections';
  info: {
    displayName: 'splitSection';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    review: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedTickerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_ticker_items';
  info: {
    displayName: 'tickerItem';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_solar_brand_logos';
  info: {
    displayName: 'brandLogo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarBrandsGrid extends Struct.ComponentSchema {
  collectionName: 'components_solar_brands_grid_sections';
  info: {
    displayName: 'brandsGrid';
  };
  attributes: {
    brands: Schema.Attribute.Component<'solar.brand-logo', true>;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_solar_cta_banner_sections';
  info: {
    displayName: 'ctaBanner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface SolarEngineeringItem extends Struct.ComponentSchema {
  collectionName: 'components_solar_engineering_items';
  info: {
    displayName: 'engineeringItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isDark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarEngineeringItems extends Struct.ComponentSchema {
  collectionName: 'components_solar_engineering_items_sections';
  info: {
    displayName: 'engineeringItems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'solar.engineering-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarFaq extends Struct.ComponentSchema {
  collectionName: 'components_solar_faq_sections';
  info: {
    displayName: 'faq';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'solar.faq-item', true>;
    listTitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SolarFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_solar_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_solar_info_cards';
  info: {
    displayName: 'infoCard';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SolarInverterSlider extends Struct.ComponentSchema {
  collectionName: 'components_solar_inverter_slider_sections';
  info: {
    displayName: 'inverterSlider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    inverters: Schema.Attribute.Component<'solar.inverter-type', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarInverterType extends Struct.ComponentSchema {
  collectionName: 'components_solar_inverter_types';
  info: {
    displayName: 'inverterType';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    infoCards: Schema.Attribute.Component<'solar.info-card', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarPackageFeature extends Struct.ComponentSchema {
  collectionName: 'components_solar_package_features';
  info: {
    displayName: 'packageFeature';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarPackageTier extends Struct.ComponentSchema {
  collectionName: 'components_solar_package_tiers';
  info: {
    displayName: 'packageTier';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'solar.package-feature', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarPackages extends Struct.ComponentSchema {
  collectionName: 'components_solar_packages_sections';
  info: {
    displayName: 'packages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    packages: Schema.Attribute.Component<'solar.package-tier', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_solar_process_steps';
  info: {
    displayName: 'processStep';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    stepNumber: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_solar_process_steps_sections';
  info: {
    displayName: 'processSteps';
  };
  attributes: {
    steps: Schema.Attribute.Component<'solar.process-step', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarSizingCard extends Struct.ComponentSchema {
  collectionName: 'components_solar_sizing_cards';
  info: {
    displayName: 'sizingCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SolarSizingGuide extends Struct.ComponentSchema {
  collectionName: 'components_solar_sizing_guide_sections';
  info: {
    displayName: 'sizingGuide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    sizingCards: Schema.Attribute.Component<'solar.sizing-card', true>;
    subtitle: Schema.Attribute.String;
    tableRows: Schema.Attribute.Component<'solar.sizing-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface SolarSizingRow extends Struct.ComponentSchema {
  collectionName: 'components_solar_sizing_rows';
  info: {
    displayName: 'sizingRow';
  };
  attributes: {
    dailyUse: Schema.Attribute.String & Schema.Attribute.Required;
    phaseRequired: Schema.Attribute.String;
    recommendedSize: Schema.Attribute.String & Schema.Attribute.Required;
    typicalHousehold: Schema.Attribute.String;
  };
}

export interface SolarSpecRow extends Struct.ComponentSchema {
  collectionName: 'components_solar_spec_rows';
  info: {
    displayName: 'specRow';
  };
  attributes: {
    brandName: Schema.Attribute.String & Schema.Attribute.Required;
    degradation: Schema.Attribute.String;
    efficiency: Schema.Attribute.String;
    tempCoeff: Schema.Attribute.String;
    warranty: Schema.Attribute.String;
  };
}

export interface SolarSpecsTable extends Struct.ComponentSchema {
  collectionName: 'components_solar_specs_table_sections';
  info: {
    displayName: 'specsTable';
  };
  attributes: {
    description: Schema.Attribute.Text;
    specs: Schema.Attribute.Component<'solar.spec-row', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolarStatsAndIntro extends Struct.ComponentSchema {
  collectionName: 'components_solar_stats_and_intro_sections';
  info: {
    displayName: 'statsAndIntro';
  };
  attributes: {
    introParagraphs: Schema.Attribute.Component<'shared.intro-paragraph', true>;
    tickerItems: Schema.Attribute.Component<'shared.ticker-item', true>;
  };
}

export interface SolarTimeline extends Struct.ComponentSchema {
  collectionName: 'components_solar_timeline_sections';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    consultationText: Schema.Attribute.Text;
    consultationTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'brands.brand-card': BrandsBrandCard;
      'brands.brands-grid': BrandsBrandsGrid;
      'brands.criteria-list': BrandsCriteriaList;
      'brands.feature-item': BrandsFeatureItem;
      'brands.hero': BrandsHero;
      'brands.hybrid-specialty': BrandsHybridSpecialty;
      'brands.inverter-brand': BrandsInverterBrand;
      'brands.inverters-slider': BrandsInvertersSlider;
      'brands.philosophy': BrandsPhilosophy;
      'brands.tier1-means': BrandsTier1Means;
      'deals.deals-grid': DealsDealsGrid;
      'deals.hero': DealsHero;
      'deals.payment-card': DealsPaymentCard;
      'deals.philosophy': DealsPhilosophy;
      'deals.promotion': DealsPromotion;
      'deals.ways-to-pay': DealsWaysToPay;
      'deals.why-matters': DealsWhyMatters;
      'faq.categorized-faq': FaqCategorizedFaq;
      'faq.category': FaqCategory;
      'faq.hero': FaqHero;
      'home.awards': HomeAwards;
      'home.craftmanship': HomeCraftmanship;
      'home.expertise': HomeExpertise;
      'home.hero': HomeHero;
      'home.patnersandmembership': HomePatnersandmembership;
      'home.real-stories': HomeRealStories;
      'home.smartsolar': HomeSmartsolar;
      'home.solarandstorage': HomeSolarandstorage;
      'home.threeway-card': HomeThreewayCard;
      'home.threewaystopay': HomeThreewaystopay;
      'home.whychooseus': HomeWhychooseus;
      'rebates.eligibility-checker': RebatesEligibilityChecker;
      'rebates.hero': RebatesHero;
      'rebates.loan-benefit': RebatesLoanBenefit;
      'rebates.loan-benefits': RebatesLoanBenefits;
      'rebates.program': RebatesProgram;
      'rebates.rebate-programs': RebatesRebatePrograms;
      'rebates.stc-explainer': RebatesStcExplainer;
      'rebates.utility-card': RebatesUtilityCard;
      'rebates.utility-cards': RebatesUtilityCards;
      'shared.cardgroup': SharedCardgroup;
      'shared.imagegroup': SharedImagegroup;
      'shared.intro-paragraph': SharedIntroParagraph;
      'shared.split-section': SharedSplitSection;
      'shared.testimonial': SharedTestimonial;
      'shared.ticker-item': SharedTickerItem;
      'solar.brand-logo': SolarBrandLogo;
      'solar.brands-grid': SolarBrandsGrid;
      'solar.cta-banner': SolarCtaBanner;
      'solar.engineering-item': SolarEngineeringItem;
      'solar.engineering-items': SolarEngineeringItems;
      'solar.faq': SolarFaq;
      'solar.faq-item': SolarFaqItem;
      'solar.info-card': SolarInfoCard;
      'solar.inverter-slider': SolarInverterSlider;
      'solar.inverter-type': SolarInverterType;
      'solar.package-feature': SolarPackageFeature;
      'solar.package-tier': SolarPackageTier;
      'solar.packages': SolarPackages;
      'solar.process-step': SolarProcessStep;
      'solar.process-steps': SolarProcessSteps;
      'solar.sizing-card': SolarSizingCard;
      'solar.sizing-guide': SolarSizingGuide;
      'solar.sizing-row': SolarSizingRow;
      'solar.spec-row': SolarSpecRow;
      'solar.specs-table': SolarSpecsTable;
      'solar.stats-and-intro': SolarStatsAndIntro;
      'solar.timeline': SolarTimeline;
    }
  }
}
