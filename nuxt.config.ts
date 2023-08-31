

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
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
