<template>
<div style="width: 100%;height: 100%">
  <el-tabs type="border-card" style="height: 100%">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 用户</span>
      <User></User>
    </el-tab-pane>
    <el-tab-pane label="角色">角色</el-tab-pane>
    <el-tab-pane label="权限">
      <SysControl></SysControl>
    </el-tab-pane>
    <el-tab-pane label="资源">资源</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
    import User from "./User.vue";
    import SysControl from "./SysControl";
    export default {
        name: "control",
        components:{User,SysControl},
    }
</script>

<style scoped>

</style>
