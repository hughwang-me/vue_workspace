import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/MainPage'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/LoginPage')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
