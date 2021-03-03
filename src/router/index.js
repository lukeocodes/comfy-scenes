import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/effects",
  //   name: "Effects",
  //   component: () => import("../views/Effects.vue")
  // },
  {
    path: "/overlays",
    name: "Overlays",
    component: () => import("../views/Overlays.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
