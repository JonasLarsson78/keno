import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: 'test test',
    nummbers: [],
    winnners: [],
    winner: {
      num1: '-',
      num2: '-',
      num3: '-',
      num4: '-',
      num5: '-',
    },
    disBtn: false,
    done: false,
  },
  mutations: {
    changeDisBtn(state, value) {
      state.disBtn = value;
    },
    addWinners(state, value) {
      value.forEach((x) => {
        state.winnners.push(x);
      });
    },
    resetWinners(state, value) {
      state.winnners = value;
    },
    addNummbers(state, value) {
      state.nummbers.push(value);
    },
    addWinner(state, data) {
      state.winner[data.num] = data.value;
    },
    resetWinne(state) {
      state.winner = {
        num1: '-',
        num2: '-',
        num3: '-',
        num4: '-',
        num5: '-',
      };
    },
    setDone(state, bool) {
      state.done = bool;
    },
  },
  getters: {
    nummbers: (state) => {
      return state.nummbers;
    },
  },
  actions: {},
});
