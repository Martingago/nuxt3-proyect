

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    }
  },
  modules:[
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  build: {
    transpile: [
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons'
        //'@fortawesome/pro-regular-svg-icons',
        //'@fortawesome/pro-light-svg-icons',
        //'@fortawesome/free-brands-svg-icons'
    ]
},
  plugins: [
    {
      src: '~/plugins/fontAwesome.js',
      ssr: false
    }
  ],
  css: [
    '~/assets/css/global.css',
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

})
