const colors = require('vuetify/es5/util/colors').default

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s .js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Full Stack Javascript Developer.',
      },
      {
        name: 'author',
        content: 'Tajeddine',
      },
      {
        name: 'keywords',
        content:
          'web developer, javascript, vue, nuxt, full stack javascript, software developer, portfolio',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
  },

  // Importing fonts
  webfontloader: {
    google: {
      families: ['Montserrat', 'Montserrat Alternates: 700'],
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#29f709', height: '5px' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/style.scss',
  ],

  // Auto import component
  components: true,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/fontawesome.js', '@/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    [
      'nuxt-social-meta',
      {
        title: 'Tajeddine',
        description: 'Full Stack Developer',
        url: 'https://tajeddine.dev',
        img: '/social-picture.png',
        locale: 'en-US',
        // twitter: '@twitterHandle',
        themeColor: '#29f709',
      },
    ],
  ],

  // Pwa
  manifest: {
    icon: {
      iconSrc: '@/static/icon.png',
    },
    short_name: 'Taj.js',
    name: 'Tajeddine.js',
    descreption: 'Full Stack Developer',
    start_url: '/',
    theme_color: '#29f709',
    background_color: '#29f709',
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  privateRuneTimeConfig: {
    mail: process.env.MAIL,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/scss/variables/customVuetify.scss'],
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
          success: colors.green.accent3,
        },
      },
    },
    defaultAssets: {
      icons: 'mdi',
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
