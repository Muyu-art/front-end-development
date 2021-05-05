<template>

  <div>

    <el-container class="question_container" style="height: 100%;width:100%">
      <el-container class="question" style="height: 100%;width:50%">

        <div style="overflow-y:auto;width:100%;height:470px">
            <tr>
              <td >
              <h1 style="font-size: 20px;color: #333333">{{ this.QuestionInfo.questionid+".  "+this.QuestionInfo.questiontitle}}</h1>
              </td>
              <td>
              <el-tag type="success" effect="plain">通过次数：{{this.QuestionInfo.solvetimes}}</el-tag>
              </td>
            </tr>
          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.2">时间限制：{{ this.QuestionInfo.timelimit}}ms</div>
          <div class="line1" style="line-height: 1.2">内存限制：{{ this.QuestionInfo.memorylimit}}MB</div>
          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.4;color: #333333">{{ this.QuestionInfo.questiondescription}}
            </div>

          <el-divider></el-divider>

          <div class="line1" style="line-height: 1.4;color: #333333;font-size:18px">示例1:</div>
          <div class="line1" style="line-height: 1.4;color: #333333">{{ this.QuestionInfo.sample1}}</div>


          <el-divider></el-divider>

          <div class="line1" style="line-height: 1.4;color: #333333;font-size:18px">示例2:</div>
          <div class="line1" style="line-height: 1.4;color: #333333">{{ this.QuestionInfo.sample2}}</div>

          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.4;color: #333333;font-size:18px">提示:</div>

          <div class="line1" style="line-height: 1.4;color: #333333">{{ this.QuestionInfo.tips}}</div>

        </div>
      </el-container>
      <el-container class="EditArea" style="height: 100%;width:50%">
<!--        <h1>编辑区</h1>-->
<!--        <CodeEdit></CodeEdit>-->
        <CodeEdit v-on:postcode="getcode" v-on:postlanguage="getlanguage" v-on:postdata="postcode"></CodeEdit>

        <!--        <el-divider></el-divider>-->

      </el-container>
    </el-container>

  </div>
</template>

<script>
import CodeEdit from "../CodeEdit/CodeEdit";
//import Question from"../QuestionBank";
export default {
  name: "Question",
  components: {CodeEdit},
  data(){
    return{
      QuestionInfo:[{
        questionid:'',
        questiontitle: '',
        questiondescription:'',
        sample1:'',
        sample2:'',
        timelimit:'',
        memorylimit:'',
        submittimes:'',
        solvetimes:'',
        tips:''
      },],
      id:'',
      code:'',
      language:''

    }

  },
  methods:{
    getData: function(){
      this.id=this.$route.query.id;
    },
    getcode(e){
      this.code=e;
      //alert(this.code);
    },
    getlanguage(e){
      this.language=e;
      //alert(this.language)
    },

    loadQuestion:function() {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/question',{
          questionid:this.id
        })
        .then(successResponse => {
          _this.QuestionInfo=successResponse.data
        })
        .catch(failResponse => {
        })
    },
    postcode(){
      var languageid=3;
      if(this.language==='C')
      {
        languageid=1;
      }else if(this.language==='C++')
      {
        languageid=2;
      }else if(this.language==='Java')
      {
        languageid=3;
      }else if(this.language==='Python')
      {
        languageid=4;
      }
      let username=JSON.parse(window.localStorage.getItem('user' || '[]')).username;
      //alert(username)
      //alert(this.QuestionInfo.questionid)
      //alert(languageid)
      //alert(this.code)
      this.$axios
        .post('/code', {
          username:username,
          questionid: this.QuestionInfo.questionid,
          languageid: languageid,
          code:this.code
        })
        .then(successResponse => {
          if (successResponse.data.status === "Error") {
            alert("提交失败！");
          }else{
            alert("提交成功")
          }
          //alert(successResponse.data.status)
        })
    }
  },
  created() {
    this.getData();
  },
  mounted()
  {this.loadQuestion()}
}
</script>

<style scoped>
.question_container{
  background-color: #FFF;
  padding: 10px 15px 10px;
  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
}

.question{
  color:#777;
  flex-direction: column;
  line-height: 1;
  padding: 10px 10px 10px 10px;
}
.EditArea{

  color:#777;
  flex-direction: column;
  border-left: 1px solid #dddddd;
  padding: 10px 10px 10px 10px;
}

</style>
