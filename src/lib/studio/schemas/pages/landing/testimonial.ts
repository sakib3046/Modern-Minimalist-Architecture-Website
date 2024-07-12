import { defineArrayMember, defineField, defineType } from 'sanity';

const testimonial =defineType(
    {
        name:'landing.testimonial',
        title:'Testimonials',
        type:'object',
        fields:[
            defineField({
                name:'sectionTitle',
                type:'string'
            }),
              defineField({
                name: 'testimonial',
                type: 'array',
                // validation: (Rule) => Rule.required(),
                of: [defineArrayMember({ type: 'object',
                    fields:[
                        defineField(
                            {
                                name:'message',
                                type:'text'
                            }
                        ),
                        defineField(
                            {
                                name:'clientName',
                                type:'string'
                            }
                        ),
                        defineField(
                            {
                                name:'clientRole',
                                type:'string'
                            }
                        ), 
                    ]
                 })],
              }),
        ]
        
    }
)
export default testimonial;