import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
import router from "./router";
import store from "./store";
import App from "./App.vue";
// import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// Vue.use(Vuetify);
// Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App),
  // vuetify: new Vuetify(),
  // antd: new Antd(),
}).$mount("#app");
