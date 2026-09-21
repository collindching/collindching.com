import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every .md file in src/content/posts becomes a post.
// This folder doubles as an Obsidian vault folder: write notes in Obsidian,
// commit to git when a note is ready to publish.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
