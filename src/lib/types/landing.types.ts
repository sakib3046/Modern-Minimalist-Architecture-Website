import type { Link, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
}

type Section = HeroProps;

export interface HeroProps {
  _type: 'landing.hero';
  title: PortableTextBlock[];
  subtitle: string;
  link: Link;
}
