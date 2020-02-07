<template>
  <v-container fill-height>
    <v-row>
      <v-col sm12 md6>
        <h1 class="font-weight-bold">About me</h1>
        <p style="paddingTop: 25px">
          Professionally connected with the information technology
          <br />for many years.
        </p>
        <p>Self taught programmer, independent employee.</p>
        <p>
          My hobbies are exploring new things, playing video games
          <br />and exercising.
        </p>
        <p>
          Interested in working both backend/frontend projects
          <br />and working on ambitious projects with positive people.
        </p>
      </v-col>
      <v-col
        sm12
        md6
        offset-sm="1"
        class="d-flex justify-center align-center flex-wrap flex-md-nowrap"
      >
        <div class="specialities">
          <icon class="icon" icon="tachometer-alt"></icon>
          <h3>Fast</h3>
          <p>
            Fast load times and lag free
            interaction, my highest priority.
          </p>
        </div>
        <div class="specialities">
          <icon class="icon" icon="lightbulb"></icon>
          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div class="specialities">
          <icon class="icon" icon="mobile-alt"></icon>
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>
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
  margin: 0 11px;
  text-align: center;

  h3 {
    color: $secondary-color;
    margin: 11px 0;
  }

  .icon {
    font-size: 45px;
  }

  .icon:hover {
    color: $secondary-color;
    transition: $transition;
  }
}
</style>