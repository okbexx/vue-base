import Vue from 'vue'
import VueRouter from 'vue-router'


let router = {instance: ''}

function initRouter (Vue) {
  Vue.use(VueRouter);

}

const install = function (Vue, option = {}) {
    if(install.installed) return;
    initRouter(Vue);
}

export default {
  install,
  router
}
