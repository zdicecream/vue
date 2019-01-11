<template>
   <div style="padding-left: 50px">
     <el-button type="text"class="footerFont">关于我们<i class="el-icon-info"></i></el-button>
     <el-button type="text"class="footerFont">使用条款</el-button>
     <el-button type="text"class="footerFont">意见建议</el-button>
     <el-button type="text"class="footerFont">合作伙伴</el-button>
     <a class="footerFont" style="float: right;padding-top: 10px" href="//shang.qq.com/wpa/qunwpa?idkey=0d6c2fc0b5b71ac33405dd575bb490bf1a50e3c9a9f694e8a689cb59ee7dacc3" title="点击加入官方三群">
        <!--<i class="iconfont icon-logo-qq"></i>-->
       <i class="el-icon-phone"></i>
        <span>官方技术支持QQ群：xxxxxx</span>
     </a>


   </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
   .footerFont{
     color:#fff;
     font-size: 14px;
   }
</style>
