<template>
  <div>
    <!-- <label v-if="errors.length > 0">{{ errors[0] }}</label> -->
    <div class="input-task">
      <form @submit="handleSubmit" style="width: '100%'">
        <input type="text" v-model="content" />
        <!-- <button :click="addTodo">Add</button> -->
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleSubmit(event) {
      event.preventDefault();
      this.addTodo(this.content);

      this.content = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
