import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Link, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';

export interface LandingPageProps {
  seo: SeoProps;
  sections: Section[];
}

type Section = 
              |Header 
              |About
              |Testimonial;
export interface HeroProps {
  _type: 'landing.hero';
  title: PortableTextBlock[];
  subtitle: string;
  link: Link;
}

export interface Header {
  sliderImage:     SanityImageObject[];
  headerText:      PortableTextBlock[];
  _type:           'landing.header';
  sliderImageText: string[];
  _key:            string;
}


export interface About {
  title:         string;
  projectstatus: Projectstatus[];
  sliderImage:   SanityImageObject[];
  _type:         'landing.about';
  description:   string;
  _key:          string;
  image:         null;
}

export interface Projectstatus {
  title_p1: string;
  title_p2: string;
  count:    number;
  _key:     string;
}




export interface Testimonial {
  sectionTitle: string;
  _type:        'landing.testimonial';
  image:        null;
  _key:         string;
  testimonial:  TestimonialElement[];
}

export interface TestimonialElement {
  clientRole:  string;
  clientName:  string;
  _key:        string;
  testimonial: string;
}