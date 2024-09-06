import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ComponentCommunication from '../components/ComponentCommunication/ComponentCommunication.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/component-communication',
      name: 'componentCommunication',
      component: ComponentCommunication
    }
  ]
})

export default router
