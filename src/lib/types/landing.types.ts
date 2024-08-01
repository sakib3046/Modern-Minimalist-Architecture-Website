import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Link, SeoProps } from './common.types';
import type { PortableTextBlock } from '@portabletext/types';


export interface LandingPageProps {
  _rev:       string;
  _type:      string;
  _id:        string;
  seo:        SeoProps;
  _updatedAt: Date;
  sections:   Section[];
  _createdAt: Date;

}

type Section = 
              |Header 
              |About
              |Testimonial

              


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
}
export type AboutCard={
  count:string
title_p1: string
title_p2 : string
_key : string
} 

export interface Projectstatus {
  title_p1: string;
  title_p2: string;
  count:    string;
  _key:     string;
}




export interface Testimonial {
  sectionTitle: string;
  _type:        'landing.testimonial';
  _key:         string;
  testimonial:  TestimonialElement[];
}

export interface TestimonialElement {
  clientRole:  string;
  clientName:  string;
  _key:        string;
  testimonial: string;
}