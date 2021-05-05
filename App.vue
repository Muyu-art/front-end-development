
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
              <el-tooltip class="item" effect="light" content="登出" placement="bottom">
              <i class="el-icon-switch-button" v-on:click="logout"
                 style="float:right;font-size: 35px;color: rgb(158 5 5);padding: 10px"
                 :style="{'visibility': this.isVisibleLogin}"></i>
              </el-tooltip>
              <el-menu-item index="/index" ><i class="el-icon-s-home"></i>首页</el-menu-item>
              <el-menu-item index="/questionbank"><i class="el-icon-s-order"></i>题库</el-menu-item>
              <el-menu-item index="/status"><i class="el-icon-s-data"></i>状态</el-menu-item>
              <el-menu-item index="/help" ><i class="el-icon-info"></i>帮助</el-menu-item>
              <el-submenu index="personalcenter"  :style="{'visibility': this.isVisibleLogout}" >
                <template slot="title"><i class="el-icon-user-solid"></i>个人中心</template>

                <el-menu-item index="/login">登录</el-menu-item>
                <el-menu-item index="/register">注册</el-menu-item>
              </el-submenu>
              <el-submenu index="personalcenter1" style="float:right" :style="{'visibility': this.isVisibleLogin}">
                <template slot="title"><i class="el-icon-user-solid"></i>{{ this.$store.state.user.username }}</template>
                <el-menu-item index="/personalcenter"><i class="el-icon-s-home"></i>简介</el-menu-item>
                <el-menu-item index="/personalcenter/usersetting"><i class="el-icon-setting"></i>设置</el-menu-item>

              </el-submenu>
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
      isVisibleLogout:'',
      isVisibleLogin:''
    };
  },
  methods: {
    menuClick(index) {
      if(index==="/personalcenter"){
        var user=this.$store.state.user.username;
        this.$router.push(index+'?id='+user);
      }else{
        this.$router.push(index);
      }

    },
    JudgeLogin(){
      let username=JSON.parse(window.localStorage.getItem('user' || '[]')).username;
      if(username===this.$store.state.user.username){
        this.isVisibleLogout='hidden';
        this.isVisibleLogin='visible';
      }
      else{
        this.isVisibleLogout='visible';
        this.isVisibleLogin='hidden';
      }
    },
    logout() {
      var _this = this
      this.$axios.post('/logout').then(successResponse => {
        if (successResponse.data.code === 200) {
          // 前后端状态保持一致
          this.isVisibleLogout='visible';
          this.isVisibleLogin='hidden';
          _this.$store.commit('logout')
          _this.$router.replace('/login')
          //location.reload();
          alert("登出成功");
        }
        else{
          alert("登出失败");
        }
      })
    }
  },
  created() {
    this.JudgeLogin();
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

