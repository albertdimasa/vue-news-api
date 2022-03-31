import Vue from "vue";
import VueRouter from "vue-router";
import ListNewsView from "../views/ListNewsView.vue";
import DetailNewsView from "../views/DetailNewsView.vue";
import DefaultView from "../views/DefaultView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/berita",
  },
  {
    path: "/berita",
    component: DefaultView,
    children: [
      {
        path: "",
        name: "Berita",
        component: ListNewsView,
      },
      {
        path: "/:slug",
        name: "Detail Berita",
        component: DetailNewsView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
