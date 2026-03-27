# CMS Documentation — 5.Y / GLUCOSE Portfolio Site

---

## What CMS do we use?

**TinaCMS** — an open-source, Git-backed headless CMS.

- Website: https://tina.io
- Version: `tinacms@^3.7.0` + `@tinacms/cli@^2.2.0`

---

## Why TinaCMS?

- **Git-backed**: All content edits are saved as commits directly to GitHub. No separate database. Content lives in JSON/Markdown files inside the repo.
- **Works with Astro**: Tight integration — TinaCMS wraps the Astro dev server, so the CMS and site run together.
- **Visual editing**: Editors can update text and images through a UI at `/admin` without touching code.
- **Free tier**: No cost for our use case (single branch, GitHub-connected).

---

## How to Run the Project

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env` file in the project root (see **Environment Variables** section below).

### 3. Start the dev server
```bash
npm run dev
```

This runs `tinacms dev -c "astro dev"` — TinaCMS and Astro start together.

- Site: http://localhost:4321
- CMS admin: http://localhost:4321/admin

### 4. Build for production
```bash
npm run build
```

This runs `tinacms build && astro build` — generates the CMS admin panel and the static site.

---

## How to Access CMS Pages

1. Run `npm run dev`
2. Open http://localhost:4321/admin in your browser
3. You'll see a sidebar with all editable pages

### Pages available in the CMS:

| CMS Label | Page |
|---|---|
| 📄 Pages | Terms of Service, Privacy Policy |
| ⚔️ VS Comparison Page | /vs |
| 🏆 Customers Page | /customers |
| 🏠 Home Page | / |
| 🏭 Industries Page | /industries |
| 📦 Product Page | /product |
| 🏢 Company Page | /company |
| 📞 Contact Page | /contact |
| 🎯 Demo Page | /demo |

### How content is stored

Each CMS page maps to a JSON (or Markdown) file in `src/content/`:

```
src/content/
  customersPage/customers.json
  indexPage/index.json
  vsPage/vs.json
  industriesPage/index.json
  productPage/index.json
  companyPage/company.json
  contactPage/contact.json
  demoPage/demo.json
  pages/terms.md
  pages/privacy.md
```

When you save in the CMS, it writes directly to these files. Commit and push to deploy.

---

## Images in the CMS

Each image field has **two options** — use whichever fits:

- **Upload from laptop** — click the image field to open the file picker and upload from your computer. Files are saved to `public/Images/`.
- **Paste a URL** — use the companion `... URL (paste link)` text field to paste any external link (Unsplash, company logo URL, CDN, etc.). This takes priority over the upload if both are filled.

> The CMS does **not** support video uploads. For videos, paste a URL (YouTube, Vimeo, CDN) into a string field.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `TINA_PUBLIC_IS_LOCAL` | Dev only | Set to `true` to run TinaCMS in local mode (no cloud sync, no login required). |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Production | Client ID from Tina Cloud (app.tina.io). Needed when deploying — links the site to the Tina Cloud project. |
| `TINA_TOKEN` | Production | Read-only token from Tina Cloud. Used to authenticate content fetches at build time. |
| `GITHUB_BRANCH` | Optional | Branch TinaCMS reads/writes to. Defaults to `main` if not set. |

### Local `.env` (development)
```env
TINA_PUBLIC_IS_LOCAL=true
```

With `TINA_PUBLIC_IS_LOCAL=true`, the CMS runs fully offline. No Tina Cloud account needed, no login prompt. Content saves directly to your local files.

### Production `.env` (or hosting env vars)
```env
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
GITHUB_BRANCH=main
```

---

## Why is the Repo Connected to Tina Cloud?

The GitHub repo is connected to **Tina Cloud** (app.tina.io) for **production/staging use**. Here's why:

- **Remote editing**: Without local mode, non-developers can log into `yoursite.com/admin` and edit content without running the project locally.
- **Auth**: Tina Cloud handles who can access the CMS (team members only).
- **Git commits via UI**: When a non-developer saves a change in the CMS, Tina Cloud commits it to the GitHub repo on their behalf — no terminal required.
- **Build triggers**: The commit that Tina Cloud makes can trigger a Vercel/Netlify redeploy automatically.

In short: local mode is for developers; Tina Cloud connection is for the team to edit content in production without needing to run the project.

---

## TinaCMS Config File

All schema definitions (what fields appear in the CMS for each page) are in:

```
tina/config.ts
```

If you need to add a new field to a page, edit the schema there and it will appear in the CMS after restarting the dev server.
