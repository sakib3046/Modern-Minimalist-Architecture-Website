import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from '$env/static/public';

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
});

export const imgBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return imgBuilder.image(source);
};
