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
          <h1 class="heirlooms-title text-center">Heirlooms</h1>
        </v-col>
      </v-row>
    </section>
    

    <!-- Heirlooms Service Brief Overview -->
    <section class="ma-0 pa-3 landing-section heirlooms-section">
      <v-row class="section-container" justify="center">
          <v-col cols="6" align-self="center">
            <v-row justify="center">
                <h2 class="section-description-text text-center">Brief overview of Heirloom services.</h2>
            </v-row>
            <v-row justify="center">
                <v-btn class="mt-3" color="rgba(192, 231, 232, 1)" to="/heirlooms" dark>More</v-btn>
            </v-row>
          </v-col>
          <v-col class="ma-0 pa-0 description-image" cols="6">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../../src/assets/example_2.jpg')"
            ></v-img>
          </v-col>
      </v-row>
    </section>

    <!-- Eikona Cloud Sync Description -->
    <section class="ma-0 pa-3 landing-section cloud-storage-section">
      <v-row class="section-container" justify="center">
        <v-col align-self="center" cols="6">
          <h1 class="cloud-storage-title text-center">Private & Secure Cloud Storage</h1>
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
              :src="require('../../src/assets/example_1.jpg')"
            ></v-img>
          </v-col>
          <v-col align-self="center" justify="center" cols="6">
            <v-row justify="center">
              <h2 class="section-description-text text-center">Brief overview of Cloud services.</h2>
            </v-row>
            <v-row justify="center">
              <v-btn class="mt-3" color="rgba(192, 231, 232, 1)" to="/memberships" dark>More</v-btn>
            </v-row>
          </v-col>
      </v-row>
    </section>

    <!-- Footer -->
    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "Landing",

  components: {EikonaFooter},

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
@import '@/styles/colors.scss';

.intro-video {
  height: 93vh;
  width: 100%;
}

.landing-section {
  height: 550px;
  width: 100%;
}

.section-container {
  height: 100%;
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

.heirlooms-title {
  color: white;
  font-size: 3.5em;
  letter-spacing: 1rem;
}

.heirlooms-section {
  background-color: $color-accent1;
}

.cloud-storage-title {
  color: white;
  font-size: 3.5em;
  letter-spacing: 1rem;
}

.section-description-text {
  color: white;
  font-size: 2em;
  letter-spacing: 1rem;
}

.cloud-storage-section {
  background-color: $color-foreground;
}

.cloud-storage-overview {
  background-color: $color-accent1;
}
</style>
