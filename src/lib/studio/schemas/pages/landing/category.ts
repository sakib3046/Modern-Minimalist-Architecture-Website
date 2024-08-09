import { defineArrayMember, defineField, defineType } from 'sanity';
const category= defineType(
{
    name:'landing.project.category',
    title: 'Category',
    type:'object',
    fields:[
        defineField(
            {
                name:'category',
                type:'array',
                of:[defineArrayMember(
                 {
                    type:'string'
                 }
                )
            ]
            }
        )
    ]
}
)
export default category;