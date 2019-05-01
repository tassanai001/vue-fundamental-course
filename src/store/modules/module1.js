import axios from 'axios';

export default {
  namespaced: true,
  state: {
    counter: 0,
    rendomInt: 0,
    parts: null,
    foo: 'm1-foo',
  },
  mutations: {
    addCounterMutation(state) {
      state.counter += 1;
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getParts({ commit, rootState }) {
      axios
        .get('/api/parts')
        .then(results => commit('updateParts', results.data))
        .catch(e => console.log('error:', e));
    },
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    randomInt(state, getters, rootState) {
      const random = Math.floor(Math.random() * 100) + 1;
      return random;
    },
    foo(state) {
      return `m1-getter/${state.foo}`;
    },
  },
};
