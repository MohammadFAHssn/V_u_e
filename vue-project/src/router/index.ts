import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ComponentCommunication from '../components/ComponentCommunication/ComponentCommunication.vue'
import DivingDeeperIntoComponents from '../components/DivingDeeperIntoComponents/DivingDeeperIntoComponents.vue'
import Forms from '../components/Forms/Forms.vue'
import RoutingBuildingMultiPageSinglePageApplications from '../components/RoutingBuildingMultiPageSinglePageApplications/RoutingBuildingMultiPageSinglePageApplications.vue'
import Other from '../components/Other/Other.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path: '/component-communication',
      // name: 'componentCommunication',
      component: ComponentCommunication
    },
    {
      path: '/diving-deeper-into-components',
      // name: 'DivingDeeperIntoComponents',
      component: DivingDeeperIntoComponents
    },
    {
      path: '/forms',
      // name: 'Forms',
      component: Forms
    },
    {
      path: '/routing-building-multi-page-single-page-applications',
      // name: 'RoutingBuildingMultiPageSinglePageApplications',
      component: RoutingBuildingMultiPageSinglePageApplications
    },
    {
      path: '/other',
      // name: 'other',
      component: Other
    }
  ]
})

export default router
