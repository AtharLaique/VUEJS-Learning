export default {
  namespaced: true,
  state: {
    loading: false,
  },
  getters: {},
  mutations: {
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {},
};
