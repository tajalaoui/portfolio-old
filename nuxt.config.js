const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'TAJ - Full Stack Js',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Full Stack Javascript Developer.'
      },
      {
        name: 'author',
        content: 'Tajeddine'
      },
      {
        name: 'keywords',
        content:
          'javascript, vue, nuxt, full stack javascript, software developer, portfolio, doe'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Importing fonts
  webfontloader: {
    google: {
      families: ['Montserrat:400, 700']
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#29f709' },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#29f709'
  // },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/fontawesome.js', '@/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    'nuxt-webfontloader'
  ],

  // Pwa
  pwa: {
    icon: {
      iconSrc: './static/mobile-logo.png'
    }
  },
  manifest: {
    short_name: 'TAJ',
    name: 'Tajeddine Doe',
    start_url: '/',
    theme_color: '#29f709'
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/variables/customVuetify.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      icons: 'fa'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
