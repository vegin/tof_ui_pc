import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './request/api';
import './plugins/element.js'
import './assets/css/element-variables.scss'

Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
