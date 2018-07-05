<template>
  <div>
    <el-container>
      <top-bar></top-bar>
      <side-bar></side-bar>
      <el-container>
        <el-main style="padding: 0">
          <router-view></router-view>
        </el-main>
      </el-container>
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