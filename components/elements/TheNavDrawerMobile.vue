<template>
  <v-navigation-drawer color="black" width="55" v-model="localDrawer" app>
    <v-list nav>
      <v-list-item-content style="height: 100%" class="my-auto">
        <v-list-item-title v-for="link in links" :key="link.to">
          <v-btn class="btn my-1" active-class="btn" :to="link.to" icon>
            <icon :icon="link.icon" />
          </v-btn>
        </v-list-item-title>
        <!-- Blog btn -->
        <!-- <v-btn
          class="btn my-1"
          active-class="btn"
          href="https://tajeddine.hashnode.dev/"
          rel="noopener"
          target="_blank"
          role="button"
          icon
        >
          <icon :icon="['fas', 'blog']" />
        </v-btn> -->
      </v-list-item-content>

      <LazyElementsTheResumeBtn />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import TheResumeBtn from '@/components/elements/TheResumeBtn'

export default {
  components: TheResumeBtn,
  props: {
    links: Array,
    drawer: Boolean,
  },
  data: () => ({
    localDrawer: false,
    // links: [
    //   { to: '/', icon: 'home' },
    //   { to: '/about', icon: 'user-secret' },
    //   { to: '/skills', icon: 'code' },
    //   { to: '/portfolio', icon: 'eye' },
    //   { to: '/contact', icon: 'envelope' },
    // ],
  }),
  watch: {
    drawer(newValue) {
      if (newValue != this.localDrawer) {
        this.localDrawer = newValue
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1.5rem;
  color: #fafafa;
}
</style>
