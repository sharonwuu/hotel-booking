import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes: [{
      path: '/',
      name: '/home',
      component: () => import('./views/Home.vue')
    },{
      path: '/room/:name',
      name: '/room',
      component: () => import('./views/Room.vue')
    }]
})