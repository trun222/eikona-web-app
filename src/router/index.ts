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
    path: "/memberships",
    name: "Memberships",
    component: () =>
      import(
        /* webpackChunkName: "Memberships.vue" */ "../components/Memberships.vue"
      ),
  },
  {
    path: "/membership-order-summary",
    name: "MembershipOrderSummary",
    component: () =>
      import(
        /* webpackChunkName: "MembershipOrderSummary.vue" */ "../components/MembershipOrderSummary.vue"
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
