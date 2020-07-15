<template>
  <v-app>
    <!-- Loading -->
    <div v-if="canLoad" class="loadingWrapper">
      <div class="psoload">
        <div class="straight"></div>
        <div class="curve"></div>
        <div class="center"></div>
        <div class="inner"></div>
      </div>
    </div>
    <!-- Cursor -->
    <div class="cursor"></div>
    <!-- Navigation -->
    <v-app-bar color="#0f0f0f" flat app role="toolbar">
      <v-app-bar-nav-icon class="nav-icon" @click="drawer = !drawer" aria-label="menu button"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase navbar-brand ml-3">
        <nuxt-link class="brand-name white--text" to="/">
          <span class="brand-span">Taj</span>
          <span>Eddine</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="app-bar-links hidden-sm-and-down">
        <nuxt-link
          class="mx-3"
          v-for="item in menu"
          :key="item.title"
          :to="item.to"
          flat
        >{{$t(item.title)}}</nuxt-link>
      </div>
      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase mr-2"
        target="_blank"
        rel="noopener"
        role="button"
      >{{$t("navbar.resume")}}</a>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            class="language-btn mx-3"
            icon
            v-on="on"
            role="button"
            aria-label="change language"
          >
            <icon :icon="['fas', 'language']" style="fontSize:1.6rem" />
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
                style="height: 65px; width: 65px"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary app>
      <div class="app-bar-links d-flex flex-column align-center" style="marginTop: 23px">
        <nuxt-link
          class="my-3"
          v-for="item in menu"
          :key="item.title"
          :to="item.to"
          role="button"
        >{{$t(item.title)}}</nuxt-link>
        <a
          href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
          class="contact-btn resume-btn text-uppercase"
          target="_blank"
          rel="noopener"
          role="button"
        >{{$t("navbar.resume")}}</a>
      </div>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'nav-bar',
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    }
  },
  data() {
    return {
      drawer: false,
      menu: [
        { to: '/', title: 'navbar.home' },
        { to: '/about', title: 'navbar.about' },
        { to: '/skills', title: 'navbar.skills' },
        { to: '/portfolio', title: 'navbar.work' },
        { to: '/contact', title: 'navbar.contact' }
      ],
      languages: [
        { title: 'English', src: '/languages/en.svg', lang: 'en' },
        { title: 'Francais', src: '/languages/fr.svg', lang: 'fr' },
        { title: 'عربى', src: '/languages/ar.svg', lang: 'ar' }
      ],
      canLoad: true
    }
  },
  mounted() {
    this.canLoad = false
  },
  beforeMount() {
    const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', e => {
      cursor.setAttribute(
        'style',
        'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
      )
    })

    document.addEventListener('click', () => {
      cursor.classList.add('expand')

      setTimeout(() => {
        cursor.classList.remove('expand')
      }, 300)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style';

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

// * Loading Animation

// Loading wrapper
.loadingWrapper {
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: #000;
  transition: all 5s ease-in-out;
}

.psoload {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 150px;
  z-index: 5000;
}

.psoload,
.psoload *,
.psoload *:before,
.psoload *:after {
  box-sizing: border-box;
}

.psoload .straight,
.psoload .curve {
  position: absolute;
  top: 17.5%;
  left: 17.5%;
  width: 65%;
  height: 65%;
  border-radius: 100%;
  animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
  -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
}

.psoload .straight:before,
.psoload .straight:after {
  content: '';
  position: absolute;
  width: 15%;
  border-bottom: 3px solid $secondary-color;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.psoload .straight:before {
  top: 5px;
  left: 5px;
}

.psoload .straight:after {
  bottom: 5px;
  right: 5px;
}

.psoload .curve:before,
.psoload .curve:after {
  content: '';
  position: absolute;
  width: 45px;
  height: 10px;
  border: solid 3px transparent;
  border-top-color: $white;
  border-radius: 50%/10px 10px 0 0;
  z-index: 90001;
}

.psoload .curve:before {
  transform: rotate(-63deg) translateX(-27px) translateY(-4px);
  -webkit-transform: rotate(-63deg) translateX(-27px) translateY(-4px);
}

.psoload .curve:after {
  bottom: 5px;
  right: 5px;
  transform: rotate(115deg) translateX(-26px) translateY(-12px);
  -webkit-transform: rotate(115deg) translateX(-26px) translateY(-12px);
}

.psoload .center {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  border-radius: 100%;
  border: 3px solid $secondary-color;
}

.psoload .inner {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 100%;
  animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite reverse;
  -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite
    reverse;
}

.psoload .inner:before,
.psoload .inner:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom-width: 11px;
  border-bottom-color: $white;
}

.psoload .inner:before {
  top: 12px;
  left: 12px;
  transform: rotate(128deg);
  -webkit-transform: rotate(128deg);
}

.psoload .inner:after {
  bottom: 12px;
  right: 12px;
  transform: rotate(-48deg);
  -webkit-transform: rotate(-48deg);
}

@keyframes arrow-spin {
  100% {
    transform: rotate(179deg);
  }
}

@-webkit-keyframes arrow-spin {
  100% {
    -webkit-transform: rotate(179deg);
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