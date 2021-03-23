import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/subscription",
    name: "Subscription",
    component: () =>
      import(
        /* webpackChunkName: "Subscriptions.vue" */ "../components/Subscriptions.vue"
      ),
  },
  {
    path: "/subscription-order-summary",
    name: "SubscriptionOrderSummary",
    component: () =>
      import(
        /* webpackChunkName: "SubscriptionOrderSummary.vue" */ "../components/SubscriptionOrderSummary.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
