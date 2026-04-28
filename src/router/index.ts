import { createRouter, createWebHistory } from 'vue-router'
import TeaList from '../components/TeaList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TeaList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router