<template>
  <v-app>
    <!-- TODO  Remove fibers from package.json or make a new project and copy paste these files to it  -->
    <!-- Loading -->
    <!-- <AppLoading v-show="pageInProgress" :pageInProgress="pageInProgress" /> -->
    <!-- Cursor -->
    <!-- <LazyAppCursor v-if="$device.isDesktop" /> -->
    <!-- Navigation -->
    <TheNavDrawer v-if="$device.isDesktop" :links="links" />
    <TheNavDrawerMobile
      v-if="!$device.isDesktop"
      :links="links"
      :drawer="drawer"
    />
    <v-app-bar color="#0f0f0f" flat app role="toolbar">
      <!-- <v-container> -->
      <img
        v-if="!$device.isDesktop"
        src="/menu-icon.svg"
        class="nav-icon"
        @click="drawer = !drawer"
        aria-label="menu button"
        alt="menu-icon"
      />
      <v-toolbar-title class="text-uppercase navbar-brand ml-5">
        <nuxt-link class="brand-name white--text" to="/">
          <span class="brand-span">Taj</span>
          <span>Eddine</span>
          <span class="brand-span">. js</span>
        </nuxt-link>
        <!-- <img class="brand-name white--text" to="/" src="/logo.svg" alt="" style="height:25px; width:34px" /> -->
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            class="language-btn mx-3"
            icon
            v-on="on"
            role="button"
            aria-label="change language"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in languages"
            :key="index"
            @click="changeLanguage(item.lang)"
          >
            <v-list-item-title>
              <img
                class="my-1"
                :src="item.src"
                role="button"
                :alt="item.lang"
                style="height: 61px; width: 61px"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- </v-container> -->
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.pageInProgress = true
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    },
  },
  data() {
    return {
      drawer: false,
      links: [
        { to: '/', icon: 'home' },
        { to: '/about', icon: 'user-secret' },
        { to: '/skills', icon: 'code' },
        // { to: '/portfolio', icon: 'eye' },
        // { to: '/contact', icon: 'envelope' },
      ],
      languages: [
        { title: 'English', src: '/flags/en.svg', lang: 'en' },
        { title: 'Francais', src: '/flags/fr.svg', lang: 'fr' },
        { title: 'عربى', src: '/flags/ar.svg', lang: 'ar' },
      ],
      pageInProgress: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-icon {
  color: white !important;
  width: 27px;
}

.v-app-bar,
.v-navigation-drawer {
  .brand-name {
    font-family: 'Audiowide';
    font-weight: 700;
    overflow: auto;
    .brand-span {
      color: $secondary-color;
    }
  }

  .language-btn {
    margin-right: 1.5% !important;
    @include contactBtn();
  }

  .language-btn:hover {
    @include contactBtnHover();
  }

  .contact-btn {
    @include btn();
  }

  .contact-btn:hover {
    @include btnHover();
  }
}

@media (min-width: 900px) {
  .v-app-bar {
    .navbar-brand {
      font-size: 1.5rem;
    }
    .app-bar-links > a {
      margin: 0 9px;
    }

    .app-bar-links {
      margin-right: 3%;
    }
  }
}
</style>
