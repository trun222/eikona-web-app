<template>
  <div class="heirlooms eikona-company-gradient pa-3">
    <v-container class="pa-5">
      <!-- Heirloom Explaination Video -->
      <v-row class="my-3" justify="center">
        <v-sheet class="pa-3" color="rgba(209, 191, 183, 1)" height="465" width="725" elevation="3">
          <video height="440" width="700" controls>
            <source src="video.mp4'" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </v-sheet>
      </v-row>

      <v-row justify="center">
        <h2 class="my-3 white--text default-letter-spacing">Services</h2>
      </v-row>

      <v-row class="my-4" justify="center">
        <v-col cols="6">
          <v-data-table
            :headers="services_headers"
            :items="services"
            hide-default-footer
            disable-filtering
            disable-sort
          ></v-data-table>
        </v-col>
      </v-row>

      <v-row justify="center">
        <h2 class="my-3 white--text default-letter-spacing">Pricing</h2>
      </v-row>

      <v-row class="my-3" justify="center">
        <v-col cols="6">
          <v-data-table
            :headers="prices_headers"
            :items="prices"
            hide-default-footer
            disable-filtering
            disable-sort
          ></v-data-table>
        </v-col>
      </v-row>

      <v-row class="my-3" justify="center">
        <v-col cols="6">
          <v-btn class="white--text" color="rgba(226, 152, 134, 1)" block to="/heirlooms/builder" depressed>Preserve your favorite memories now!</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "Heirlooms",

  components: {EikonaFooter},

  data: () => ({
    services_headers: [
      { text: "Service", value: "name" },
      { text: "Description", value: "description" },
    ],
    services: [
      {
        name: "Photos",
        description: "Preserve your baby books, scrap books and wedding books.",
      },
      {
        name: "VHS's",
        description: "Your family videos can now be accessible instead of collecting dust.",
      },
      {
        name: "DVD's",
        description: "Easily view your personal DVD's on your computer or mobile phone.",
      },
      {
        name: "CD's",
        description: "Share your music or audio recording with your friends & family.",
      },
      {
        name: "Bluray's",
        description: "High definition videos can now be easily stored in the cloud!",
      },
    ],
    prices_headers: [
      {
        text: "Service",
        align: "start",
        value: "name",
      },
      { text: "Price", value: "description" },
    ],
    prices: [
      {
        name: "Photos",
        description: ".50 cents/Photo",
      },
      {
        name: "VHS's",
        description: "$15/VHS",
      },
      {
        name: "DVD's",
        description: "$10/DVD",
      },
      {
        name: "CD's",
        description: "$5/CD",
      },
      {
        name: "Bluray's",
        description: "$20/Bluray",
      },
    ],
  }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.memberships-title {
  color: rgba(226, 152, 134, 1);
}

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}
</style>
