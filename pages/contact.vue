<template>
  <v-container>
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <v-row class="d-flex justify-center">
      <h1 class="display-3 font-weight-bold">Contact me</h1>
    </v-row>
    <div class="alerts mx-auto">
      <transition name="show">
        <v-alert v-if="isSent" type="success">Email sent.</v-alert>
        <v-alert v-if="isError" type="error">Email not sent.</v-alert>
      </transition>
    </div>
    <v-row>
      <v-form
        class="mx-auto mt-5"
        ref="form"
        v-model="valid"
        @submit.prevent="validate"
        lazy-validation
        dark
        data-netlify="true"
      >
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <!-- I MODIFIED THIS. -->
        <v-text-field
          v-model="subject"
          :counter="25"
          :rules="subjectRules"
          label="Subject"
          required
        ></v-text-field>

        <v-textarea
          class="mb-5"
          v-model="message"
          label="Message"
          :counter="300"
          :rules="messageRules"
          required
        ></v-textarea>
        <!-- I DID AT CLICK PREVENT ON SUBMIT. -->
        <button large :disabled="!valid" color="success" class="mr-4 button" type="submit">Send</button>
      </v-form>
    </v-row>
    <span class="tags bottom-tags">
      &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />&lt;/html&gt;
    </span>
  </v-container>
</template>


<script>
import axios from 'axios'

export default {
  data: () => ({
    isSent: false,
    isError: false,
    valid: true,
    name: '',
    email: '',
    subject: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    subjectRules: [
      v => !!v || 'Subject is required',
      v => (v && v.length <= 25) || 'Subject must be less than 25 characters'
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 300) || 'Subject must be less than 300 characters'
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.submitForm()
        this.isSent = true
      } else {
        this.isError = true
      }
    },
    submitForm() {
      axios
        .post('/server', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  head() {
    return {
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

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.v-form {
  width: 65%;
}

h1 {
  margin: 65px 0;
  color: $secondary-color;
}

.alerts {
  width: 66%;
  transition: 3s ease;
}

.button {
  @include btn();
}

.button:hover {
  @include btnHover();
}

.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;
}
.show-enter,
.show-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>