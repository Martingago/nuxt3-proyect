

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

})
