import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from "./store"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      // beforeEnter:rejectAuthUser, // 라우터에 들어오기 전에 이함수 실행 (라우터가드)
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      // beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "about" */ './views/Mypage.vue')
    }
  ]
})
