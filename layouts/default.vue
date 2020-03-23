<template>
  <v-app>
    <v-app-bar color="#141414" flat app>
      <v-app-bar-nav-icon class="nav-icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase navbar-brand">
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
      >{{$t("navbar.resume")}}</a>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="language-btn mx-3 ml-2" icon v-on="on">
            <icon :icon="['fas', 'language']" style="fontSize:1.7rem" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in languages"
            :key="index"
            @click="changeLanguage(item.lang)"
          >
            <v-list-item-title>
              <img class="my-1" :src="item.src" :alt="item.lang" style="height: 55px; width: 55px" />
              <!-- {{ item.title }} -->
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary dark app>
      <div class="app-bar-links d-flex flex-column align-center" style="marginTop: 35px;">
        <nuxt-link
          class="my-3"
          v-for="item in menu"
          :key="item.title"
          :to="item.to"
        >{{$t(item.title)}}</nuxt-link>
        <a
          href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
          class="contact-btn resume-btn text-uppercase mt-3"
          target="_blank"
          rel="noopener"
        >{{$t("navbar.resume")}}</a>
      </div>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
    <div class="cursor"></div>
  </v-app>
</template>

<script>
export default {
  name: 'nav-bar',
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
      ]
    }
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

.v-toolbar,
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
    font-family: 'Concert One';
    letter-spacing: 1px;
    .brand-span {
      color: $secondary-color;
    }
  }

  .language-btn {
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
  .v-toolbar {
    .navbar-brand {
      font-size: 1.4rem;
    }
    .app-bar-links > a {
      margin: 0 9px;
    }

    .app-bar-links {
      margin-right: 3%;
    }
  }
}

@media (min-width: 960px) {
  .v-app-bar {
    .nav-icon {
      display: none;
    }
  }
}

@media (max-width: 900px) {
  .v-app-bar {
    .app-bar-links,
    .resume-btn {
      display: none;
    }
    .brand-name {
      font-size: 1.2rem;
    }
  }
}
</style>