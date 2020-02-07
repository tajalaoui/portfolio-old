<template>
  <v-app>
    <v-app-bar color="transparent" flat dark app>
      <v-toolbar-title class="text-uppercase navbar-brand">
        <nuxt-link class="brand-name white--text" to="/">
          <span class="brand-span">Taj</span>
          <span>Eddine</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="app-bar-links hidden-sm-and-down">
        <nuxt-link v-for="item in menu" :key="item.to" :to="item.to" flat>{{item.title}}</nuxt-link>
      </div>
      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase mr-2"
        target="_blank"
      >Resume</a>
    </v-app-bar>
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
      sideNav: false,
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

.v-app-bar {
  a {
    color: $white;
  }

  .app-bar-links > a {
    font-size: 1.5rem;
    margin: 0 9px;
  }

  .app-bar-links {
    font-family: 'montserrat';
    margin-right: 4%;
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

@media (min-width: 900px) {
  // TODO DO THE SAME FOR H1
  .navbar-brand {
    margin-left: 3.3%;
  }

  .resume-btn {
    margin-right: 3.3% !important;
  }
}
</style>