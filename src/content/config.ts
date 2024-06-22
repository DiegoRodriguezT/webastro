import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		image: z.string(),
		tags: z.array(z.string()).optional(),
		project: z.boolean().optional(),
	})
});

export const collections =
{
	'blog': blogCollection,
};