import { defineField, defineType } from 'sanity';

const project =defineType(
    {
        name:'landing.project',
        title:'Projects',
        type:'object',
        fields:[
            defineField(
                {
                    name:'title',
                    type:'string'
                }
            )
        ]
        
    }
)
export default project;