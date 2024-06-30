import type { BaseSchemaDefinition, FieldDefinition, Rule } from 'sanity';

export const alt = (args?: Omit<BaseSchemaDefinition, 'type' | 'name'>) =>
  ({
    name: 'alt',
    type: 'string',
    title: 'Alternative Text',
    description: 'Important for SEO and accessibility',
    validation: (Rule: Rule) => Rule.required(),
    ...args,
  }) as FieldDefinition;
