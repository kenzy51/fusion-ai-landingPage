// sanity/schemaTypes/post.ts
import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    }),
  ],
})