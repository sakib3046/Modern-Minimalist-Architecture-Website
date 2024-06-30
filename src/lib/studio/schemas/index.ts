import seo from './seo';
import link from './link';
import social from './social';
import pages from './pages';
import site from './site';

export const schemaTypes = [social, seo, link, ...site, ...pages];
