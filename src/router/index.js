import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Clients from "../pages/Clients";
import Kits from "../pages/Kits";
import ClienteAria from "../pages/ClienteAria";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/Kits",
    name: "Kits",
    component: Kits,
  },
  {
    path: "/clientearia",
    name: "ClienteAria",
    component: ClienteAria,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
