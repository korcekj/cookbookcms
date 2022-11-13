import type { Rule } from '@sanity/types';

export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      quantity: 'quantity',
      unit: 'unit',
    },
    prepare(selection: { quantity: number; unit: string }) {
      const { quantity, unit } = selection;
      return Object.assign({}, selection, {
        subtitle: `${quantity} ${unit}`,
      });
    },
  },
};
