// src/content/config.ts
// Last Updated: 2026-01-26
// Defines the schema for blog posts (and future content collections)

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string().max(160), // SEO-friendly length
    pubDate: z.coerce.date(),
    
    // Optional fields
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    author: z.string().default('Frédéric Gaudette'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    
    // SEO
    canonicalUrl: z.string().url().optional(),
  }),
});

// Export all collections
// Add more here as needed (e.g., resources, case-studies)
export const collections = { 
  blog,
};
