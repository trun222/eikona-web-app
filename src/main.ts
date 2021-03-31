import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Visual from 'vue-visual';
import 'vue-visual/index.css'

Vue.config.productionTip = false;

Vue.component('visual', Visual)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
