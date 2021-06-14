import { countMutations } from '../mutations';
const { ADD, SUB, RESET } = countMutations;
export default {
  namespaced: true,
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
    [ADD](state) {
      state.count += 1;
    },
    [SUB](state) {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    [RESET](state) {
      state.count = 0;
    },
  },
  actions: {
    increment({ commit }) {
      commit('asyncCall/setLoading', null, { root: true });
      setTimeout(() => {
        commit(countMutations.ADD);
        commit('asyncCall/setLoading', null, { root: true });
      }, 2000);
    },
    decrement({ commit }) {
      commit('asyncCall/setLoading', null, { root: true });
      setTimeout(() => {
        commit('asyncCall/setLoading', null, { root: true });
        commit(countMutations.SUB);
      }, 2000);
    },
    clear({ commit }) {
      commit('asyncCall/setLoading', null, { root: true });
      setTimeout(() => {
        commit('asyncCall/setLoading', null, { root: true });
        commit(countMutations.RESET);
      }, 2000);
    },
  },
};
