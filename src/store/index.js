import Vue from 'vue';
import Vuex from 'vuex';
import { countMutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    loading: false,
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
    setLoading(state) {
      state.loading = !state.loading;
    },
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
  actions: {
    increment({ commit }) {
      commit('setLoading');
      setTimeout(() => {
        commit(countMutations.ADD);
        commit('setLoading');
      }, 2000);
    },
    decrement({ commit }) {
      commit('setLoading');
      setTimeout(() => {
        commit('setLoading');
        commit(countMutations.SUB);
      }, 2000);
    },
    clear({ commit }) {
      commit('setLoading');
      setTimeout(() => {
        commit('setLoading');
        commit(countMutations.RESET);
      }, 2000);
    },
  },
  modules: {},
});
