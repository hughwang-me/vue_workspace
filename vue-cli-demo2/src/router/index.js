import { createRouter , createWebHistory } from "vue-router";

import HomePage from "../view/HomePage";
import About from "../view/About";
import Login from "../view/Login";

const routers = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routers
})

export default router;
