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

const whyCardSchema = z.object({
  iconName: z.string(),
  title: z.string(),
  body: z.string(),
});

// Home / index page structured data
const indexPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroBadgePlatform: z.string(),
    heroHeadingPart1: z.string(),
    heroHeadingAccent: z.string(),
    heroHeadingPart2: z.string(),
    heroSubtext: z.string(),
    heroCtaText: z.string(),
    shiftLabel: z.string(),
    shiftHeading: z.string(),
    shiftCallout: z.string(),
    shiftCards: z.array(z.object({ label: z.string(), title: z.string(), body: z.string() })),
    glucoseLabel: z.string(),
    glucoseHeading: z.string(),
    glucoseDescBlocks: z.array(z.object({ heading: z.string(), body: z.string() })),
    demoHighlightBadge: z.string(),
    demoHighlightHeading: z.string(),
    demoHighlightBody: z.string(),
    demoVideoCategory: z.string(),
    demoVideoTitle: z.string(),
    whyLabel: z.string(),
    whyHeading: z.string(),
    whyCards: z.array(whyCardSchema),
    platformBadge: z.string(),
    platformHeadingLine1: z.string(),
    platformHeadingLine2: z.string(),
    platformSubtext: z.string(),
    channelsLabel: z.string(),
    securityHeadingLine1: z.string(),
    securityHeadingHighlight: z.string(),
    securityBody: z.string(),
    securityTrustLinkText: z.string(),
    ctaHeadingPre: z.string(),
    ctaHeadingPost: z.string(),
    ctaBody: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    securityBadges: z.array(z.object({ src: z.string(), alt: z.string(), label: z.string() })),
    testimonials: z.array(z.object({
      quote: z.string(),
      avatarSrc: z.string(),
      avatarAlt: z.string(),
      name: z.string(),
      role: z.string(),
    })),
  }),
});

// ── Feature row item (iconName + title + body) ────────────────────────────────
const featureRowSchema = z.object({ iconName: z.string(), title: z.string(), body: z.string() });

// Product page structured data
const productPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroHeadingPart1: z.string(),
    heroHeadingAccent: z.string(),
    heroSubtext: z.string(),
    whyLabel: z.string(),
    whyHeading: z.string(),
    whySubtext: z.string(),
    diffLabel: z.string(),
    diffHeading: z.string(),
    diffSubtext: z.string(),
    connectorsLabel: z.string(),
    connectorsHeading: z.string(),
    connectorsSubtext: z.string(),
    connectorFeatures: z.array(featureRowSchema),
    analyticsLabel: z.string(),
    analyticsHeading: z.string(),
    analyticsSubtext: z.string(),
    analyticsFeatures: z.array(featureRowSchema),
    technologyLabel: z.string(),
    technologyHeading: z.string(),
    technologySubtext: z.string(),
    technologyBadges: z.array(z.string()),
    agnosticLabel: z.string(),
    agnosticHeading: z.string(),
    agnosticSubtext: z.string(),
    platformLabel: z.string(),
    glucoseCoreHeading: z.string(),
    glucoseCoreBody: z.string(),
    gmcTitle: z.string(),
    gmcSubtitle: z.string(),
    gmcBody: z.string(),
    gmcTags: z.array(z.string()),
    corpusTitle: z.string(),
    corpusSubtitle: z.string(),
    corpusBody: z.string(),
    toolsTitle: z.string(),
    toolsSubtitle: z.string(),
    toolsBody: z.string(),
    archAnalyticsTitle: z.string(),
    archAnalyticsSubtitle: z.string(),
    archAnalyticsBody: z.string(),
    archAnalyticsCaptures: z.array(z.string()),
    archAnalyticsSyncsTo: z.array(z.string()),
    comparisonLegacyLabel: z.string(),
    comparisonGlucoseLabel: z.string(),
    traditionalChatbotItems: z.array(z.string()),
    glucoseAgentItems: z.array(z.string()),
    devBadge: z.string(),
    devHeading: z.string(),
    devBody: z.string(),
    devCtaText: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
    ctaButtonText: z.string(),
  }),
});

// Industries page structured data
const industryCardSchema = z.object({ title: z.string(), body: z.string() });
const industryStatSchema = z.object({ v: z.string(), l: z.string() });
const iconCardSchema = z.object({ iconName: z.string(), title: z.string(), body: z.string() });

const industriesPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroBadge: z.string(),
    heroHeadingPart1: z.string(),
    heroHeadingAccent: z.string(),
    heroHeadingPart2: z.string(),
    heroSubtext: z.string(),
    overviewLabel: z.string(),
    overviewHeading: z.string(),
    overviewSubtext: z.string(),
    overviewPrimaryBadge: z.string(),
    overviewExpansionBadge: z.string(),
    overviewPrimary: z.array(z.object({ href: z.string(), iconName: z.string(), title: z.string(), desc: z.string() })),
    overviewExpansion: z.array(z.object({ href: z.string(), iconName: z.string(), title: z.string(), desc: z.string() })),
    automotiveLabel: z.string(),
    automotiveHeading: z.string(),
    automotiveSubtext: z.string(),
    automotiveImageSrc: z.string(),
    automotiveImageAlt: z.string(),
    automotiveCards: z.array(industryCardSchema),
    automotiveStats: z.array(industryStatSchema),
    primarySections: z.array(z.object({
      id: z.string(),
      bg: z.string(),
      label: z.string(),
      heading: z.string(),
      subtext: z.string(),
      cards: z.array(industryCardSchema),
      stats: z.array(industryStatSchema),
    })),
    expansionSections: z.array(z.object({
      id: z.string(),
      bg: z.string(),
      label: z.string(),
      heading: z.string(),
      subtext: z.string(),
      ctaText: z.string(),
      cards: z.array(iconCardSchema),
    })),
    crossBenefitsLabel: z.string(),
    crossBenefitsHeading: z.string(),
    crossBenefitsSubtext: z.string(),
    crossBenefits: z.array(z.object({ iconName: z.string(), title: z.string(), desc: z.string() })),
    ctaBadge: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
    ctaButtonText: z.string(),
  }),
});

export const collections = { pages, vsPage, customersPage, companyPage, contactPage, demoPage, indexPage, productPage, industriesPage };
