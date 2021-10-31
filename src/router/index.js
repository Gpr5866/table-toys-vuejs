import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: 'overview',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Overview.vue')
      },
      {
        path: 'group',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Group.vue')
      },
      {
        path: 'puzzle',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Puzzle.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router