import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#main");
