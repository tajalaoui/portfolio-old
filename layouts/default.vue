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
        rel="noopener"
      >Resume</a>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="language-btn mx-3 ml-2" icon v-on="on">
            <icon :icon="['fas', 'language']" style="fontSize:1.7rem" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in languages" :key="index" @click>
            <v-list-item-title>
              <img class="my-1" :src="item.src" alt="language-image" />
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary dark app>
      <div class="app-bar-links d-flex flex-column align-center" style="marginTop: 35px;">
        <nuxt-link class="my-3" v-for="item in menu" :key="item.title" :to="item.to">{{item.title}}</nuxt-link>
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
  data() {
    return {
      drawer: false,
      menu: [
        { to: '/', title: 'Home' },
        { to: '/about', title: 'About' },
        { to: '/skills', title: 'Skills' },
        { to: '/portfolio', title: 'My Work' },
        { to: '/contact', title: 'Contact' }
      ],
      languages: [
        { title: 'English', src: '/languages/en.svg' },
        { title: 'Francais', src: '/languages/fr.svg' },
        { title: 'عربى', src: '/languages/ar.svg' }
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

    a:hover {
      color: $secondary-color;
      transition: $transition;
    }
  }

  .brand-name {
    font-family: 'Odibee Sans';
    letter-spacing: 1.2px;
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
    .app-bar-links {
      display: none;
    }
    .brand-name {
      font-size: 1.2rem;
    }
  }
}
</style>