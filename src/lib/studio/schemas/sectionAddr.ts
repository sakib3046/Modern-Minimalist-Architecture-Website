
import type { Rule } from 'sanity';

const sectionAddr = {
  name: 'sectionAddr',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'string',
    },
  ],
};

export default sectionAddr;
