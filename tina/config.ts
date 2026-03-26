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
              { type: 'string', name: 'imageSrc', label: 'Image URL' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
              { type: 'string', name: 'logoSrc', label: 'Logo URL' },
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
              { type: 'string', name: 'logoSrc', label: 'Logo URL' },
              { type: 'string', name: 'logoAlt', label: 'Logo Alt' },
              { type: 'string', name: 'avatarSrc', label: 'Avatar URL' },
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
              { type: 'string', name: 'imageSrc', label: 'Image URL' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
              { type: 'string', name: 'logoSrc', label: 'Logo URL' },
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
              { type: 'string', name: 'imageSrc', label: 'Image URL' },
              { type: 'string', name: 'imageAlt', label: 'Image Alt' },
            ],
          },
        ],
      },

    ],
  },
});
