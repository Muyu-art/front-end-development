<template>
  <div>
    <el-container class="personal-container" style="width:80%">
      <el-container class="header">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="Introduction" label="账户管理" name="first">
            <div style="color: #337ab7;line-height: 1.5">用户名</div>
            <el-input v-model="UserInfo.username" placeholder="请输入内容" readonly></el-input>
            <div style="color: #337ab7;line-height: 1.5" >邮箱</div>
            <el-input v-model="UserInfo.email" placeholder="请输入邮箱" ></el-input>
            <div style="color: #337ab7;line-height: 1.5">学校</div>
            <el-input v-model="UserInfo.university" placeholder="请输入学校"></el-input>
            <div style="color: #337ab7;line-height: 1.5">专业</div>
            <el-input v-model="UserInfo.major" placeholder="请输入专业" ></el-input>
            <div style="color: #337ab7;line-height: 1.5">学号</div>
            <el-input v-model="UserInfo.studentnumber" placeholder="请输入学号" ></el-input>
            <el-button type="primary" style="background-color: #337ab7" v-on:click="SubmitAccount">提交</el-button>
          </el-tab-pane>

          <el-tab-pane label="安全管理" name="third" >
            <div style="color: #337ab7;line-height: 1.5">旧密码</div>
            <el-input v-model="UserInfo.password" type="password" placeholder="请输入旧密码"></el-input>
            <div style="color: #337ab7;line-height: 1.5">新密码</div>
            <el-input v-model="newpassword" type="password" placeholder="请输入新密码"></el-input>
            <div style="color: #337ab7;line-height: 1.5">确认密码</div>
            <el-input v-model="confirmpassword" type="password" placeholder="请重新输入密码"></el-input>
            <el-button type="primary" style="background-color: #337ab7" v-on:click="SubmitPass">确认修改</el-button>
          </el-tab-pane>

        </el-tabs>
      </el-container>

    </el-container>
  </div>

</template>

<script>
export default {
  name: "UserSetting",
  data() {
    return {
      input: '',
      UserInfo:{
        username: '',
        password:'',
        email:'',
        school: '',
        major: '',
        studentnumber:''
      },
      activeName: 'first',
      newpassword:'',
      confirmpassword:'',


    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getUserData: function(){
      let username=JSON.parse(window.localStorage.getItem('user' || '[]')).username;
      //alert(username)
      this.$axios
        .post('/userinfo',{
          username:username
        })
        .then(successResponse => {
          this.UserInfo=successResponse.data
          //alert(successResponse.data.password)
        })
        .catch(failResponse => {
        })
    },
    SubmitAccount(){
      this.$axios
        .post('/update', {
          username:this.UserInfo.username,
          password:this.UserInfo.password,
          email:this.UserInfo.email,
          university:this.UserInfo.university,
          major:this.UserInfo.major,
          studentnumber:this.UserInfo.studentnumber,
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.getUserData();
            location.reload();
            alert("修改成功");
          }
          else{
            alert("修改失败！");
          }
        })
        .catch(failResponse => {
        })
    },

    SubmitPass(){
      if(this.UserInfo.password===''||this.newpassword===''||this.confirmpassword===''){
        alert("密码不能为空");
      }
      else{
        if(this.newpassword===this.confirmpassword){
          this.$axios
            .post('/update', {
              username:this.UserInfo.username,
              password:this.newpassword,
              email:this.UserInfo.email,
              university:this.UserInfo.university,
              major:this.UserInfo.major,
              studentnumber:this.UserInfo.studentnumber,
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.getUserData();
                location.reload();
                alert("修改成功")

              }
              else{
                alert("密码修改失败！");
              }
            })
            .catch(failResponse => {
            })
        }else{
          alert("两次密码输入不一致！");
        }
      }
    }

  },
  mounted()
  {this.getUserData()},

}
</script>

<style scoped>
.personal-container {
  background-color: #FFF;
  padding: 25px 15px 20px;
  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
  flex-direction: column;
}
.header{
  flex-direction: column;
}
.container1 {
  padding: 25px 15px 20px;
  text-align: left;
}

table{
  width: 100%;
  border-collapse: collapse;
}
th{
  border: 1px solid #dddddd;
  text-align: center;
  padding: 20px 0;
  line-height: 0px;
}
td{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px 0 20px 10px;
  line-height: 0px;
}
table tbody tr:nth-child(odd){
  background-color: #f8f8f8;
}
ul, ol {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
