import { SiHomeadvisor } from 'react-icons/si';
import { defineArrayMember, defineField, defineType } from 'sanity';
// import { toPlainText } from '@portabletext/svelte';

const header = defineType({
  title: 'header',
  name: 'landing.header',
  type: 'object',
  icon: SiHomeadvisor,
  fields: [
    defineField({
      name: 'headerImageText',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({
      name: 'headerText',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [defineArrayMember({ type: 'block' })],
    }),
    
    // defineField({
    //   name: 'subtitle',
    //   type: 'text',
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: 'link',
    //   type: 'link',
    //   validation: (Rule) => Rule.required(),
    // }),
  ],
  
  
  // preview: {
  //   select: {
  //     title: 'title',
  //     subtitle: 'subtitle',
  //   },
  //   prepare({ title, subtitle }) {
  //     return { title: toPlainText(title), subtitle };
  //   },
  // },
});

export default header;
