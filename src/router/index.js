import Vue from "vue";
import VueRouter from "vue-router";
import ListNewsView from "../views/ListNewsView.vue";
import DetailNewsView from "../views/DetailNewsView.vue";
import DefaultView from "../views/DefaultView.vue";
import CategoryView from "../views/CategoryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/berita",
  },

  {
    path: "/berita",
    component: DefaultView,
    children: [
      {
        path: "/kategori",
        component: DefaultView,
        children: [
          {
            path: "",
            name: "Kategori Berita",
            component: CategoryView,
          },
          {
            path: ":category",
            name: "Satu Kategori Berita",
            component: ListNewsView,
          },
        ],
      },
      {
        path: "",
        name: "Berita",
        component: ListNewsView,
      },
      {
        path: ":slug",
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
