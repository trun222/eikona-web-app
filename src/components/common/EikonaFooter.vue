<template>
  <div class="eikona-footer">
    <v-footer
      class="eikona-company-gradient"
      padless
    >
      <v-row
        align-items="center"
        align-content="center"
        justify="center"
        no-gutters
      >

        <!-- <v-btn
          v-for="(link, index) in navLinks"
          :key="link+index"
          color="white"
          text
          rounded
          class="my-2"
          :href="link.to"
        >
          {{ link.text }}
        </v-btn> -->
        <v-btn
            class="my-2"
              icon
              color="black"
              href="mailto:eikona@protonmail.com"
              target="_blank"
            >
              <v-icon size="28">mdi-email</v-icon>
            </v-btn>
          <v-btn
            class="my-2"
              icon
              color="black"
              href="https://www.facebook.com/eikonadigital"
              target="_blank"
            >
              <v-icon size="28">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              class="my-2"
              icon
              color="black"
              href="https://www.instagram.com/eikonadigitalservicesllc/"
              target="_blank"
            >
              <v-icon size="28">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              class="my-2"
              icon
              href="https://www.tiktok.com/@eikonadigitalservicesllc?lang=en"
              target="_blank"
            >
              <v-img src="@/assets/tiktok.svg" height="28" width="28" />
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
      // { text: 'About Us', to: '/about-us' },
      // { text: 'Team', to: '/team-page' },
      // { text: 'Services', to: '/services' },
      // { text: 'Blog', to: '/blog' },
      { text: 'Contact Us', to: 'mailto:eikona@protonmail.com' },
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
