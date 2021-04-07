<template>
  <div class="about-us eikona-company-gradient pa-4">
    <v-container class="pa-5 membership-container">
      <v-row justify="center">
        <h2 class="my-3 white--text default-letter-spacing">About Us</h2>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-card class="pa-4">
          <p class="default-letter-spacing">
            We are a startup that believes that the user's data is theirs! We want to empower you to determine how and when your data is stored and shared across our services and the internet. <br />

            <br />
            Our core beliefs are: <br />
            <br />
            - Privacy <br />
            - Security <br />
            - Transparency <br />
            <br />

            Our goal is to create a safe, convient and fun way to access your favorite memories through Eikona, whether that is through our Heirlooms services or our Cloud Sync and Storage. <br />
            <br />
            Support a private, secure and free speech oriented internet by becoming a member of Eikona! We appreciate your support and hope that together we can keep the internet <b>open</b> and <b>accessible</b>.
          </p>
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
  name: "AboutUs",

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
