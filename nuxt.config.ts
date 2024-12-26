// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-23",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "vuetify-nuxt-module",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-easy-lightbox",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
        },
      },
    ],
  ],
  app: {
    baseURL: "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    public: {
      apiImageBase: "",
      apiStaffBase: "",
      imageBase: "",
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary: "#0175b5",
            },
          },
        },
      },
    },
  },
});
