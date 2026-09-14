import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    coverImage: z.string().optional().nullable(),
    coverImageAlt: z.string().optional().nullable(),
  }),
});

export const collections = { posts };
