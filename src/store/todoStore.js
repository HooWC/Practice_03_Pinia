import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore('todo', () => {
    // 定义状态 (state)
    const todos = ref([]);

    // 定义动作 (actions)
    const addTodo = (newTodo) => {
        if (newTodo.trim()) {
            todos.value.push(newTodo.trim());
        }
    };

    const deleteTodo = (index) => {
        todos.value.splice(index, 1);
    };

    // 定义计算属性 (getters)
    const todoCount = computed(() => todos.value.length);

    // 返回供组件使用的内容
    return {
        todos,
        addTodo,
        deleteTodo,
        todoCount, // 计算属性
    };
});