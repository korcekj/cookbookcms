import type { Category } from '../schema';

export default {
  name: 'recipient',
  title: 'Recipient',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'email',
      category1: 'categories.0.title',
      category2: 'categories.1.title',
      category3: 'categories.2.title',
    },
    prepare(selection: {
      category1: Category;
      category2: Category;
      category3: Category;
    }) {
      const { category1, category2, category3 } = selection;
      const categories = [category1, category2, category3]
        .filter(Boolean)
        .join(', ');

      return Object.assign({}, selection, {
        subtitle: `subscribing to ${categories}${category3 ? '...' : ''}`,
      });
    },
  },
};
