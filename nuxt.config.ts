// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/solar/'
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss"
  ]
})