import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home";
import Servicio from "./views/servicio/Servicio";
import Recidencias from "./views/recidencias/Recidencias";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/servicio",
      name: "servicio",
      component: Servicio
    },
    {
      path: "/recidencias",
      name: "recidencias",
      component: Recidencias
    }
  ]
});
