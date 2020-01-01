<template>
  <v-container>
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <v-row class="d-flex justify-center my-5">
      <h1 class="display-3 font-weight-bold">Contact me</h1>
    </v-row>
    <v-row>
      <v-form class="mx-auto mt-5" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <!-- I MODIFIED THIS. -->
        <v-text-field v-model="subject" :counter="15" :rules="subjectRules" label="Subject" required></v-text-field>

        <v-textarea class="mb-5" v-model="message" label="Message" required></v-textarea>

        <button large :disabled="!valid" color="success" class="mr-4 button" @click="validate">Send</button>
      </v-form>
    </v-row>
    <span class="tags bottom-tags">
      &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />&lt;/html&gt;
    </span>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: '',
    subject: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    subjectRules: [
      v => !!v || 'Subject is required',
      v => (v && v.length <= 15) || 'Subject must be less than 15 characters'
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.v-form {
  width: 60%;
}

h1 {
  margin: 65px 0;
  color: $secondary-color;
}

.button {
  @include btn();
}

.button:hover {
  @include btnHover();
}
</style>