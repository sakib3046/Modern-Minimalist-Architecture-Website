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
      name: 'sections',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'section',
          type: 'array',
          validation: (Rule) => Rule.required().min(1),
          of: [{ type: 'sectionAddr' }],
        }),
      ],
    }),
    defineField({
      name: 'portfolios',
      type: 'object',
      fields: [

        defineField({
          name: 'title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'portfolios',
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
                  name: 'url',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
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

      ]}),
    

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
    
    defineField({
      name:'CopyWriteInfo',
      type:'array',
      validation:(Rule)=> Rule.required(),
      of:[
        {
          type:'string'
        }
      ]
    })
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
