import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/news/:id',
    name: 'News',
    props: (route) => ({
      id: route.params.id, // maps route param "id" to prop "profileId"
    }),
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue'),
  },
  { path: '*', component: () => import(/* webpackChunkName: "about" */ '../views/404.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
