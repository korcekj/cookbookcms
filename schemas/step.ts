import type { Rule } from '@sanity/types';

export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 5,
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
