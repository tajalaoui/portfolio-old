<template>
  <v-container fill-height>
    <v-row class="align-center">
      <v-col md="6">
        <h1>{{ $t('about.heading') }}</h1>
        <p>
          {{ $t('about.1st-p') }}
          <br />
          {{ $t('about.2st-p') }}
        </p>
        <p>{{ $t('about.3st-p') }}</p>
        <p>
          {{ $t('about.4st-p') }}
          <br />
          {{ $t('about.5st-p') }}
        </p>
        <p>
          {{ $t('about.6st-p') }}
          <br />
          {{ $t('about.7st-p') }}
        </p>
      </v-col>
      <v-col
        class="d-md-flex justify-center align-center flex-wrap flex-lg-nowrap align-stretch"
        md="6"
      >
        <v-card class="specialities">
          <icon class="icon" icon="tachometer-alt"></icon>
          <!-- <v-icon class="icon">mdi-speed</v-icon> -->
          <h3>{{ $t('about.fast-title') }}</h3>
          <p>{{ $t('about.fast-text') }}</p>
        </v-card>
        <v-card class="specialities">
          <icon class="icon" icon="lightbulb"></icon>
          <h3>{{ $t('about.ease-title') }}</h3>
          <p>{{ $t('about.ease-text') }}</p>
        </v-card>
        <v-card class="specialities">
          <icon class="icon" icon="mobile-alt"></icon>
          <h3>{{ $t('about.res-title') }}</h3>
          <p>{{ $t('about.res-text') }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
<<<<<<< HEAD
      title: 'About.js',
=======
      title: 'About',
>>>>>>> dec49bd39beff7965c1528da03881df30a262596
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Basic Informations about me',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

h1 {
  color: $secondary-color;
}

.specialities {
  margin: 0 7px;
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

@media (max-width: 953px) {
  * {
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
