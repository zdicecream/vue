<template>
	<div id="app" style="margin:0;padding:0; position: absolute;width: 100%;height: 100%;left: 0px; top: 0px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;font-size:small " >
    <el-container style="height: 100%;" >
      <el-header class="nav">
        <elnav></elnav>
      </el-header>
      <el-main class="ma">
        <router-view/>
      </el-main>
    </el-container>
	</div>
</template>



<script>

	// 引入elmenetui的导航组件
  import elnav from "./components/elnav.vue";
  export default {

		//加载组件
    components:{elnav},

  }

</script>

<style>
	.middleLeft{vertical-align:middle;float:left;}
	.middleRight{float:left;}

  .nav{
    width: 100%;
    background-color: #303133;
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


</style>
