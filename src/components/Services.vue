<template>
  <div class="services eikona-company-gradient">
    <v-row class="membership-container" no-gutters>
      <v-col cols="6">
        <v-sheet class="heirlooms-section pa-5" color="rgba(226, 152, 134, 1)">
          <v-row class="title-container pt-5" justify="center">
            <h1 class="heirlooms-title text-center">Heirlooms</h1>
          </v-row>
          <v-row class="heirlooms-icon-container" justify="center">
            <v-icon color="white" size="128px">mdi-treasure-chest</v-icon>
          </v-row>
          <v-row class="description-container" justify="center">
            <h2 class="white--text">Preserve your favorite family memories!</h2>
          </v-row>
          <v-row justify="center">
            <v-btn color="rgba(192, 231, 232, 1)" to="/heirlooms" dark depressed>Explore</v-btn>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="cloud-storage-section pa-5" color="rgba(192, 231, 232, 1)">
          <v-row class="title-container pt-5" justify="center">
            <h1 class="heirlooms-title text-center">Private & Secure Cloud Storage</h1>          
          </v-row>
          <v-row class="heirlooms-icon-container" justify="center">
            <v-icon color="white" size="128px">mdi-cloud</v-icon>
          </v-row>
          <v-row class="description-container" justify="center">
            <h2 class="white--text">Safely sync your videos and images.</h2>
          </v-row>
          <v-row justify="center">
            <v-btn color="rgba(226, 152, 134, 1)" to="/memberships" dark depressed>Explore</v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Footer -->
    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "Services",

  components: {EikonaFooter},

  data: () => ({}),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}

.title-container {
  height: 150px;
}

.description-container {
  height: 150px;
  padding: 2em;
}

.heirlooms-title {
  color: white;
  font-size: 2em;
  letter-spacing: 1rem;
}

.heirlooms-section {
  height: 87.8vh;
}

.cloud-storage-section {
  height: 87.8vh;
}
</style>
