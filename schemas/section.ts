import type { Rule } from '@sanity/types';
import type { Step } from '../schema';

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
      steps: 'steps',
    },
    prepare(selection: { steps: Step[] }) {
      const { steps } = selection;

      return Object.assign({}, selection, {
        subtitle: `contains ${steps?.length || 0} steps`,
      });
    },
  },
};
