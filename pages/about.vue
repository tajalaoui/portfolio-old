<template>
  <v-container fill-height>
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <v-row>
      <v-col sm12 md6  class="left-side">
        <h1 class="font-weight-bold">About me</h1>
        <p style="paddingTop: 27px">
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
        class="d-flex justify-center align-center flex-wrap flex-md-nowrap right-side"
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
    <span class="tags bottom-tags">
      &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />&lt;/html&gt;
    </span>
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

@media (max-width: 900px) {
  .left-side,
  .right-side {
    margin: 35px 0;
  }
  .right-side {
    margin-top: 15%;
  }
}
</style>