import Vue from "vue";
import VueRouter from "vue-router";
import ListNewsView from "../views/ListNewsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "berita",
    component: ListNewsView,
  },
  // {
  //   path: "/:slug",
  //   name: "satu-berita",
  //   component: "",
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
