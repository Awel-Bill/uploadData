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
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-col>
          <!--<div class="block">-->
            <!--<span class="demonstration">默认</span>-->

          <!--</div>-->
        </el-menu-item>
      </el-menu>



      <template>
        <el-table
          header-cell-class-name="text-center"
          :data="tableData3"
          height="100%"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="测量点编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="初始高度(M)">
          </el-table-column>
          <el-table-column
            prop="address"
            label="上次高度(M)">
          </el-table-column>
          <el-table-column
            prop="address"
            label="本次高度(M)">
          </el-table-column>
          <el-table-column
            prop="address"
            label="变化速率(mm/d)">
          </el-table-column>
          <el-table-column
            prop="address"
            label="累计变量(mm/d)">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sedimentation",
      data() {
        return {
          tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
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