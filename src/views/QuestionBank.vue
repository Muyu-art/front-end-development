<template>
  <div>
    <el-container class="questionbank-container" style="width:80%">
      <el-container class="container1" style="width:780px">


        <el-table :data="QuestionInfo.slice((currentPage-1)*pageSize,currentPage*pageSize)" stripe border style="width: 100%;line-height: 20px">
          <el-table-column prop="questionid" label="题号" width="105px" style="color:#337ab7 ">
            <template slot-scope="scope">
              <router-link :to="{path: '/question',query:{id:scope.row.questionid}}"style="color: #337ab7" @select="edit(scope.row.questionid)">
                {{ scope.row.questionid}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="questiontitle" label="标题" width="600px">
            <template slot-scope="scope">
              <router-link :to="{path: '/question',query:{id:scope.row.questionid}}"style="color: #337ab7" @select="edit(scope.row.questionid)">
                {{ scope.row.questiontitle}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="solvetimes" label="Solved" width="120px">
            <template slot-scope="scope">
              <div style="color: #337ab7">{{ scope.row.solvetimes}}</div>
            </template>
          </el-table-column>
        </el-table>

        <div>
          <el-pagination layout=" prev, pager, next" background :current-page="currentPage" :page-size="pageSize"
                          :total="QuestionInfo.length"  @current-change="handleCurrentChange">
          </el-pagination>
        </div>


      </el-container>
      <el-container class="container2" style="width:220px" >

            <div style="margin-top: 0px;">
              <el-input placeholder="请输入题目"  class="input-with-select" v-model="input">
                <el-button slot="append" icon="el-icon-search" size="small" @click="search"></el-button>
              </el-input>
            </div>

        <el-row>
          <el-col :span="24" >
            <el-card :body-style="{ padding: '10px' }">
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">ewen</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">动态规划</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">贪心</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">模拟</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">枚举</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">数学</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">数据结构</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">动态规划</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">字符串</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">二分查找</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">子序列</a>
              </el-tag>
              <el-tag size="medium" color="#e7e7e7" >
                <a href="https://element.eleme.io" style="color: #337ab7">队列</a>
              </el-tag>


              <el-divider></el-divider>
              <div style="padding: 0px;line-height: 1.3">
                <span >标签</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>


      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "QuestionBank",
  data() {
    return {
      QuestionInfo:[{
        questionId:'',
        questionTitle: '',
        solveTimes:''
      },
        ],
      currentDate: new Date(),
      path:'',
      currentPage: 1,
      pageSize: 10,
      input:'',
    }
  },
  methods:{
    search(){
    },
    loadQuestion:function() {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/questionlist')
        .then(successResponse => {
          _this.QuestionInfo=successResponse.data
        })
        .catch(failResponse => {
        })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    fetchData(newVal, oldVa) {
      console.log(oldVa)//oldVa 上一次url
      console.log(newVal);//newVal 这一次的url

    },
    edit(id) {
      this.$router.push({ path: '/question', query: { id: id } })
    },

  },
  mounted()
  {this.loadQuestion()},
  watch: {

    $route(to, from) {
      // 获取query中的参数
      if (to.query.param1) {
        this.param1 = to.query.param1
      }
    },
  }
}
</script>

<style scoped>
.questionbank-container {
  background-color: #FFF;
  padding: 25px 15px 20px;
  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
}
.container1 {
  padding: 25px 15px 20px;
  text-align: left;
  margin: auto;
  flex-direction: column;
}
.container2 {
  padding: 15px 0 0 0  ;
  text-align: left;
  flex-direction: column;
}

.time {
  font-size: 13px;
  color: #999;
}


a {
  text-decoration: none;
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
table td:first-child{
  color: #337ab7;
  text-align: right;
  padding:0 10px 0 0
}

table thead tr{
  color: #006179;
}

table tbody tr:nth-child(odd){
  background-color: #f8f8f8;
}
table tbody tr td{
  color: #337ab7;
}

</style>
