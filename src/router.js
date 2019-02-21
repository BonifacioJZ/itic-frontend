import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home";
import Servicio from "./views/servicio/Servicio";
import Recidencias from "./views/recidencias/Recidencias";
import Somos from "./views/informacion/Somos";
import Mision from "./views/informacion/Mision";
import Valores from "./views/informacion/Valores";
import Vision from "./views/informacion/Vision";
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
    },
    {
      path: "/somos",
      name: "somos",
      component: Somos
    },
    {
      path: "/mision",
      name: "mision",
      component: Mision
    },
    {
      path: "/valores",
      name: "valores",
      component: Valores
    },
    {
      path: "/vision",
      name: "vision",
      component: Vision
    }
  ]
});
