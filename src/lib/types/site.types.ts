import type { SanityDocument } from '@sanity/client';
import type { Link, SanityImageWithAlt } from './common.types';

export interface SiteDataProps {
  logos: {
    favicon: SanityImageWithAlt;
    ogImage: SanityImageWithAlt;
    logoText: LogoText;
  };
  nav: Nav;
  footer: Footer;
  greetings: Greetings;
}

export type LogoText = {
  name: string;
  _type: string;
};

export type Greetings = SanityDocument & { greetings: string[] };

export interface Nav {
  _rev: string;
  _type: string;
  _id: string;
  menu: Link[];
  _updatedAt: Date;
  _createdAt: Date;
}

export interface Footer {
  _type: string;
  portfolios: Portfolios;
  _id: string;
  title: string;
  sections: Sections;
  social: Social;
  _rev: string;
  _updatedAt: Date;
  _createdAt: Date;
  CopyWriteInfo: string[];
}

export interface Portfolios {
  portfolios: Portfolio[];
}

export interface Portfolio {
  _type: string;
  name: string;
  _key: string;
  url: string;
}

export interface Sections {
  section: Portfolio[];
}

export interface Social {
  socials: Portfolio[];
  title: string;
}
