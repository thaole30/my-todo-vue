import { mutation_types } from "./mutation_types";
import { v4 as uuidv4 } from "uuid";

export const mutations = {
  [mutation_types.SET_TODOS]: (state, todos) => {
    state.todos = todos;
    state.allTodos = todos;
  },
  [mutation_types.DELETE_TODO]: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
    state.allTodos = state.allTodos.filter((todo) => todo.id !== id);
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
  [mutation_types.SET_TODOS_BY_FILTER]: (state, filterBy) => {
    state.todos = state.allTodos.filter((todo) => {
      return filterBy === "all"
        ? true
        : todo.completed === (filterBy === "active" ? false : true);
    });
  },
  [mutation_types.EDIT_TODO]: (state, { id, editedTitle }) => {
    console.log("state todoo", id, editedTitle);
    state.todos.map((todo) => {
      if (todo.id === id) todo.title = editedTitle;
      return todo;
    });
    console.log("new todos", state.todos);
  },
};
