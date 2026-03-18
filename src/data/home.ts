// ── Shift Cards ─────────────────────────────────────────────────────────────

export const shiftCards = [
  {
    label: 'Legacy',
    title: 'CRM is reactive',
    body: 'Traditional CRM stores records and triggers workflows — it cannot adapt in real time to non-linear customer journeys.',
  },
  {
    label: 'Current',
    title: 'Chatbots are scripted',
    body: "Rule-based bots follow decision trees. They break on complexity, can't handle multi-intent requests, and frustrate customers.",
  },
  {
    label: 'Future',
    title: 'Agentic AI is autonomous',
    body: 'Goal-driven AI agents reason, adapt, and act — representing your brand across the entire customer lifecycle without scripts.',
  },
];

// ── Why Cards ────────────────────────────────────────────────────────────────

import { icons } from '../assets/icons/svgs';

export const whyCards = [
  {
    iconSVG: icons.sparkles,
    title: 'AI Experience Agents',
    body: 'Create exceptional brand and product experiences with autonomous AI agents that engage every customer—personally and contextually across every channel.',
  },
  {
    iconSVG: icons.users,
    title: 'Own Your Brand Representation',
    body: 'AI is becoming the interface. GLUCOSE gives you full control over how your brand is represented—your voice, your rules, your customer relationships.',
  },
  {
    iconSVG: icons.shield,
    title: 'Safety, Guardrails & Eval',
    body: 'Enterprise-grade trust built in. Automated testing, real-time evaluation, compliance guardrails, and full auditability—so your AI always stays on brand and on policy.',
  },
  {
    iconSVG: icons.pulse,
    title: 'Insights & Analytics',
    body: "Every conversation is data. Not surveys, not inferred behavior—actual customer intent, unfiltered, from real interactions. Insights you can't get anywhere else.",
  },
];

// ── Platform Pillars ─────────────────────────────────────────────────────────
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

// ── Metrics Bar ───────────────────────────────────────────────────────────────

export const homeMetrics = [
  { value: '99.99%',  label: 'Accuracy' },
  { value: '+30 Pts', label: 'CSAT' },
  { value: '97%',     label: 'Faster Resolution' },
  { value: 'SOC2',    label: '& ISO 27001 certified' },
];

// ── Security Badges ───────────────────────────────────────────────────────────

export const securityBadges = [
  { src: '/Images/soc2.webp',      alt: 'SOC 2 Type II Certified', label: 'SOC 2' },
  { src: '/Images/iso-27001.webp', alt: 'ISO 27001 Certified',     label: 'ISO 27001' },
  { src: '/Images/hipaa.webp',     alt: 'HIPAA Compliant',         label: 'HIPAA' },
  { src: '/Images/gdpr.webp',      alt: 'GDPR Compliant',          label: 'GDPR' },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote: 'GLUCOSE transformed how we engage with customers post-purchase. The AI understands our bikes better than most humans—and it speaks our brand voice perfectly. Our customers get instant, accurate answers about everything from maintenance to accessories.',
    avatarSrc: '/Images/ruff.png',
    avatarAlt: 'RUFF CYCLES',
    name: 'CEO',
    role: 'RUFF CYCLES',
  },
  {
    quote: "The platform's ability to understand context and deliver personalized responses transformed customer support operations. It's like having a team of experts available 24/7.",
    avatarSrc: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Gennady K.',
    name: 'Gennady K.',
    role: 'CEO, Technology Services',
  },
  {
    quote: "GLUCOSE changed how we think about customer engagement. The AI doesn't just respond—it understands our products and brand voice perfectly.",
    avatarSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Product Head',
    name: 'Product Head',
    role: 'Lifestyle Mobility',
  },
  {
    quote: "We've seen a dramatic improvement in response quality and customer satisfaction since implementing GLUCOSE. The autonomous agents handle complex queries with ease.",
    avatarSrc: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Tech Lead',
    name: 'Tech Lead',
    role: 'Enterprise Software',
  },
  {
    quote: 'The platform handles everything from warranty inquiries to service bookings autonomously. Our customers get instant, accurate responses around the clock.',
    avatarSrc: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Service Manager',
    name: 'Service Manager',
    role: 'Automotive',
  },
  {
    quote: 'Patient engagement has never been easier. The AI understands medical context and provides appropriate guidance while maintaining compliance.',
    avatarSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Digital Health Director',
    name: 'Digital Health Director',
    role: 'Healthcare',
  },
  {
    quote: 'Our customers receive personalized financial guidance instantly. The compliance guardrails give us confidence to scale without risk.',
    avatarSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'VP Customer Experience',
    name: 'VP Customer Experience',
    role: 'Financial Services',
  },
  {
    quote: 'Post-purchase support is now a competitive advantage. Customers love getting instant help with setup and troubleshooting.',
    avatarSrc: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Product Manager',
    name: 'Product Manager',
    role: 'Consumer Electronics',
  },
  {
    quote: 'We reduced support costs by 40% while improving CSAT scores. The AI handles routine queries so our team can focus on complex issues.',
    avatarSrc: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'CX Operations Lead',
    name: 'CX Operations Lead',
    role: 'Telecommunications',
  },
  {
    quote: "Subscriber engagement increased significantly. The AI recommends content and handles account queries with our brand's personality.",
    avatarSrc: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=112&h=112&fit=crop&crop=face',
    avatarAlt: 'Head of Growth',
    name: 'Head of Growth',
    role: 'Media & Entertainment',
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
