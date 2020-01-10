<template>
  <v-container fill-height>
    <span class="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <v-row align-content="center">
      <v-col sm12 md6 offset-md="1">
        <div class="text-intro">
          <h1 class="font-weight-bold display-3">
            Hi,
            <br />I'm
            <span class="brand-span">Taj</span>eddine,
            <br />software developer.
          </h1>
          <div class="text-intro-skills" style="paddingTop: 27px">
            <p class="font-weight-light">Full Stack Javascript Developer</p>
          </div>
          <nuxt-link class="text-uppercase contact-btn mt-2" to="/contact">contact me</nuxt-link>
        </div>
      </v-col>
      <v-col sm12 md6>
        <div class="svg d-flex justify-center align-center">
          <svg
            id="svg"
            width="300"
            height="190"
            viewBox="0 0 268 115"
            fill="08FDD8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88.6489 18.1881H91.1489V15.6881V6.76005V4.26005H88.6489H5.70486H3.20486V6.76005V15.6881V18.1881H5.70486H39.6369V109V111.5H42.1369H52.2169H54.7169V109V18.1881H88.6489ZM130.558 4.26006H128.894L128.252 5.7953L85.4841 108.035L84.0348 111.5H87.7904H98.5904H100.268L100.904 109.948L113.372 79.5321H155.96L168.569 109.957L169.208 111.5H170.878H181.534H185.28L183.843 108.041L141.363 5.80084L140.723 4.26006H139.054H130.558ZM211.56 92.7514L208.886 90.9281L207.798 93.9761L204.918 102.04L204.271 103.851L205.856 104.941C212.48 109.495 220.385 111.717 229.448 111.717C237.176 111.717 243.606 110.435 248.534 107.649C253.376 104.912 257.083 101.047 259.61 96.0979C262.082 91.257 263.635 85.5274 264.332 78.9689C265.113 72.4258 265.5 65.2265 265.5 57.377V5.39297V2.89297H263H252.92H250.42V5.39297V57.377C250.42 64.137 250.182 70.1568 249.71 75.4426C249.247 80.5305 248.239 84.7076 246.75 88.0361C245.31 91.2549 243.24 93.6301 240.545 95.2655C237.996 96.7755 234.367 97.645 229.448 97.645C225.535 97.645 222.052 97.145 218.975 96.1788C215.87 95.1737 213.419 94.0188 211.56 92.7514ZM117.592 66.6121L134.718 25.1547L151.608 66.6121H117.592Z"
              stroke="#08FDD8"
              stroke-width="5"
            />
          </svg>
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
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.text-intro {
  color: $white;

  .text-intro-skills {
    font-family: 'Open Sans', sans-serif;
    color: rgb(175, 175, 175);
    letter-spacing: 3px;
  }

  .brand-span {
    color: $secondary-color;
  }

  .contact-btn {
    @include btn();
  }

  .contact-btn:hover {
    @include btnHover();
  }
}

.svg {
  animation: fill 3s forwards;

  path {
    stroke-dasharray: 1216px;
    stroke-dashoffset: 1216px;
    animation: stroke 4.5s forwards;
  }

  @keyframes stroke {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }

    to {
      fill: #08fdd8;
    }
  }
}
</style>