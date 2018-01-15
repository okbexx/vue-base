import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.config'

Vue.routesConfig = []
let router = {instance: ''}

function initRouter (Vue) {
  Vue.use(VueRouter)
  Vue.routesConfig = [...Vue.routesConfig, ...routes]
  router.instance = new VueRouter({
    routes: Vue.routesConfig
  })
}

const install = function (Vue, option = {}) {
  if (install.installed) return
  initRouter(Vue)
}

export default {
  install,
  router
}
