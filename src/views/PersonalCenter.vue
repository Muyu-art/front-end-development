<template>
  <div>
  <el-container class="personal-container" style="width:80%">
    <el-container class="header">
      <div style="font-size: 32px">{{this.UserInfo[this.id].username}}</div>
      <el-divider></el-divider>
    </el-container>
    <el-container class="container1" style="width:100%">
      <table :data="UserInfo" stripe border style="width: 25%;line-height: 12px">
        <tbody>
          <tr>
            <th>用户名</th>
            <td>
              <div style="color: #337ab7">{{this.UserInfo[this.id].username}}</div>
            </td>
          </tr>
          <tr>
            <th>昵称</th>
            <td><div style="color: #337ab7">{{this.UserInfo[this.id].nickname}}</div></td>
          </tr>
          <tr>
            <th>邮箱</th>
            <td><div style="color: #337ab7">{{this.UserInfo[this.id].email}}</div></td>
          </tr>
          <tr>
            <th>QQ号</th>
            <td><div style="color: #337ab7">{{this.UserInfo[this.id].QQnumber}}</div></td>
          </tr>
          <tr>
            <th>学校</th>
            <td><div style="color: #337ab7">{{this.UserInfo[this.id].school}}</div></td>
          </tr>
          <tr>
            <th>专业</th>
            <td><div style="color: #337ab7">{{this.UserInfo[this.id].major}}</div></td>
          </tr>
        </tbody>
      </table>

      <el-container class="recent-submit"  style="margin-left:30px;margin-top:0px;width:75%;height: 243px">
        <p style="line-height: 0">我的提交</p>
        <el-container class="recent-submit"  style="overflow-y:auto">
        <table :data="PersonalSubmit" stripe border style="overflow-y:auto;width: 100%;line-height: 10px">
          <tbody>
          <tr v-for="i in PersonalSubmit">

             <td>
                <div style="color: #337ab7">{{i.questionid+"."+i.questiontitle}}</div>
               <div style="color: #337ab7;float: right" >{{i.status+i.time}}</div>
             </td>

          </tr>

          </tbody>
        </table>
        </el-container>
      </el-container>

    </el-container>
    <el-container class="container2" style="width:100%" >
      <el-divider></el-divider>
      <div class="personalInfo" style="font-size: 25px;flex-direction: row;">
        <span>已解答</span>
        <div style="font-size: 20px">(1)</div>
      </div>
      <el-divider></el-divider>
      <div class="personalInfo" style="font-size: 25px;flex-direction: row;">
        <span>未解答</span>
        <div style="font-size: 20px">(1)</div>
      </div>
      <el-divider></el-divider>
      <span style="font-size: 25px">统计</span>
      <div class="statistical" >
        <div width="50%">
          <ul>
            <li>
              <strong>提交总数</strong><span>2</span>
            </li>
            <li>
              <strong>通过</strong><span>2</span>
            </li>
            <li>
              <strong>通过率</strong><span>2</span>
            </li>
          </ul>
        </div>
        <div width="50%">
          <ul>
            <li>
              <strong>错误解答</strong><span>2</span>
            </li>
            <li>
              <strong>时间超限</strong><span>2</span>
            </li>
            <li>
              <strong>编译错误</strong><span>2</span>
            </li>
          </ul>
        </div>
      </div>
    </el-container>

  </el-container>
  </div>
</template>

<script>
import Login from "./Login"
export default {
  name: "PersonalCenter",
  data() {
    return {
      UserInfo:[{
        username: 'CatWithFish',
        nickname: 'CatWithFish',
        email:'123@qq.com',
        QQnumber: '123123123',
        school: '加州旅馆',
        major: 'CS',

      },{
        username: 'Cat',
        nickname: 'Cat',
        email:'cat@qq.com',
        QQnumber: '123123123',
        school: '中国地质大学（武汉）',
        major: 'CS',
      }],
      PersonalSubmit:[{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      },{
        questionid: '1',
        questiontitle:'奶牛问题',
        status:'未通过',
        time:'3天前',
      }]

    }
  },
  methods:{
    getData: function(){
      this.author=this.$route.query.id;
      let flag = false;
      for(let i=0;i<this.UserInfo.length;i++){
        if(this.author===this.UserInfo[i].username){
          this.id=i;
          flag=true;
        }
      }

    },

  },
  created() {
    this.getData();
  },
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
.recent-submit{
  flex-direction: column;
}
.container2 {
  padding: 15px 0 0 0  ;
  text-align: left;
  flex-direction: column;
}
.personalInfo{
  flex-direction: row;
}
.statistical{
  flex-direction: row;
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
