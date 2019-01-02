<template>
  <div>
    <div style="width: 20%;float: left;vertical-align:middle">
      <img src="@/assets/logol.svg"/>
    </div>

    <div style="width: 70%;float: left;vertical-align:middle">
    <el-menu :default-active="this.$router.path" class="el-menu-demo" router mode="horizontal">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
      </el-menu-item>
    </el-menu>
    </div>
    <div style="width: 10%;float: left;vertical-align:middle">
    <el-dropdown>
      <el-button type="primary">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>公告1</el-dropdown-item>
        <el-dropdown-item>消息1</el-dropdown-item>
        <el-dropdown-item>公告2</el-dropdown-item>
        <el-dropdown-item>消息2</el-dropdown-item>
        <el-dropdown-item>公告3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script>

  export default {
		data() {
      return {
        navList:[
            {name:'/Index',navItem:'首页'},
            {name:'/Document',navItem:'文档'},
            {name:'/Download',navItem:'下载'},
            {name:'/About',navItem:'关于'},
        ]
      }
    },

    //注意这里我是将它的改为这样的，效果是一样的，但使用这个可以在页面任何部位设置跳转时头部导航条部分样式会跟这变化即为选中，而不是不变的例如：你设置跳转到产品页导航条的样式也会跟着选中产品项
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this);
        console.log(key,keyPath);
      }
    }

  }

</script>

