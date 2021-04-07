<template>
  <div class="eikona-footer">
    <v-footer
      class="eikona-company-gradient"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >

        <v-btn
          v-for="link in navLinks"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.to"
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EikonaFooter",

  components: {},

  data: () => ({
    navLinks: [
      { text: 'About Us', to: '/about-us' },
      { text: 'Team', to: '/team-page' },
      { text: 'Services', to: '/services' },
      { text: 'Blog', to: '/blog' },
      { text: 'Contact Us', to: '/contact-us' },
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
