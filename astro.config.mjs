import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// When building static production assets, skip mounting Keystatic admin routes so Astro outputs pure SSG
const isBuild = process.argv.includes('build') || Boolean(process.env.SKIP_KEYSTATIC);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    markdoc(),
    ...(isBuild ? [] : [keystatic()]),
  ],
});
