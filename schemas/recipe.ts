import type { Rule } from '@sanity/types';

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (Rule: Rule) => Rule.required(),
      to: { type: 'author' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'object',
      fields: [
        {
          name: 'size',
          title: 'Size',
          type: 'number',
          validation: (Rule: Rule) =>
            Rule.required().positive().integer().min(1),
        },
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'Portions', value: 'portions' },
              { title: 'Pieces', value: 'pieces' },
            ],
          },
          layout: 'radio',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'preparation',
      title: 'Preparation (m)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive().integer(),
    },
    {
      name: 'cook',
      title: 'Cook (m)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive().integer(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'section' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection: { author: string }) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: `by ${author}`,
      });
    },
  },
};
