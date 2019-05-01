import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import HomeNestedP1 from './views/HomeNestedP1.vue';
import HomeNestedP2 from './views/HomeNestedP2.vue';
import HomeNestedP3 from './views/HomeNestedP3.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home/browse',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'homenestp1',
          path: 'p1',
          component: HomeNestedP1,
        },
        {
          name: 'homenestp2',
          path: 'p2',
          component: HomeNestedP2,
        },
        {
          name: 'homenestp3',
          path: 'p3',
          component: HomeNestedP3,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ './views/About.vue'),
    },
  ],
});
