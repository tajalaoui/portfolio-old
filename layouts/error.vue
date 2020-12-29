<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center align-center">
        <img src="/pages/404.svg" alt="page not found" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center align-center">
        <nuxt-link class="text-uppercase check-work-btn" to="/">{{
          $t('404.404-btn')
        }}</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.check-work-btn {
  position: absolute;
  bottom: 13vh;
  @include btn();
}

.check-work-btn:hover {
  @include btnHover();
}
@media (max-width: 400px) {
  img {
    height: 320px;
    width: 320px;
  }
}
</style>
