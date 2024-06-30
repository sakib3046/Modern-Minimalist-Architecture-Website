import type { SanityDocument } from '@sanity/client';
import type { Link, SanityImageWithAlt } from './common.types';

export interface SiteDataProps {
  logos: {
    favicon: SanityImageWithAlt;
    ogImage: SanityImageWithAlt;
    logo: SanityImageWithAlt;
  };
  nav: Nav;
  footer: Footer;
  greetings: Greetings;
}

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
  title: string;
  subtitle: string;
  contacts: Contact[];
  social: SocialProps;
}

export interface SocialProps {
  title: string;
  socials: Social[];
}

export interface Contact {
  _type: string;
  _key: string;
  name: string;
  value: string;
  url?: string;
}

export interface Social {
  _type: string;
  _key: string;
  name: string;
  url: string;
}
