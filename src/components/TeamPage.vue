<template>
  <div class="team-page eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row align-content="center" justify="center">
        <!-- Basic Tier Subscription -->
        <v-card class="mx-2" max-height="550" height="509" width="350">
          <v-img
            stretch
            height="350"
            :src="require('@/assets/thomas.jpg')"
          ></v-img>

          <v-card-title> Thomas R. Underwood II</v-card-title>

          <v-card-subtitle> Founder </v-card-subtitle>

          <v-card-actions class="px-2">
            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-facebook
              </v-icon>
            </v-btn>

            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-linkedin
              </v-icon>
            </v-btn>

            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-instagram
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-5" max-height="550" height="509" width="350">
          <v-img
            height="350"
            :src="require('@/assets/lucas.jpeg')"
          ></v-img>

          <v-card-title> Lucas Turnbo</v-card-title>

          <v-card-subtitle> Founder </v-card-subtitle>

          <v-card-actions class="px-2">
            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-facebook
              </v-icon>
            </v-btn>

            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-linkedin
              </v-icon>
            </v-btn>

            <v-btn color="rgba(226, 152, 134, 1)" icon>
              <v-icon>
                mdi-instagram
              </v-icon>
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
  name: "TeamPage",

  components: {EikonaFooter},

  data: () => ({
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
