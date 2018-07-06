import Vue from 'vue'

// 增加全局变量 BASE_URL
// const BASE_URL='http://123.56.75.4/';      // build
const BASE_URL='http://123.56.75.4:8000/';    // develop
export default {
  install(Vue,options){
    console.log("BASE_URL",BASE_URL);
    Vue.prototype.BASE_URL = BASE_URL;
  }
}