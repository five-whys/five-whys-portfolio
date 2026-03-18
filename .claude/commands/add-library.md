# Add Library to FiveWhys Astro Site

## Critical Project Context (read before touching anything)

**Stack:**
- Astro 4.16 — static output, NO React/Vue/Svelte integration
- Tailwind CSS 3.4 — custom keyframes in `tailwind.config.mjs`
- Vanilla JS only — all interactivity via `<script>` tags in `.astro` files
- TypeScript — component props use `interface Props` pattern
- No existing animation library (only Tailwind keyframes + CSS custom properties)

**Key files:**
- Global script init → `src/layouts/BaseLayout.astro` (inject here for site-wide libs like Lenis)
- Animation tokens → `tailwind.config.mjs` (add keyframes/durations here)
- Global CSS vars → `src/styles/global.css` (CSS custom properties, `@layer` blocks)
- Component pattern → `src/components/sections/*.astro` (each has frontmatter + HTML + `<script>`)

---

## Library: Lenis (smooth scroll)

**Why it fits:** Pure vanilla JS, zero deps, works natively in Astro.

**Steps:**
1. `npm install lenis`
2. In `src/layouts/BaseLayout.astro`, add inside `<head>` or before `</body>`:
```astro
<script>
  import Lenis from 'lenis'

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
</script>
```
3. Remove `scroll-behavior: smooth` from `src/styles/global.css` (Lenis handles this)
4. If any anchor links use `#id` jumps, test they still work with Lenis

---

## Library: Framer Motion / motion

**IMPORTANT:** Framer Motion is React-only. This project has NO React.

**Use `motion` instead** — the framework-agnostic package from the same team:
- Works with vanilla JS/Astro natively
- Same animation API, no React required
- Package: `motion` (not `framer-motion`)

**Steps:**
1. `npm install motion`
2. In the `.astro` component that needs animation, add a `<script>`:
```astro
<script>
  import { animate, scroll, inView } from 'motion'

  // Animate on scroll into view
  inView('.hero-heading', ({ target }) => {
    animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, easing: 'ease-out' })
  })
</script>
```
3. For scroll-linked animations (parallax, progress bars):
```astro
<script>
  import { scroll, animate } from 'motion'

  scroll(animate('.parallax-el', { y: [0, -100] }))
</script>
```
4. For staggered lists:
```astro
<script>
  import { animate, inView } from 'motion'

  inView('.benefits-grid', () => {
    animate('.benefit-card', { opacity: [0, 1], y: [20, 0] }, { delay: stagger(0.1) })
  })
</script>
```

**Note:** Astro bundles `<script>` tags — imports from `motion` are tree-shaken per page automatically.

---

## Both together (Lenis + motion)

Install: `npm install lenis motion`

Init Lenis globally in `BaseLayout.astro`.
Add motion animations per-component in individual `<script>` blocks.

If using motion's `scroll()` with Lenis, connect them:
```js
import Lenis from 'lenis'
import { scroll } from 'motion'

const lenis = new Lenis()
lenis.on('scroll', () => scroll(() => {})) // keep motion scroll in sync
```

---

## Arguments

`$ARGUMENTS` — the library name(s) to add. Example: `/add-library lenis`, `/add-library framer-motion`, `/add-library lenis motion`

Use the context above to implement `$ARGUMENTS` in this project correctly. Read the relevant files before editing. Follow existing patterns.
