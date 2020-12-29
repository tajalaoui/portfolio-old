<template>
  <v-container>
    <v-row dense style="margin-top: 5%">
      <v-col cols="12">
        <v-card v-for="(project, i) in projects" :key="i">
          <div class="d-flex flex-column flex-md-row justify-space-between">
            <v-avatar height="300" width="500" class="ma-3" tile>
              <!-- <v-img src=""></v-img> -->
              <img :src="project.image" alt="" />
            </v-avatar>
            <div class="align-self-center">
              <v-card-title
                class="card-title"
                v-text="project.title"
              ></v-card-title>
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
      title: 'Projects.js',
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
          title:
            'Via Syndic  is a company that manages real estate based in Morocco, Marrakech.',
          image: '/projects/via-syndic.png',
          url: 'http://www.via-syndic.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

// It takes effect on sm
.v-avatar {
  display: flex;
  align-self: center !important;
}

.v-card {
  .card-title {
    max-width: 37ch;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
}

.v-card:nth-child(even) {
  border: none !important;
}

.visit-website-btn {
  @include btn();
}

.visit-website-btn:hover {
  @include btnHover();
}

@media (max-width: 600px) {
  img {
    height: 95%;
    width: 95%;
  }

  .v-avatar {
    width: 100% !important;
  }
}

@media (max-width: 461px) {
  img {
    height: 85%;
    width: 85%;
  }
}
</style>
