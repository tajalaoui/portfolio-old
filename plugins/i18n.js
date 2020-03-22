import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it globaly in our components
  app.i18n = new VueI18n({
    // Set the initial locale (here, based on our store's initial value)
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n'
    },
    locale: 'en',
    silentTranslationWarn: true,
    silentFallbackWarn: true,

    // Set the fallback locale in case the current lovcale can't be found
    fallbackLocale: 'en',

    // Associate each locale to a content file
    messages: {
      en: require('~/locales/content-en.json'),
      fr: require('~/locales/content-fr.json'),
      ar: require('~/locales/content-ar.json')
    }
  })
}
