<template>
  <div class="nav-bar">
    <v-app-bar app absolute class="eikona-company-gradient">
      <v-spacer></v-spacer>

        <v-img
          contain
          height="275"
          width="550"
          :src="require('@/assets/eikona_black.png')"
        />

      <v-spacer></v-spacer>

      <!-- <v-menu
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

        <v-list class="py-0">
          <v-list-item
            v-for="link in navLinks"
            :key="link.text"
            @click="() => {}"
            :to="link.to"
          >
            <v-list-item-title 
              :class="{
                'red--text': link.text === 'Logout',
              }"
            >
            <v-icon :color="link.text === 'Logout' ? 'red' : 'grey'">{{ link.icon}}</v-icon> {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
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
      { text: 'Home', icon: 'mdi-home-circle', to: '/'},
      { text: 'Login', icon: 'mdi-login-variant', to: '/login'},
      { text: 'Logout', icon: 'mdi-logout', to: '/logout'},
      { text: 'Services', icon: 'mdi-hammer-wrench', to: '/services'},
      { text: 'Blog', icon: 'mdi-newspaper-variant', to: '/blog'},
      { text: 'About Us', icon: 'mdi-help', to: '/about-us'},
      { text: 'Team', icon: 'mdi-account-group', to: '/team-page'},
      { text: 'Contact Us', icon: 'mdi-card-account-mail', to: '/contact-us'},
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
