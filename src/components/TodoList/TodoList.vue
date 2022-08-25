<template>
  <div>
    <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },

  data() {
    return {
      todos: [
        { id: 1, name: "Learn Javascript", status: "active" },
        {
          id: 2,
          name: "Learn Vuejs",
          status: "active",
        },
        {
          id: 3,
          name: "Learn Vuejs",
          status: "completed",
        },
      ],
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },

  mounted() {
    this.$store.dispatch("fetchTodos");
    mapActions(["fetchTodos"]);
  },
};
</script>

<style lang="scss" scoped></style>
