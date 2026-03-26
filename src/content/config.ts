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

// Company page structured data
const companyPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroLabel: z.string(),
    heroHeading: z.string(),
    heroSubtext: z.string(),
    heroImageSrc: z.string(),
    heroImageAlt: z.string(),
    missionHeading: z.string(),
    missionBody: z.string(),
    teamHeading: z.string(),
    teamSubtext: z.string(),
    visionLabel: z.string(),
    visionHeading: z.string(),
    statsLabel: z.string(),
    statsHeading: z.string(),
    statsSubtext: z.string(),
    globalPresenceHeading: z.string(),
    globalPresenceBody1: z.string(),
    globalPresenceBody2: z.string(),
    ctaHeading: z.string(),
    ctaSubtext: z.string(),
    teamMembers: z.array(z.object({
      imageSrc: z.string(),
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      linkedInHref: z.string(),
    })),
    visionCards: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })),
    values: z.array(z.object({
      title: z.string(),
      body: z.string(),
      iconName: z.string(),
    })),
    companyStats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    offices: z.array(z.object({
      name: z.string(),
      address: z.string(),
    })),
  }),
});

// Contact page structured data
const contactPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroHeading: z.string(),
    formHeading: z.string(),
    formSubtext: z.string(),
    trustedBrandsLabel: z.string(),
    trustedBrandsSubtext: z.string(),
    formAction: z.string(),
    formSubject: z.string(),
    formRedirectUrl: z.string(),
    demoFeatures: z.array(z.string()),
    industryOptions: z.array(z.string()),
  }),
});

// Demo page structured data
const demoPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroLabel: z.string(),
    heroHeading: z.string(),
    heroSubtext: z.string(),
    ctaHeading: z.string(),
    ctaSubtext: z.string(),
    featureSections: z.array(z.object({
      id: z.string(),
      industry: z.string(),
      reversed: z.boolean(),
      label: z.string(),
      heading: z.string(),
      tagline: z.string(),
      body: z.string(),
      linkText: z.string(),
      videoSrc: z.string(),
    })),
  }),
});

export const collections = { pages, vsPage, customersPage, companyPage, contactPage, demoPage };
