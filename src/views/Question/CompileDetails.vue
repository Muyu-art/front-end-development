<template>
  <div>
    <el-container class="compiledetails-container" style="height: 100%;width:90%">
      <el-container class="status" style="height: 100%;width:100%;padding-right: 10px">
        <table :data="tableData"  border="1" align="center" >
          <thead>
          <tr style="color: #333333">
            <th style="width: 121px;height:0px">运行ID</th>
            <th style="width: 180px;height:0px">作者</th>
            <th style="width: 300px;height:0px">题号</th>
            <th style="width: 130px;height:0px">测评结果</th>
            <th style="width: 100px;height:0px">分数</th>
            <th style="width: 100px;height:0px">时间</th>
            <th style="width: 100px;height:0px">内存</th>
            <th style="width: 100px;height:0px">语言</th>
            <th style="width: 150px;height:0px">提交时间</th>
          </tr>
          </thead>
          <tbody >
            <tr>
              <td>
                <div style="color: #337ab7" align="center">{{ this.tableData[this.id].runid}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].author}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].questionid}}-{{ this.tableData[this.id].questiontitle}}</div>
              </td>
              <td>
                <div class="result" :style="activation(this.tableData[this.id].testresult)" style="font-family:'微软雅黑';font-weight: 700"align="center">{{ this.tableData[this.id].testresult}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].score}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].time}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].memory}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].language}}</div>
              </td>
              <td>
                <div style="color: #337ab7"align="center">{{ this.tableData[this.id].submittime}}</div>
              </td>
            </tr>
          </tbody>
        </table>
        </el-container>
      <el-divider></el-divider>
      <p style="font-size: 40px;line-height: 0">Test:
        <span style="font-size: 20px;line-height: 0">总测试用例/通过测试用例</span>
      </p>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "CompileDetails",
  data() {
    return {
      tableData:[{
        runid:'001',
        author:'CatWithFish',
        questionid:'1',
        questiontitle:'最长子序列',
        testresult:'通过',
        score:'100',
        time:'2MS',
        memory:'260KB',
        language:'C++',
        submittime:'3天前'
      },]
    }
  },
  methods:{
    getData: function(){
      this.runid=this.$route.query.id;
      for(let i=0;i<this.tableData.length;i++){
        if(this.runid===this.tableData[i].runid){
          this.id=i;
        }
      }
    },

  },
  created() {
    this.getData();
  },
  computed: {
    activation() {
      return (icontent) => { // 使用JavaScript闭包，进行传值操作
        console.log(icontent)

        if (icontent === "输出格式错误"||icontent === "解答错误"||icontent === "运行出错"||icontent === "编译错误"||icontent === "系统错误"||icontent === "无测评数据"){
          return {'color':'#c53939'}
        }
        else if (icontent === "通过"){
          return {'color':'#317b33'}
        }
        else if (icontent === "正在编译"||icontent === "正在测评"||icontent === "运行超时"||icontent === "内存超限"||icontent === "输出超限"){
          return {'color':'#925c0b'}
        }
        else if (icontent === "等待测评"||icontent === "等待重测"){
          return {'color':'#777777'}
        }

      }
    }
  },
}
</script>

<style scoped>
.compiledetails-container{
  background-color: #FFF;
  padding: 10px 15px 10px;
  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
  flex-direction: column;
}
.status{
  color:#777;
  flex-direction: column;
  line-height: 1;
  padding: 10px 10px 10px 10px;
}
table{
  width: 100%;
  border-collapse: collapse;
}

table caption{
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
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
</style>
