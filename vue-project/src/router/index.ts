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

router.beforeEach((from, to, next) => {
  // if in here the "from" and "to" is unused (of course we must use theme in real project!)
  // we can -> << router.beforeEach((_, _2, next) => { >> or in any function that
  // I have to take these arguments in order to reach the third one but then I don't plan on using them

  // "next": which is a function which we have to call to either confirm or
  // cancel(next(false)) this navigation action
  next()
  // or
  // next("/some-route") // you would create an infinite loop
})

export default router
