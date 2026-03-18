# 5.Y Website — Astro + Tailwind CSS

Marketing website for [five-whys.com](https://www.five-whys.com), migrated from static HTML to **Astro** with **Tailwind CSS**.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | ^4.16 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | ^3.4 | Utility-first styling |
| [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) | ^5.1 | Astro ↔ Tailwind integration |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | latest | Auto-generates sitemap.xml |

## Project Structure

```
astro-site/
├── public/
│   ├── Images/          → symlink to ../website/Images/
│   ├── Videos/          → symlink to ../website/Videos/
│   ├── robots.txt
│   └── CNAME
└── src/
    ├── styles/
    │   └── global.css           CSS variables (theming) + @keyframes only
    ├── layouts/
    │   └── BaseLayout.astro     Shared HTML shell, SEO head, GA, fonts
    ├── components/
    │   ├── ThemeScript.astro    Inline script — prevents FOUC on theme load
    │   ├── Navbar.astro         Navigation + dropdowns + mobile menu + theme toggle
    │   └── Footer.astro         5-column footer + social links + legal
    └── pages/
        ├── index.astro          Homepage
        ├── product.astro        GLUCOSE product page
        ├── customers.astro      Customer success stories
        ├── company.astro        About / team / vision
        ├── industries.astro     Industry solutions
        ├── contact.astro        Demo request / HubSpot form
        ├── demo.astro           Demo videos
        ├── vs.astro             GLUCOSE vs competitors
        ├── privacy.astro        Privacy policy
        └── terms.astro          Terms & conditions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Opens at http://localhost:4321

### Build for production
```bash
npm run build
```
Output goes to `dist/`. Includes auto-generated `sitemap.xml`.

### Preview production build
```bash
npm run preview
```

## CSS Architecture

| What | Where |
|---|---|
| Brand color variables (`--color-accent`, etc.) | `src/styles/global.css` — `:root` and `[data-theme='light']` |
| `@keyframes` animations (waveform, pulse, fadeInUp) | `src/styles/global.css` |
| All layout, spacing, typography, colors | Tailwind utility classes inline on elements |
| Brand colors in Tailwind | Configured in `tailwind.config.mjs` as `bg-accent`, `text-text-primary`, etc. |

## Dark / Light Theme

The site defaults to **dark mode**. Theme state is stored in `localStorage` under the key `theme`.

- Dark: no `data-theme` attribute on `<html>`
- Light: `data-theme="light"` on `<html>`

`ThemeScript.astro` runs an inline script before the page renders to restore the saved theme, preventing flash-of-unstyled-content (FOUC).

## Deployment

### GitHub Pages
The `CNAME` file in `public/` sets the custom domain to `www.five-whys.com`.

Build and push `dist/` to the `gh-pages` branch, or use the GitHub Actions Astro deploy workflow.

### Netlify / Vercel
Connect the repo, set build command to `npm run build`, publish directory to `dist/`.

## Pages & Routes

| URL | Page |
|---|---|
| `/` | Homepage |
| `/product` | GLUCOSE platform |
| `/customers` | Customer stories |
| `/company` | About 5.Y |
| `/industries` | Industry solutions |
| `/contact` | Request demo |
| `/demo` | Demo videos |
| `/vs` | Comparison |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Crawler rules |
