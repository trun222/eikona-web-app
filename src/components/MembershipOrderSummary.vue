<template>
  <div class="membership-order-summary eikona-company-gradient pa-3">
    <v-container class="pa-5">
      <v-row justify="center">
        <v-col cols="3" md="6">
          <!-- Form For Account Creation -->
          <v-form class="pa-4">
            <h2 class="mb-4 white--text default-letter-spacing">Account Creation</h2>
            <v-row>
              <v-col>
                <v-text-field label="Username" prepend-inner-icon="mdi-account-box" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Email" prepend-inner-icon="mdi-at" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Password" prepend-inner-icon="mdi-lock" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Confirm Password" prepend-inner-icon="mdi-lock" solo></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-row justify="center">
            <v-col cols="10">
              <v-btn class="white--text" color="blue" block depressed>Create Account</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
        
      <v-row class="my-2" justify="center">
        <v-col cols="3" md="6">
          <v-form class="pa-4">
            <h2 class="mb-4 white--text default-letter-spacing">Order Summary</h2>
            <v-row>
              <v-col>
                <v-card
                    class="pa-2"
                    tile
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h4>Subscription</h4>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h5>Basic Tier</h5>
                        </v-list-item-title>
                        <v-list-item-subtitle>$3.99/mo Annual (Save $12) - 12 months</v-list-item-subtitle>

                        <v-list-item-subtitle>
                          100 GB of Eikona Cloud Storage
                        </v-list-item-subtitle>

                        <v-list-item-subtitle>
                          Subtotal: <b>$47.88</b>
                        </v-list-item-subtitle>

                        <v-list-item-subtitle>
                          Tax: <b>$3.35</b>
                        </v-list-item-subtitle>

                        <v-divider class="my-2"></v-divider>

                        <v-list-item-subtitle>
                          Total: <b>$51.23</b>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
              </v-col>
            </v-row>
          </v-form>

          <v-row class="mt-5" justify="center">
            <v-col cols="10">
              <v-btn class="white--text" color="green" block depressed>Pay</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    
    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "./common/EikonaFooter.vue";

export default Vue.extend({
  name: "membership-order-summary",

  components: {EikonaFooter},

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
@import '@/styles/colors.scss';

.memberships-title {
  color: rgba(226, 152, 134, 1);
}

.eikona-company-gradient {
  background: $color-accent2;
  background: linear-gradient(90deg, $color-accent2 0%, $color-accent1 42%, $color-foreground 72%, $color-background 92%);
}
</style>
