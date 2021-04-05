<template>
  <div class="Memberships">
    <v-container class="mt-5 membership-container">
      <v-row align-content="center" justify="center">
        <!-- Basic Tier Subscription -->
        <v-card class="mx-2" max-height="550" height="509" width="350">
          <v-sheet color="rgba(209, 191, 183, 1)" elevation="1" height="100">
            <v-container>
              <v-col>
                <v-row align-content="center" justify="center" no-gutters>
                  <h1 class="white--text">Basic</h1>
                </v-row>
              </v-col>
            </v-container>
          </v-sheet>

          <v-card-title> $3.99/mo Annual (Save $12)</v-card-title>

          <v-card-subtitle> $4.99/mo No Commitment </v-card-subtitle>

          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-default-header
            hide-default-footer
            class="elevation-1"
          ></v-data-table>

          <v-card-actions class="pa-0">
            <v-btn color="green lighten-2 white--text" tile block to="/membership-order-summary">
              Sign-up - Basic
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Middle Tier/Premium Subscription -->
        <v-card class="mx-2" max-height="550" height="509" width="350">
          <v-sheet color="rgba(209, 191, 183, 1)" elevation="1" height="100">
            <v-container>
              <v-col>
                <v-row align-content="center" justify="center" no-gutters>
                  <h1 class="white--text">Premium</h1>
                </v-row>
              </v-col>
            </v-container>
          </v-sheet>

          <v-card-title> $7.99/mo Annual (Save $24)</v-card-title>

          <v-card-subtitle> $9.99/mo No Commitment </v-card-subtitle>

          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-default-header
            hide-default-footer
            class="elevation-1"
          ></v-data-table>

          <v-card-actions class="pa-0">
            <v-btn color="green lighten-2 white--text" tile block to="/membership-order-summary">
              Sign-up - Premium
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- Diamond or Top tier Subscription -->
        <v-card class="mx-2" max-height="550" height="509" width="350">
          <v-sheet color="rgba(209, 191, 183, 1)" elevation="1" height="100">
            <v-container>
              <v-col>
                <v-row align-content="center" justify="center" no-gutters>
                  <h1 class="white--text">Elite</h1>
                </v-row>
              </v-col>
            </v-container>
          </v-sheet>

          <v-card-title> $15.99/mo Annual (Save $48)</v-card-title>

          <v-card-subtitle> $19.99/mo No Commitment </v-card-subtitle>

          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-default-header
            hide-default-footer
            class="elevation-1"
          ></v-data-table>

          <v-card-actions class="pa-0">
            <v-btn color="green lighten-2 white--text" tile block to="/membership-order-summary">
              Sign-up - Elite
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "Memberships",

  components: {EikonaFooter},

  data: () => ({
    headers: [
      {
        text: "Features",
        align: "start",
        value: "name",
      },
      { text: "Description", value: "description" },
    ],
    desserts: [
      {
        name: "Feature 1",
        description: "Feature Description",
      },
      {
        name: "Feature 2",
        description: "Feature Description",
      },
      {
        name: "Feature 3",
        description: "Feature Description",
      },
      {
        name: "Feature 4",
        description: "Feature Description",
      },
      {
        name: "Feature 5",
        description: "Feature Description",
      },
      {
        name: "Feature 6",
        description: "Feature Description",
      },
    ],
  }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.membership-container {
  height: 84.2vh;
}
</style>
