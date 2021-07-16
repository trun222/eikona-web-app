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
    path: "/test",
    name: "Test",
    component: () =>
      import(
        /* webpackChunkName: ".vue" */ "../components/Test.vue"
      ),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Login.vue" */ "../components/Login.vue"
  //     ),
  // },
  // {
  //   path: "/account",
  //   name: "Account",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Account.vue" */ "../components/Account.vue"
  //     ),
  // },
  // {
  //   path: "/services",
  //   name: "Services",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Services.vue" */ "../components/Services.vue"
  //     ),
  // },
  // {
  //   path: "/memberships",
  //   name: "Memberships",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Memberships.vue" */ "../components/Memberships.vue"
  //     ),
  // },
  // {
  //   path: "/membership-order-summary",
  //   name: "MembershipOrderSummary",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "MembershipOrderSummary.vue" */ "../components/MembershipOrderSummary.vue"
  //     ),
  // },
  // {
  //   path: "/heirlooms",
  //   name: "Heirlooms",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Heirlooms.vue" */ "../components/Heirlooms.vue"
  //     ),
  // },
  // {
  //   path: "/heirlooms/builder",
  //   name: "HeirloomsBuilder",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "HeirloomsBuilder.vue" */ "../components/Heirlooms/Builder.vue"
  //     ),
  // },
  // {
  //   path: "/team-page",
  //   name: "TeamPage",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "TeamPage.vue" */ "../components/TeamPage.vue"
  //     ),
  // },
  // {
  //   path: "/about-us",
  //   name: "AboutUs",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "AboutUs.vue" */ "../components/AboutUs.vue"
  //     ),
  // },
  // {
  //   path: "/contact-us",
  //   name: "ContactUs",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "ContactUs.vue" */ "../components/ContactUs.vue"
  //     ),
  // },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Blog.vue" */ "../components/Blog.vue"
  //     ),
  // },
  // {
  //   path: "/post",
  //   name: "Post",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "Post.vue" */ "../components/Post.vue"
  //     ),
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
