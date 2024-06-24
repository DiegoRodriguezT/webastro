import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), pagefind()],
  site: 'https://dev.diiegorgueez.me',
  output: "hybrid",
  adapter: vercel({ analytics: true }),
  // adapter: node({
  //   mode: 'standalone',
  // }),
  image: {
    service: squooshImageService()
  },
  redirects: {
    '/apuntes': '/blog/apuntes',
    '/apuntes/md-2324': '/apuntes/md-2324/',
    '/apuntes/lg-2324': '/apuntes/lg-2324/',
    '/apuntes/cal-2324': '/apuntes/cal-2324/',
    '/apuntes/ea-2324': '/apuntes/ea-2324/',
    '/apuntes/al-2324': '/apuntes/al-2324/',
  },
  build: {
    format: "file",
  },
});
