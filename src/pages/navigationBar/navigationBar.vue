<template>
  <div>
    <el-container>
      <el-header class="topBar">
        <div class="">
          <a href="javascript:0" style="padding: 3px;">
            <i class="fa fa-rocket fa-2x logo"></i>
          </a>
          <a href="javascript:0" class="project-list">&nbsp; dataUpload &nbsp;</a>
          <a href="javascript:0" class="project-list">&nbsp; 工程列表 &nbsp;</a>
          <a href="javascript:0" class="sign-in">&nbsp; 注销 &nbsp;</a>
          <a href="javascript:0" class="sign-in">&nbsp; 登录 &nbsp;</a>
        </div>
      </el-header>
      <el-container>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        </el-radio-group>
          <el-aside class="side-bar"
                    width="230px"
                    style="text-align: left;height: 100%;"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse" >
            <el-menu :default-openeds="['1', '3']"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b" >
              <el-menu-item index="0" class="text-center" @click="handleClose">
                三
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1" @click="dataUpload()">数据上传</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!--<el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      dataUpload(){
        this.$router.push('navigationBar/sedimentation')
      }
    }
  }
</script>

<style>

</style>
<style src="@/style/layout.scss"></style>
