<template>
    <div class="landing">
        <visual
            class="ma-0 intro-video"
            ref="intro-video"
            video="https://f000.backblazeb2.com/file/eikona-io/www.eikona.io/Eikona_Ad.mp4"
            lazyload
            controls
            width="100%"
        />

        <div class="d-flex flex-column justify-center about-us-container">
            <h1 class="white--text text-center">About Us</h1>

            <v-card class="text pa-5">
              <p class="pa-3">
                We developed Eikona Digital Services because we understand the
                need for a safe and private way to store family photos and
                videos. With our service called Heirlooms, we
                digitize your precious photos, VHS tapes, DVDs and other content.
                Once the process is complete we put your heirlooms onto a flash
                drive and return everything to you safely and securely, so that
                you can view your memories in a digital format for many years to
                come.
              </p>
            </v-card>
        </div>

        <div
            class="
                d-flex
                flex-column
                align-center
                justify-center
                heirlooms-container
            "
        >
            <h1 class="my-5 white--text text-center">Heirlooms</h1>

            <v-row class="my-5" justify="center">
                <v-col
                  xs="10"
                  md="8"
                    ><v-data-table
                        class="mt-3 heirlooms-table"
                        :headers="heirlooms_headers"
                        :items="heirlooms"
                        hide-default-header
                        hide-default-footer
                        disable-filtering
                        disable-sort
                    />
                </v-col>
            </v-row>

            <v-btn
                color="#e29886"
                class="mb-5 pa-auto white--text"
                href="mailto:eikona@protonmail.com"
                target="_blank"
            >
                Place Order Now
            </v-btn>
        </div>

        <v-container class="my-5 membership-container">
            <v-row align-content="center" justify="center">
                <h1>Meet the Team</h1>
            </v-row>

            <v-row class="mb-3" align-content="center" justify="center">
                <!-- Basic Tier Subscription -->
                <v-card
                    class="mt-5 mx-5"
                    height="auto"
                    width="350"
                >
                    <v-img
                        stretch
                        height="350"
                        :src="require('@/assets/thomas.jpg')"
                    ></v-img>

                    <v-card-title> Thomas R. Underwood II</v-card-title>

                    <v-card-subtitle> Founder </v-card-subtitle>

                    <v-card-text>
                      Hey, I am Thomas! When I am not running around Ohio and Northern Kentucky I am 
                      working at my blockchain startup company and Eikona. I enjoy solving technical 
                      problems which is why I wanted to create Eikona in the first place! I was tired of 
                      seeing other companies take advantage of user's data, so I decided to create a tech 
                      startup that respects user's data and privacy. Everything we do at Eikona has the user
                      in mind. We hope that you enjoy our services and that we can continue to serve you, your
                      family, and your friends for many more years to come!
                    </v-card-text>
                </v-card>

                <v-card
                    class="mx-5 mt-5"
                    height="auto"
                    width="350"
                >
                    <v-img
                        height="350"
                        :src="require('@/assets/lucas-headshot.jpg')"
                    ></v-img>

                    <v-card-title> Lucas Turnbo</v-card-title>

                    <v-card-subtitle> Founder </v-card-subtitle>

                    <v-card-text>
                      If I could pick three words to describe me I would choose, Family, Fun, and Peace. 

                      Family is important to me because each member of my kin is a gift from God. I do not take that lightly. 

                      Why did I choose “Fun”? Well, I am a joyful guy. I don’t mind being serious but I do take it upon myself to create a joyful atmosphere when it is appropriate.  

                      And the last one, “Peace,” is true to me because I do my best to live in the moment and take things one step at a time. 

                      My goal is to use these qualities to create a positive experience for you as you utilize our services. Thank you for choosing Eikona. We are excited to serve you!
                    </v-card-text>
                </v-card>
            </v-row>
        </v-container>

        <!-- Company Description Section -->
        <section class="ma-0 landing-section heirlooms-background">
            <v-row class="section-container" justify="center" no-gutters>
                <v-col align-self="center" lg="6" md="6" sm="8" xs="10">
                    <v-row class="d-sm-none" align-content="center" justify="center">
                      <h1 class="eikona-title-mobile text-center">EIKONA App</h1>
                      <h1 class="heirlooms-title-mobile text-center mb-5">
                          Coming Winter 2021
                      </h1>
                    </v-row>
                
                    <v-row class="d-none d-md-block" align-content="center" justify="center">
                      <h1 class="eikona-title text-center">EIKONA App</h1>
                      <h1 class="heirlooms-title text-center mb-5">
                          Coming Winter 2021
                      </h1>
                    </v-row>

                    <v-row class="my-5 pr-3" align-content="center" justify="center">
                        <font-awesome-icon
                            color="white"
                            size="2x"
                            :icon="['fab', 'google-play']"
                        />
                        <font-awesome-icon
                            color="white"
                            class="ml-5"
                            size="2x"
                            :icon="['fab', 'app-store-ios']"
                        />
                    </v-row>
                </v-col>
            </v-row>
        </section>

        <!-- Heirlooms Service Brief Overview -->
        <!-- <section class="ma-0 pa-3 landing-section heirlooms-section">
      <v-row class="section-container" justify="center">
          <v-col cols="6" align-self="center">
            <v-row justify="center">
                <h2 class="section-description-text text-center">Brief overview of Heirloom services.</h2>
            </v-row>
            <v-row justify="center">
                <v-btn class="mt-3" color="rgba(192, 231, 232, 1)" to="/heirlooms" dark depressed>Explore</v-btn>
            </v-row>
          </v-col>
          <v-col class="ma-0 pa-0 description-image" cols="6">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../../src/assets/example_2.jpg')"
            ></v-img>
          </v-col>
      </v-row>
    </section> -->

        <!-- Eikona Cloud Sync Description -->
        <!-- <section class="ma-0 pa-3 landing-section cloud-storage-section">
      <v-row class="section-container" justify="center">
        <v-col align-self="center" cols="6">
          <h1 class="cloud-storage-title text-center">Private & Secure Cloud Storage</h1>
        </v-col>
      </v-row>
    </section> -->

        <!-- Eikona Cloud Sync Brief Overview -->
        <!-- <section class="ma-0 pa-3 landing-section cloud-storage-overview">
      <v-row class="section-container" justify="center">
          <v-col class="ma-0 pa-0 description-image" cols="6">
            <v-img
              height="550"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../../src/assets/example_1.jpg')"
            ></v-img>
          </v-col>
          <v-col align-self="center" justify="center" cols="6">
            <v-row justify="center">
              <h2 class="section-description-text text-center">Brief overview of Cloud services.</h2>
            </v-row>
            <v-row justify="center">
              <v-btn class="mt-3" color="rgba(192, 231, 232, 1)" to="/memberships" dark depressed>Explore</v-btn>
            </v-row>
          </v-col>
      </v-row>
    </section> -->

        <!-- Footer -->
        <eikona-footer></eikona-footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EikonaFooter from './common/EikonaFooter.vue';

export default Vue.extend({
    name: 'Landing',

    components: { EikonaFooter },

    data: () => ({
        navLinks: ['About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
        heirlooms_headers: [
            { text: 'Service', value: 'name' },
            { text: 'Description', value: 'description' },
        ],
        heirlooms: [
            {
                name: 'Photos',
                description: '.50 Cents/Photo (Max-Dimensions)',
            },
            {
                name: 'VHSes, 8mm, Hi8, and Digital8',
                description: '$20/Tape',
            },
            {
                name: 'Blurays, DVDs, and CDs',
                description: '$15/Disc',
            },
            {
                name: 'Free Pickup / Drop Off',
                description: '(Minimum Order $99)',
            },
        ],
    }),
});
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.about-us-container {
    height: 70vh;
    min-height: 800px;
    width: 100vw;
    background-color: $color-accent2;

    .text {
        text-align: center;
        text-justify: center;
        font-size: 1.25em;
    }
}

.heirlooms-container {
    height: auto;
    min-height: 500px;
    width: 100vw;
    background-color: $color-accent1;

    .text {
        text-align: center;
        text-justify: center;
        font-size: 1.25em;
    }

    .heirlooms-table {
        width: 90vw;
    }
}

.intro-video {
    min-height: auto;
    width: 100%;
}

.landing-section {
    height: 550px;
    width: 100%;
}

.section-container {
    height: 100%;
}

.description-image {
    height: 100%;
    width: 100%;
}

.heirlooms-background {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        -45deg,
        $color-background,
        $color-foreground,
        $color-accent1,
        $color-accent2,
        $color-accent3
    );
    background-size: 400% 400%;
    animation: gradient 20s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.eikona-title {
    color: black;
    font-size: 5em;
    letter-spacing: 1rem;
}

.eikona-title-mobile {
    color: black;
    font-size: 3em;
    letter-spacing: 1rem;
}

.heirlooms-title {
    color: white;
    font-size: 3.5em;
    letter-spacing: 1rem;
}

.heirlooms-title-mobile {
    color: white;
    font-size: 2.5em;
    letter-spacing: 1rem;
}

.heirlooms-section {
    background-color: $color-accent1;
}

.cloud-storage-title {
    color: white;
    font-size: 3.5em;
    letter-spacing: 1rem;
}

.section-description-text {
    color: white;
    font-size: 2em;
    letter-spacing: 1rem;
}

.cloud-storage-section {
    background-color: $color-foreground;
}

.cloud-storage-overview {
    background-color: $color-accent1;
}
</style>
