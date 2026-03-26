import { defineCollection, z } from 'astro:content';

// Markdown pages (Terms, Privacy)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

// VS comparison page text fields
const vsPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroHeading: z.string(),
    heroSubtext: z.string(),
    sectionLabel: z.string(),
    sectionHeading: z.string(),
    sectionSubtext: z.string(),
    ctaHeading: z.string(),
    ctaSubtext: z.string(),
  }),
});

const metricSchema = z.object({ label: z.string(), value: z.string() });

// Customers page structured data
const customersPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroHeading: z.string(),
    heroSubtext: z.string(),
    ctaHeading: z.string(),
    ctaSubtext: z.string(),
    featuredCustomer: z.object({
      href: z.string(),
      imageSrc: z.string(),
      imageAlt: z.string(),
      logoSrc: z.string(),
      logoAlt: z.string(),
      metrics: z.array(metricSchema),
      heading: z.string(),
      body: z.string(),
    }),
    featuredTestimonial: z.object({
      logoSrc: z.string(),
      logoAlt: z.string(),
      quote: z.string(),
      avatarSrc: z.string(),
      avatarAlt: z.string(),
      name: z.string(),
      role: z.string(),
    }),
    results: z.array(z.object({
      imageSrc: z.string(),
      imageAlt: z.string(),
      logoSrc: z.string(),
      logoAlt: z.string(),
      metrics: z.array(metricSchema),
      industry: z.string(),
      title: z.string(),
      href: z.string(),
    })),
    successStories: z.array(z.object({
      href: z.string(),
      imageSrc: z.string(),
      imageAlt: z.string(),
      brand: z.string(),
      title: z.string(),
      body: z.string(),
    })),
  }),
});

export const collections = { pages, vsPage, customersPage };
