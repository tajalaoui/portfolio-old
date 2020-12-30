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

      <LazyTheResumeBtn />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    links,
  },
}
</script>

<style lang="scss" scoped>
// .v-list-item__content {
//   align-items: center !important;
// }

.btn {
  font-size: 1.5rem;
}
</style>
