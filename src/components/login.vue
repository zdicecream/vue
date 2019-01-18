<template>
    <div  style="display: flex;justify-content: center;  align-items: center; width: 100%;height: 100%;" class="banner">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.test" ></el-input>
          <input type="button"  @click="generatedCode"  v-model="ccode"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "login",
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        generatedCode () {
          const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          let code = '';
          for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * 36)
            code += random[index]
          }
          this.ccode = code
        },
        // 判断验证码是否输入准确
        checkCode () {
          let vcode = this.loginInfo.vcode
          vcode = vcode.toUpperCase()
          let ccode = this.ccode
          ccode = ccode.toUpperCase()
          if (vcode !== ccode) {
            this.$message.error('Please enter the correct verification code!')
            this.$set(this.loginInfo, 'vcode', '')
            this.$set(this.loginInfo, 'password', '')
          } else {
            return 1;
          }
        },
      },
    }
</script>

<style scoped>
  .banner{
    background-image: url("../assets/banner.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
</style>
