<template>
  <div class="subscription-order-summary">
    <v-container class="mt-5">
      <v-row class="my-4" justify="start">
        <h1>Subscription Checkout</h1>
      </v-row>
              
      <h2>Account Creation</h2>
      <v-row class="my-2" justify="start">
        <v-col cols="3">
          <v-sheet color="rgba(209, 191, 183, 1)" elevation="1">
            <!-- Form For Account Creation -->
            <v-form class="pa-4">
              <h2 class="mb-4">Login Details</h2>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Username" prepend-icon="mdi-account-box" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Email" prepend-icon="mdi-at" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Password" prepend-icon="mdi-lock" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Confirm Password" prepend-icon="mdi-lock" solo></v-text-field>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <h2 class="my-4">User Info</h2>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Full Name" prepend-icon="mdi-account" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        solo
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="new Date().toISOString().substr(0, 11)"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="Street Address" prepend-icon="mdi-map-marker" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="City" prepend-icon="mdi-city" solo></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="11">
                  <v-text-field label="State" prepend-icon="mdi-city" solo></v-text-field>
                </v-col>
              </v-row>

              <v-btn block>Create</v-btn>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "subscription-order-summary",

  components: {},

  data: () => ({
    date: null,
    menu: false
  }),
  watch: {
      menu (val) {
        val && setTimeout(() => ((this.$refs as any).picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date: string) {
        (this.$refs as any).menu.save(date)
      },
    },
});
</script>

<style lang="scss">
.memberships-title {
  color: rgba(226, 152, 134, 1);
}
</style>
