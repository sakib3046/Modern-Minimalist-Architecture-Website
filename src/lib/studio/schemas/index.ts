import seo from './seo';
import link from './link';
import social from './social';
import pages from './pages';
import site from './site';
import sectionAddr from './sectionAddr';

export const schemaTypes = [sectionAddr,social, seo, link, ...site, ...pages];
