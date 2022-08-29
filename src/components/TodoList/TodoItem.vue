<template>
  <div class="task">
    <div class="task-left">
      <input
        type="checkbox"
        :checked="isChecked"
        @change="updateTodo(todo.id)"
      />
      <span v-if="!isEdit"> {{ todo.title }}</span>
      <template>
        <input
          v-if="isEdit"
          :value="todo.title"
          placeholder="Basic usage"
          @change="onChange"
          @pressEnter="editTodo(todo.id)"
        />
      </template>
    </div>
    <div class="task-right">
      <div class="btn-actions">
        <button v-if="isEdit" class="button-edit" @click="editTodo">Yes</button>
        <button v-if="isEdit" class="button-edit" @click="isEdit = false">
          No
        </button>
        <button style="background-color: green" @click="isEdit = true">
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
  data() {
    return {
      input: "",
      isEdit: false,
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
    onChange(e) {
      this.input = e.target.value;
    },
    editTodo() {
      this.isEdit = false;
      if (this.input !== "" || !!this.input) {
        console.log(this.todo.id, this.input);
        this.$store.commit(mutation_types.EDIT_TODO, {
          id: this.todo.id,
          editedTitle: this.input,
        });
      }
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
