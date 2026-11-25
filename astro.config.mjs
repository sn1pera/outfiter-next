import { defineConfig } from 'astro/config';

// Static output works directly on Cloudflare Pages (no server adapter required).
export default defineConfig({
  output: 'static',
  site: 'https://outfiter-next.pages.dev'
});
