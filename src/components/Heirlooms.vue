<template>
  <div class="heirlooms">
    <v-container class="mt-5">
      <v-row class="my-4" align-content="center" justify="center">
        <h1>Heirlooms</h1>
      </v-row>

      <!-- Heirloom Explaination Video -->
      <v-row class="my-3" justify="center">
        <v-sheet class="pa-3" color="rgba(209, 191, 183, 1)" height="465" width="725" elevation="3">
          <video height="440" width="700" controls>
            <source src="video.mp4'" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </v-sheet>
      </v-row>

      <v-row class="my-5" justify="center">
        <v-card
          class="pa-5"
          >
          <p>
            This is a small text area containing our marketing info for heirlooms.
          </p>
        </v-card>
      </v-row>

      <v-row justify="center">
        <h2 class="my-3">Services</h2>
      </v-row>

      <v-row class="my-3" justify="center">
        <v-col cols="6">
          <v-card
              class="pa-3"
              tile
            >
              <v-data-table
                :headers="services_headers"
                :items="services"
                hide-default-footer
                disable-filtering
                disable-sort
              ></v-data-table>
            </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <h2 class="my-3">Pricing</h2>
      </v-row>

      <v-row class="my-3" justify="center">
        <v-col cols="6">
          <v-card
              class="pa-3"
              tile
            >
              <v-data-table
                :headers="prices_headers"
                :items="prices"
                hide-default-footer
                disable-filtering
                disable-sort
              ></v-data-table>
            </v-card>
        </v-col>
      </v-row>

      <v-row class="my-3" justify="center">
        <v-col cols="6">
          <v-btn class="white--text" color="green" block>Preserve your favorite memories now!</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Heirlooms",

  components: {},

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
.memberships-title {
  color: rgba(226, 152, 134, 1);
}
</style>
