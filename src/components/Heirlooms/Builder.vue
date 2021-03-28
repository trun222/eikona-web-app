<template>
  <div class="builder">
    <v-container class="mt-5">
      <v-row align-content="center" justify="center">
        <v-col cols="4">
          <v-card class="pa-5">
            <v-form>
                <h2 class="mb-4">Heirlooms Builder</h2>

                <p class="red--text">
                  Note: The product is not added to the cart until the '+' button is clicked.
                </p>

                <!-- Photos -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field v-model="photosQuantity" label="Number of Photos to send to Eikona" prepend-inner-icon="mdi-image" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!photosQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- VHS -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of VHS tapes to send to Eikona" prepend-inner-icon="mdi-video-box" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!vhsQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- CD's -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of CD's to send to Eikona" prepend-inner-icon="mdi-music-circle" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!cdQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- DVD's -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of DVD's to send to Eikona" prepend-inner-icon="mdi-movie" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!dvdQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- Bluray -->
                <v-row>
                  <v-col cols="10">
                    <v-text-field label="Number of Blurays to send to Eikona" prepend-inner-icon="mdi-video-4k-box" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="4">
          <v-btn class="my-2" :disabled="photosQuantity || vhsQuantity || cdQuantity || dvdQuantity || blurayQuantity" color="success" block>Checkout</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Builder",

  components: {},

  data: () => ({
    photosQuantity: '',
    vhsQuantity: '',
    cdQuantity: '',
    dvdQuantity: '',
    blurayQuantity: ''
  }),
});
</script>

<style lang="scss">
.memberships-title {
  color: rgba(226, 152, 134, 1);
}
</style>
