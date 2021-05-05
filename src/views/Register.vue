<template>
  <body id="poster">
  <el-form class="register-container" :model="RegisterForm" ref="RegisterForm" status-icon :rules="rules"
           label-position="left" label-width="0px"  >
    <h3 class="register_title">注册</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="RegisterForm.username"
                autocomplete="off" placeholder="用户名" ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="RegisterForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="ConfirmPassword">
      <el-input type="password" v-model="RegisterForm.ConfirmPassword"
                auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="RegisterForm.email"
                auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="RegisterForm.university"
                auto-complete="off" placeholder="学校"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="RegisterForm.studentnumber"
                auto-complete="off" placeholder="学号"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background:#006179;border: none" v-on:click="register">注册</el-button>
    </el-form-item>
  </el-form>
  </body>

</template>

<script>
export default {
  name: 'Register',
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (value.length < 2 || value.length > 8) {
          callback(new Error('用户名长度范围2~8'));
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.RegisterForm.ConfirmPassword !== '') {
          this.$refs.ruleForm.validateField('ConfirmPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.RegisterForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      RegisterForm: {
        username: '',
        password: '',
        ConfirmPassword: '',
        email: '',
        university: '',
        studentnumber: '',
      },
      responseResult: [],

      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        ConfirmPassword: [
          {validator: validatePass2, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    register() {
      if (this.ConfirmPassword === this.password) {
        this.$axios
          .post('/register', {
            username: this.RegisterForm.username,
            password: this.RegisterForm.password,
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {

              this.$router.replace({path: '/login'})
              alert("注册成功");
            } else {
              alert("注册失败");
            }
          })
          .catch(failResponse => {
          })
      } else {
        alert("两次密码输入不一致，请重新输入！");
      }

    }
  }
}



</script>

<style>
body{
  margin: 0px;
}
.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.register_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
