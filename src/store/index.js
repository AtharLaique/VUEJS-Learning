import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    isEven: (state) => {
      if (state.count == 0) {
        return 'goldenrod';
      } else if (state.count % 2 == 0) {
        return 'chartreuse';
      } else return 'crimson';
    },
  },
  mutations: {
    add(state) {
      state.count += 1;
    },
    subtract(state) {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {},
  modules: {},
});
