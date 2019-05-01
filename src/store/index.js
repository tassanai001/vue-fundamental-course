import Vue from 'vue';
import Vuex from 'vuex';

import module1 from '@/store/modules/module1';
import userModule from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    m1: module1,
    users: userModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
