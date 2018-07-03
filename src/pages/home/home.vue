<template>
  <div>
    <el-container>
      <top-bar></top-bar>
      <side-bar></side-bar>
    </el-container>
  </div>
</template>

<script>
  import TopBar  from '@/pages/home/components/topBar/topBar'
  import SideBar from '@/pages/home/components/sideBar/sideBar'
  export default {
    name       : "home",
    components : {
      TopBar,
      SideBar
    },
    props:[]
  }
</script>

<style scoped>

</style>