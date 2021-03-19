<template>
  <v-app class="app">
    <v-app-bar app color="rgba(226, 152, 134, 1)">
      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          contain
          height="100"
          width="250"
          :src="require('../src/assets/eikona-branding.png')"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        icon
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
$color-background: #f6f6f6;
$color-foreground: #c0e7e8;
$color-accent1: #d1bfb7;
$color-accent2: rgba(226, 152, 134, 1);
$color-accent3: #f47156;

body {
  background-color: $color-background;
}
</style>
