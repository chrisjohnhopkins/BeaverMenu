// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
