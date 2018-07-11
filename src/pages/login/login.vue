<template>
  <div style="margin: 8em auto" class="text-center">
        <el-card class="box-card" type="flex" justify="center" style="width: 400px;margin: auto;text-align: center">
          <h3 style="margin-top: 20px">登 录</h3>
          <div style="margin: 50px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="user">
            <el-form-item label="用户名">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="user.password" type="password"></el-input>
            </el-form-item>
            <el-row>
              <el-col class="text-right">
                <el-button type="primary" v-on:click="login()">登录</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "login",
    data() {
      return {
        labelPosition: 'right',
        user: {
          name     : null,
          password : null
        }
      };
    },
    methods:{
      login:function () {
        // console.log("this.user",this.user);
        // console.log("this.BASE_URL",this.BASE_URL);

          // 设置token
        this.$http.post(
          `${this.BASE_URL}oauth/token?client_id=api-client&client_secret=api&grant_type=password&password=${this.user.password}&username=${this.user.name}`,{
            params: {password: this.user.password, username: this.user.name},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then((response) => {
            console.log("response",response);

            let TOKEN = `${response.body.token_type} ${response.body.access_token}`;

            // TOKEN
            localStorage.setItem('token',TOKEN)

          // 拦截器 统一加入TOKEN
          Vue.http.interceptors.push(function(request) {
            request.headers.set('Authorization',TOKEN);
          });
        })
      }
    }
  }
</script>

<style scoped>


</style>