import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const dataPers = createPersistedState({
  state: ["listNews"],
});
export default new Vuex.Store({
  plugins: [dataPers],
  state: {
    listNews: [],
  },
  getters: {},
  mutations: {
    setNews(state, payload) {
      state.listNews = payload.articles;
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
  },
  modules: {},
});
