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
        <nuxt-link v-for="item in menu" :key="item.title" :to="item.to" flat>{{item.title}}</nuxt-link>
      </div>
      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase mr-2"
        target="_blank"
      >Resume</a>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary dark app>
      <div class="app-bar-links d-flex flex-column align-center" style="marginTop: 35px;">
        <nuxt-link v-for="item in menu" :key="item.title" :to="item.to" flat>{{item.title}}</nuxt-link>
      </div>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      drawer: false,
      menu: [
        { to: '/', title: 'Home' },
        { to: '/about', title: 'About' },
        { to: '/skills', title: 'Skills' },
        { to: '/portfolio', title: 'My Work' },
        { to: '/contact', title: 'Contact' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style';

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

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

    a:hover {
      color: $secondary-color;
      transition: $transition;
    }
  }

  .brand-name {
    font-size: 1.5rem;
    font-family: 'Odibee Sans';
    letter-spacing: 1.3px;
    .brand-span {
      color: $secondary-color;
    }
  }

  .contact-btn {
    @include btn();
  }

  .contact-btn:hover {
    @include btnHover();
  }
}

@media (min-width: 600px) {
  .v-toolbar {
    .app-bar-links > a {
      margin: 0 9px;
    }

    .app-bar-links {
      margin-right: 3%;
    }
  }
}

@media (min-width: 960px) {
  // TODO DO THE SAME FOR H1
  // .navbar-brand {
  //   margin-left: 3%;
  // }

  // .resume-btn {
  //   margin-right: 3% !important;
  // }

  .v-app-bar {
    .nav-icon {
      display: none;
    }
  }
}

@media (max-width: 900px) {
  .v-app-bar {
    .app-bar-links {
      display: none;
    }
    .brand-name {
      font-size: 1.1rem;
    }
  }
}
</style>