<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem.vue";

// 引入 store
const todoStore = useTodoStore();

// 本地输入框状态
const newTodo = ref("");

// 添加任务方法
const addTodo = () => {
    todoStore.addTodo(newTodo.value);
    newTodo.value = "";
};

// 删除任务方法
const deleteTodo = (index) => {
    todoStore.deleteTodo(index);
};
</script>

<template>
    <div>
        <router-link to="/">Home Page</router-link>

        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new Task" />

        <p>Total Todos: {{ todoStore.todoCount }}</p> <!-- 使用计算属性 -->

        <ul>
            <TodoItem v-for="(todo, index) in todoStore.todos" :todo="todo" :key="index" @d="deleteTodo(index)" />
        </ul>
    </div>
</template>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

ul {
    list-style: none;
    padding: 0;
}
</style>
