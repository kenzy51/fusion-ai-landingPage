// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post' // Import the file we just made

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post], // Add 'post' to this array
}