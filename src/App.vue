
<template>
  <div id="app">

      <el-header style="height:80px">
        <div class="brand_1">Golden Rice</div>
        <div class="brand">Online Judge</div>
      </el-header>
        <el-row>
          <el-col :span="24">
            <el-menu
              :default-active="$route.path"
              class="el-menu-demo"
              mode="horizontal"
              @select="menuClick"
              background-color="#f8f8f8"
              text-color="#777"
              active-text-color="#337ab7">
              <el-menu-item index="/index" ><i class="el-icon-s-home"></i>首页</el-menu-item>
              <el-menu-item index="/questionbank"><i class="el-icon-s-order"></i>题库</el-menu-item>
              <el-menu-item index="/status"><i class="el-icon-s-data"></i>状态</el-menu-item>
              <el-menu-item index="/help"><i class="el-icon-info"></i>帮助</el-menu-item>
              <el-submenu index="personalcenter">
                <template slot="title"><i class="el-icon-user-solid"></i>个人中心</template>
                <el-menu-item index="/personalcenter">个人中心</el-menu-item>
                <el-menu-item index="/login">登录</el-menu-item>
                <el-menu-item index="/register">注册</el-menu-item>
              </el-submenu>
              <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 30px;color: #222;padding: 10px"></i>
            </el-menu>
          </el-col>
        </el-row>
      <el-main style="height: 595px">

        <router-view></router-view>
      </el-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    };
  },
  methods: {
    menuClick(index) {
      this.$router.push(index);
    },
    logout() {
      var _this = this
      this.$axios.get('/logout').then(resp => {
        if (resp.data.code === 200) {
          // 前后端状态保持一致
          _this.$store.commit('logout')
          _this.$router.replace('/login')
          alert("登出成功");
        }
        else{
          alert("登出失败");
        }
      })
    }
  }
}
</script>

<style>
.el-header {
  background-color: #006179;
  color: #333;
  text-align: center;
  line-height: 80px;
}


.el-main {
  background-color: #e7e7e7;
  color: #333;
  text-align: left;
  line-height: 60px;

}

body > .el-container {
  margin-bottom: 40px;
}



.brand {
  color: #fff;
  font-size: 22px;
  float: left;
  padding-left: 10px;
  position: relative;
  top: 1px;
  border-left: 1px solid #eaeaea;
  margin-top: 15px;
  margin-left: 5px;
  overflow: hidden;
  height: 55px;
  line-height: 55px;
}
.brand_1 {
  color: #fff;
  font-size: 22px;
  float: left;
  padding-left: 10px;
  position: relative;
  top: 1px;
  margin-top: 15px;
  margin-left: 5px;
  overflow: hidden;
  height: 55px;
  line-height: 55px;
}
.el-icon-switch-button {
  cursor: pointer;
  outline:0;
}
</style>

