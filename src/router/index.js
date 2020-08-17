import Vue from "vue";
import VueRouter from "vue-router";
import Body from "../views/Body.vue";
import Total from "../components/Total.vue";
import Prefecture from "../components/Prefecture";
import axios from "axios";

Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const routes = [
  {
    path: "/",
    component: Body,
    children: [
      {
        path: "total",
        component: Total
      },
      {
        path: ":id",
        component: Prefecture
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
