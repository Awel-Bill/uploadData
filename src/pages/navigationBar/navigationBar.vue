<template>
  <div>
    <el-container>
      <!--topBar-->
      <!--顶栏容器-->
      <!--<el-header>-->
        <div class="topBar">
          <a href="javascript:0">
            <i class="fa fa-rocket fa-2x logo"></i>
          </a>
          <a href="javascript:0" class="project-list">&nbsp; dataUpload &nbsp;</a>
          <a href="javascript:0" class="project-list">&nbsp; 工程列表 &nbsp;</a>
          <a href="javascript:0" class="sign-in">&nbsp; 注销 &nbsp;</a>
          <a href="javascript:0" class="sign-in">&nbsp; 登录 &nbsp;</a>
        </div>
        <div>
        </div>
      <!--</el-header>-->

      <!--侧边栏容器-->
        <div class="sideBar-container" style="margin-top: 50px;">

        </div>

      <!--主要区域容器-->
      <el-main></el-main>
    </el-container>

    <!--sideBar-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        isCollapse: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--<style type="text/css" src="style/topBar"></style>-->
<style type="text/css" scoped>
  .topBar{
    height: 50px;
    background-color: #373d41;
    color: #333333;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    z-index: 999;
    /*color: white;*/
    margin: 0;
    text-align: center;
    border-bottom: solid 1px #e6e6e6;
  }
  .topBar a:hover{
    background-color: #2a2f32;
  }

  .topBar a{
    color: white;
    line-height: 50px;
    cursor: pointer;
  }

  .logo{
    width: 50px;
    height: 50px;
    float: left;
    line-height: 50px;
    border-right: 1px solid #2a2f32;
    margin-right: 1px;
  }
  .project-list{
    float: left;
    height: 50px;
    color: white;
    text-align: center;
    line-height: 50px;
    border-right: 1px solid #2a2f32;
    margin-right: 1px;
    text-decoration: none;
    font-size: 14px;
  }
  .sign-in{
    float: right;
    color: white;
    text-decoration: none;
    line-height: 50px;
  }
</style>