<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col sm12 md6>
        <div class="text-intro">
          <h3>Hi There</h3>
          <h1>
            <div class="font-weight-bold">
              I'm
              <span class="brand-span">Taj</span>eddine
            </div>
          </h1>
          <div class="text-intro-skills">
            <p class="font-weight-light">software developer</p>
          </div>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/" target="_blank">
              <icon class="nav-social-icons" :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://github.com/SSaiken" target="_blank">
              <icon class="nav-social-icons mx-3" :icon="['fab', 'github']" />
            </a>
            <a href="https://www.instagram.com/_tajeddine/" target="_blank">
              <icon class="nav-social-icons" :icon="['fab', 'instagram']" />
            </a>
          </div>
          <div class="buttons mt-3">
            <nuxt-link class="text-uppercase check-work-btn" to="/portfolio">check my work</nuxt-link>
            <nuxt-link class="text-uppercase contact-btn ml-5" to="/contact">contact me</nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col sm12 md6 offset="1">
        <div class="svg d-flex justify-center align-center">
          <img src="/home/home-illustration.svg" alt="programmer" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home Page'
        }
      ]
    }
  },
  methods: {
    menuItems() {
      return this.menu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.text-intro {
  color: $white;

  .text-intro-skills {
    color: rgb(179, 174, 174);
    letter-spacing: 3.5px;
  }

  .brand-span {
    color: $secondary-color;
  }

  .check-work-btn {
    @include btn();
  }

  .check-work-btn:hover {
    @include btnHover();
  }

  .contact-btn {
    @include contactBtn();
  }

  .contact-btn:hover {
    @include contactBtnHover();
  }
}

.nav-social-icons {
  color: #fafafa;
  font-size: 1.4rem;
}

.nav-social-icons:hover {
  color: $secondary-color;
  transition: $transition;
}

img {
  height: 650px;
  width: 650px;
}

@media (max-width: 900) {
  img {
    height: 400px !important;
    width: 400px !important;
  }
}
</style>