<template>
  <div>
    <div class="blackFont">
      <h1>{{ msg }}</h1>
      <h2>{{ msgChina }}</h2>
      <p>{{create}}</p>
    </div>
    <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in ingList" :key="item">
        <img :src="item.src"class="image">
        <p>{{item.txt}}</p>
      </el-carousel-item>
    </el-carousel>
    </div>
    <div style="width: 29%; float:left" >
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            一致性 Consistency<i class="header-icon el-icon-info"></i>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div style="width: 70%;float:left">
      <el-row>
      <el-col :span="8" v-for="item in ingList" :key="item" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.src" class="image"/>
          <div style="padding: 14px;">
            <span>风景</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-tooltip content="Top center" placement="top">
              <el-button type="text" class="button" @click="dialogVisible = true">打开</el-button>
              </el-tooltip>
              <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<style>
	.blueFont{color:#409EFF;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
	.redFont{color:#F00;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
	.blackFont{color:#303133;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;

  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My First App',
      msgChina: '欢迎来到我的第一个App',
      create:"Created by ZD",
      ingList:[
      	{src: require('../assets/1.jpg')},
      	{src: require('../assets/2.jpg')},
      	{src: require('../assets/3.jpg')},
      	{src: require('../assets/4.jpg')},
      	{src: require('../assets/5.jpg')},
      	{src: require('../assets/6.jpg')},
      	{src: require('../assets/7.jpg')},

      ],
      currentDate: new Date(),
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>






