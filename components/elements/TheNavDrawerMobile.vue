<template>
  <v-navigation-drawer width="55" v-model="drawer" temporary app>
    <!-- <div
      v-if="!$device.isDesktop"
      class="app-bar-links d-flex flex-column align-center"
      style="margintop: 23px"
    >
      <nuxt-link
        class="my-3"
        v-for="link in links"
        :key="link.title"
        :to="link.to"
        role="button"
        >{{ $t(link.title) }}</nuxt-link
      >
      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase"
        target="_blank"
        rel="noopener"
        role="button"
        >{{ $t('navbar.resume') }}</a
      >
    </div> -->
    <v-list nav>
      <v-list-item-content style="height: 100%" class="my-auto">
        <v-list-item-title v-for="link in links" :key="link.to">
          <v-btn class="btn my-1" active-class="btn" :to="link.to" icon>
            <icon :icon="link.icon" />
          </v-btn>
        </v-list-item-title>
      </v-list-item-content>

      <LazyTheResumeBtn />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    links: Array,
    drawer: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1.5rem;
  color: #fafafa;
}
</style>
