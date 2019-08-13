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
      path: '/CustomerService',
      name: 'CustomerService',
      component: () => import('./views/CustomerService.vue')
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
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: () => import('./views/Comment.vue')
    },
    {
      path: '/Ask',
      name: 'Ask',
      component: () => import('./views/Ask.vue'),
    },
    {
      path: '/Ask-1',
      name: 'Ask-1',
      component: () => import('./views/Ask-1.vue')
    },
    {
      path: '/Choose',
      name: 'Choose',
      component: () => import('./views/Choose.vue'),
        children: [
          {
            path: '/ViewPoints',
            name: 'ViewPoints',
            component: () => import('./components/ViewPoints.vue')
          },
          {
            path: '/Restaurants',
            name: 'Restaurants',
            component: () => import('./components/Restaurants.vue')
          },
          {
            path: '/Resorts',
            name: 'Resorts',
            component: () => import('./components/Resorts.vue')
          }
        ]
    },
    {
      path: '/Complete',
      name: 'Complete',
      component: () => import('./views/Complete.vue')
    },
    {
      path: '/Saved',
      name: 'Saved',
      component: () => import('./views/Saved.vue')
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/Version',
      name: 'Version',
      component: () => import('./views/Version.vue')
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: () => import('./views/AboutUs.vue')
    },
    {
      path: '/Bug',
      name: 'Bug',
      component: () => import('./views/Bug.vue')
    },
    {
      path: '/Loading',
      name: 'Loading',
      component: () => import('./views/Loading.vue')
    }
  ]
})
