import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // beforeCreate(){
  //   this.$store.dispatch("getMemberInfo").then(() => {})
  // },
  render: h => h(App)
}).$mount('#app')