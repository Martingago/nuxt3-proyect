

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {

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
