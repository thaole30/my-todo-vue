import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos/index";
import filters from "./modules/filters/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos: todos,
    filters: filters,
  },
});
