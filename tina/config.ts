import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'Images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [

      // ── Markdown Pages (Terms, Privacy) ──────────────────────────────────
      {
        name: 'pages',
        label: '📄 Pages',
        path: 'src/content/pages',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title',
            required: true,
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Page Subtitle',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body Content',
            isBody: true,
          },
        ],
      },

      // ── VS Comparison Page ────────────────────────────────────────────────
      {
        name: 'vsPage',
        label: '⚔️ VS Comparison Page',
        path: 'src/content/vsPage',
        format: 'json',
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubtext',  label: 'Hero Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'sectionLabel',   label: 'Section Label' },
          { type: 'string', name: 'sectionHeading', label: 'Section Heading' },
          { type: 'string', name: 'sectionSubtext', label: 'Section Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaHeading', label: 'CTA Heading' },
          { type: 'string', name: 'ctaSubtext',  label: 'CTA Subtext', ui: { component: 'textarea' } },

          // Comparison Blocks
          {
            type: 'object', name: 'comparisonBlocks', label: 'Comparison Blocks (4)',
            list: true,
            fields: [
              { type: 'string', name: 'heading',    label: 'Heading' },
              { type: 'string', name: 'body',       label: 'Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'bullets',    label: 'Bullets', list: true },
              { type: 'string', name: 'visualTitle', label: 'Visual Title' },
              { type: 'string', name: 'visualDesc',  label: 'Visual Description', ui: { component: 'textarea' } },
            ],
          },

          // Feature Table 1 — vs Traditional Chatbots
          {
            type: 'object', name: 'featureTable1', label: 'Feature Table — vs Alternatives',
            fields: [
              { type: 'string', name: 'label',   label: 'Section Label' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subtext', label: 'Subtext', ui: { component: 'textarea' } },
              { type: 'string', name: 'col2',    label: 'Column 2 Header' },
              { type: 'string', name: 'col3',    label: 'Column 3 Header' },
              {
                type: 'object', name: 'rows', label: 'Rows', list: true,
                fields: [
                  { type: 'string', name: 'feature', label: 'Feature' },
                  { type: 'string', name: 'glucose', label: 'GLUCOSE', options: ['check', 'cross', 'partial'] },
                  { type: 'string', name: 'col2',    label: 'Col 2',   options: ['check', 'cross', 'partial'] },
                  { type: 'string', name: 'col3',    label: 'Col 3',   options: ['check', 'cross', 'partial'] },
                ],
              },
            ],
          },

          // Feature Table 2 — vs AI-Native Platforms
          {
            type: 'object', name: 'featureTable2', label: 'Feature Table — vs AI-Native Platforms',
            fields: [
              { type: 'string', name: 'label',   label: 'Section Label' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subtext', label: 'Subtext', ui: { component: 'textarea' } },
              { type: 'string', name: 'col2',    label: 'Column 2 Header' },
              { type: 'string', name: 'col3',    label: 'Column 3 Header' },
              {
                type: 'object', name: 'rows', label: 'Rows', list: true,
                fields: [
                  { type: 'string', name: 'feature', label: 'Feature' },
                  { type: 'string', name: 'glucose', label: 'GLUCOSE', options: ['check', 'cross', 'partial'] },
                  { type: 'string', name: 'col2',    label: 'Col 2',   options: ['check', 'cross', 'partial'] },
                  { type: 'string', name: 'col3',    label: 'Col 3',   options: ['check', 'cross', 'partial'] },
                ],
              },
            ],
          },

          // Engagement Stack
          {
            type: 'object', name: 'engagementStack', label: 'Engagement Stack Section',
            fields: [
              { type: 'string', name: 'heading',      label: 'Section Heading' },
              { type: 'string', name: 'legacyLabel',  label: 'Legacy Era Label' },
              { type: 'string', name: 'legacyItems',  label: 'Legacy Era Items', list: true },
              { type: 'string', name: 'agenticLabel', label: 'Agentic Era Label' },
              { type: 'string', name: 'agenticItems', label: 'Agentic Era Items', list: true },
            ],
          },

          // Testimonials
          {
            type: 'object', name: 'testimonials', label: 'Testimonials Carousel',
            fields: [
              { type: 'string', name: 'label',   label: 'Section Label' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subtext', label: 'Subtext', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'items', label: 'Testimonial Slides', list: true,
                fields: [
                  { type: 'string', name: 'quote',     label: 'Quote', ui: { component: 'textarea' } },
                  { type: 'string', name: 'name',      label: 'Name' },
                  { type: 'string', name: 'role',      label: 'Role' },
                  { type: 'image',  name: 'avatarSrc', label: 'Avatar Image' },
                  { type: 'string', name: 'avatarAlt', label: 'Avatar Alt' },
                ],
              },
            ],
          },

          // Pricing
          { type: 'string', name: 'pricingLabel',   label: 'Pricing Label' },
          { type: 'string', name: 'pricingHeading', label: 'Pricing Heading' },
          { type: 'string', name: 'pricingSubtext', label: 'Pricing Subtext', ui: { component: 'textarea' } },
        ],
      },

      // ── Customers Page ────────────────────────────────────────────────────
      {
        name: 'customersPage',
        label: '🏆 Customers Page',
        path: 'src/content/customersPage',
        format: 'json',
        fields: [
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubtext',  label: 'Hero Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaHeading', label: 'CTA Heading' },
          { type: 'string', name: 'ctaSubtext',  label: 'CTA Subtext', ui: { component: 'textarea' } },

          // Featured Customer
          {
            type: 'object',
            name: 'featuredCustomer',
            label: 'Featured Customer (IHH)',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'body', label: 'Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'href', label: 'Link URL' },
              { type: 'image',  name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
              { type: 'image',  name: 'logoSrc', label: 'Logo' },
              { type: 'string', name: 'logoAlt', label: 'Logo Alt' },
              {
                type: 'object', name: 'metrics', label: 'Metrics', list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'value', label: 'Value' },
                ],
              },
            ],
          },

          // Featured Testimonial
          {
            type: 'object',
            name: 'featuredTestimonial',
            label: 'Featured Testimonial',
            fields: [
              { type: 'string', name: 'quote', label: 'Quote', ui: { component: 'textarea' } },
              { type: 'string', name: 'name', label: 'Person Name' },
              { type: 'string', name: 'role', label: 'Person Role' },
              { type: 'image',  name: 'logoSrc', label: 'Logo' },
              { type: 'string', name: 'logoAlt', label: 'Logo Alt' },
              { type: 'image',  name: 'avatarSrc', label: 'Avatar Image' },
              { type: 'string', name: 'avatarAlt', label: 'Avatar Alt' },
            ],
          },

          // Results Grid
          {
            type: 'object',
            name: 'results',
            label: 'Results Grid (3 cards)',
            list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'industry', label: 'Industry Tag' },
              { type: 'string', name: 'href', label: 'Link URL' },
              { type: 'image',  name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
              { type: 'image',  name: 'logoSrc', label: 'Logo' },
              { type: 'string', name: 'logoAlt', label: 'Logo Alt' },
              {
                type: 'object', name: 'metrics', label: 'Metrics', list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'value', label: 'Value' },
                ],
              },
            ],
          },

          // Success Stories
          {
            type: 'object',
            name: 'successStories',
            label: 'Success Stories',
            list: true,
            fields: [
              { type: 'string', name: 'brand', label: 'Brand Name' },
              { type: 'string', name: 'title', label: 'Story Title' },
              { type: 'string', name: 'body', label: 'Story Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'href', label: 'Link URL' },
              { type: 'image',  name: 'imageSrc', label: 'Image' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
            ],
          },
        ],
      },


      // ── Index / Home Page ─────────────────────────────────────────────────────
      {
        name: 'indexPage',
        label: '🏠 Home Page',
        path: 'src/content/indexPage',
        format: 'json',
        fields: [
          // Hero
          { type: 'string', name: 'heroBadgePlatform',  label: 'Hero Platform Badge' },
          { type: 'string', name: 'heroHeadingPart1',   label: 'Hero Heading — Part 1' },
          { type: 'string', name: 'heroHeadingAccent',  label: 'Hero Heading — Accent (gold)' },
          { type: 'string', name: 'heroHeadingPart2',   label: 'Hero Heading — Part 2' },
          { type: 'string', name: 'heroSubtext',        label: 'Hero Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroCtaText',        label: 'Hero CTA Button Text' },
          // The Shift
          { type: 'string', name: 'shiftLabel',   label: 'Shift Section Label' },
          { type: 'string', name: 'shiftHeading', label: 'Shift Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'shiftCallout', label: 'Shift Callout Text' },
          {
            type: 'object', name: 'shiftCards', label: 'Shift Cards', list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Card Label (e.g. Legacy)' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body',  label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          // What is GLUCOSE
          { type: 'string', name: 'glucoseLabel',   label: 'What is GLUCOSE — Label' },
          { type: 'string', name: 'glucoseHeading', label: 'What is GLUCOSE — Heading' },
          {
            type: 'object', name: 'glucoseDescBlocks', label: 'Description Blocks', list: true,
            fields: [
              { type: 'string', name: 'heading', label: 'Block Heading' },
              { type: 'string', name: 'body',    label: 'Block Body', ui: { component: 'textarea' } },
            ],
          },
          // Demo Highlight
          { type: 'string', name: 'demoHighlightBadge',   label: 'Demo Highlight Badge' },
          { type: 'string', name: 'demoHighlightHeading', label: 'Demo Highlight Heading' },
          { type: 'string', name: 'demoHighlightBody',    label: 'Demo Highlight Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'demoVideoCategory',    label: 'Demo Video Category Label' },
          { type: 'string', name: 'demoVideoTitle',       label: 'Demo Video Title' },
          // Why It Matters
          { type: 'string', name: 'whyLabel',   label: 'Why Section Label' },
          { type: 'string', name: 'whyHeading', label: 'Why Section Heading' },
          {
            type: 'object', name: 'whyCards', label: 'Why Cards', list: true,
            fields: [
              {
                type: 'string', name: 'iconName', label: 'Icon',
                options: ['sparkles', 'users', 'shield', 'pulse', 'layers', 'monitor', 'globe', 'bot', 'chat', 'gear', 'star', 'heart'],
              },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body',  label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          // Platform Section
          { type: 'string', name: 'platformBadge',        label: 'Platform Badge' },
          { type: 'string', name: 'platformHeadingLine1', label: 'Platform Heading Line 1' },
          { type: 'string', name: 'platformHeadingLine2', label: 'Platform Heading Line 2' },
          { type: 'string', name: 'platformSubtext',      label: 'Platform Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'channelsLabel',        label: 'Channels Row Label' },
          // Security
          { type: 'string', name: 'securityHeadingLine1',    label: 'Security Heading Line 1' },
          { type: 'string', name: 'securityHeadingHighlight', label: 'Security Heading Highlight (gold)' },
          { type: 'string', name: 'securityBody',            label: 'Security Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'securityTrustLinkText',   label: 'Trust Center Link Text' },
          // CTA
          { type: 'string', name: 'ctaHeadingPre',  label: 'CTA Heading Pre ("See what")' },
          { type: 'string', name: 'ctaHeadingPost', label: 'CTA Heading Post ("can do for you")' },
          { type: 'string', name: 'ctaBody',        label: 'CTA Body', ui: { component: 'textarea' } },
          // Metrics
          {
            type: 'object', name: 'metrics', label: 'Metrics Bar', list: true,
            fields: [
              { type: 'string', name: 'value', label: 'Value (e.g. 99.99%)' },
              { type: 'string', name: 'label', label: 'Label' },
            ],
          },
          // Security Badges
          {
            type: 'object', name: 'securityBadges', label: 'Security Badges', list: true,
            fields: [
              { type: 'image',  name: 'src',   label: 'Badge Image' },
              { type: 'string', name: 'alt',   label: 'Alt Text' },
              { type: 'string', name: 'label', label: 'Badge Label' },
            ],
          },
          // Testimonials
          {
            type: 'object', name: 'testimonials', label: 'Testimonials', list: true,
            fields: [
              { type: 'string', name: 'quote',     label: 'Quote', ui: { component: 'textarea' } },
              { type: 'image',  name: 'avatarSrc', label: 'Avatar Image' },
              { type: 'string', name: 'avatarAlt', label: 'Avatar Alt' },
              { type: 'string', name: 'name',      label: 'Name' },
              { type: 'string', name: 'role',      label: 'Role' },
            ],
          },
        ],
      },

      // ── Company Page ──────────────────────────────────────────────────────────
      {
        name: 'companyPage',
        label: '🏢 Company Page',
        path: 'src/content/companyPage',
        format: 'json',
        fields: [
          // Hero
          { type: 'string', name: 'heroLabel',    label: 'Hero Label' },
          { type: 'string', name: 'heroHeading',  label: 'Hero Heading' },
          { type: 'string', name: 'heroSubtext',  label: 'Hero Subtext', ui: { component: 'textarea' } },
          { type: 'image',  name: 'heroImageSrc', label: 'Hero Image' },
          { type: 'string', name: 'heroImageAlt', label: 'Hero Image Alt' },
          // Mission
          { type: 'string', name: 'missionHeading', label: 'Mission Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'missionBody',    label: 'Mission Body',    ui: { component: 'textarea' } },
          // Team
          { type: 'string', name: 'teamHeading', label: 'Team Section Heading' },
          { type: 'string', name: 'teamSubtext',  label: 'Team Section Subtext', ui: { component: 'textarea' } },
          // Vision
          { type: 'string', name: 'visionLabel',   label: 'Vision Label' },
          { type: 'string', name: 'visionHeading', label: 'Vision Heading' },
          // Stats
          { type: 'string', name: 'statsLabel',   label: 'Stats Section Label' },
          { type: 'string', name: 'statsHeading', label: 'Stats Section Heading' },
          { type: 'string', name: 'statsSubtext', label: 'Stats Section Subtext', ui: { component: 'textarea' } },
          // Global Presence
          { type: 'string', name: 'globalPresenceHeading', label: 'Global Presence Heading' },
          { type: 'string', name: 'globalPresenceBody1',   label: 'Global Presence Body 1', ui: { component: 'textarea' } },
          { type: 'string', name: 'globalPresenceBody2',   label: 'Global Presence Body 2', ui: { component: 'textarea' } },
          // CTA
          { type: 'string', name: 'ctaHeading', label: 'CTA Heading' },
          { type: 'string', name: 'ctaSubtext',  label: 'CTA Subtext', ui: { component: 'textarea' } },
          // Team Members
          {
            type: 'object', name: 'teamMembers', label: 'Team Members', list: true,
            fields: [
              { type: 'image',  name: 'imageSrc',     label: 'Photo' },
              { type: 'string', name: 'name',          label: 'Name' },
              { type: 'string', name: 'role',          label: 'Role' },
              { type: 'string', name: 'bio',           label: 'Bio', ui: { component: 'textarea' } },
              { type: 'string', name: 'linkedInHref',  label: 'LinkedIn URL' },
            ],
          },
          // Vision Cards
          {
            type: 'object', name: 'visionCards', label: 'Vision Cards', list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body',  label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          // Values
          {
            type: 'object', name: 'values', label: 'Company Values', list: true,
            fields: [
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'body',     label: 'Body', ui: { component: 'textarea' } },
              {
                type: 'string', name: 'iconName', label: 'Icon',
                options: ['trustShield', 'smiley', 'star', 'lightning', 'heart'],
              },
            ],
          },
          // Company Stats
          {
            type: 'object', name: 'companyStats', label: 'Company Stats', list: true,
            fields: [
              { type: 'string', name: 'value', label: 'Value' },
              { type: 'string', name: 'label', label: 'Label' },
            ],
          },
          // Offices
          {
            type: 'object', name: 'offices', label: 'Office Locations', list: true,
            fields: [
              { type: 'string', name: 'name',    label: 'Office Name' },
              { type: 'string', name: 'address', label: 'Address', ui: { component: 'textarea' } },
            ],
          },
        ],
      },

      // ── Contact Page ──────────────────────────────────────────────────────────
      {
        name: 'contactPage',
        label: '📬 Contact Page',
        path: 'src/content/contactPage',
        format: 'json',
        fields: [
          { type: 'string', name: 'heroHeading',        label: 'Left Column Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'formHeading',        label: 'Form Heading' },
          { type: 'string', name: 'formSubtext',        label: 'Form Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'trustedBrandsLabel', label: 'Trusted Brands Label' },
          { type: 'string', name: 'trustedBrandsSubtext', label: 'Trusted Brands Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'formAction',         label: 'Form Action URL' },
          { type: 'string', name: 'formSubject',        label: 'Form Email Subject' },
          { type: 'string', name: 'formRedirectUrl',    label: 'Form Redirect URL' },
          { type: 'string', name: 'demoFeatures',       label: 'Feature Bullets', list: true },
          { type: 'string', name: 'industryOptions',    label: 'Industry Dropdown Options', list: true },
        ],
      },

      // ── Product Page ──────────────────────────────────────────────────────────
      {
        name: 'productPage',
        label: '⚙️ Product Page',
        path: 'src/content/productPage',
        format: 'json',
        fields: [
          // Hero
          { type: 'string', name: 'heroHeadingPart1',  label: 'Hero Heading — Part 1' },
          { type: 'string', name: 'heroHeadingAccent', label: 'Hero Heading — Accent (gold)' },
          { type: 'string', name: 'heroSubtext',       label: 'Hero Subtext', ui: { component: 'textarea' } },
          // Why GLUCOSE
          { type: 'string', name: 'whyLabel',   label: 'Why Section Label' },
          { type: 'string', name: 'whyHeading', label: 'Why Section Heading' },
          { type: 'string', name: 'whySubtext', label: 'Why Section Subtext', ui: { component: 'textarea' } },
          // Differentiators
          { type: 'string', name: 'diffLabel',   label: 'Differentiators Label' },
          { type: 'string', name: 'diffHeading', label: 'Differentiators Heading' },
          { type: 'string', name: 'diffSubtext', label: 'Differentiators Subtext', ui: { component: 'textarea' } },
          // Connectors
          { type: 'string', name: 'connectorsLabel',   label: 'Connectors Label' },
          { type: 'string', name: 'connectorsHeading', label: 'Connectors Heading' },
          { type: 'string', name: 'connectorsSubtext', label: 'Connectors Subtext', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'connectorFeatures', label: 'Connector Feature Rows', list: true,
            fields: [
              { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'body',     label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          // Analytics
          { type: 'string', name: 'analyticsLabel',   label: 'Analytics Label' },
          { type: 'string', name: 'analyticsHeading', label: 'Analytics Heading' },
          { type: 'string', name: 'analyticsSubtext', label: 'Analytics Subtext', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'analyticsFeatures', label: 'Analytics Feature Rows', list: true,
            fields: [
              { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'body',     label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          // Technology
          { type: 'string', name: 'technologyLabel',   label: 'Technology Label' },
          { type: 'string', name: 'technologyHeading', label: 'Technology Heading' },
          { type: 'string', name: 'technologySubtext', label: 'Technology Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'technologyBadges',  label: 'Technology Badges', list: true },
          // Agnostic
          { type: 'string', name: 'agnosticLabel',   label: 'Agnostic Label' },
          { type: 'string', name: 'agnosticHeading', label: 'Agnostic Heading' },
          { type: 'string', name: 'agnosticSubtext', label: 'Agnostic Subtext', ui: { component: 'textarea' } },
          // Platform / How It Works
          { type: 'string', name: 'platformLabel',      label: 'Platform Section Label' },
          { type: 'string', name: 'glucoseCoreHeading', label: 'GLUCOSE Core Heading', ui: { component: 'textarea' } },
          { type: 'string', name: 'glucoseCoreBody',    label: 'GLUCOSE Core Body', ui: { component: 'textarea' } },
          // GMC
          { type: 'string', name: 'gmcTitle',    label: 'GMC Title' },
          { type: 'string', name: 'gmcSubtitle', label: 'GMC Subtitle' },
          { type: 'string', name: 'gmcBody',     label: 'GMC Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'gmcTags',     label: 'GMC Tags', list: true },
          // Corpus
          { type: 'string', name: 'corpusTitle',    label: 'Corpus Title' },
          { type: 'string', name: 'corpusSubtitle', label: 'Corpus Subtitle' },
          { type: 'string', name: 'corpusBody',     label: 'Corpus Body', ui: { component: 'textarea' } },
          // Tools
          { type: 'string', name: 'toolsTitle',    label: 'Tools Title' },
          { type: 'string', name: 'toolsSubtitle', label: 'Tools Subtitle' },
          { type: 'string', name: 'toolsBody',     label: 'Tools Body', ui: { component: 'textarea' } },
          // Analytics arch card
          { type: 'string', name: 'archAnalyticsTitle',    label: 'Analytics Card Title' },
          { type: 'string', name: 'archAnalyticsSubtitle', label: 'Analytics Card Subtitle' },
          { type: 'string', name: 'archAnalyticsBody',     label: 'Analytics Card Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'archAnalyticsCaptures', label: 'Analytics Captures', list: true },
          { type: 'string', name: 'archAnalyticsSyncsTo',  label: 'Analytics Syncs To', list: true },
          // Comparison
          { type: 'string', name: 'comparisonLegacyLabel',  label: 'Comparison Legacy Column Label' },
          { type: 'string', name: 'comparisonGlucoseLabel', label: 'Comparison GLUCOSE Column Label' },
          { type: 'string', name: 'traditionalChatbotItems', label: 'Traditional Chatbot Items', list: true },
          { type: 'string', name: 'glucoseAgentItems',       label: 'GLUCOSE Agent Items', list: true },
          // Developer Resources
          { type: 'string', name: 'devBadge',   label: 'Developer Badge' },
          { type: 'string', name: 'devHeading', label: 'Developer Heading' },
          { type: 'string', name: 'devBody',    label: 'Developer Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'devCtaText', label: 'Developer CTA Text' },
          // CTA
          { type: 'string', name: 'ctaHeading',    label: 'CTA Heading' },
          { type: 'string', name: 'ctaBody',       label: 'CTA Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaButtonText', label: 'CTA Button Text' },
        ],
      },

      // ── Industries Page ────────────────────────────────────────────────────────
      {
        name: 'industriesPage',
        label: '🏭 Industries Page',
        path: 'src/content/industriesPage',
        format: 'json',
        fields: [
          // Hero
          { type: 'string', name: 'heroBadge',         label: 'Hero Badge' },
          { type: 'string', name: 'heroHeadingPart1',  label: 'Hero Heading — Part 1' },
          { type: 'string', name: 'heroHeadingAccent', label: 'Hero Heading — Accent (gold)' },
          { type: 'string', name: 'heroHeadingPart2',  label: 'Hero Heading — Part 2' },
          { type: 'string', name: 'heroSubtext',       label: 'Hero Subtext', ui: { component: 'textarea' } },
          // Overview
          { type: 'string', name: 'overviewLabel',         label: 'Overview Section Label' },
          { type: 'string', name: 'overviewHeading',       label: 'Overview Heading' },
          { type: 'string', name: 'overviewSubtext',       label: 'Overview Subtext', ui: { component: 'textarea' } },
          { type: 'string', name: 'overviewPrimaryBadge',   label: 'Primary Industries Badge' },
          { type: 'string', name: 'overviewExpansionBadge', label: 'Expansion Verticals Badge' },
          {
            type: 'object', name: 'overviewPrimary', label: 'Primary Industry Cards', list: true,
            fields: [
              { type: 'string', name: 'href',     label: 'Anchor Link (e.g. #automotive)' },
              { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'desc',     label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object', name: 'overviewExpansion', label: 'Expansion Industry Cards', list: true,
            fields: [
              { type: 'string', name: 'href',     label: 'Anchor Link' },
              { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'desc',     label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          // Automotive
          { type: 'string', name: 'automotiveLabel',    label: 'Automotive Label' },
          { type: 'string', name: 'automotiveHeading',  label: 'Automotive Heading' },
          { type: 'string', name: 'automotiveSubtext',  label: 'Automotive Subtext', ui: { component: 'textarea' } },
          { type: 'image',  name: 'automotiveImageSrc', label: 'Automotive Image' },
          { type: 'string', name: 'automotiveImageAlt', label: 'Automotive Image Alt' },
          {
            type: 'object', name: 'automotiveCards', label: 'Automotive Feature Cards', list: true,
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body',  label: 'Body', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object', name: 'automotiveStats', label: 'Automotive Stats', list: true,
            fields: [
              { type: 'string', name: 'v', label: 'Value' },
              { type: 'string', name: 'l', label: 'Label' },
            ],
          },
          // Primary Sections (Healthcare, Electronics, Financial, Retail, Industrial)
          {
            type: 'object', name: 'primarySections', label: 'Primary Industry Sections', list: true,
            fields: [
              { type: 'string', name: 'id',      label: 'Section ID (anchor)' },
              { type: 'string', name: 'bg',      label: 'Background Class (e.g. bg-bg-secondary)' },
              { type: 'string', name: 'label',   label: 'Section Label' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subtext', label: 'Subtext', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'cards', label: 'Feature Cards', list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'body',  label: 'Body', ui: { component: 'textarea' } },
                ],
              },
              {
                type: 'object', name: 'stats', label: 'Stats', list: true,
                fields: [
                  { type: 'string', name: 'v', label: 'Value' },
                  { type: 'string', name: 'l', label: 'Label' },
                ],
              },
            ],
          },
          // Expansion Sections (Commercial, Property, Energy, Hospitality, Consumer Goods)
          {
            type: 'object', name: 'expansionSections', label: 'Expansion Industry Sections', list: true,
            fields: [
              { type: 'string', name: 'id',      label: 'Section ID (anchor)' },
              { type: 'string', name: 'bg',      label: 'Background Class' },
              { type: 'string', name: 'label',   label: 'Section Label' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subtext', label: 'Subtext', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaText', label: 'CTA Button Text' },
              {
                type: 'object', name: 'cards', label: 'Icon Feature Cards', list: true,
                fields: [
                  { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
                  { type: 'string', name: 'title',    label: 'Title' },
                  { type: 'string', name: 'body',     label: 'Body', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          // Cross-Industry Benefits
          { type: 'string', name: 'crossBenefitsLabel',   label: 'Cross-Benefits Label' },
          { type: 'string', name: 'crossBenefitsHeading', label: 'Cross-Benefits Heading' },
          { type: 'string', name: 'crossBenefitsSubtext', label: 'Cross-Benefits Subtext', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'crossBenefits', label: 'Cross-Industry Benefit Cards', list: true,
            fields: [
              { type: 'string', name: 'iconName', label: 'Icon Name (Lucide)' },
              { type: 'string', name: 'title',    label: 'Title' },
              { type: 'string', name: 'desc',     label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          // CTA
          { type: 'string', name: 'ctaBadge',      label: 'CTA Badge' },
          { type: 'string', name: 'ctaHeading',    label: 'CTA Heading' },
          { type: 'string', name: 'ctaBody',       label: 'CTA Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaButtonText', label: 'CTA Button Text' },
        ],
      },

      // ── Demo Page ─────────────────────────────────────────────────────────────
      {
        name: 'demoPage',
        label: '🎬 Demo Page',
        path: 'src/content/demoPage',
        format: 'json',
        fields: [
          // Hero
          { type: 'string', name: 'heroLabel',   label: 'Hero Label' },
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubtext', label: 'Hero Subtext', ui: { component: 'textarea' } },
          // CTA
          { type: 'string', name: 'ctaHeading', label: 'CTA Heading' },
          { type: 'string', name: 'ctaSubtext',  label: 'CTA Subtext', ui: { component: 'textarea' } },
          // Feature Sections
          {
            type: 'object', name: 'featureSections', label: 'Feature Sections', list: true,
            fields: [
              { type: 'string',  name: 'id',        label: 'Section ID (anchor)' },
              {
                type: 'string', name: 'industry', label: 'Industry Filter Tag',
                options: ['automotive', 'consumer'],
              },
              { type: 'boolean', name: 'reversed',  label: 'Reversed Layout (video on left)' },
              { type: 'string',  name: 'label',     label: 'Category Badge' },
              { type: 'string',  name: 'heading',   label: 'Heading' },
              { type: 'string',  name: 'tagline',   label: 'Tagline (accent text)' },
              { type: 'string',  name: 'body',      label: 'Body', ui: { component: 'textarea' } },
              { type: 'string',  name: 'linkText',  label: 'Link Text' },
              { type: 'string',  name: 'videoSrc',  label: 'Video Path (e.g. Videos/filename.mp4)' },
            ],
          },
        ],
      },

    ],
  },
});
