<template>
  <v-app class="app">
    <!-- Nav Bar -->
    <!-- <nav-bar></nav-bar> -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import NavBar from "./components/common/NavBar.vue";

export default Vue.extend({
  name: "App",

  // components: {NavBar},

  data: () => ({

  }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

@font-face {
  font-family: primaryFont;
  src: url('./assets/fonts/Meedori-Sans/Meedori-Sans-Regular.ttf');
}

@font-face {
  font-family: secondaryFont;
  src: url('./assets/fonts/Questrial/Questrial-Regular.ttf');
}
  
h1, p {
    font-family: primaryFont;
}

h2,h3,h4,h5,h6 {
  font-family: secondaryFont;
}

.default-letter-spacing {
  letter-spacing: .5rem;
}

body {
  background-color: $color-background;
}
</style>
