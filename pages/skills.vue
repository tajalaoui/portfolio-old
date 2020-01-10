<template>
  <v-container fill-height>
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <v-row>
      <v-col sm12 md6 offset-md="1">
        <h1 class="display-3 font-weight-bold">Skills & Experience</h1>
        <p style="paddingTop: 27px">I specialize in both client side & server side.</p>
        <p>
          HTML, SCSS, JAVASCRIPT, NODE, EXPRESS, NOSQL
          <br />building small and medium web apps
          <br />with Vue & Nuxt and material design with Vuetify.
        </p>
        <p>
          Visit my
          <a
            href="https://www.linkedin.com/in/tajeddine-alaoui-29b889167/"
            target="_blank"
          >Linkedin</a> profile for more info or
          <nuxt-link to="/contact">Contact </nuxt-link>me.
        </p>
      </v-col>
      <v-col class="d-flex justify-center align-center flex-wrap" sm12 md6 offset-md="1">
        <img v-for="(image, index) in images" :key="index" :src="image.url" :alt="image.alt" />
      </v-col>
    </v-row>
    <span class="tags bottom-tags">
      &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />&lt;/html&gt;
    </span>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '/1.svg', alt: 'nodejs' },
        { url: '/2.svg', alt: 'vuejs' },
        { url: '/3.png', alt: 'nuxtjs' },
        { url: '/4.svg', alt: 'vuetify' },
        { url: '/5.svg', alt: 'mongodb' },
        { url: '/6.svg', alt: 'express' },
        { url: '/7.svg', alt: 'git' },
        { url: '/8.svg', alt: 'html' },
        { url: '/9.svg', alt: 'scss' }
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
</style>