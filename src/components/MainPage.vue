<template>
  <div>
    <el-container style="height: 100%;" >
      <el-header class="nav">
        <elnav></elnav>
      </el-header>
      <el-main class="ma">
        <router-view/>
      </el-main>
      <el-footer class="footer">
        <footerPage></footerPage>
      </el-footer>
    </el-container>
  </div>
</template>



<script>

  // 引入elmenetui的导航组件
  import elnav from "./elnav.vue";
  import footerPage from "./footerPage";
  export default {

    //加载组件
    components:{
      footerPage,
      elnav},

  }

</script>

<style>
  .middleLeft{vertical-align:middle;float:left;}
  .middleRight{float:left;}

  .nav{
    width: 100%;
    background-color: #303133;
    /*position: fixed;*/
    /*margin:0px;*/
    /*position:static;!*固定作用*!*/
    /*top:0px;*/
    /*left:0px;*/
    /*background-color:white;*/
    z-index:9999; /* 让导航栏浮在网页的高层位置，遇到flash和图片时候也能始终保持最外层 */
    /*text-align:left;*/

    /*display: flex;*/
    /*height: 64px;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*border-bottom: 1px solid rgba(255,255,255,.65);*/
    /*margin-left: 5%;*/
    /*margin-right: 5%;*/

  }
  .ma{
    /*top:2150px;*/
    margin:0px ;
    padding: 0px;
    height: 100%;
    /*position: relative;*/
    /*overflow: hidden;*/
  }
  .footer {
    width: 100%;
    background-color: #303133;
  }
</style>
