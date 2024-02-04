import { EnvConfig } from "@app/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  spaLoadingTemplate: "spa-loading-template.html",
  runtimeConfig: {
    public: {
      apiBaseurl: EnvConfig.API_BASEURL,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        class: "dark",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    },
  },
  experimental: {
    viewTransition: true,
  },
});
