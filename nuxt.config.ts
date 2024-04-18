// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@toantranmei/mei-nuxt3-ui'
  ],

  extends: [
    './layers/ui'
  ],

  

  meiUI: {},
})
