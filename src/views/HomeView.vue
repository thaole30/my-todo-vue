<template>
  <div class="home">
    <h1 class="title">TODOS</h1>
    <AddTodo />
    <FilterTodo />
    <TodoList />
    <!-- <Drawer /> -->
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo/AddTodo.vue";
import FilterTodo from "@/components/FilterTodo/FilterTodo.vue";
import TodoList from "@/components/TodoList/TodoList.vue";
// import Drawer from "@/components/Drawer/Drawer.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { AddTodo, FilterTodo, TodoList },
};
</script>
