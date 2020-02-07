<template>
  <v-container fill-height>
    <v-row>
      <v-col sm12 md6>
        <h1 class="font-weight-bold">Skills & Experience</h1>
        <p style="paddingTop: 25px">I specialize in both client side & server side.</p>
        <p>
          HTML, SCSS, JAVASCRIPT, NODE, EXPRESS, NOSQL
          <br />building small to medium web apps
          <br />with Vue & Nuxt and material design with Vuetify.
        </p>
        <p>
          Visit my
          <a
            href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/"
            target="_blank"
          >Linkedin</a> profile for more info or
          <nuxt-link to="/contact">Contact</nuxt-link>me.
        </p>
      </v-col>
      <v-col class="d-flex justify-center align-center flex-wrap" sm12 md6 offset-md="1">
        <v-card color="#141414">
          <v-card-text class="card-text text-center">Front End</v-card-text>
          <img
            v-for="(image, index) in frontEndImages"
            :key="index"
            :src="image.url"
            :alt="image.alt"
          />
        </v-card>
        <v-card color="#141414">
          <v-card-text class="card-text text-center">Back End</v-card-text>
          <img
            v-for="(image, index) in backEndImages"
            :key="index"
            :src="image.url"
            :alt="image.alt"
          />
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
        { url: '/2.svg', alt: 'vuejs' },
        { url: '/3.svg', alt: 'nuxtjs' },
        { url: '/4.svg', alt: 'vuetify' },
        { url: '/7.svg', alt: 'html' },
        { url: '/8.svg', alt: 'scss' }
      ],
      backEndImages: [
        { url: '/1.svg', alt: 'nodejs' },
        { url: '/6.svg', alt: 'express' },
        { url: '/5.svg', alt: 'mongodb' }
      ]
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Skills Page'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

h1 {
  color: $secondary-color;
  font-family: 'Raleway', sans-serif;
}

img {
  width: 65px;
  height: 65px;
  margin: 6px;
}

a {
  color: $secondary-color !important;
  text-decoration: none;
}

.v-card {
  border: 2px solid $secondary-color !important;
  border-radius: 50px;
  padding: 7px;
  margin: 11px;
  .card-text {
    color: rgb(41, 247, 9);
  }
}
</style>