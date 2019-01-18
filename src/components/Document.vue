<template>
  <div style="height: 100%;">
    <elnavVertical style="width: 15%;height: 100%; float: left;background-color: #303133;"></elnavVertical>
    <!--<pageTable style="float: right;width: 83%;height: 100%" ></pageTable>-->
    <div style="float: right;width: 83%;height: 100%">
      <router-view/>
    </div>
  </div>
</template>

<script>
	// 引入elmenetui的导航组件
	import pageTable from "./table.vue";
  import elnavVertical from "./elnavVertical.vue";

  export default {
  		//加载组件
    components:{pageTable,elnavVertical},

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

