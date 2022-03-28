import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TimeTag from "vue-time-tag";
Vue.config.productionTip = false;
Vue.use(TimeTag);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
