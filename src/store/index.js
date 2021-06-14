import Vue from 'vue';
import Vuex from 'vuex';
import asyncCall from './modules/asyncCall';
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    asyncCall,
  },
});
