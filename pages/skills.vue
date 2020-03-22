<template>
  <v-container fill-height>
    <v-row>
      <v-col md6>
        <h1>{{$t("skills.heading")}}</h1>
        <p style="paddingTop: 21px">{{$t("skills.1st-p")}}</p>
        <p>
          HTML, SCSS, JAVASCRIPT, NODE, EXPRESS, MONGODB
          <br />
          {{$t("skills.2st-p")}}
          <br />

          {{$t("skills.3st-p")}}
        </p>
        <p>
          {{$t("skills.4st-p")}}
          <a
            href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/"
            target="_blank"
          >Linkedin</a>
          {{$t("skills.5st-p")}}
          <nuxt-link to="/contact">{{$t("skills.6st-p")}}</nuxt-link>
          <span>{{$t("skills.7st-p")}}</span>
        </p>
      </v-col>
      <v-col class="d-md-flex justify-center align-center flex-wrap text-center" md6 offset-md="1">
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



img {
  width: 65px;
  height: 65px;
  margin: 6px;
}

a {
  color: $secondary-color !important;
  text-decoration: none;
}

@media (max-width: 900px) {
  * {
    flex-direction: column;
    margin: 0 auto;
  }

  .col:nth-child(2) {
    padding-bottom: 21%;
  }
}
</style>