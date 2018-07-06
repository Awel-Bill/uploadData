export default {
  install(Vue,options){
    Vue.prototype.$goRoute = function (index) {  // 增加$goRoute方法跳转路由
      this.$router.push(index)
    };
  }
}