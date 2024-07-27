import type {
  SanityAsset,
  SanityImageObject,
} from '@sanity/image-url/lib/types/types';

export interface SeoProps {
  _type: 'seo';
  title: string;
  description: string;
  ogImage: SanityAsset;
}

export interface Link {
  _type: 'link';
  title: string;
  type: 'internal' | 'external';
  internalLink?: string;
  externalLink?: string;
}

export type SanityImageWithAlt = SanityImageObject & {
  alt: string;
};

export interface Video {
  mov: string;
  webm: string;
}






// export interface Header {
//   sliderImage:     SliderImage[];
//   headerText:      HeaderText[];
//   _type:           string;
//   sliderImageText: string[];
//   _key:            string;
// }

// export interface HeaderText {
//   style:    string;
//   _key:     string;
//   children: Child[];
//   _type:    string;
// }

// export interface Child {
//   text:  string;
//   _key:  string;
//   _type: string;
// }


// export interface SliderImage {
//   _type: string;
//   _key:  string;
//   asset: Asset;
// }


// export interface Asset {
//   _ref:  string;
//   _type: string;
// }






