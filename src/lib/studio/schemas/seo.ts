import type { Rule } from 'sanity';

const SEO = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ogImage',
      type: 'image',
      options: {
        accept: 'image/png, image/jpeg, image/webp',
      },
    },
  ],
};

export default SEO;
