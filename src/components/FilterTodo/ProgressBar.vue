<template>
  <div>
    <div class="progress" :style="`width: ${percentage}%`"></div>
    <p>{{ Number.parseFloat(percentage).toFixed(2) }}%</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProgressBar",
  computed: {
    // ...mapGetters(["doneTodos", "allTodos"]),
    // percentage: (this.doneTodos.length / this.allTodos.length) * 100,
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      doneTodos: "doneTodos",
      allTodos: "allTodos",
    }),
    // percentage: (this.doneTodos.length / this.allTodos.length) * 100,
    percentage() {
      return (this.doneTodos.length / this.allTodos.length) * 100;
    },
  },
};
</script>

<style>
.progress {
  height: 10px;
  background-color: green;
  margin-bottom: 15px;
}
</style>
