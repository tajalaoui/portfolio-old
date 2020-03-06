<template>
  <v-container fill-height>
    <v-row>
      <v-col class="ux" md6>
        <h1>About me</h1>
        <p style="paddingTop: 21px">
          Professionally connected with the information technology
          <br />for many years
          <span class="dot">.</span>
        </p>
        <p>
          Self taught programmer, Passionate freelancer
          <span class="dot">.</span>
        </p>
        <p>
          My hobbies are following up with tech news,
          <br />Staying fit and playing games
          <span class="dot">.</span>
        </p>
        <p>
          Looking forward to build amazing products
          <br />For my clients
          <span class="dot">.</span>
        </p>
      </v-col>
      <v-col
        class="d-md-flex justify-center align-center flex-wrap flex-lg-nowrap"
        md6
        offset-md="1"
      >
        <v-card class="specialities">
          <icon class="icon" icon="tachometer-alt"></icon>
          <h3>Fast</h3>
          <p>
            Fast load times and lag free
            interaction, my highest priority
            <span
              class="dot"
            >.</span>
          </p>
        </v-card>
        <v-card class="specialities">
          <icon class="icon" icon="lightbulb"></icon>
          <h3>Intuitive</h3>
          <p>
            Strong preference for easy to use, intuitive UX/UI
            <span class="dot">.</span>
          </p>
        </v-card>
        <v-card class="specialities">
          <icon class="icon" icon="mobile-alt"></icon>
          <h3>Responsive</h3>
          <p>
            My layouts will work on any device, big or small
            <span class="dot">.</span>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Page'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

h1 {
  color: $secondary-color;
}

.specialities {
  margin: 0 9px;
  text-align: center;

  h3 {
    color: $secondary-color;
    margin: 9px 0;
  }

  .icon {
    font-size: 45px;
  }

  .icon:hover {
    color: $secondary-color;
    transition: $transition;
  }
}

@media (max-width: 900px) {
  * {
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>