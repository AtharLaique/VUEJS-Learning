import Vue from 'vue';
import Vuex from 'vuex';
import { countMutations } from './mutations';
import asyncCall from './modules/asyncCall';

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
  actions: {
    increment({ commit }) {
      commit('asyncCall/setLoading');
      setTimeout(() => {
        commit(countMutations.ADD);
        commit('asyncCall/setLoading');
      }, 2000);
    },
    decrement({ commit }) {
      commit('asyncCall/setLoading');
      setTimeout(() => {
        commit('asyncCall/setLoading');
        commit(countMutations.SUB);
      }, 2000);
    },
    clear({ commit }) {
      commit('asyncCall/setLoading');
      setTimeout(() => {
        commit('asyncCall/setLoading');
        commit(countMutations.RESET);
      }, 2000);
    },
  },
  modules: {
    asyncCall,
  },
});
