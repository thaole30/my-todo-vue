<template>
  <div class="task">
    <div class="task-left">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="updateTodo(todo.id)"
      />
      <span> {{ todo.title }}</span>
    </div>
    <div class="task-right">
      <span @click="deleteTodo(todo.id)">Delete</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mutation_types } from "../../store/modules/todos/mutation_types";

export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data() {
    return {
      item: this.todo,
    };
  },

  computed: {
    isChecked() {
      return this.todo.completed;
    },
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    updateTodo(id) {
      this.$store.commit(mutation_types.UPDATE_TODO, id);
    },
  },
};
</script>

<style>
.task {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 10px 0;
}
.task-left {
  flex: 0.7;
  text-align: left;
}
.task-completed-color {
  color: green;
}
.task-right {
  flex: 0.3;
  text-align: right;
}
.task-right > span {
  padding: 5px;
  cursor: pointer;
  color: red;
}
</style>
