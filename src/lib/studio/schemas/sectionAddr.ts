
import type { Rule } from 'sanity';

const sectionAddr = {
  name: 'sectionAddr',
  type: 'object',
  fields: [
    {
      name: 'sectionName',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'sectionId',
      type: 'string',
    },
  ],
};

export default sectionAddr;
