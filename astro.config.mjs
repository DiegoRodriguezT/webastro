import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), pagefind(), partytown()],
  site: 'https://diiegorgueez.me',
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true
  }),
  // adapter: node({
  //   mode: 'standalone',
  // }),
  image: {
    service: squooshImageService()
  },
  redirects: {
    '/apuntes': '/posts/apuntes',
    '/apuntes/md-2324': '/apuntes/md-2324/',
    '/apuntes/lg-2324': '/apuntes/lg-2324/',
    '/apuntes/cal-2324': '/apuntes/cal-2324/',
    '/apuntes/ea-2324': '/apuntes/ea-2324/',
    '/apuntes/al-2324': '/apuntes/al-2324/'
  },
  build: {
    format: "file"
  }
});