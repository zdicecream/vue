<template>
<div>
   <!--展开折叠开关-->
		 <!--<el-button style="margin-bottom: 20px;" type="primary" icon="el-icon-caret-left" v-model="isCollapse"  v-on:click="isCollapse = !isCollapse" ></el-button>-->
	    	 <el-menu
	    	:collapse="isCollapse"
    default-active="2"
    class="el-menu-vertical-demo"
        background-color="#303133" text-color="floralwhite"
        active-text-color="#fff" router
    @open="handleOpen"
    @close="handleClose">
    <!--<el-submenu index="1">-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<span>导航一</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->
        <!--<template slot="title">分组一</template>-->
        <!--<el-menu-item index="/Download">选项1</el-menu-item>-->
        <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
      <!--</el-menu-item-group>-->
      <!--<el-menu-item-group title="分组2">-->
        <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
      <!--</el-menu-item-group>-->
      <!--<el-submenu index="1-4">-->
        <!--<template slot="title">选项4</template>-->
        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
      <!--</el-submenu>-->
    <!--</el-submenu>-->
    <!--<el-menu-item index="4">-->
      <!--<i class="el-icon-menu"></i>-->
      <!--<span slot="title">导航四</span>-->
    <!--</el-menu-item>-->
    <el-submenu v-for="(menuItem,i) in menuJson" :index="menuItem.index" :key="i" >
           <template slot="title">
             <i class="el-icon-menu"></i>
             {{menuItem.name}}
           </template>
      <el-menu-item v-for="(chItem,j) in menuItem.children" :index="chItem.index" :key="j">
        <i class="el-icon-menu"></i>
        {{chItem.name}}
      </el-menu-item>
    </el-submenu>

  </el-menu>




</div>
</template>

<script>
  export default {

    data() {
      return {
        isCollapse: false,
        menuJson:[
          {name:"模块1",index:"/PageTable",children:[{name:"模块1",index:"/PageTable",children:null}]},
          {name:"模块2",index:"/Control",children:[{name:"模块3",index:"/Download",children:null},{name:"模块2",index:"/Download",children:null},{name:"模块2",index:"/Download",children:null}]},
          {name:"模块3",index:"/Document",children:[{name:"模块3",index:"/Download",children:null},{name:"模块2",index:"/Download",children:null},{name:"模块2",index:"/Download",children:null}]},
        ]
      }

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

