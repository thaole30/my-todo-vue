<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  margin: auto;
  background-color: #f1f1f1;
  padding: 15px;
}
.container {
  background-color: white;
}
.title {
  color: green;
  margin-bottom: 20px;
}
.input-task {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.input-task input {
  padding: 10px 20px;
  width: 100%;
  display: block;
  border: 1px solid #f1f1f1;
}
.task-header {
  display: flex;
  padding: 5px 10px;
  border-bottom: 1px solid #f1f1;
}
.task-body {
  padding: 5px 10px;
}
.task-header-left {
  flex: 0.3;
  text-align: left;
}
.task-header-right {
  flex: 0.7;
  text-align: right;
}
.filter-item {
  color: green;
  margin-right: 10px;
  opacity: 0.2;
  padding: 5px;
  cursor: pointer;
}
.active-item {
  opacity: 1;
  background-color: #e2fff1;
}
</style>
