import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" ? true : false : null
  },
  mutations: {
    setTheme(state, theme) {
      state.darkTheme = theme
    }
  },
  actions: {

  },
  getters: {
    darkTheme: s => s.darkTheme
  },
  modules: {}
});
