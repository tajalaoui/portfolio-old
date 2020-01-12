<template>
  <v-app>
    <nav>
      <v-navigation-drawer color="grey darken-3" v-model="drawer" app>
        <ul>
          <li>
            <nuxt-link to="/">
              <icon class="icon" icon="home" />Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <icon class="icon" icon="user" />About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/skills">
              <icon class="icon" icon="code" />Skills
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio">
              <icon class="icon" icon="eye" />My Work
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              <icon class="icon" icon="envelope" />Contact
            </nuxt-link>
          </li>
        </ul>

        <div class="d-flex justify-center align-end" style="height: 70%">
          <a href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/" target="_blank">
            <icon class="icon nav-social-icons linkedin-icon" :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://github.com/SSaiken" target="_blank">
            <icon class="icon nav-social-icons github-icon" :icon="['fab', 'github']" />
          </a>
          <a href="https://www.instagram.com/_tajeddine/" target="_blank">
            <icon class="icon nav-social-icons instagram-icon" :icon="['fab', 'instagram']" />
          </a>
        </div>
      </v-navigation-drawer>

      <v-app-bar color="black" flat dark app>
        <v-app-bar-nav-icon class="nav-icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase navbar-brand">
          <nuxt-link class="brand-name white--text" to="/">
            <span class="brand-span">Taj</span>
            <span>Eddine</span>
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <a
          href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
          class="contact-btn text-uppercase mr-2"
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

  .v-navigation-drawer {
    a {
      color: $white;
    }

    ul {
      padding: 0;
      margin-top: 20px;

      .icon {
        margin: 0 13px;
      }

      li {
        font-size: 1.3rem;
        list-style: none;
        font-family: 'Raleway', sans-serif;
        color: $white;
        padding: 7px 23px;
      }

      a:hover,
      li:hover {
        color: $secondary-color;
        transition: $transition;
      }
    }

    .nav-social-icons {
      color: $secondary-color;
      font-size: 1.5rem;
      margin: 0 11px;
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

@media (max-width: 900px) {
  .v-navigation-drawer {
    .nav-social-icons {
      margin-bottom: 105px !important;
    }
  }
}

@media (max-width: 600px) {
  .v-navigation-drawer {
    .nav-social-icons {
      margin-bottom: 155px !important;
    }
  }
}
</style>
