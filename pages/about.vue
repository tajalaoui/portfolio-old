<template>
  <v-container fill-height>
    <v-row>
      <v-col sm-12 md-6>
        <h1 class="display-3 mb-4 font-weight-bold">About me</h1>
        <p>
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
      <v-col class="d-flex justify-center align-center" sm-12 md-6>
        <div class="specialities">
          <icon class="icon" icon="tachometer-alt"></icon>
          <h3>Fast</h3>
          <p>
            Fast load times and lag free
            interaction, my highest priority.
          </p>
        </div>
        <div class="specialities">
          <icon class="icon" icon="mobile-alt"></icon>
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div class="specialities">
          <icon class="icon" icon="lightbulb"></icon>
          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
// I TRIED TO CHANGE THEIR H1
h1 {
  color: $secondary-color;
  font-family: 'Raleway', sans-serif !important;
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