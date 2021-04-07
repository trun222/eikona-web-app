<template>
  <div class="post eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row justify="center">
        <h1 class="my-3 white--text default-letter-spacing">Blog Post TItle</h1>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-card class="pa-4">
          <vue-simple-markdown class="default-letter-spacing" :source="post">
          </vue-simple-markdown>
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
  name: "Post",

  components: {EikonaFooter},

  data: () => ({
    post: 
`
  Yeah, so this is a very basic post...    
    
    
`
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
