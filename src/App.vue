<template>
  <v-app class="app">
    <!-- Nav Bar -->
    <nav-bar></nav-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/common/NavBar.vue";

export default Vue.extend({
  name: "App",

  components: {NavBar},

  data: () => ({

  }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

body {
  background-color: $color-background;
}
</style>
