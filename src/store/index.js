import Vue from "vue";
import Vuex from "vuex";
import LoginToken from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    onlogin: function(state, data) {
      state.token = data;
      LoginToken.set("token", state.token);
    },
    loginError: function(state) {
      state.loginState = true;
      state.status = "Login Error";
    }
  },
  actions: {},
  modules: {}
});
