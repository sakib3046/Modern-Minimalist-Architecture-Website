import { IoNavigate } from 'react-icons/io5';

const siteNavigation = {
  name: 'site.nav',
  title: 'Navigation',
  type: 'document',
  icon: IoNavigate,

  fields: [
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Navigations',
    }),
  },
};

export default siteNavigation;
