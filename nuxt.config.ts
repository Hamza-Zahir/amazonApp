// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style/global.scss"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon",],
  // ,'@nuxt/ui',"nuxt-tailvue"

  runtimeConfig: {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SWNTENSCE: process.env.JWT_SWNTENSCE,
    
    public: {
      GEOAPIFY_API_KEY: process.env.GEOAPIFY_API_KEY,
    },
  },
  plugins: ["~/plugins/index.ts"], 
  
  nitro: {
    plugins: ["~/server/plugins/index.ts"],
  },
  app: {
    head: {
      // script: [{ src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" }],
    },
  },
  // buildModules:[]
});
