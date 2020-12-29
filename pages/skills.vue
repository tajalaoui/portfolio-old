<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col md="6">
        <h1>{{ $t('skills.heading') }}</h1>
        <p>{{ $t('skills.1st-p') }}</p>
        <div>
          <p>
            {{ $t('skills.2st-p') }}
            <br />
            {{ $t('skills.3st-p') }}
            <br />
            {{ $t('skills.4st-p') }}
          </p>
          <p>
            {{ $t('skills.5st-p') }}
            <a
              href="https://www.linkedin.com/in/tajeddine-zemzmi-alaoui-29b889167/"
              rel="noopener"
              role="button"
              target="_blank"
              >{{ $t('skills.linkedin') }}</a
            >
            {{ $t('skills.6st-p') }}
            <nuxt-link to="/contact">{{ $t('skills.7st-p') }}</nuxt-link>
            <span>{{ $t('skills.8st-p') }}</span>
          </p>
        </div>
      </v-col>
      <v-col
        class="d-md-flex justify-center align-center flex-wrap text-center"
        md="6"
      >
        <v-card color="#141414">
          <v-card-text class="card-text text-center">Front End</v-card-text>
          <v-tooltip v-for="(image, index) in frontEndImages" :key="index" top>
            <template v-slot:activator="{ on }">
              <img class="mx-1" :src="image.url" :alt="image.alt" v-on="on" />
            </template>
            <span>{{ image.alt }}</span>
          </v-tooltip>
        </v-card>
        <v-card color="#141414">
          <v-card-text class="card-text text-center">Back End</v-card-text>
          <v-tooltip v-for="(image, index) in backEndImages" :key="index" top>
            <template v-slot:activator="{ on }">
              <img class="mx-1" :src="image.url" :alt="image.alt" v-on="on" />
            </template>
            <span>{{ image.alt }}</span>
          </v-tooltip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      frontEndImages: [
        { url: '/tech-logos/vue.svg', alt: 'Vue Js' },
        { url: '/tech-logos/nuxt.svg', alt: 'Nuxt Js' },
        { url: '/tech-logos/vuetify.svg', alt: 'Vuetify' },
        { url: '/tech-logos/vuesax.svg', alt: 'Vuesax' },
        { url: '/tech-logos/html.svg', alt: 'Html' },
        { url: '/tech-logos/scss.svg', alt: 'Scss' },
      ],
      backEndImages: [
        { url: '/tech-logos/node.svg', alt: 'Node Js' },
        { url: '/tech-logos/express.svg', alt: 'Express Js' },
        { url: '/tech-logos/mongodb.svg', alt: 'Mongodb' },
      ],
    }
  },
  head() {
    return {
      title: 'Skills.js',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Skills & Technologies i know',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 65px;
  height: 65px;
  margin: 5px;
}

a {
  color: $secondary-color !important;
  text-decoration: none;
}

@media (max-width: 950px) {
  * {
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
