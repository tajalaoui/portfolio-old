<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col cols="12" md="6">   
        <TheForm />
      </v-col>
      <v-col cols="12" md="6">
        <img class="svg" src="/pages/contact.svg" alt="contact-image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    TheForm: () => import('@/components/TheForm.vue')
  },
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Me'
        }
      ]
    }
  }
}
</script>
