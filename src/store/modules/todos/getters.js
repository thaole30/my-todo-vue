export const getters = {
  allTodos: (state) => {
    console.log("full todos", state.todos);
    return state.todos;
  },
  doneTodos: (state) => {
    return state.todos.filter((todo) => todo.completed);
  },
};
