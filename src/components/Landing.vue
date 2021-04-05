<template>
  <div class="landing">
    <visual 
      class="ma-0 intro-video"
      ref='intro-video' 
      video='video.mp4' 
      autoload
      autoplay
      loop
      width='100%' />

    <!-- Company Description Section -->
    <section class="ma-0 landing-section heirlooms-background">
      <v-row class="section-container" justify="center" no-gutters>
        <v-col align-self="center" cols="6">
          <h1 class="text-center">Eikona Heirlooms</h1>
        </v-col>
      </v-row>
    </section>
    

    <!-- Heirlooms Service Brief Overview -->
    <section class="ma-0 pa-3 landing-section heirlooms-section">
      <v-row class="section-container" justify="center">
          <v-col cols="6" align-self="center" justify="center">
            <h2 class="text-center">Brief overview of Heirloom services.</h2>
          </v-col>
          <v-col class="ma-0 pa-0 description-image" cols="6">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../../src/assets/example_1.jpg')"
            ></v-img>
          </v-col>
      </v-row>
    </section>

    <!-- Eikona Cloud Sync Description -->
    <section class="ma-0 pa-3 landing-section cloud-storage-section">
      <v-row class="section-container" justify="center">
        <v-col align-self="center" cols="6">
          <h2 class="text-center">Eikona Secure & Privacy Cloud Storage</h2>
        </v-col>
      </v-row>
    </section>

    <!-- Eikona Cloud Sync Brief Overview -->
    <section class="ma-0 pa-3 landing-section cloud-storage-overview">
      <v-row class="section-container" justify="center">
          <v-col class="ma-0 pa-0 description-image" cols="6">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../../src/assets/example_2.jpg')"
            ></v-img>
          </v-col>
          <v-col align-self="center" justify="center" cols="6">
            <h2 class="text-center">Brief overview of Heirloom services.</h2>
          </v-col>
      </v-row>
    </section>

    <!-- Footer -->
    <v-footer
      class="eikona-company-gradient"
      padless
    >
    <div class="pl-3">
      <v-img
        contain
        height="50"
        width="150"
        :src="require('../../src/assets/eikona-branding.png')"
      />
    </div>
    <v-row
      justify="center"
      no-gutters
    >

      <v-btn
        v-for="link in navLinks"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Landing",

  components: {},

  data: () => ({
    navLinks: [
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
});
</script>

<style lang="scss">
$color-background: rgba(246, 246, 246, 1);
$color-foreground: rgba(192, 231, 232, 1);
$color-accent1: rgba(209, 191, 183, 1);
$color-accent2: rgba(226, 152, 134, 1);
$color-accent3: rgba(244, 113, 86, 1);

.eikona-company-gradient {
  background: rgb(226,152,134);
  background: linear-gradient(90deg, rgba(226,152,134,1) 0%, rgba(209,191,183,1) 42%, rgba(192,231,232,0.9808298319327731) 72%, rgba(246,231,232,1) 92%);
}

.intro-video {
  height: 93vh;
  width: 100%;
}

.landing-section {
  height: 550px;
  width: 100%;
  background-color: white;
}

.section-container {
  height: 100%;
}

.section-next {
  background-color: rgba(226, 152, 134, 1);
}

.description-image {
  height: 100%;
  width: 100%;
}

.heirlooms-background {
	background: linear-gradient(-45deg, $color-background, $color-foreground, $color-accent1, $color-accent2, $color-accent3);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.heirlooms-section {
  background-color: $color-accent1;
}

.cloud-storage-section {
  background-color: $color-foreground;
}

.cloud-storage-overview {
  background-color: $color-accent1;
}
</style>
