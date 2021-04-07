<template>
  <div class="blog eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row justify="center">
        <h1 class="my-3 white--text default-letter-spacing">Blog</h1>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-col cols="4" md="8">
          <v-row align-content="center" justify="center">
            <v-col cols="6">
              <v-card class="mx-2" max-height="550" height="450" width="500" to="/">
                  <v-img
                    stretch
                    height="350"
                    :src="require('@/assets/blog_post_example_1.jpg')"
                  ></v-img>

                  <v-card-title> Blog Post Title</v-card-title>

                  <v-card-subtitle> 6/5/2021 </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="mx-2" max-height="550" height="450" width="500" to="/">
                  <v-img
                    stretch
                    height="350"
                    :src="require('@/assets/blog_post_example_1.jpg')"
                  ></v-img>

                  <v-card-title> Blog Post Title</v-card-title>

                  <v-card-subtitle> 6/4/2021 </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
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
  name: "Blog",

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
