import { defineArrayMember, defineField, defineType } from 'sanity';

const about =defineType(
    {
        name:'landing.about',
        title:'About',
        type:'object',
        fields:[
            defineField(
                {
                    name:'title',
                    title:'About Title',
                    type:'string'
                }
            ),
            defineField(
                {
                    name:'description',
                    title:'About Description',
                    type:'text'
                }
            ),
            defineField({
                name: 'sliderImage',
                type: 'array',
                // validation: (Rule) => Rule.required(),
                of: [defineArrayMember({ type: 'image' })],
              }),
              defineField({
                name: 'projectstatus',
                type: 'array',
                // validation: (Rule) => Rule.required(),
                of: [defineArrayMember({ type: 'object',
                    fields:[
                        defineField(
                            {
                                name:'title_p1',
                                type:'string'
                            }
                        ),
                        defineField(
                            {
                                name:'title_p2',
                                type:'string'
                            }
                        ),
                        defineField(
                            {
                                name:'count',
                                type:'string'
                            }
                        ), 
                    ]
                 })],
              }),
        ]
        
    }
)
export default about;