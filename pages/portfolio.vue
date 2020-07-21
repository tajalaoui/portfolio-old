<template>
  <v-container>
    <v-row dense style="margin-top: 5%;">
      <v-col cols="12">
        <v-card v-for="(project, i) in projects" :key="i">
          <div class="d-flex flex-column flex-md-row justify-space-between">
            <v-avatar height="300" width="515" class="ma-3" tile>
              <!-- <v-img src=""></v-img> -->
              <img :src="project.image" alt="" />
            </v-avatar>
            <div class="align-self-center">
              <v-card-title v-text="project.title"></v-card-title>
              <v-card-actions>
                <div class="buttons">
                  <a
                    class="visit-website-btn"
                    role="button"
                    rel="noopener"
                    target="_blank"
                    :href="project.url"
                    >Visit Website</a
                  >
                </div>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projects i created',
        },
      ],
    }
  },
  data() {
    return {
      projects: [
        {
          title: 'Syndic company based in Morocco, Marrakech',
          image: '/projects/via-syndic.png',
          url: 'http://www.via-syndic.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

::-webkit-scrollbar {
  background: #fafafa;
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: $secondary-color;
  border-radius: 5px;
}

img {
  height: 100%;
  width: 100%;
  background-position: center;
  object-fit: cover;
  border-radius: 1px;
}

// img:hover {
//   transform: scale(1.1);
//   transition: all 0.7s ease-in-out;
// }

// It takes effect on sm
.v-avatar {
  display: flex;
  align-self: center !important;
}

@media (max-width: 551px) {
  img {
    height: 81%;
    width: 81%;
    object-fit: contain;
  }
}

@media (max-width: 451px) {
  img {
    height: 55%;
    width: 55%;
    object-fit: contain;
  }
}

.v-card {
  margin: 0;
  padding: 0;
}

.visit-website-btn {
  @include btn();
}

.visit-website-btn:hover {
  @include btnHover();
}
</style>
