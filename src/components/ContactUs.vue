<template>
  <div class="contact-us eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row justify="center">
        <h1 class="my-3 white--text default-letter-spacing">Contact Us</h1>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-col cols="4" md="8">
          <v-form>
              <h2 class="mb-4 white--text default-letter-spacing">Your Email</h2>
              
              <v-row align-content="center" justify="center">
                <v-text-field solo>

                </v-text-field>
              </v-row>

              <h2 class="mb-4 white--text default-letter-spacing">Message</h2>

              <!-- Message -->
              <v-row align-content="center" justify="center">
                <v-textarea solo no-resize></v-textarea>
              </v-row>

              <v-row>
                <v-btn class="white--text" color="rgba(209, 191, 183, 1)" block>Send</v-btn>
              </v-row>

              <v-row class="mt-5" justify="start">
                <v-btn class="white--text" icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>

                <v-btn class="white--text" icon>
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>

                <v-btn class="white--text" icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-row>
          </v-form>
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
  name: "ContactUs",

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
