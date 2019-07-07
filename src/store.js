/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    INCREMENT: (state, payload) => {
      state.counter += payload;
    },
    DECREMENT: (state, payload) => {
      state.counter -= payload;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
});
