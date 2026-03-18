/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* Background surfaces */
        'bg-primary':   'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary':  'var(--color-bg-tertiary)',
        /* Text */
        'text-primary':   'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted':     'var(--color-text-muted)',
        /* Brand accent (yellow in dark, teal in light) */
        'accent':       'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-soft':  'var(--color-accent-soft)',
        /* Secondary brand (teal in dark, yellow in light) */
        'brand-secondary':      'var(--color-secondary)',
        'brand-secondary-soft': 'var(--color-secondary-soft)',
        /* Tertiary / danger */
        'tertiary':       'var(--color-tertiary)',
        'tertiary-hover': 'var(--color-tertiary-hover)',
        'tertiary-soft':  'var(--color-tertiary-soft)',
        /* Borders & utils */
        'border-theme': 'var(--color-border)',
        'error':        'var(--color-error)',
        'navbar-bg':    'var(--navbar-bg)',
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['var(--font-display)', 'cursive'],
      },
      borderRadius: {
        pill: '100px',
      },
      keyframes: {
        'showcase-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.3)' },
        },
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.4)', opacity: '0.5' },
          '50%':      { transform: 'scaleY(1)', opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        messageSlide: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'showcase-pulse': 'showcase-pulse 2s ease-in-out infinite',
        waveform:         'waveform 1.2s ease-in-out infinite',
        fadeInUp:         'fadeInUp 0.5s ease-out both',
        messageSlide:     'messageSlide 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
