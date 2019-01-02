<template>
	<div id="app" >
    <el-container>
      <el-header class="nav" >
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
    margin:0px auto;
    position:fixed;/*固定作用*/
    top:0px;
    left:0px;
    background-color:white;
    z-index:9999; /* 让导航栏浮在网页的高层位置，遇到flash和图片时候也能始终保持最外层 */
    text-align:left;
  }
  .ma{
    top:100px;
    margin:100px auto;
  }


</style>
