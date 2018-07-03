// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import api from './api'
import App from './App'
import store from './store'
import router from './router'

import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'

let options = {
  durtaion: 3000,
  location: 'top'
}

Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, options)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)



Vue.config.productionTip = false

window.API = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
