<script setup>
  import TodoList from '../components/TodoList.vue';
</script>

<template>
  <div class="container">
    <h1>Vue To Do App 2</h1>
    <TodoList />
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}
</style>