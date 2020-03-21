<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col md6>
        <div class="text-intro">
          <h5>{{$t("home.greeting")}}</h5>
          <h1 class="text-uppercase">
            {{$t("home.intro-text.im")}}
            <span class="brand-span">{{$t("home.intro-text.taj")}}</span>
            {{$t("home.intro-text.eddine")}}
          </h1>
          <div class="text-intro-skills">
            <p class="font-weight-light">{{$t("home.job-title")}}</p>
          </div>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/"
              rel="noopener"
              target="_blank"
            >
              <icon class="nav-social-icons" :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://github.com/TajDoe" rel="noopener" target="_blank">
              <icon class="nav-social-icons mx-3" :icon="['fab', 'github']" />
            </a>
            <a href="https://www.instagram.com/_tajdoe/" rel="noopener" target="_blank">
              <icon class="nav-social-icons" :icon="['fab', 'instagram']" />
            </a>
          </div>
          <div class="buttons mt-3">
            <nuxt-link
              class="text-uppercase check-work-btn"
              to="/portfolio"
            >{{$t("home.check-work")}}</nuxt-link>
            <nuxt-link class="text-uppercase contact-btn" to="/contact">{{$t("home.contact-me")}}</nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col sm12 md6 offset="3" offset-lg="0">
        <div class="svg d-md-flex justify-center align-center">
          <img class="programmer-image" src="/pages/home.svg" alt="programmer image" />
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
  }
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

@media (max-width: 1263px) {
  img {
    display: none;
  }
  .text-intro {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 900px) {
  .text-intro {
    .contact-btn {
      margin-top: 11px;
    }
  }
}

@media (min-width: 900px) {
  .text-intro {
    .contact-btn {
      margin-left: 15px;
    }
  }
}
</style>