export const getters = {
  allTodos: (state) => {
    console.log("full todos", state.allTodos);
    return state.allTodos;
  },
  doneTodos: (state) => {
    return state.allTodos.filter((todo) => todo.completed);
  },
  notDoneTodos: (state) => {
    return state.allTodos.filter((todo) => !todo.completed);
  },
};
