import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

import VueRouter from "vue-router";
import { routes } from "./routes";

import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://stock-trader-591b4.firebaseio.com/";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  base: "/stock-trader-vue/",
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
