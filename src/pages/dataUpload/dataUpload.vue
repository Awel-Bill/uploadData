<template>
  <div>
    <el-menu
      :default-active="'1'"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item  v-for="sheetType in this.sheetType"
                     :index="sheetType.typeId.toString()"
      :key="sheetType.typeId"
      @click="$goRoute(sheetType.nameEN)">
      {{sheetType.name}}
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import sheetType from '@/constant/sheetType.constant'
  import sheetTypeEnum from '@/constant/sheetTypeEnum.constant'
  export default {
    name: "dataUpload",
    data() {
      return {
        sheetType:sheetType,
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
    },
    methods:{
      goToSheet :function (sheetType) {
        switch (sheetType.typeId){
          case sheetTypeEnum.SEDIMENTATION:{
            this.$router.push({path:'sedimentation'})
          }break;

        }
      }
    }
  }
</script>

<style scoped>

</style>