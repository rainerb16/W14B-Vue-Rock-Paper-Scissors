import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSelection: {},
    computerSelection: {},
    wins: 0,
    draws: 0,
    losses: 0
  },

  mutations: {
    updateUser: function(state, userSelect) {
      state.userSelection = userSelect;
    },
    updateComputer: function(state, computerSelect) {
      state.computerSelection = computerSelect;
    },
    updateResults: function(state, results) {
      if (results == 1) {
        state.wins++;
      } else if (results == 0) {
        state.draws++;
      } else if (results == -1) {
        state.losses++;
      }
    }
  },
  actions: {},
  modules: {}
});
