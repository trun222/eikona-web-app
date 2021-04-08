<template>
  <div class="account eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row justify="start">
        <v-col cols="4">
          <v-card class="mx-2 pa-4">
            <!-- Membership -->
            <h1>Account</h1>
            <h3>Membership <span class="subtitle-1 success--text">Basic</span></h3>
            <h3>Expiration <span class="subtitle-1 red--text">02/16/2022</span></h3>
            <!-- Quota -->
            <h3>Quota <span class="subtitle-1 warning--text">0.00 GB of 500.00 GB</span></h3>
            <!-- Years of Membership -->
            <h3>Years of Membership</h3>
            <v-icon class="yellow--text">mdi-star</v-icon>
            <v-icon class="yellow--text">mdi-star</v-icon>
            <v-icon class="yellow--text">mdi-star</v-icon>
            <v-icon class="yellow--text">mdi-star</v-icon>

            <v-card-actions>
              <v-row justify="center">
                <v-col>
                  <v-btn color="warning" to="/memberships">
                    Upgrade
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn color="rgba(209, 191, 183, 1)" dark depressed to="/settings">
                    <v-icon class="mr-2">mdi-cog</v-icon> Settings
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-2 pa-4">
            <!-- Orders -->
            <h1>Orders</h1>
            <v-data-table
              :headers="order_headers"
              :items="user_orders"
              hide-default-footer
              disable-filtering
              disable-sort
            ></v-data-table>

            <v-card-actions>
              <v-row class="mt-5" justify="center">
                <v-btn color="rgba(209, 191, 183, 1)" dark depressed to="/orders">
                  <v-icon class="mr-2">mdi-folder-text</v-icon> Orders
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
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
  name: "Account",

  components: {EikonaFooter},

  data: () => ({
    order_headers: [
      { text: "Service", value: "name" },
      { text: "Description", value: "description" },
      { text: "Date", value: "date"}
    ],
    user_orders: [
      {
        name: "Membership",
        description: "Completed an order for a Basic Eikona Membership.",
        date: "1/01/2021"
      },
      {
        name: "Heirlooms",
        description: `Completed an order for Heirlooms of $430.23.`,
        date: "12/05/2020"
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

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}
</style>
