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
      name: 'description',
      type: 'text',
      title: 'SEO Description',
      description: 'A short summary (150-160 characters) for search engines and social media.',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true }, // Important for cropping
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    
    // AUTHOR CONTEXT BLOCK — Pre-loaded with your expert credentials
    defineField({
      name: 'author',
      title: 'Author Details',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Professional Title' },
        { name: 'bio', type: 'text', title: 'Author Bio Summary' },
      ],
      initialValue: {
        name: 'Kanat Nazarov',
        role: 'Systems Architect & Founder',
        bio: 'Systems Architect specializing in engineering high-performance web ecosystems, low-latency AI voice streams, and programmatic schema infrastructure.'
      }
    }),

    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    }),
  ],
})