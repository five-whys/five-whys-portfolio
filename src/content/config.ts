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
const comparisonBlockSchema = z.object({
  heading: z.string(),
  body: z.string(),
  bullets: z.array(z.string()),
  visualTitle: z.string(),
  visualDesc: z.string(),
});

const tableValueSchema = z.enum(['check', 'cross', 'partial']);

const featureTableSchema = z.object({
  label: z.string(),
  heading: z.string(),
  subtext: z.string(),
  col2: z.string(),
  col3: z.string(),
  rows: z.array(z.object({
    feature: z.string(),
    glucose: tableValueSchema,
    col2: tableValueSchema,
    col3: tableValueSchema,
  })),
});

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
    comparisonBlocks: z.array(comparisonBlockSchema),
    featureTable1: featureTableSchema,
    featureTable2: featureTableSchema,
    engagementStack: z.object({
      heading: z.string(),
      legacyLabel: z.string(),
      legacyItems: z.array(z.string()),
      agenticLabel: z.string(),
      agenticItems: z.array(z.string()),
    }),
    testimonials: z.object({
      label: z.string(),
      heading: z.string(),
      subtext: z.string(),
      items: z.array(z.object({
        quote: z.string(),
        name: z.string(),
        role: z.string(),
        avatarSrc: z.string(),
        avatarAlt: z.string(),
      })),
    }),
    pricingLabel: z.string(),
    pricingHeading: z.string(),
    pricingSubtext: z.string(),
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
