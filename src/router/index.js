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
  {
    path: "/frame-overlay",
    name: "Frame Overlay",
    component: () => import("../views/FrameOverlay.vue")
  },
  {
    path: "/title-overlay",
    name: "Title Overlay",
    component: () => import("../views/TitleOverlay.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
