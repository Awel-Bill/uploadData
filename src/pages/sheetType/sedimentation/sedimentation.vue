<template>
  <div>
    <div id="sedimentation">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">沉降</el-menu-item>
        <el-menu-item index="2">水平位移</el-menu-item>
        <el-menu-item index="3">水位</el-menu-item>
        <el-menu-item index="4">测斜</el-menu-item>
        <el-menu-item index="5">轴力</el-menu-item>
        <el-menu-item index="6">收敛</el-menu-item>
        <el-menu-item index="7">自定义</el-menu-item>
        <el-menu-item index="8" style="float: right;">
          <el-col :span="2">
            <el-date-picker
              align="center"
              v-model="value1"
              popper-class="hhh"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-col>
        </el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script>
  export default {
    name: "sedimentation",
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
        // };
      }
    }
  }

</script>

<style>


</style>