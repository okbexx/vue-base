// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './core/router'
import store from './core/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import example from 'components/example'

Vue.config.productionTip = false
Vue.use(router)
Vue.use(ElementUI)
Vue.use(example)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router.router.instance,
  store
})
