import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import History from '../views/History.vue';
import Products from '../views/product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/product',
    name: 'Products',
    component: Products,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
