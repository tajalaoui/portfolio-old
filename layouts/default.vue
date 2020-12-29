<template>
  <v-app>
    <!-- Loading -->
    <AppLoading v-show="pageInProgress" :pageInProgress="pageInProgress" />
    <!-- Cursor -->
    <LazyAppCursor />
    <!-- Navigation -->
    <LazyTheNavDrawer v-if="$device.isDesktop" :drawer="drawer" />
    <v-app-bar color="#0f0f0f" flat app role="toolbar">
      <img
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

      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase mr-2"
        target="_blank"
        rel="noopener"
        role="button"
        >{{ $t('navbar.resume') }}</a
      >
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
    </v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" temporary app>
      <div
        class="app-bar-links d-flex flex-column align-center"
        style="margintop: 23px"
      >
        <nuxt-link
          class="my-3"
          v-for="item in menu"
          :key="item.title"
          :to="item.to"
          role="button"
          >{{ $t(item.title) }}</nuxt-link
        >
        <a
          href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
          class="contact-btn resume-btn text-uppercase"
          target="_blank"
          rel="noopener"
          role="button"
          >{{ $t('navbar.resume') }}</a
        >
      </div>
    </v-navigation-drawer> -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.pageInProgress = false
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
      menu: [
        { to: '/', title: 'navbar.home' },
        { to: '/about', title: 'navbar.about' },
        { to: '/skills', title: 'navbar.skills' },
        { to: '/portfolio', title: 'navbar.work' },
        { to: '/contact', title: 'navbar.contact' },
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
@import '@/assets/scss/style';

.nav-icon {
  color: white !important;
  width: 27px;
}

.v-app-bar,
.v-navigation-drawer {
  a {
    color: $white;
  }

  .app-bar-links > a {
    font-size: 1.5rem;
  }

  .app-bar-links {
    font-family: 'montserrat';
    letter-spacing: 2px;

    a:hover,
    .nuxt-link-exact-active {
      color: $secondary-color;
      transition: $transition;
    }
  }

  .brand-name {
    font-family: 'Montserrat Alternates';
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

@media (min-width: 1350px) {
  .v-app-bar {
    .nav-icon {
      display: none;
    }
  }

  .polygon,
  .square {
    animation: shapes 5s infinite ease-out;
  }

  @keyframes shapes {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}

@media (max-width: 1350px) {
  .v-app-bar {
    .app-bar-links,
    .resume-btn {
      display: none;
    }
    .brand-name {
      font-size: 1.2rem;
    }
  }
  .shapes {
    display: none;
  }
}

@media (max-width: 1350px) and (min-height: 560px) {
  .resume-btn {
    position: absolute;
    bottom: 6%;
  }
}
</style>
