import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import Thankyou from "@/views/Thankyou.vue";
// import Application from "@/views/Application.vue";
Vue.use(Router);

const routes = [
  {
    path: "/thankyou",
    name: "thankyou",
    component: Thankyou,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/application",
  //   name: "application",
  //   component: Application,
  // }
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
