// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/stylesheet.css", "~/assets/scss/main.scss"],

  vite: {
    server: {
      allowedHosts: [".loca.lt"],
    },
  },
});
