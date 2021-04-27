<template>

  <div>

    <el-container class="question_container" style="height: 100%;width:100%">
      <el-container class="question" style="height: 100%;width:50%">

        <div style="overflow-y:auto;width:100%;height:470px">
            <tr>
              <td >
              <h1 style="font-size: 20px;color: #333333">{{ this.QuestionInfo[this.id-1].questionid+".  "+this.QuestionInfo[this.id-1].questiontitle}}</h1>
              </td>
              <td>
              <el-tag type="success" effect="plain">通过次数：{{this.QuestionInfo[this.id-1].solvetimes}}</el-tag>
              </td>
            </tr>
          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.2">时间限制：{{ this.QuestionInfo[this.id-1].timelimit}}</div>
          <div class="line1" style="line-height: 1.2">内存限制：{{ this.QuestionInfo[this.id-1].memorylimit}}</div>
          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.4;color: #333333">{{ this.QuestionInfo[this.id-1].questiondescription}}
            </div>

          <el-divider></el-divider>
          <div class="line1" style="line-height: 1.4;color: #333333;font-size:18px">示例1:</div>
          <div class="line1" style="line-height: 1.4;color: #333333">输入：nums = [1,1,2]</div>
          <div class="line1" style="line-height: 1.4;color: #333333">输出：2, nums = [1,2]</div>
          <div class="line1" style="line-height: 1.4;color: #333333">解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。</div>


          <el-divider></el-divider>

          <div class="line1" style="line-height: 1.4;color: #333333;font-size:18px">示例2:</div>
          <div class="line1" style="line-height: 1.4;color: #333333">输入：nums = [0,0,1,1,1,2,2,3,3,4]</div>
          <div class="line1" style="line-height: 1.4;color: #333333">输出：5, nums = [0,1,2,3,4]</div>
          <div class="line1" style="line-height: 1.4;color: #333333">函数应该返回新的长度5，并且原数组 nums 的前五个元素被修改为 0,1,2,3,4。不需要考虑数组中超出新长度后面的元素。</div>



        </div>
      </el-container>
      <el-container class="EditArea" style="height: 100%;width:50%">
<!--        <h1>编辑区</h1>-->
        <CodeEdit></CodeEdit>
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
        questionid: '1',
        questiontitle: '最长子序列',
        questiondescription: '给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。\n' +
          '            不要使用额外的数组空间，你必须在原地修改输入数组并在使用O(1)额外空间的条件下完成。说明:什么返回数值是整数，但输出的答案是数组呢?',
        indescription: '234234',
        outdescription: '435543',
        inexample: '213',
        outexample: '123',
        timelimit:'123',
        memorylimit:'256MB',
        submittimes:'120s',
        solvetimes:'6',
      },
        {
          questionid: '2',
          questiontitle: '奶牛问题',
          questiondescription: '我是一头牛，一头大傻牛！！！',
          indescription: '234234',
          outdescription: '435543',
          inexample: '213',
          outexample: '123',
          timelimit:'123',
          memorylimit:'256MB',
          submittimes:'120s',
          solvetimes:'23',
        }],
      id:'',
    }

  },
  methods:{
    postData(){
      alert("success!");
      alert(CodeEdit.data.code);
      alert(CodeEdit.data.mode);
    },
    getData: function(){
      this.id=this.$route.query.id;
    },
  },
  created() {
    this.getData();
  },
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
