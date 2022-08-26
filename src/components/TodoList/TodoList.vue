<template>
  <div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mutation_types } from "../../store/modules/todos/mutation_types";
import { mapGetters, mapState } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },

  data() {
    return {
      loading: false,
    };
  },
  computed: {
    // ...mapGetters(["allTodos"]),
    ...mapGetters(["getFilter"]),
    // ...mapState(["filterBy"]),
    ...mapState({
      // arrow functions can make the code very succinct!
      filterBy: (state) => state.filters.filterBy,
      todos: (state) => state.todos.todos,
    }),
  },
  watch: {
    filterBy(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
      this.$store.commit(mutation_types.SET_TODOS_BY_FILTER, newValue);
    },
  },

  created() {
    this.$store.dispatch("fetchTodos");
  },
};
</script>

<style lang="scss" scoped></style>
