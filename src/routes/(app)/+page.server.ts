import { sanityClient } from '$lib/sanity/sanity-client';
import { asset } from '$lib/sanity/sanity-image';
import type { LandingPageProps } from '$lib/types/landing.types';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageServerLoad } from './$types';

const query = groq`
	*[_id == "landingPage"][0]{
		...,
		sections[] {
			...,
			${asset('image')},
		},
	}
`;

export const load: PageServerLoad = async () => {
  const data: LandingPageProps = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return { page: data };
};
