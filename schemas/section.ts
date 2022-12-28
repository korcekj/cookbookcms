import type { Rule } from '@sanity/types';
import type { Step, Ingredient } from '../schema';

export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'ingredient' }],
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'step' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      ingredients: 'ingredients',
      steps: 'steps',
    },
    prepare(selection: { ingredients: Ingredient[]; steps: Step[] }) {
      const { steps, ingredients } = selection;
      const stepCount = steps?.length || 0;
      const ingredientCount = ingredients?.length || 0;

      return Object.assign({}, selection, {
        subtitle: `contains ${ingredientCount} ingredients and ${stepCount} steps`,
      });
    },
  },
};
