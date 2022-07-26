import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers:[
      {id:1, name:'kim', email:"123@naver.com", password:"123"},
      {id:2, name:'seo', email:"456@naver.com", password:"123"},
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    //로그인 성공했을 때,
    loginSuccess(state, payload){
      state.isLogin = true
      state.isLoginError=false
      state.userInfo = payload
    },
    //로그인 실패했을 때
    loginError(state){
      state.isLogin=false
      state.isLoginError=true
    }
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj){
        let selectedUser = null
        state.allUsers.forEach(user=>{
          if(user.email === loginObj.email) selectedUser = user
        })
        if(selectedUser === null || selectedUser.password !== loginObj.password) commit('loginError')
        else {
          commit("loginSuccess", selectedUser)
          router.push({name: "mypage"})
        }
    }
  }
})
