<template>
  <v-navigation-drawer width="51" app permanent stateless>
    <v-list nav>
      <v-list-item-content style="height: 100%" class="my-auto">
        <v-list-item-title v-for="link in links" :key="link.to">
          <v-btn class="btn my-1" active-class="btn" :to="link.to" icon>
            <icon :icon="link.icon" />
          </v-btn>
        </v-list-item-title>
      </v-list-item-content>
    </v-list>
    <!-- <v-list >
      <nuxt-link v-for="item in links" :key="item.to" :to="item.to">
        <v-list-item link>
          <v-list-item-icon>
            <icon :icon="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>
    </v-list> -->

    <div
      v-if="!$device.isDesktop"
      class="app-bar-links d-flex flex-column align-center"
      style="margintop: 23px"
    >
      <nuxt-link
        class="my-3"
        v-for="item in menu"
        :key="item.title"
        :to="item.to"
        role="button"
        >{{ $t(item.title) }}</nuxt-link
      >
      <a
        href="https://docs.google.com/document/d/1uz4ZX1Fkf8KURLk343MWUQvjpl_AOJTCdzfsAPTIDoY/edit"
        class="contact-btn resume-btn text-uppercase"
        target="_blank"
        rel="noopener"
        role="button"
        >{{ $t('navbar.resume') }}</a
      >
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { to: '/', icon: 'home' },
      { to: '/about', icon: 'user-secret' },
      { to: '/skills', icon: 'code' },
      { to: '/portfolio', icon: 'eye' },
      { to: '/contact', icon: 'envelope' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.v-list-item__content {
  align-items: center !important;
}

.btn {
  font-size: 1.5rem;
}

// .v-btn--active:active {
//   // color: green;
// }
</style>
