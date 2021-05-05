<template>
  <div>

    <el-container class="help-container1" style="width:80%">

        <el-tabs :tab-position="tabPosition" >
          <el-tab-pane label="OJ信息" >
            <h1>Compile</h1>
            <el-table
              :data="tableData1"
              border
              style="width: 100%">
              <el-table-column prop="language" label="Language" width="200px"></el-table-column>
              <el-table-column prop="compile" label="Compile method" width="767"></el-table-column>
            </el-table>
            <h1>Result</h1>
            <el-table
              :data="tableData2"
              border
              style="width: 100%">
              <el-table-column prop="result" label="Result" width="200px"></el-table-column>
              <el-table-column prop="chinese" label="中文" width="200"></el-table-column>
              <el-table-column prop="information" label="Information" width="567"></el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="比赛">
            <h1>比赛</h1>
          </el-tab-pane>

          <el-tab-pane label="出题要求">
            出题要求
          </el-tab-pane>

          <el-tab-pane label="Special Judge">
            Special Judge
          </el-tab-pane>

          <el-tab-pane label="OI模式">
            OI模式
          </el-tab-pane>

          <el-tab-pane label="关于">

            <h1>什么是OJ</h1>
            <div class="line1" style="line-height: 1.7">Online Judge系统（简称OJ）是一个在线的判题系统。 用户可以在线提交程序多种程序（如C、C++、Java）源代码，系统对源代码进行编译和执行， 并通过预先设计的测试数据来检验程序源代码的正确性。</div>
            <h1>在线测评系统整体架构</h1>
            <div class="line1" style="line-height: 1.7">
              前台页面从数据库获取题目、比赛列表在浏览器上显示，用户通过浏览器提交的代码直接保存到数据库。 评测程序负责从数据库中取出用户刚刚提交的代码，保存到文件，然后编译，执行，评判，最后将评判结果写回数据库。</div>
            <h1>评测程序</h1>
            <div class="line1" style="line-height: 1.7">
              评测程序就是对用户提交的代码进行编译，执行，将执行结果和OJ后台正确的测试数据进行比较，如果答案和后台数据完全相同就是 Accept，也就是你的程序是正确的。否则返回错误信息。 测评程序会不断扫描数据库，一旦出现没有评判的题目会立即进行评判。

              同时，为了防止用户提交恶意代码破坏系统，测评程序会对所提交程序调用的函数及程序运行权限进行限制。</div>

          </el-tab-pane>

        </el-tabs>





    </el-container>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      tabPosition: 'left',
      tableData1: [{
        language: 'C',
        compile: 'gcc Main.c -o Main -fno-asm -O2 -Wall -Im --static -std=c99 -Donline_JUDGE',
      }, {
        language: 'C++',
        compile: 'g++ -fno-asm -O2 -Wall -lm --static -std=c++11 -DONLINE_JUDGE -o Main Main.cc',
      }, {
        language: 'Java',
        compile: 'javac -J-Xms32m -J-Xmx256m Main.java',
      }],
      tableData2: [{
        result: 'Accepted',
        chinese: '通过',
        information:'程序通过',
      },{
        result: 'Presentation Error',
        chinese: '输出格式错误',
        information:'答案基本正确，但是格式不对',
      },{
        result: 'Wrong Answer',
        chinese: '解答错误',
        information:'答案不对，仅仅通过样例数据的测试并不一定是正确答案，一定还有你没想到的地方',
      },{
        result: 'Time Limit Exceeded',
        chinese: '运行超时',
        information:'运行超出时间限制，检查下是否有死循环，或者应该有更快的计算方法',
      },{
        result: 'Memory Limit Exceeded',
        chinese: '内存超限',
        information:'超出内存限制，数据可能需要压缩，检查内存是否有泄露',
      },{
        result: 'Output Limit Exceeded',
        chinese: '输出超限',
        information:'输出超过限制，你的输出比正确答案长了两倍',
      },{
        result: 'Runtime Error',
        chinese: '运行出错',
        information:'运行时错误，非法的内存访问，数组越界，指针漂移，调用禁用的系统函数。请点击后获得详细输出',
      },{
        result: 'Compile Error',
        chinese: '编译错误',
        information:'编译错误，请点击后获得编译器的详细输出',
      },{
        result: 'System Error',
        chinese: '系统错误',
        information:'系统出现错误',
      },]
    };
  }
}
</script>

<style scoped>
.help-container1 {
  background-color: #FFF;
  padding: 25px 15px 20px;

  text-align: left;
  margin: auto;
  box-shadow: 0 0 25px #cac6c6;
}
.textarea{

  padding: 25px 15px 20px;
  text-align: left;
  margin: auto;

}

</style>
