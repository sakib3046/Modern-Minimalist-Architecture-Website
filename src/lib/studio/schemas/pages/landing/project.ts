import { defineField, defineType } from 'sanity';

const project = defineType({
  name: 'landing.project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'project',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
          },
        }),
        defineField({
          name: 'description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Category',
          name: 'categoryName',
          type: 'reference',
          to: [{ type: 'category' }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});

export default project;
