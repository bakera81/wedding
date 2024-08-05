import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
// import react from '@astrojs/react'; // For using Fillout form components


// https://astro.build/config
export default defineConfig({
  site: "https://lexingtonthemes.com/",
  // integrations: [tailwind(), sitemap(), react()],
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});