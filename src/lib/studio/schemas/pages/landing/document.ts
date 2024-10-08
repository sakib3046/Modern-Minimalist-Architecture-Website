import { defineField, defineType } from 'sanity';

const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        { type: 'landing.header' },
        { type: 'landing.about' },
        { type: 'landing.testimonial' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
});

export default landingPage;
