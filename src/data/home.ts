// ── Platform Pillars ─────────────────────────────────────────────────────────
// NOTE: shiftCards, whyCards, homeMetrics, securityBadges, testimonials
// are now managed via CMS in src/content/indexPage/index.json
// iconKey maps to Lucide icon name — resolved in index.astro

export const pillarsData = [
  { iconKey: 'Route',           title: 'Journeys',      desc: 'Goal-driven agents',      rotate: true },
  { iconKey: 'FileText',        title: 'Corpus',        desc: 'Product knowledge',        rotate: false },
  { iconKey: 'Wrench',          title: 'Integrations',  desc: 'Your systems, connected',  rotate: false },
  { iconKey: 'BarChart3',       title: 'Analytics',     desc: 'Customer insights',        rotate: false },
  { iconKey: 'LayoutDashboard', title: 'GMC',           desc: 'No-code management',       rotate: false },
] as const;

export type PillarIconKey = typeof pillarsData[number]['iconKey'];

// ── Channels ─────────────────────────────────────────────────────────────────
// iconKey maps to brand/social Astro icon component — resolved in index.astro

export const channelsData = [
  { iconKey: 'WhatsApp',  label: 'WhatsApp',  props: { width: 18, height: 18 } },
  { iconKey: 'Telegram',  label: 'Telegram',  props: { width: 18, height: 18 } },
  { iconKey: 'Line',      label: 'Line',      props: { width: 18, height: 18 } },
  { iconKey: 'Messenger', label: 'Messenger', props: { width: 18, height: 18 } },
  { iconKey: 'Viber',     label: 'Viber',     props: { width: 18, height: 18 } },
  { iconKey: 'Monitor',   label: 'Web',       props: { size: 18, stroke: '#FFC000' } },
  { iconKey: 'Activity',  label: 'Voice',     props: { size: 18, stroke: '#FFC000' } },
] as const;

// ── Integration Groups ────────────────────────────────────────────────────────
// iconKey maps to brand Astro icon component — resolved in index.astro

export const integrationGroupsData = [
  {
    heading: 'AI Models',
    items: [
      { iconKey: 'OpenAI',  label: 'OpenAI' },
      { iconKey: 'Claude',  label: 'Claude' },
      { iconKey: 'Gemini',  label: 'Gemini' },
      { iconKey: 'Llama',   label: 'Llama' },
      { iconKey: 'Bedrock', label: 'Bedrock' },
    ],
  },
  {
    heading: 'Cloud Providers',
    items: [
      { iconKey: 'AWS',         label: 'AWS' },
      { iconKey: 'GoogleCloud', label: 'Google Cloud' },
      { iconKey: 'Azure',       label: 'Azure' },
    ],
  },
  {
    heading: 'Enterprise Tools',
    items: [
      { iconKey: 'Salesforce', label: 'Salesforce' },
      { iconKey: 'HubSpot',    label: 'HubSpot' },
      { iconKey: 'Zendesk',    label: 'Zendesk' },
      { iconKey: 'RestAPI',    label: 'REST APIs' },
    ],
  },
];

// ── Structured Data (JSON-LD) ─────────────────────────────────────────────────

export const homeStructuredData = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '5.Y',
    url: 'https://www.five-whys.com',
    logo: 'https://www.five-whys.com/Images/logo.png',
    description: 'GLUCOSE is enterprise AI for autonomous brand and product experiences across multiple channels.',
    sameAs: ['https://www.linkedin.com/company/five-whys'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://www.five-whys.com/contact',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '5.Y',
    url: 'https://www.five-whys.com',
  },
]);
