<template>
  <v-navigation-drawer width="55" v-model="localDrawer" temporary app>
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
  data: () => ({
    localDrawer: false,
  }),
  // watch: {
  //   drawer(newValue) {
  //     if (newValue != this.localDrawer) {
  //       this.localDrawer = newValue
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1.5rem;
  color: #fafafa;
}
</style>
