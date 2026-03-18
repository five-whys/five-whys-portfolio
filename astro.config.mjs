import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.five-whys.com',
  output: 'static',
  server: {
    host: true,
    port: 4323,
  },
  vite: {
    server: {
      allowedHosts: [
        '.ngrok-free.dev',
        '.ngrok-free.app',
        'localhost',
        '127.0.0.1',
      ],
    },
  },
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
