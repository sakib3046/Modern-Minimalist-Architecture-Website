import { FcBusinessContact } from 'react-icons/fc';
import { defineField, defineType } from 'sanity';
import { MdOutlineCallToAction } from 'react-icons/md';

const footer = defineType({
  title: 'Footer',
  name: 'site.footer',
  type: 'document',
  icon: MdOutlineCallToAction,
  fields: [
    defineField({
      name: 'title',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contacts',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          name: 'option',
          type: 'object',
          icon: FcBusinessContact,
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'value',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'social',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'socials',
          type: 'array',
          validation: (Rule) => Rule.required().min(1),
          of: [{ type: 'social' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (props) => ({
      ...props,
      icon: FcBusinessContact,
    }),
  },
});

export default footer;
