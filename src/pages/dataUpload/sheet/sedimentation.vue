<template>
  <div id="sedimentation">
    <el-card class="box-card" >
      <el-row class="form-group">
        <div :span="4">
          <el-tabs :tab-position="'left'" style="height: 100%;overflow: auto">
            <el-tab-pane label="用户管理">
              <table class="table text-center table-hover">
                <thead>
                <tr>
                  <th>测量点编号</th>
                  <th>初始高度(m)</th>
                  <th>上次高度(m)</th>
                  <th>本次高度(m)</th>
                  <th>变化速率(mm/d)</th>
                  <th>累计变量(mm/d)</th>
                  <th>备注(mm/d)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td></td>
                </tr>
                </tbody>
              </table>

            </el-tab-pane>
            <!--<el-tab-pane label="配置管理"></el-tab-pane>-->
            <!--<el-tab-pane label="角色管理"></el-tab-pane>-->
            <!--<el-tab-pane label="定时任务补偿"></el-tab-pane>-->
          </el-tabs>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "sedimentation",
    data() {
      return {
        tabPosition: 'top'
      };
    },

  }

</script>

<style>


</style>