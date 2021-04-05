<template>
  <v-app class="app">
    <v-app-bar app class="eikona-company-gradient">
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

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in navLinks"
            :key="link"
            @click="() => {}"
          >
            <v-list-item-title>{{ link }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    navLinks: [
      'Login',
      'Services',
      'Blog',
      'About Us',
      'Team',
      'Contact Us',
    ],
  }),
});
</script>

<style lang="scss">
$color-background: rgba(246, 246, 246, 1);
$color-foreground: rgba(192, 231, 232, 1);
$color-accent1: rgba(209, 191, 183, 1);
$color-accent2: rgba(226, 152, 134, 1);
$color-accent3: rgba(244, 113, 86, 1);

body {
  background-color: $color-background;
}

.eikona-company-gradient {
  background: rgb(226,152,134);
  background: linear-gradient(90deg, rgba(226,152,134,1) 0%, rgba(209,191,183,1) 42%, rgba(192,231,232,0.9808298319327731) 72%, rgba(246,231,232,1) 92%);
}
</style>
