<script setup>
    defineProps({
        todo: String
    });
</script>

<template>
    <li>
        <span>{{ todo }}</span>
        <button @click="$emit('d')">Delete</button>
    </li>
</template>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

button {
    background: #ff5c5c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background: #ff1c1c;
}
</style>