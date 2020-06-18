<template>
  <v-layout>
    <v-container fill-height>
      <v-row>
        <v-col>
          <nuxt-link to="/">
            <h1 class="d-flex justify-center align-center" style="height:80vh">Coming Soon !</h1>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  components: {
    head() {
      return {
        title: 'Tajeddine - My Projects',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Projects i created'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

h1 {
  color: $secondary-color;
}

h1:hover {
  cursor: pointer;
}
</style>
