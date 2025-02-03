import { defineConfig, envField } from 'astro/config'
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import playformInline from "@playform/inline";
import tailwindcss from "@astrojs/tailwind";
//import node from "@astrojs/node";
//


// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      NASA_API: envField.string({ context: "server", access: "secret" }),
    }
  },

  site: "https://nikostuff.com",

  // adapter: node({
  //   mode: "standalone"
  // })
  integrations: [mdx(), sitemap(), solidJs(), playformInline(), tailwindcss({
    applyBaseStyles: false})],

  vite: {
    plugins: [tailwindcss({
      applyBaseStyles: false})]
  }
});