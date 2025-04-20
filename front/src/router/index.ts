import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../view/main/MainView.vue'
import TestView from '../view/test/TestView.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainView,
    },
    {
        path: '/testpage',
        name: 'TestPage',
        component: TestView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router