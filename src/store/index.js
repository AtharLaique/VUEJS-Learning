import Vue from 'vue';
import Vuex from 'vuex';
import { countMutations } from './mutations';

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
    [countMutations.ADD](state) {
      state.count += 1;
    },
    [countMutations.SUB](state) {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    [countMutations.RESET](state) {
      state.count = 0;
    },
  },
  actions: {},
  modules: {},
});
