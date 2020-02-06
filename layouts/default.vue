<template>
  <v-app>
    <nav>
      <v-navigation-drawer color="grey darken-3" v-model="drawer" app></v-navigation-drawer>

      <v-app-bar color="transparent" flat dark app>
        <v-toolbar-title class="text-uppercase navbar-brand">
          <nuxt-link class="brand-name white--text" to="/">
            <span class="brand-span">Taj</span>
            <span>Eddine</span>
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="app-bar-links">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/skills">Skills</nuxt-link>
          <nuxt-link to="/portfolio">My Work</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>
        <a
          href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
          class="contact-btn resume-btn text-uppercase mr-2"
          target="_blank"
        >Resume</a>
      </v-app-bar>
    </nav>
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
      drawer: false
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

nav {
  text-decoration: none;
  a {
    color: $white;
  }

  .app-bar-links > a {
    margin: 0 23px;
  }

  .app-bar-links {
    margin-right: 4%;

    a:hover {
      color: $secondary-color;
      transition: $transition;
    }
  }

  .v-app-bar {
    .icon {
      color: $white;
      font-size: 1.2rem;
      margin: 0 0.5rem;
    }

    .icon:hover {
      color: $secondary-color;
      transition: $transition;
    }

    .nav-icon:hover {
      color: $secondary-color;
    }
  }

  .brand-name {
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