import { createRouter, createWebHistory } from 'vue-router'
import interfaceHome from '../views/interfaceHome.vue';
import TodoFace from '../views/TodoFace.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: interfaceHome
        },
        {
            path: '/todoface',
            component: TodoFace
        },
    ]
})

export default router