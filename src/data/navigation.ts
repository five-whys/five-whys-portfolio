export interface NavDropdownItem {
  href: string;
  title: string;
  desc: string;
}

export interface NavSection {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navSections: NavSection[] = [
  {
    label: 'Product',
    href: '/product',
    dropdown: [
      { href: '/product#glucose',          title: 'GLUCOSE',       desc: 'Autonomous AI agents for customer engagement across every touchpoint.' },
      { href: '/product#differentiators',  title: 'Benefits',      desc: 'What sets GLUCOSE apart from the competition.' },
      { href: '/product#platform',         title: 'The Platform',  desc: 'No-code framework for building AI Experience Agents.' },
      { href: '/product#technology',       title: 'Technology',    desc: 'Enterprise-grade AWS-powered infrastructure.' },
      { href: '/product#developers',       title: 'Developers',    desc: 'Documentation, JDL specification, and CLI tools.' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: [
      { href: '/industries',              title: 'Industries Overview',   desc: 'Discover how GLUCOSE transforms customer engagement across sectors.' },
      { href: '/industries#automotive',   title: 'Automotive & Mobility', desc: 'Revolutionize the car buying and ownership experience.' },
      { href: '/industries#healthcare',   title: 'Healthcare',            desc: 'Improve patient outcomes with personalized AI engagement.' },
      { href: '/industries#financial',    title: 'Financial Services',    desc: 'Build trust and strengthen customer relationships.' },
      { href: '/industries#electronics',  title: 'Consumer Appliances',   desc: 'Turn unboxing into brand loyalty.' },
      { href: '/industries#industrial',   title: 'Industrial',            desc: 'Autonomous AI support for industrial equipment and fleets.' },
    ],
  },
  {
    label: 'Demos',
    href: '/demo',
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: [
      { href: '/company#about',  title: 'About',       desc: 'Learn about our mission to transform customer engagement.' },
      { href: '/company#vision', title: 'Vision',      desc: 'The future of AI-powered brand experiences.' },
      { href: '/contact',        title: 'Contact Us',  desc: 'Get in touch with our team.' },
    ],
  },
];

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Product',
    links: [
      { label: 'GLUCOSE',               href: '/product#glucose' },
      { label: 'Benefits',              href: '/product#differentiators' },
      { label: 'How It Works',          href: '/product#platform' },
      { label: 'Technology',            href: '/product#technology' },
      { label: 'Developers',            href: '/product#developers' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'GLUCOSE vs. Competitors', href: '/vs' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Industries Overview',   href: '/industries' },
      { label: 'Automotive & Mobility', href: '/industries#automotive' },
      { label: 'Commercial Vehicles',   href: '/industries#commercial-vehicles' },
      { label: 'Industrial',            href: '/industries#industrial' },
      { label: 'Consumer Appliances',   href: '/industries#electronics' },
      { label: 'Healthcare',            href: '/industries#healthcare' },
      { label: 'Financial Services',    href: '/industries#financial' },
      { label: 'Energy & Utilities',    href: '/industries#energy' },
      { label: 'Hospitality & Travel',  href: '/industries#hospitality' },
      { label: 'Consumer Goods',        href: '/industries#consumer-goods' },
    ],
  },
  {
    heading: 'Demos',
    links: [
      { label: 'Demo Videos',   href: '/demo' },
      { label: 'Request Demo',  href: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',       href: '/company#about' },
      { label: 'Vision',      href: '/company#vision' },
      { label: 'Contact Us',  href: '/contact' },
    ],
  },
];
