import Vue from 'vue'
import App from './App.vue'
//Global
import LikeNum from "./LikeNum"

// Develop
Vue.config.productionTip = false
//Global
Vue.component("LikeNum", LikeNum)

new Vue({
  render: h => h(App)
  // render: function (h) {
  //   return h(App)
  // }

}).$mount('#app')
