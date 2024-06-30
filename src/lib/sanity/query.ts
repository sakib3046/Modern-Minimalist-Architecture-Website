import groq from 'groq';
import { asset } from './sanity-image';

// TODO fix the navigation schema and the query
export const siteQuery = groq`{
    "logos": *[_id == "siteLogos"][0] {
      ...,
      ${asset('logo')},
      ${asset('mobileLogo')},
    },
    "nav": *[_id == "siteNav"][0],
    "footer": *[_id == "siteFooter"][0],
    "greetings": *[_id == "siteGreetings"][0]
  }`;

export const pageQuery = (query: string) => groq`{
    "site": ${siteQuery},
    "page": ${query}
  }`;
