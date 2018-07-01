<template id="dateTimePicker">
  <div>
  </div>
</template>

<script>
  // Vue.component('date-time-picker',{
  //   template:'#dateTimePicker',
  //   // props:['unixTime']
  // })

  // import Vue from 'vue'
  // Vue.component('my-component',{
  //   // template:'#dateTimePicker',
  //   template:'<h1>dateTimePicker</h1>',
  //   // props:['unixTime']
  // })
  //
  // new Vue({
  //   el:'#app'
  // })

  // 1.创建一个组件构造器
  var myComponent = Vue.extend({
    template: '<div>This is my first component!</div>'
  })

  // 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
  Vue.component('my-component', myComponent)
</script>

<style scoped>

</style>