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

    ],
  },
});
