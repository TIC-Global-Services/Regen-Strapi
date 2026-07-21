import type { Schema, Struct } from '@strapi/strapi';

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
    data: Schema.Attribute.Component<'home.expertise-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeExpertiseCard extends Struct.ComponentSchema {
  collectionName: 'components_home_expertise_cards';
  info: {
    displayName: 'expertise.card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    data: Schema.Attribute.Component<'shared.smartsolar-card', true>;
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

export interface HomeThreewaystopay extends Struct.ComponentSchema {
  collectionName: 'components_home_threewaystopays';
  info: {
    displayName: 'newsandinsights';
  };
  attributes: {
    data: Schema.Attribute.Component<'shared.threeway-card', true>;
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

export interface SharedBlog extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
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
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    suffix: Schema.Attribute.String;
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

export interface SharedSmartsolarCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_smartsolar_cards';
  info: {
    displayName: 'smartsolar.card';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
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

export interface SharedThreewayCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_threeway_cards';
  info: {
    displayName: 'newsandinsights.card';
  };
  attributes: {
    badgesubtitle: Schema.Attribute.String;
    badgetitle: Schema.Attribute.String;
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    blog: Schema.Attribute.Component<'shared.blog', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'home.awards': HomeAwards;
      'home.craftmanship': HomeCraftmanship;
      'home.expertise': HomeExpertise;
      'home.expertise-card': HomeExpertiseCard;
      'home.hero': HomeHero;
      'home.patnersandmembership': HomePatnersandmembership;
      'home.real-stories': HomeRealStories;
      'home.smartsolar': HomeSmartsolar;
      'home.solarandstorage': HomeSolarandstorage;
      'home.threewaystopay': HomeThreewaystopay;
      'home.whychooseus': HomeWhychooseus;
      'shared.blog': SharedBlog;
      'shared.cardgroup': SharedCardgroup;
      'shared.imagegroup': SharedImagegroup;
      'shared.smartsolar-card': SharedSmartsolarCard;
      'shared.testimonial': SharedTestimonial;
      'shared.threeway-card': SharedThreewayCard;
    }
  }
}
