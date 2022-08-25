import { mutation_types } from "./mutation_types";
import { v4 as uuidv4 } from "uuid";

export const mutations = {
  [mutation_types.SET_TODOS]: (state, todos) => {
    console.log("mutate todos", todos);
    state.todos = todos;
  },
  [mutation_types.DELETE_TODO]: (state, id) => {
    console.log("mutate id", id);
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  [mutation_types.UPDATE_TODO]: (state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
  },
  [mutation_types.ADD_NEW_TODO]: (state, newTodo) => {
    console.log("newTodo", newTodo);
    state.todos.unshift({
      ...newTodo,
      id: uuidv4(),
    });
  },
};
