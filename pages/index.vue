<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <div class="text-intro">
          <h5>{{ $t('home.greeting') }}</h5>
          <h1 class="text-uppercase font-weight-bold">
            {{ $t('home.intro-text.im') }}
            <span class="brand-span">{{ $t('home.intro-text.taj') }}</span>
            {{ $t('home.intro-text.eddine') }}
          </h1>
          <div class="text-intro-skills">
            <p class="font-weight-light">{{ $t('home.job-title') }}</p>
          </div>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/"
              rel="noopener"
              role="button"
              target="_blank"
            >
              <icon class="nav-social-icons" :icon="['fab', 'linkedin']" />
            </a>
            <a
              href="https://github.com/tajeddine-js"
              rel="noopener"
              target="_blank"
              role="button"
            >
              <icon class="nav-social-icons mx-3" :icon="['fab', 'github']" />
            </a>
            <a
              href="https://tajeddine.medium.com/"
              rel="noopener"
              target="_blank"
              role="button"
            >
              <icon class="nav-social-icons" :icon="['fab', 'medium']" />
            </a>
          </div>
          <div class="buttons mt-4">
            <nuxt-link
              class="text-uppercase check-work-btn mr-3"
              role="button"
              to="/portfolio"
              >{{ $t('home.check-work') }}</nuxt-link
            >
            <nuxt-link
              class="text-uppercase contact-btn"
              to="/contact"
              role="button"
              >{{ $t('home.contact-me') }}</nuxt-link
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <img class="svg" src="/pages/home.svg" alt="programmer image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home.js',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home Page',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.text-intro {
  color: $white;

  .text-intro-skills {
    color: rgb(179, 174, 174);
    letter-spacing: 3.1px;
  }

  h1 {
    color: $white;
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

@media (max-width: 960px) {
  .text-intro,
  img {
    margin: 0 auto;
  }
}

@media (max-width: 439px) {
  .buttons {
    a {
      margin: 5px 0;
    }
  }
}
</style>
