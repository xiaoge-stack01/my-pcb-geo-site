// @ts-check
import { defineConfig } from 'astro/config';
import llms from 'astro-llms-md';

// https://astro.build/config
export default defineConfig({
  site: "https://my-pcb-geo-site.pages.dev",
  integrations: [
    llms(),
  ],
});