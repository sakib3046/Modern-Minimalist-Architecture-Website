import { defineArrayMember, defineField, defineType } from 'sanity';

const project = defineType({
  name: 'landing.project',
  title: 'Projects',
  type: 'object',
  fields: [
    defineField({
      name: 'projects',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'project',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
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
              title: 'Tag',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'branding', value: 'branding' },
                  { title: 'interior design.', value: 'interior design.' },
                  { title: 'architect', value: 'architect' },
                  { title: 'other', value: 'other' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
export default project;
