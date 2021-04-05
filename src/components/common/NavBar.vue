<template>
  <div class="nav-bar">
    <v-app-bar app class="eikona-company-gradient">
      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          contain
          height="100"
          width="250"
          :src="require('@/assets/eikona-branding.png')"
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
            <v-icon color="rgba(226, 152, 134, 1)">mdi-menu</v-icon>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",

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
@import '@/styles/colors.scss';

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}
</style>
