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
      <v-row class="section-container" justify="center">
        <v-col align-self="center" cols="6">
          <h1 class="text-center">Eikona Heirlooms</h1>
        </v-col>
      </v-row>
    </section>
    

    <!-- Heirlooms Service Brief Overview -->
    <section class="ma-0 pa-3 landing-section">
      <v-row class="section-container" justify="center">
          <v-col align-self="center" justify="center">
            <div class="heirlooms-overview-background"></div>
            <h2 class="heirlooms-text text-center">Brief overview of Heirloom services.</h2>
          </v-col>
          <v-col class="ma-0 pa-0 description-image">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
      </v-row>
    </section>

    <!-- Eikona Cloud Sync Description -->
    <section class="ma-0 pa-3 landing-section cloud-background">
      <v-row class="section-container" justify="center">
        <v-col align-self="center" cols="6">
          <h2 class="text-center">Eikona Secure & Privacy Cloud Storage</h2>
        </v-col>
      </v-row>
    </section>

    <!-- Eikona Cloud Sync Brief Overview -->
    <section class="ma-0 pa-3 landing-section">
      <v-row class="section-container" justify="center">
          <v-col class="ma-0 pa-0 description-image">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
          <v-col align-self="center" justify="center">
            <h2 class="text-center">Brief overview of Heirloom services.</h2>
          </v-col>
      </v-row>
    </section>

    <!-- Footer -->
    <v-footer
      color="rgba(226, 152, 134, 1)"
      padless
    >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in footerLinks"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
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
    footerLinks: [
      'Home',
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
  background-image: url("../assets/waves.svg");
  background-position: bottom;
}

.heirlooms-text {
  position: relative;
  top: -170px;
}

.heirlooms-overview-background {
  height: 300px;
  background-image: url("../assets/blob_1.svg");
  background-size: 325px 560px;
  background-position: center;
}

.cloud-background {
  background-image: url("../assets/circle-scatter.svg");
  background-position: bottom;
}
</style>
