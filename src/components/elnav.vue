<template>
  <div>
    <div style="float: left;vertical-align:middle; text-align: left">
      <img src="@/assets/logol.svg"/>
    </div>

    <div style="float: left;vertical-align:middle; text-align: left">
    <el-menu :default-active="this.$router.path" class="el-menu-demo" style="border: hidden" router mode="horizontal" background-color="#303133" text-color="#fff"
             active-text-color="#ffd04b"  >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
      </el-menu-item>
    </el-menu>
    </div>
    <div style="float: right;vertical-align:middle; " >
      <el-dropdown  trigger="click">
        <el-button icon="el-icon-bell" type="text" style=" background-color: #303133;color: floralwhite;font-size: 20px;font-weight: bold"  circle></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>公告1</el-dropdown-item>
          <el-dropdown-item>消息1</el-dropdown-item>
          <el-dropdown-item>公告2</el-dropdown-item>
          <el-dropdown-item>消息2</el-dropdown-item>
          <el-dropdown-item>公告3</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <router-link style="text-decoration: none" to="/Login"><span style="color: floralwhite;font-weight: bold">登陆</span></router-link>
      <el-button type="text"  @click="dialogFormVisible = true" style="color: floralwhite;font-weight: bold">
        注册
      </el-button>
      <el-dialog title="用户登陆" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.passwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <el-button type="text" style="color: floralwhite" >
        注销
      </el-button>

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
            {name:'/Control',navItem:'系统权限'},
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          passwd:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }

    }

  }

</script>

