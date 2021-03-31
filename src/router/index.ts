import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import(
        /* webpackChunkName: "Landing.vue" */ "../components/Landing.vue"
      ),
  },
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
  {
    path: "/heirlooms",
    name: "Heirlooms",
    component: () =>
      import(
        /* webpackChunkName: "Heirlooms.vue" */ "../components/Heirlooms.vue"
      ),
  },
  {
    path: "/heirlooms/builder",
    name: "HeirloomsBuilder",
    component: () =>
      import(
        /* webpackChunkName: "HeirloomsBuilder.vue" */ "../components/Heirlooms/Builder.vue"
      ),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
