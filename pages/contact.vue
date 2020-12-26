<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <LazyTheForm />
      </v-col>
      <v-col cols="12" md="6">
        <img class="svg" src="/pages/contact.svg" alt="contact-image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact.js',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Me',
        },
      ],
    }
  },
}
</script>
