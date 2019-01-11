<template>
  <div style="margin-left: 15px;">
    <div>
      <el-breadcrumb style="margin-top: 15px" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/Document">文档</a></el-breadcrumb-item>

      </el-breadcrumb>
    </div>

    <div style="margin-top: 15px">
      <ilFrom></ilFrom>
    </div>
  <el-table stripe height="460"  show-summary sum-text="合计"
    :data="tableData">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
      label="Date"
      prop="date"
      sortable>
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name"
      sortable>
    </el-table-column>
    <el-table-column
      label="Adress"
      prop="address"
      show-overflow-tooltip
      sortable>
    </el-table-column>
    <el-table-column
      label="金额"
      prop="money"
      show-overflow-tooltip
      sortable>
    </el-table-column>

    <el-table-column
      label="Adress"
      prop="address"
      show-overflow-tooltip
      sortable>
    </el-table-column>
    <el-table-column
      label="Adress"
      prop="address"
      show-overflow-tooltip
      sortable>
    </el-table-column>
    <el-table-column
      label="Adress"
      prop="address"
      show-overflow-tooltip
      sortable>
    </el-table-column>
    <el-table-column
      label="Adress"
      prop="address"
      show-overflow-tooltip
      sortable>
    </el-table-column>


    <el-table-column fixed="right" width="170px"
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>

    </el-table-column>
  </el-table>
  <template>
    <div class="block" style="text-align: right">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </template>

  </div>
</template>

<script>
  import ilFrom from "./ilFrom";

  export default {
    components: {ilFrom},
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '1099999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '109999999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '109999999999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '1099999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '109999999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '109999999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '1099999999'
        },{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
          money: '1099999999'
        },{




          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          money:'1099999999999999'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
       this.$message('这是一条消息提示');
        console.log(index, row);
      },
      handleDelete(index, row) {
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

