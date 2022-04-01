import moment from "moment";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.config.productionTip = false;
Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi",
  },
});

Vue.prototype.moment = moment;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
