// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/style/main.scss' // global css
import '../lib/ali-icon/iconfont.css'
import '../lib/ali-icon/iconfont.js'
import Vuex from 'vuex';

Vue.use(ElementUI, { locale })

// 通过模块倒入的话，还需要在模块中显式的安装
Vue.use(Vuex);

Vue.config.productionTip = false

// 路由跳转
// 增加$goRoute方法跳转路由
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: (h) => h(App)
});
