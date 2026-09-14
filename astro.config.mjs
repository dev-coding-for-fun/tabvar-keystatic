import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// When building production output for Cloudflare, use the Cloudflare adapter
const isBuild = process.argv.includes('build') || Boolean(process.env.CF_PAGES);

// https://astro.build/config
// TABVAR static config
export default defineConfig({
  output: 'static',
  ...(isBuild ? { adapter: cloudflare({ imageService: 'passthrough' }) } : {}),
  integrations: [react(), markdoc(), keystatic()],
});