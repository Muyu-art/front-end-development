<template>

  <div>

    <el-container class="status_container" style="height: 100%;width:90%">
      <el-container class="search" style="height: 100%;width:100%">
        <div >
          <tr><td style="padding-right: 10px">
          <el-input placeholder="题号"  class="input-with-select" style="width: 250px">
            <el-button slot="append" icon="el-icon-search" size="small"></el-button>
          </el-input>
            </td>
            <td style="padding-right: 10px">
          <el-input placeholder="作者"  class="input-with-select" style="width: 250px">
            <el-button slot="append" icon="el-icon-search" size="small"></el-button>
          </el-input>
            </td>
            <td style="padding-right: 10px">
          <el-select v-model="value" placeholder="测评结果" style="width: 150px">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select >
            </td><td style="padding-right: 10px">
          <el-select v-model="value" placeholder="语言" style="width: 150px">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
            </td>
            <td>
              <el-button slot="append" >搜索</el-button>
            </td>
            <td></td>
          </tr>
        </div>




      </el-container>
      <el-container class="status" style="width:100%">
        <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" stripe border style="width: 100%;line-height: 15px" >
          <el-table-column prop="runid" label="运行ID" width="110px" style="color:#337ab7" align="center">
            <template slot-scope="scope">
              <router-link :to="{path: '/compiledetails',query:{id:scope.row.runid}}"style="color: #337ab7" @select="edit1(scope.row.runid)">
                {{ scope.row.runid}}
              </router-link>

            </template>
          </el-table-column>
          <el-table-column prop="author" label="作者" width="180px" align="center">
            <template slot-scope="scope">
              <router-link :to="{path: '/personalcenter',query:{id:scope.row.author}}"style="color: #337ab7" @select="edit(scope.row.questionid)">
                {{ scope.row.author}}
              </router-link>

            </template>
          </el-table-column>
          <el-table-column prop="questionid" label="题号" width="300px" align="center">
            <template slot-scope="scope">
              <router-link :to="{path: '/question',query:{id:scope.row.questionid}}"style="color: #337ab7" @select="edit(scope.row.questionid)">
                {{ scope.row.questionid}}-{{ scope.row.questiontitle}}
              </router-link>

            </template>
          </el-table-column>
          <el-table-column prop="testresult" label="测评结果" width="130px" align="center">
            <template slot-scope="scope" >
              <div class="result" :style="activation(scope.row.testresult)" style="font-family:'微软雅黑';font-weight: 700">{{ scope.row.testresult}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="score" label="分数" width="100px" align="center">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.score}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="时间" width="100px" align="center">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.time}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="memory" label="内存" width="100px" align="center">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.memory}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="language" label="语言" width="100px" align="center">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.language}}</div>
            </template>
          </el-table-column>

          <el-table-column prop="submittime" label="提交时间" width="150px"align="center">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.submittime}}</div>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <el-pagination layout=" prev, pager, next" background :current-page="currentPage" :page-size="pageSize"
                         :total="tableData.length"  @current-change="handleCurrentChange">
          </el-pagination>
        </div>



      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "Status",
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
      },
        {
          runid:'002',
          author:'Cat',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'等待测评',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'003',
          author:'WithFish',
          questionid:'2',
          questiontitle:'奶牛问题',
          testresult:'等待重测',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          submittime:'3天前'
        },
        {
          runid:'004',
          author:'Fish',
          questionid:'2',
          questiontitle:'奶牛问题',
          testresult:'正在编译',
          score:'100',
          time:'2000MS',
          memory:'10MB',
          language:'Java',
          submittime:'1天前'
        },
        {
          runid:'005',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'正在测评',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'006',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'输出格式错误',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },{
          runid:'007',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'解答错误',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'008',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'运行超时',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'009',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'内存超限',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'010',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'输出超限',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'011',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'运行出错',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'012',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'编译错误',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'013',
          author:'CatWithFish',
          questionid:'1',questiontitle:'最长子序列',
          testresult:'系统错误',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
        {
          runid:'014',
          author:'CatWithFish',
          questionid:'1',
          questiontitle:'最长子序列',
          testresult:'无测评数据',
          score:'100',
          time:'2MS',
          memory:'260KB',
          language:'C++',
          codelength:'107',
          submittime:'3天前'
        },
      ],
      currentPage: 1,
      pageSize: 30,
      options1: [{
        value: 'all',
        label: 'ALL'
      }, {
        value: 'pending',
        label: '等待测评'
      }, {
        value: 'pending_rejudge',
        label: '等待重测'
      }, {
        value: 'compiling',
        label: '正在编译'
      }, {
        value: 'running_judging',
        label: '正在测评'
      }, {
        value: 'accepted',
        label: '通过'
      }, {
        value: 'presentation_error',
        label: '输出格式错误'
      }, {
        value: 'wrong_answer',
        label: '解答错误'
      }, {
        value: 'time_limit_exceeded',
        label: '运行超时'
      }, {
        value: 'memory_limit_exceeded',
        label: '内存超限'
      }, {
        value: 'output_limit_exceeded',
        label: '输出超限'
      }, {
        value: 'runtime_error',
        label: '运行出错'
      }, {
        value: 'compile_error',
        label: '编译错误'
      }, {
        value: 'wrong_system',
        label: '系统错误'
      }, {
        value: 'nodata',
        label: '无测评数据'
      }],
      options2: [{
        value: 'all',
        label: 'ALL'
      },{
        value: 'c',
        label: 'C'
      },{
        value: 'c++',
        label: 'C++'
      },{
        value: 'java',
        label: 'Java'
      },{
        value: 'python',
        label: 'Python3'
      },],
      value: ''
    }
  },
  methods:{
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    edit(author) {
      this.$router.push({ path: '/personalcenter', query: { id: author } })
    },
    edit1(id) {
      this.$router.push({ path: '/compiledetails', query: { id: id } })
    },
  },
  watch: {

    $route(to, from) {
      // 获取query中的参数
      if (to.query.param1) {
        this.param1 = to.query.param1
      }
    },
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
  }
}
</script>

<style scoped>
.status_container{
  background-color: #FFF;
  padding: 10px 15px 10px;
  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
  flex-direction: column;

}

.search{
  color:#777;
  flex-direction: column;
  line-height: 1;
  padding: 10px 10px 10px 10px;
}
.status{
  color:#777;
  flex-direction: column;
  line-height: 1;
  padding: 10px 10px 10px 10px;
}
a {
  text-decoration: none;
}
</style>
