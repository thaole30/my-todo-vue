<template>
  <div class="task">
    <div class="task-left">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="updateTodo(todo.id)"
      />
      <span> {{ todo.title }}</span>
      <template>
        <a-input v-model:value="todo.title" placeholder="Basic usage" />
      </template>
    </div>
    <div class="task-right">
      <div class="btn-actions">
        <button style="background-color: green" @click="editTodo(todo.id)">
          Edit
        </button>
        <button style="background-color: red" @click="deleteTodo(todo.id)">
          Delete
        </button>
      </div>
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
  // data() {
  //   return {
  //     item: this.todo,
  //   };
  // },

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
    editTodo(id) {
      console.log("id edit", id);
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

.btn-actions {
  display: flex;
  gap: 10px;
}
</style>
