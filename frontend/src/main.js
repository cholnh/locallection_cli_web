// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'
import Unicon from 'vue-unicons'
import { uniSearch, uniSearchPlus, uniCommentSearch, uniTimes } from 'vue-unicons/src/icons'

Unicon.add([uniSearch, uniSearchPlus, uniCommentSearch, uniTimes])
Vue.use(Unicon)
Vue.config.productionTip = true
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  data: {},
  components: { App },
  template: '<App/>'
})
