<template>

  <div>
    <el-container class="index-container1" style="height: 65%;width:80%">
      <el-container>
        <div  class="welcome_module" >
          Hello,world!
          <div class="welcome_1">
            欢迎来到在线判题系统——GoldenRice Online Judge
          </div>
          <el-divider></el-divider>
          <div style="font-size: 30px;color: #337ab7">
            Made by HZZY Group
          </div>
        </div>
    </el-container>
    <el-container class="index_about" style="width:100px">
      <div style="font-size: 20px">关于
        <td  style="font-size: 15px;line-height: 2">
          Online Judge系统（简称OJ）是一个在线的判题系统。
          用户可 以在线提交程序多种程序（如C、 C++、Java）
          源代码，系统对源 代码进行编译和执行，并通过预先
          设计的测试数据来检验程序源代码的正确性。
        </td>
      </div>
    </el-container>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "AppIndex",
}
</script>

<style>

.index-container1{
  background-color: #FFF;
  padding: 25px 15px 20px;

  text-align: left;
  position: absolute;
  margin: auto; left: 0; top: 120px; right: 0; bottom: 0;
  box-shadow: 0 0 25px #cac6c6;
}
.welcome_module{
  font-size: 60px;
  font_family: SimHei;
  font_weight:lighter;
  margin: auto;
}
.welcome_1{
  font-size: 20px;
  color:#777;

}
.index_about{
  background-color: #f8f8f8;
  padding:30px;
}



</style>
