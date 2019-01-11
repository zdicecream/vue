<template>
  <div>
    <div  style="height: 400px;">
      <img style="width: 100%;height: 100%" src="../assets/b3.jpg"/>
      <!--<span style="font-size: 60px">{{ msg }}</span><br />-->
      <!--<span style="font-size: 60px">{{ msgChina }}</span><br />-->
      <!--<span style="font-size: 40px">{{create}}</span>-->
    </div>


    <div  >
      <div style="font-size: 30px;text-align: center;padding-top: 15px">特色功能</div>
      <el-row style="padding-top: 20px;text-align: center;vertical-align:middle;display: flex;justify-content: center;">
      <el-col :span="4" v-for="item in in1List" :key="item" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" style="width: 200px;height: 200px; ">
          <img :src="item.src" style="height: 100px;width: 100px;" />
          <div style="padding: 14px">
            <span>在线显示</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
      <el-row style="padding-top: 20px;text-align: center;display: flex;justify-content: center;">
        <el-col :span="4" v-for="item in in1List" :key="item" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }" style="width: 200px;height: 200px">
            <img :src="item.src" style="height: 100px;width: 100px;" />
            <div style="padding: 14px">
              <span>在线显示</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div>
      <div style="font-size: 30px;text-align: center;padding-top: 15px;width: 100%">特色功能</div>

      <div style="display: flex;justify-content: center;margin: 20px 50px">
        <el-carousel :interval="4000" height="400px"  style="width: 100%;height: 100%">
          <el-carousel-item v-for="item in ingList" :key="item">
            <img :src="item.src"class="image">
            <p>{{item.txt}}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div>
      <div style="font-size: 30px;text-align: center;padding-top: 15px;width: 100%">特色功能</div>
      <div>
        <el-row style="padding-top: 20px;text-align: center;vertical-align:middle;display: flex;justify-content: center;">
          <el-col :span="4" v-for="item in funcList" :key="item" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" style="width: 200px;height: 200px; ">
              <img :src="item.src" style="height: 100px;width: 100px;" />
              <div style="padding: 14px">
                <span>在线显示</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
	.blueFont{color:#409EFF;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
	.redFont{color:#F00;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
	.blackFont{color:#303133;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;background-image: url("../assets/b3.jpg")}
  .whiteFont{color:#fff;text-align: center;font-size: 24px;font-weight:bold;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;background-image: url("../assets/b1.png")}

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
      in1List:[
        {src: require('../assets/in1.svg')},
        {src: require('../assets/in2.svg')},
        {src: require('../assets/in3.svg')},
        {src: require('../assets/in4.svg')},
      ],
      funcList:[
        {src: require('../assets/func_0.png')},
        {src: require('../assets/func_1.png')},
        {src: require('../assets/func_2.png')},
        {src: require('../assets/func_3.png')},
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






