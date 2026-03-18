import { icons } from '../assets/icons/svgs';

// ── Benefits Grid ─────────────────────────────────────────────────────────────

export const benefits = [
  {
    iconSVG: icons.users,
    title: 'Anyone. Anywhere. Anytime.',
    body: 'No install, no sign-up, no skills required. Engage and provide intuitive support 24/7 to all your captive users, on their terms.',
  },
  {
    iconSVG: icons.layers,
    title: 'Contextual & Personalized',
    body: 'Autonomously adapts to shifting user intent and context, delivering seamless, non-linear engagement across the customer journey.',
  },
  {
    iconSVG: icons.monitor,
    title: 'Multimodal',
    body: 'Engages effortlessly through text, voice, images, and video for an intuitive, frictionless experience across channels.',
  },
  {
    iconSVG: icons.globe,
    title: 'Multilingual',
    body: 'Communicates naturally in 50+ languages, delivering culturally aware, context-driven interactions.',
  },
  {
    iconSVG: icons.bot,
    title: 'Autonomous',
    body: 'Goal-driven AI that autonomously assists, engages, and makes real-time decisions, handling complex, real-world customer interactions.',
  },
  {
    iconSVG: icons.chat,
    title: 'Across Touchpoints',
    body: 'Deploy GLUCOSE across WhatsApp, Telegram, Line, Zalo, Viber, Facebook Messenger, and any other touchpoint.',
  },
];

// ── Differentiators ───────────────────────────────────────────────────────────

export const diffItems = [
  {
    number: '01 — JOURNEYS',
    title: 'Agents that follow your playbook',
    description: 'Define the customer journeys you want your AI to follow—step by step. Agents handle complex, multi-step experiences from problem identification to resolution, keeping context across every interaction.',
    tags: ['Playbook Builder', 'Goal-Driven Agents', 'Contextual Memory', 'Live Updates'],
    imageSrc: '/Images/glucose-journey-builder.png',
    imageAlt: 'GLUCOSE Journey Builder Interface',
  },
  {
    number: '02 — KNOWLEDGE',
    title: 'Knowledge that stays current',
    description: 'Your documents—manuals, FAQs, marketing materials—are automatically processed into knowledge that your AI agents can draw from instantly. Always accurate, always up to date.',
    tags: ['Auto-Processing', 'Smart Search', 'Knowledge Pipeline', 'Always Current'],
    imageSrc: '/Images/glucose-corpus-manager.png',
    imageAlt: 'GLUCOSE Corpus Manager',
  },
  {
    number: '03 — TESTING & INSIGHTS',
    title: 'Quality you can measure',
    description: 'Test your AI agents before they go live. Simulate real conversations, measure quality with your own metrics, and catch issues before customers see them. Every interaction generates insights that flow back to your CRM.',
    tags: ['Conversation Testing', 'Custom Metrics', 'Quality Assurance', 'Customer Insights'],
    imageSrc: '/Images/glucose-analytics-dashboard.png',
    imageAlt: 'GLUCOSE Analytics Dashboard',
  },
  {
    number: '04 — MANAGEMENT CONSOLE',
    title: 'Control without code',
    description: 'The GLUCOSE Management Console puts business users in charge. Configure journeys, deploy updates, monitor performance, and manage access—all through an intuitive interface. No developers required for day-to-day operations.',
    tags: ['No-Code Interface', 'Real-Time Monitoring', 'Deployment Control', 'Access Management'],
    imageSrc: '/Images/glucose-management-console.png',
    imageAlt: 'GLUCOSE Management Console',
  },
];

// ── Channels ──────────────────────────────────────────────────────────────────
// iconKey maps to brand/social Astro icon component — resolved in product.astro

export const productChannelsData = [
  { iconKey: 'WhatsApp',  name: 'WhatsApp',  props: { width: 28, height: 28 } },
  { iconKey: 'Telegram',  name: 'Telegram',  props: { width: 28, height: 28 } },
  { iconKey: 'Line',      name: 'LINE',      props: { width: 28, height: 28 } },
  { iconKey: 'Messenger', name: 'Messenger', props: { width: 28, height: 28 } },
  { iconKey: 'Viber',     name: 'Viber',     props: { width: 28, height: 28 } },
  { iconKey: 'Zalo',      name: 'Zalo',      props: { width: 28, height: 28 } },
  { iconKey: 'Monitor',   name: 'Web',       props: { size: 28, stroke: 'var(--color-accent)' } },
  { iconKey: 'Plus',      name: '+ More',    props: { size: 28, stroke: 'var(--color-accent)' } },
] as const;

// ── Integrations ──────────────────────────────────────────────────────────────

export const integrations = [
  {
    name: 'Salesforce CRM',
    desc: 'Sync contacts, accounts, and leads seamlessly.',
    badge: 'connected' as const,
    iconHtml: `<svg viewBox="0 0 273 191" fill="#00A1E0"><path d="m113 21.3c8.78-9.14 21-14.8 34.5-14.8 18 0 33.6 10 42 24.9a58 58 0 0 1 23.7-5.05c32.4 0 58.7 26.5 58.7 59.2s-26.3 59.2-58.7 59.2c-3.96 0-7.82-0.398-11.6-1.15-7.35 13.1-21.4 22-37.4 22a42.7 42.7 0 0 1-18.8-4.32c-7.45 17.5-24.8 29.8-45 29.8-21.1 0-39-13.3-45.9-32a45.1 45.1 0 0 1-9.34 0.972c-25.1 0-45.4-20.6-45.4-45.9 0-17 9.14-31.8 22.7-39.8a52.6 52.6 0 0 1-4.35-21c0-29.2 23.7-52.8 52.9-52.8 17.1 0 32.4 8.15 42 20.8"/></svg>`,
  },
  {
    name: 'HubSpot',
    desc: 'Integrate marketing, sales, and service data.',
    badge: 'connected' as const,
    iconHtml: `<svg viewBox="0 0 24 24" fill="#FF7A59"><path d="M18.164 7.93V5.084a2.2 2.2 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.2 2.2 0 0 0 1.252 1.973l.013.006v2.852a6.2 6.2 0 0 0-2.969 1.31l.012-.01l-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006l7.697 5.991a6.2 6.2 0 0 0-1.038 3.446a6.2 6.2 0 0 0 1.147 3.607l-.013-.02l-2.342 2.343a2 2 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033a2 2 0 0 0-.1-.595l.005.014l2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z"/></svg>`,
  },
  {
    name: 'ServiceNow',
    desc: 'Automate workflows and IT service management.',
    badge: 'connected' as const,
    iconHtml: `<svg viewBox="0 0 71.1 63.6" fill="#81B5A1"><path d="M35.8,0C16.1,0,0,15.9,0,35.6c0,9.8,4,19.3,11.2,26c2.5,2.4,6.4,2.6,9.2,0.5c9-6.7,21.4-6.7,30.4,0c2.8,2.1,6.7,1.9,9.2-0.5C74.3,48,74.9,25.4,61.3,11.1C54.7,4.1,45.4,0.1,35.8,0 M35.6,53.5C26,53.8,18,46.2,17.8,36.7c0-0.3,0-0.6,0-0.9c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8c0.3,9.6-7.3,17.5-16.8,17.8C36.2,53.5,35.9,53.5,35.6,53.5"/></svg>`,
  },
  {
    name: 'WhatsApp Business',
    desc: 'Engage customers via messaging and alerts.',
    badge: 'connected' as const,
    iconHtml: `<svg viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  },
  {
    name: 'Telegram Bot API',
    desc: 'Create custom bots for notifications and commands.',
    badge: 'connected' as const,
    iconHtml: `<svg viewBox="0 0 24 24" fill="#0088CC"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  },
  {
    name: 'Zendesk',
    desc: 'Customer service and support platform.',
    badge: 'available' as const,
    iconHtml: `<svg viewBox="0 0 24 24" fill="#03363D"><path d="M12.914 2.904V16.29L24 2.905zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544zm11.086 4.807L0 21.096h11.086zm7.37 7.84a5.54 5.54 0 0 0-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"/></svg>`,
  },
  {
    name: 'Microsoft Dynamics',
    desc: 'Enterprise resource planning (ERP) and CRM.',
    badge: 'available' as const,
    iconHtml: `<img src="/Images/dynamics365-svgrepo-com.svg" alt="Dynamics 365" />`,
  },
  {
    name: 'SAP',
    desc: 'Enterprise software for business processes.',
    badge: 'available' as const,
    iconHtml: `<img src="/Images/sap-svgrepo-com.svg" alt="SAP" />`,
  },
  {
    name: 'Slack',
    desc: 'Team communication and collaboration hub.',
    badge: 'available' as const,
    iconHtml: `<svg viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/><path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/><path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/><path d="M15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.314A2.528 2.528 0 0 1 24 15.164a2.528 2.528 0 0 1-2.522 2.522h-6.314z" fill="#ECB22E"/></svg>`,
  },
];

// ── Developer Resource Cards ──────────────────────────────────────────────────

export const devCards = [
  {
    iconSVG: icons.fileText,
    title: 'JDL Specification',
    body: 'Define conversation logic and agent behaviors using our declarative specification format.',
  },
  {
    iconSVG: icons.terminal,
    title: 'CLI Tools',
    body: 'Scaffold, test, and deploy agents directly from your development environment.',
  },
  {
    iconSVG: icons.bookOpen,
    title: 'Architecture Guide',
    body: 'Deep-dive into multi-agent orchestration patterns, integration models, and deployment architecture.',
  },
];

// ── Tech Cards ────────────────────────────────────────────────────────────────

export const techCards = [
  {
    iconSVG: icons.layers,
    title: 'Best-in-Class AI',
    body: "Powered by the world's best AI models—Claude, GPT-4, Gemini—so your agents are always smart, natural, and adaptive.",
  },
  {
    iconSVG: icons.shield,
    title: 'Security & Privacy',
    body: 'Enterprise-grade security with end-to-end encryption, secure authentication, and GDPR/PDPA compliance built in.',
  },
  {
    iconSVG: icons.gear,
    title: 'No-Code Management',
    body: 'Intuitive Management Console allows business users to create, configure, and monitor AI Experience Agents without technical expertise.',
  },
  {
    iconSVG: icons.pulse,
    title: 'Live Updates',
    body: 'Update your AI agents instantly—no downtime, no waiting. Test and iterate in real time.',
  },
];
