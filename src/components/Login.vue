<template>
  <div class="login eikona-company-gradient">
    <v-container class="login-container">
      <v-row class="match-parent-height" align-content="center" justify="center">
        <v-col cols="6">
          <v-form class="pa-4">
            <h2 class="mb-4 white--text default-letter-spacing">Login</h2>
            <v-row>
              <v-col>
                <v-text-field label="Username" prepend-inner-icon="mdi-account-box" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Password" prepend-inner-icon="mdi-lock" solo></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    

    <!-- Footer -->
    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "Login",

  components: {EikonaFooter},

  data: () => ({
  }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}

.login-container {
  height: 87.4vh;
}

.match-parent-height { 
  height: 500px;
}
</style>
