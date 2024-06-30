import { IoShareSocial } from 'react-icons/io5';
import type { Rule } from 'sanity';

const social = {
  name: 'social',
  type: 'object',
  icon: IoShareSocial,
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'url',
    },
  },
};

export default social;
