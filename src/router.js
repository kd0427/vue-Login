import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from "./store"

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    // 이미 로그인 된 유저는 거부
    alert('이미 로그인을 하였습니다.')
    next('/')
  }else{
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    // 로그인이 안된 유저는 로그인으로
    alert('로그인 해주세요.')
    next('/login')
  }else{
    next()
  }
}

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
      beforeEnter:rejectAuthUser, // 라우터에 들어오기 전에 이함수 실행 (라우터가드)
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "about" */ './views/Mypage.vue')
    }
  ]
})
