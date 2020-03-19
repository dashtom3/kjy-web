// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
import global from './global/global.js'
import axios from 'axios'
Vue.prototype.$axios = axios
import ElementUI from 'element-ui';
import store from './vuex/store'
import Vuex from 'vuex'
// import 'element-ui/lib/theme-chalk/index.css';
=======

>>>>>>> Stashed changes
=======
>>>>>>> parent of d345289... dd
=======
>>>>>>> parent of d345289... dd
// import Router from 'vue-router'
// import index from './components/index2'
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// }).$mount('')
//
// router.push({ path: '/index' })
Vue.filter('dateMM', function (time) {
  return new Date(parseInt(time)).getMonth() + 1 + '月'
})
Vue.filter('dateDay', function (time) {
  return new Date(parseInt(time)).getDate() + 1
})
Vue.filter('dateAll', function (time) {
  var temp = new Date(parseInt(time))
  return temp.getFullYear() + '/' + (temp.getMonth() + 1) + '/' + temp.getDate() + ' ' + temp.getHours() + ':' + temp.getMinutes()
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
