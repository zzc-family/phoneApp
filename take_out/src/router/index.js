import Vue from 'vue'
import VueRouter from 'vue-router'

import "../assets/styles/common.css"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("../views/Goods.vue")
  },{
    path: '/evaluate',
    component:() => import("../views/Evaluate.vue")
  },{
    path: '/merchant',
    component:() => import("../views/Merchant.vue")
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
