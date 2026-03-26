// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "Images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── Markdown Pages (Terms, Privacy) ──────────────────────────────────
      {
        name: "pages",
        label: "\u{1F4C4} Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true
          },
          {
            type: "string",
            name: "subtitle",
            label: "Page Subtitle"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body Content",
            isBody: true
          }
        ]
      },
      // ── VS Comparison Page ────────────────────────────────────────────────
      {
        name: "vsPage",
        label: "\u2694\uFE0F VS Comparison Page",
        path: "src/content/vsPage",
        format: "json",
        fields: [
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Subtext", ui: { component: "textarea" } },
          { type: "string", name: "sectionLabel", label: "Section Label" },
          { type: "string", name: "sectionHeading", label: "Section Heading" },
          { type: "string", name: "sectionSubtext", label: "Section Subtext", ui: { component: "textarea" } },
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
          { type: "string", name: "ctaSubtext", label: "CTA Subtext", ui: { component: "textarea" } },
          // Comparison Blocks
          {
            type: "object",
            name: "comparisonBlocks",
            label: "Comparison Blocks (4)",
            list: true,
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "bullets", label: "Bullets", list: true },
              { type: "string", name: "visualTitle", label: "Visual Title" },
              { type: "string", name: "visualDesc", label: "Visual Description", ui: { component: "textarea" } }
            ]
          },
          // Feature Table 1 — vs Traditional Chatbots
          {
            type: "object",
            name: "featureTable1",
            label: "Feature Table \u2014 vs Alternatives",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
              { type: "string", name: "col2", label: "Column 2 Header" },
              { type: "string", name: "col3", label: "Column 3 Header" },
              {
                type: "object",
                name: "rows",
                label: "Rows",
                list: true,
                fields: [
                  { type: "string", name: "feature", label: "Feature" },
                  { type: "string", name: "glucose", label: "GLUCOSE", options: ["check", "cross", "partial"] },
                  { type: "string", name: "col2", label: "Col 2", options: ["check", "cross", "partial"] },
                  { type: "string", name: "col3", label: "Col 3", options: ["check", "cross", "partial"] }
                ]
              }
            ]
          },
          // Feature Table 2 — vs AI-Native Platforms
          {
            type: "object",
            name: "featureTable2",
            label: "Feature Table \u2014 vs AI-Native Platforms",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
              { type: "string", name: "col2", label: "Column 2 Header" },
              { type: "string", name: "col3", label: "Column 3 Header" },
              {
                type: "object",
                name: "rows",
                label: "Rows",
                list: true,
                fields: [
                  { type: "string", name: "feature", label: "Feature" },
                  { type: "string", name: "glucose", label: "GLUCOSE", options: ["check", "cross", "partial"] },
                  { type: "string", name: "col2", label: "Col 2", options: ["check", "cross", "partial"] },
                  { type: "string", name: "col3", label: "Col 3", options: ["check", "cross", "partial"] }
                ]
              }
            ]
          },
          // Engagement Stack
          {
            type: "object",
            name: "engagementStack",
            label: "Engagement Stack Section",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              { type: "string", name: "legacyLabel", label: "Legacy Era Label" },
              { type: "string", name: "legacyItems", label: "Legacy Era Items", list: true },
              { type: "string", name: "agenticLabel", label: "Agentic Era Label" },
              { type: "string", name: "agenticItems", label: "Agentic Era Items", list: true }
            ]
          },
          // Testimonials
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials Carousel",
            fields: [
              { type: "string", name: "label", label: "Section Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtext", label: "Subtext", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Testimonial Slides",
                list: true,
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  { type: "image", name: "avatarSrc", label: "Avatar Image" },
                  { type: "string", name: "avatarAlt", label: "Avatar Alt" }
                ]
              }
            ]
          },
          // Pricing
          { type: "string", name: "pricingLabel", label: "Pricing Label" },
          { type: "string", name: "pricingHeading", label: "Pricing Heading" },
          { type: "string", name: "pricingSubtext", label: "Pricing Subtext", ui: { component: "textarea" } }
        ]
      },
      // ── Customers Page ────────────────────────────────────────────────────
      {
        name: "customersPage",
        label: "\u{1F3C6} Customers Page",
        path: "src/content/customersPage",
        format: "json",
        fields: [
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Subtext", ui: { component: "textarea" } },
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
          { type: "string", name: "ctaSubtext", label: "CTA Subtext", ui: { component: "textarea" } },
          // Featured Customer
          {
            type: "object",
            name: "featuredCustomer",
            label: "Featured Customer (IHH)",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "href", label: "Link URL" },
              { type: "image", name: "imageSrc", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
              { type: "image", name: "logoSrc", label: "Logo" },
              { type: "string", name: "logoAlt", label: "Logo Alt" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" }
                ]
              }
            ]
          },
          // Featured Testimonial
          {
            type: "object",
            name: "featuredTestimonial",
            label: "Featured Testimonial",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "name", label: "Person Name" },
              { type: "string", name: "role", label: "Person Role" },
              { type: "image", name: "logoSrc", label: "Logo" },
              { type: "string", name: "logoAlt", label: "Logo Alt" },
              { type: "image", name: "avatarSrc", label: "Avatar Image" },
              { type: "string", name: "avatarAlt", label: "Avatar Alt" }
            ]
          },
          // Results Grid
          {
            type: "object",
            name: "results",
            label: "Results Grid (3 cards)",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "industry", label: "Industry Tag" },
              { type: "string", name: "href", label: "Link URL" },
              { type: "image", name: "imageSrc", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
              { type: "image", name: "logoSrc", label: "Logo" },
              { type: "string", name: "logoAlt", label: "Logo Alt" },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" }
                ]
              }
            ]
          },
          // Success Stories
          {
            type: "object",
            name: "successStories",
            label: "Success Stories",
            list: true,
            fields: [
              { type: "string", name: "brand", label: "Brand Name" },
              { type: "string", name: "title", label: "Story Title" },
              { type: "string", name: "body", label: "Story Body", ui: { component: "textarea" } },
              { type: "string", name: "href", label: "Link URL" },
              { type: "image", name: "imageSrc", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt" }
            ]
          }
        ]
      },
      // ── Company Page ──────────────────────────────────────────────────────────
      {
        name: "companyPage",
        label: "\u{1F3E2} Company Page",
        path: "src/content/companyPage",
        format: "json",
        fields: [
          // Hero
          { type: "string", name: "heroLabel", label: "Hero Label" },
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Subtext", ui: { component: "textarea" } },
          { type: "image", name: "heroImageSrc", label: "Hero Image" },
          { type: "string", name: "heroImageAlt", label: "Hero Image Alt" },
          // Mission
          { type: "string", name: "missionHeading", label: "Mission Heading", ui: { component: "textarea" } },
          { type: "string", name: "missionBody", label: "Mission Body", ui: { component: "textarea" } },
          // Team
          { type: "string", name: "teamHeading", label: "Team Section Heading" },
          { type: "string", name: "teamSubtext", label: "Team Section Subtext", ui: { component: "textarea" } },
          // Vision
          { type: "string", name: "visionLabel", label: "Vision Label" },
          { type: "string", name: "visionHeading", label: "Vision Heading" },
          // Stats
          { type: "string", name: "statsLabel", label: "Stats Section Label" },
          { type: "string", name: "statsHeading", label: "Stats Section Heading" },
          { type: "string", name: "statsSubtext", label: "Stats Section Subtext", ui: { component: "textarea" } },
          // Global Presence
          { type: "string", name: "globalPresenceHeading", label: "Global Presence Heading" },
          { type: "string", name: "globalPresenceBody1", label: "Global Presence Body 1", ui: { component: "textarea" } },
          { type: "string", name: "globalPresenceBody2", label: "Global Presence Body 2", ui: { component: "textarea" } },
          // CTA
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
          { type: "string", name: "ctaSubtext", label: "CTA Subtext", ui: { component: "textarea" } },
          // Team Members
          {
            type: "object",
            name: "teamMembers",
            label: "Team Members",
            list: true,
            fields: [
              { type: "image", name: "imageSrc", label: "Photo" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
              { type: "string", name: "linkedInHref", label: "LinkedIn URL" }
            ]
          },
          // Vision Cards
          {
            type: "object",
            name: "visionCards",
            label: "Vision Cards",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
            ]
          },
          // Values
          {
            type: "object",
            name: "values",
            label: "Company Values",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              {
                type: "string",
                name: "iconName",
                label: "Icon",
                options: ["trustShield", "smiley", "star", "lightning", "heart"]
              }
            ]
          },
          // Company Stats
          {
            type: "object",
            name: "companyStats",
            label: "Company Stats",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          // Offices
          {
            type: "object",
            name: "offices",
            label: "Office Locations",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Office Name" },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ── Contact Page ──────────────────────────────────────────────────────────
      {
        name: "contactPage",
        label: "\u{1F4EC} Contact Page",
        path: "src/content/contactPage",
        format: "json",
        fields: [
          { type: "string", name: "heroHeading", label: "Left Column Heading", ui: { component: "textarea" } },
          { type: "string", name: "formHeading", label: "Form Heading" },
          { type: "string", name: "formSubtext", label: "Form Subtext", ui: { component: "textarea" } },
          { type: "string", name: "trustedBrandsLabel", label: "Trusted Brands Label" },
          { type: "string", name: "trustedBrandsSubtext", label: "Trusted Brands Subtext", ui: { component: "textarea" } },
          { type: "string", name: "formAction", label: "Form Action URL" },
          { type: "string", name: "formSubject", label: "Form Email Subject" },
          { type: "string", name: "formRedirectUrl", label: "Form Redirect URL" },
          { type: "string", name: "demoFeatures", label: "Feature Bullets", list: true },
          { type: "string", name: "industryOptions", label: "Industry Dropdown Options", list: true }
        ]
      },
      // ── Demo Page ─────────────────────────────────────────────────────────────
      {
        name: "demoPage",
        label: "\u{1F3AC} Demo Page",
        path: "src/content/demoPage",
        format: "json",
        fields: [
          // Hero
          { type: "string", name: "heroLabel", label: "Hero Label" },
          { type: "string", name: "heroHeading", label: "Hero Heading" },
          { type: "string", name: "heroSubtext", label: "Hero Subtext", ui: { component: "textarea" } },
          // CTA
          { type: "string", name: "ctaHeading", label: "CTA Heading" },
          { type: "string", name: "ctaSubtext", label: "CTA Subtext", ui: { component: "textarea" } },
          // Feature Sections
          {
            type: "object",
            name: "featureSections",
            label: "Feature Sections",
            list: true,
            fields: [
              { type: "string", name: "id", label: "Section ID (anchor)" },
              {
                type: "string",
                name: "industry",
                label: "Industry Filter Tag",
                options: ["automotive", "consumer"]
              },
              { type: "boolean", name: "reversed", label: "Reversed Layout (video on left)" },
              { type: "string", name: "label", label: "Category Badge" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "tagline", label: "Tagline (accent text)" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "linkText", label: "Link Text" },
              { type: "string", name: "videoSrc", label: "Video Path (e.g. Videos/filename.mp4)" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
