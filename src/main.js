import moment from "moment";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.moment = moment;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
