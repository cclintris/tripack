import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Layout',
      name: 'Layout',
      component: () => import('./views/Layout.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/CustomerService',
      name: 'CustomerService',
      component: () => import('./views/CustomerService.vue')
    },
    {
      path: '/My',
      name: 'My',
      component: () => import('./views/My.vue')
    },
    {
      path: '/TravelDiary',
      name: 'TravelDiary',
      component: () => import('./views/TravelDiary.vue')
    },
    {
      path: '/NewTravel',
      name: 'NewTravel',
      component: () => import('./views/NewTravel.vue')
    }
  ]
})
