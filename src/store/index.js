import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const dataPers = createPersistedState({
  state: ["listNews", "OneNews"],
});
export default new Vuex.Store({
  plugins: [dataPers],
  state: {
    listNews: [],
    OneNews: [],
  },
  getters: {},
  mutations: {
    setNews(state, payload) {
      console.log(payload);
      state.listNews = payload.articles;
    },
    setOneNews(state, payload) {
      console.log(payload);
      state.oneNews = state.listNews.find(
        (item) =>
          item.title
            .toLowerCase() // LowerCase
            .replace(/\s+/g, "-") // space to -
            .replace(/&/g, `-and-`) // & to and
            .replace(/--/g, `-`) == payload
      );
    },
  },
  actions: {
    fetchListNews(store) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=id&apiKey=2418fb5a837a4ad69a6de201af5e0e35"
        )
        .then((response) => {
          store.commit("setNews", response.data);
        });
    },
    getNews(store, slug) {
      store.commit("setOneNews", slug);
    },
  },
  modules: {},
});
