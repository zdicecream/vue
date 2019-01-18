<template>
    <div>

      <el-table stripe height="460"  show-summary sum-text="合计"
                :data="tableData">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          type="index"
          width="50">
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

    </div>
</template>

<script>
    import PageTable from "./table"
    export default {
        name: "user",
        components:{
          PageTable
      },
      data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
          search: '',
          tableData:[],
        }
      },
      created(){
        this.loginPost();
      },
      methods:{
        loginPost: function () {
          let params ={'username': 'admin', 'password': 'admin123', 'rememberMe': 'true','isMobile':'1'}
          this.$https.fetchPost('/admin/getUserJson',params ).then((result) => {
            // let data = JSON.parse(result.data)
            this.tableData = result.data
            // console.log("this.base.tokenthis.base.token",this.base.token)
          }).catch(err=>{
              console.log(err)
            }
          )
        },
      }
    }
</script>

<style scoped>

</style>
