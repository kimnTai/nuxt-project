// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {},

  runtimeConfig: {
    githubToken: "",
  },

  // https://nitro.unjs.io/config
  nitro: {},

  modules: ["@nuxt/content"],
});
