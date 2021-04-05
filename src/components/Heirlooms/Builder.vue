<template>
  <div class="builder eikona-company-gradient pa-3">
    <v-container class="pa-5">
      <v-row align-content="center" justify="center">
        <v-col cols="4" md="8">
          <v-card class="pa-5">
            <h2 class="mb-4">What we do.</h2>

            <v-data-table
                :headers="services_headers"
                :items="services"
                hide-default-header
                hide-default-footer
                disable-filtering
                disable-sort
            ></v-data-table>
          </v-card>  
        </v-col>
      </v-row>


      <v-row align-content="center" justify="center">
        <v-col cols="4" md="8">
          <v-card class="pa-5">
            <v-form>
                <h2 class="mb-4">Heirlooms to Digitize.</h2>

                <p class="red--text">
                  Note: The product is not added to the cart until the '+' button is clicked.
                </p>

                <!-- Photos -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field v-model="photosQuantity" label="Number of Photos to send to Eikona" prepend-inner-icon="mdi-image" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!photosQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- VHS -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of VHS tapes to send to Eikona" prepend-inner-icon="mdi-video-box" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!vhsQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- CD's -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of CD's to send to Eikona" prepend-inner-icon="mdi-music-circle" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!cdQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- DVD's -->
                <v-row align-content="center" justify="center">
                  <v-col cols="10">
                    <v-text-field label="Number of DVD's to send to Eikona" prepend-inner-icon="mdi-movie" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!dvdQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>

                <!-- Bluray -->
                <v-row>
                  <v-col cols="10">
                    <v-text-field label="Number of Blurays to send to Eikona" prepend-inner-icon="mdi-video-4k-box" hide-details solo clearable></v-text-field>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                  </v-col>
                </v-row>


                <!-- Extras -->
                <h2 class="my-3">Extras</h2>

                <p>
                  Note: You have the option of adding an Eikona private and secure cloud storage subscription to your order so that as soon as your
                  heirlooms are completely processed and digitized you can access them from our mobile app and share your favorite memories with friends
                  and family. Or you can choose to receive a USB flash drive with your digitized content.
                </p>

                <!-- Eikona Membership -->
                <v-row>
                  <v-col>
                    <h3>Eikona Membership</h3>

                    <v-radio-group v-model="subscriptionOption">
                      <v-radio value="elite">
                        <template v-slot:label>
                          <div><strong>Elite</strong> Membership. $15.99/mo Annual - $191.88 <strong>(Save $48)</strong></div>
                        </template>
                      </v-radio>
                      <v-radio value="premium">
                        <template v-slot:label>
                          <div><strong>Premium</strong> Membership. $7.99/mo Annual - $95.88 <strong>(Save $24)</strong></div>
                        </template>
                      </v-radio>
                      <v-radio value="basic">
                        <template v-slot:label>
                          <div><strong>Basic</strong> Membership. $3.99/mo Annual - $47.88 <strong>(Save $12)</strong></div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>

                <!-- USB Drive -->
                <v-row>
                  <v-col>
                    <h3>USB Drives</h3>

                    <p class="red--text">
                      Note: We will return your digitized content on a USB drive of your selection. We may reach out to you if your USB drive
                      capacity selected is too small for the amount of heirlooms that were digitized.
                    </p>

                    <v-row>
                      <v-col cols="5">
                        <v-chip
                          class="ma-2"
                          color="rgba(209, 191, 183, 1)"
                          label
                        >
                          <v-icon left>
                            mdi-usb-flash-drive                          
                          </v-icon>
                          1TB ($50 each)                        
                        </v-chip>
                      </v-col>
                      <v-col cols="4" align-self="center">
                        <v-text-field label="Quantity" hide-details solo clearable></v-text-field>
                      </v-col>
                      <v-col cols="2" align-self="center">
                        <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                      </v-col>
                    </v-row>
                    
                    <v-row>
                      <v-col cols="5">
                        <v-chip
                          class="ma-2"
                          color="rgba(209, 191, 183, 1)"
                          label
                        >
                          <v-icon left>
                            mdi-usb-flash-drive                          
                          </v-icon>
                          512GB ($35 each)
                        </v-chip>
                      </v-col>
                      <v-col cols="4" align-self="center">
                        <v-text-field label="Quantity" hide-details solo clearable></v-text-field>
                      </v-col>
                      <v-col cols="2" align-self="center">
                        <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="5">
                        <v-chip
                          class="ma-2"
                          color="rgba(209, 191, 183, 1)"
                          label
                        >
                          <v-icon left>
                            mdi-usb-flash-drive                          
                          </v-icon>
                          128GB ($25 each)
                        </v-chip>
                      </v-col>
                      <v-col cols="4" align-self="center">
                        <v-text-field label="Quantity" hide-details solo clearable></v-text-field>
                      </v-col>
                      <v-col cols="2" align-self="center">
                        <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                      </v-col>
                    </v-row>


                    <v-row>
                      <v-col cols="5">
                        <v-chip
                          class="ma-2"
                          color="rgba(209, 191, 183, 1)"
                          label
                        >
                          <v-icon left>
                            mdi-usb-flash-drive                          
                          </v-icon>
                          64GB USB ($15 each)
                        </v-chip>
                      </v-col>
                      <v-col cols="4" align-self="center">
                        <v-text-field label="Quantity" hide-details solo clearable></v-text-field>
                      </v-col>
                      <v-col cols="2" align-self="center">
                        <v-btn :disabled="!blurayQuantity" color="success" block><v-icon>mdi-plus</v-icon></v-btn>
                      </v-col> 
                    </v-row>
                  </v-col>
                </v-row>

                <p class="my-4 warning--text">
                  Note: You need to either select an Eikona Membership or a USB drive option for your heirlooms so that we are able to make the digitized version of your physical copies available to you.
                  If you choose both a membership and a USB you will be able to access your digitized photos and videos from our mobile app and on a USB drive that we mail back to you. Feel free to order multiple
                  USB drives if you want multiple backups for you and a family member or friend.
                </p>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="4" md="8">
          <v-btn class="my-2" :disabled="photosQuantity || vhsQuantity || cdQuantity || dvdQuantity || blurayQuantity" color="success" block>Checkout</v-btn>
        </v-col>
      </v-row>
    </v-container>
    
    <eikona-footer></eikona-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EikonaFooter from "../common/EikonaFooter.vue";

export default Vue.extend({
  name: "Builder",

  components: {EikonaFooter},

  data: () => ({
    photosQuantity: '',
    vhsQuantity: '',
    cdQuantity: '',
    dvdQuantity: '',
    blurayQuantity: '',
    subscriptionOption: '',
    services_headers: [
      { text: "Service", value: "name" },
      { text: "Description", value: "description" },
    ],
    services: [
      {
        name: "Photos",
        description: "We carefully take your photos and use a high quality scanner to digitally preserve your favorite memories",
      },
      {
        name: "VHS's",
        description: "Each VHS tape will be rewinded and digitized using modern software and hardware to ensure the best possible digitally preserved video",
      },
      {
        name: "DVD's",
        description: "If you have photos or videos on DVD's we can help you make them more accessible by digitizing your DVD memories",
      },
      {
        name: "CD's",
        description: "Your music or audio recordings with your friends & family will not be digitized and made available on Eikona Cloud or a USB drive",
      },
      {
        name: "Bluray's",
        description: "High definition family videos can now be easily stored in the cloud or easily accessed on a USB drive",
      },
    ],
  }),
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
