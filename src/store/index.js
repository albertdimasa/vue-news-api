import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const dataPers = createPersistedState({
  state: ["listNews", "OneNews", "category", "listCategories"],
});
export default new Vuex.Store({
  plugins: [dataPers],
  state: {
    listNews: [],
    OneNews: [],
    category: "",
    search: "",
    listCategories: [
      {
        nama: "news",
        gambar: "https://source.unsplash.com/1000x300/?news",
      },
      {
        nama: "sport",
        gambar: "https://source.unsplash.com/1000x300/?sports",
      },
      {
        nama: "tech",
        gambar: "https://source.unsplash.com/1000x300/?tech",
      },
      {
        nama: "world",
        gambar: "https://source.unsplash.com/1000x300/?world",
      },
      {
        nama: "finance",
        gambar: "https://source.unsplash.com/1000x300/?finance",
      },
      {
        nama: "politics",
        gambar: "https://source.unsplash.com/1000x300/?politics",
      },
      {
        nama: "business",
        gambar: "https://source.unsplash.com/1000x300/?business",
      },
      {
        nama: "economics",
        gambar: "https://source.unsplash.com/1000x300/?economics",
      },
      {
        nama: "entertainment",
        gambar: "https://source.unsplash.com/1000x300/?entertainment",
      },
      {
        nama: "beauty",
        gambar: "https://source.unsplash.com/1000x300/?beauty",
      },
      {
        nama: "travel",
        gambar: "https://source.unsplash.com/1000x300/?travel",
      },
      {
        nama: "music",
        gambar: "https://source.unsplash.com/1000x300/?music",
      },
      {
        nama: "food",
        gambar: "https://source.unsplash.com/1000x300/?food",
      },
      {
        nama: "science",
        gambar: "https://source.unsplash.com/1000x300/?science",
      },
      {
        nama: "gaming",
        gambar: "https://source.unsplash.com/1000x300/?gaming",
      },
      {
        nama: "energy",
        gambar: "https://source.unsplash.com/1000x300/?energy",
      },
    ],
  },
  getters: {},
  mutations: {
    setNews(state, payload) {
      state.listNews = payload.articles;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    },

    setOneNews(state, payload) {
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
    fetchListNews(store, payload) {
      axios
        .get(
          `https://api.newscatcherapi.com/v2/latest_headlines?countries=ID&topic=` +
            payload,
          {
            headers: {
              "x-api-key": "UnCXxHCweXB2_XLc3jIGIMAZfGaadR6ZoCoQf7lcroI",
            },
          }
        )
        .then((response) => {
          store.commit("setNews", response.data);
        });
    },

    getNews(store, slug) {
      store.commit("setOneNews", slug);
    },
    getCategory(store, category) {
      store.commit("setCategory", category);
    },
    getSearch(store, payload) {
      store.commit("setSearch", payload);
    },
  },
  modules: {},
});
