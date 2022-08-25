import axios from "axios";
import { mutation_types } from "./mutation_types";

export const actions = {
  async fetchTodos({ commit }) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      console.log("response", response);
      commit(mutation_types.SET_TODOS, response.data);
    } catch (error) {
      console.log("error", error);
    }
  },
  async updateTodo({ commit }, id) {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, id);

    commit(mutation_types.UPDATE_TODO, id);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit(mutation_types.DELETE_TODO, id);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      { title: title, completed: false }
    );

    commit(mutation_types.ADD_NEW_TODO, response.data);
  },
};
