import { defineCollection, z } from "astro:content"

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  date: z.date(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
})

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
})

export const collections = {
  blog: blogCollection,
}

// Export types for better TypeScript support
export type BlogPost = z.infer<typeof blogSchema>
