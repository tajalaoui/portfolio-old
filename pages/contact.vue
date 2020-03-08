<template>
  <v-container fill-height>
    <v-row>
      <v-col sm="12" lg="7">
        <div class="alerts">
          <transition name="show">
            <v-alert v-if="isSent" type="success">Email sent.</v-alert>
            <v-alert v-if="isError" type="error">Email not sent.</v-alert>
          </transition>
        </div>
        <v-form ref="form" v-model="valid" @submit.prevent="validate" lazy-validation dark>
          <v-text-field
            color="rgb(41, 247, 9)"
            v-model="name"
            :counter="10"
            :rules="nameRules"
            :label="$t('contact.name')"
            required
          ></v-text-field>

          <v-text-field
            color="rgb(41, 247, 9)"
            v-model="email"
            :rules="emailRules"
            :label="$t('contact.email')"
            required
          ></v-text-field>
          <!-- I MODIFIED THIS. -->
          <v-text-field
            color="rgb(41, 247, 9)"
            v-model="subject"
            :counter="25"
            :rules="subjectRules"
            :label="$t('contact.subject')"
            required
          ></v-text-field>

          <v-textarea
            color="rgb(41, 247, 9)"
            class="mb-3"
            v-model="message"
            :label="$t('contact.message')"
            :counter="300"
            :rules="messageRules"
            required
          ></v-textarea>
          <!-- I DID AT CLICK PREVENT ON SUBMIT. -->
          <button class="button" :disabled="!valid" color="success" type="submit">{{$t('contact.send')}}</button>
        </v-form>
      </v-col>
      <v-col sm="12" lg="5">
        <img src="/pages/contact.svg" alt="contact-image" />
      </v-col>
    </v-row>
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
  width: 81%;
}

img {
  height: 450px;
  width: 545px;
}

.alerts {
  width: 81%;
  transition: 0.3s ease;
}

.button {
  @include btn();
  width: 100%;
}

.button:hover {
  @include btnHover();
}

.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease-in-out;
}
.show-enter,
.show-leave-to {
  opacity: 0;
  transform: scale(0);
}

@media (max-width: 1270px) {
  .v-form,
  .alerts,
  img {
    margin: 0 auto !important;
  }

  img {
    display: block;
    height: 490px;
    width: 490px;
  }
}


@media (max-width: 900px) {
  img {
    height: 370px;
    width: 370px;
  }
}

@media (max-width: 600px) {
  img {
    height: 290px;
    width: 290px;
  }
}
</style>