<template>
  <div style="height: 100%;">
    <div style="width: 40%;float: left">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox
        :filter-node-method="filterNode"
        @check-change="handleCheckChange"
        ref="tree2">
      </el-tree>
    </div>
    <el-transfer style="width: 60%;float: right"
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入权限拼音"
      v-model="value2"
      :titles="['所有权限', '用户持有权限']"
      :data="data2">
    </el-transfer>
  </div>
</template>

<script>
    export default {
        name: "sys-control",
      data() {
        const generateData2 = _ => {
          const data = [];
          const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
          const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
          cities.forEach((city, index) => {
            data.push({
              label: city,
              key: index,
              pinyin: pinyin[index]
            });
          });
          return data;
        };
        return {
          filterText: '',
          data2: generateData2(),
          value2: [],
          filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          },
          props: {
            label: 'name',
            children: 'zones'
          },
          count: 1

        };

        },
      watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
      },
      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.name.indexOf(value) !== -1;
        },
        handleCheckChange(data, checked, indeterminate) {
          console.log(data, checked, indeterminate);
        },
        handleNodeClick(data) {
          console.log(data);
        },
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }, { name: 'region2' }, { name: 'region2' }, { name: 'region2' }, { name: 'region2' }]);
          }
          if (node.level > 3) return resolve([]);

          var hasChild;
          if (node.data.name === 'region1') {
            hasChild = true;
          } else if (node.data.name === 'region2') {
            hasChild = false;
          } else {
            hasChild = Math.random() > 0.5;
          }

          setTimeout(() => {
            var data;
            if (hasChild) {
              data = [{
                name: 'zone' + this.count++
              }, {
                name: 'zone' + this.count++
              }];
            } else {
              data = [];
            }

            resolve(data);
          }, 500);
        }
      }
    }
</script>

<style scoped>

</style>
