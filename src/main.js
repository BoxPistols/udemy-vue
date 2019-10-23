import Vue from 'vue'
import App from './App.vue'

// Develop
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
  // render: function (h) {
  //   return h(App)
  // }

}).$mount('#app')
