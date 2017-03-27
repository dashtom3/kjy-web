<template>
  <div class="area">
    <v-header></v-header>
    <div class="reserve">
      <div class="reserveHeader">
        <h2>项目申请 Project</h2>
      </div>
      <div class="reserveCont">
        <div class="card">
          <h2>身份信息</h2>
          <input type="text" name="" placeholder="企业/项目名称"> <input type="text" name="" placeholder="姓名"><br>
          <input type="text" name="" placeholder="手机" class="w264"> <input type="text" name="" placeholder="邮箱" class="w264"><input type="text" name="" placeholder="微信" class="w264 weixin"><br>
          <span>校区(工作地点)</span>
          <!-- <select class="" name="" v-model="select">
            <option v-for="(campu, index) in campus" :value=index>{{campu}}</option>
          </select> -->
          <el-select v-model="select" placeholder="请选择"  @change="selectCampus(select)">
            <el-option
              v-for="(campu, index) in campus"
              :value=index
              :label=campu>
            </el-option>
          </el-select>
          <span style="margin-left:68px;">年级</span>
          <el-select v-model="collage" placeholder="请选择">
            <el-option
              v-for="(collage, index) in collages"
              :value=index
              :label=collage>
            </el-option>
          </el-select>
          <!-- <select class="" name="" v-model="collage">
            <option v-for="" :value=index>{{collage}}</option>
          </select> -->
        </div>
        <div class="eventDetial">
          <h2>项目信息</h2>
          <div class="place">
            <input type="text" name="" placeholder="(拟)注册资金" class=""> &nbsp;&nbsp;&nbsp;&nbsp;万元<br><br>
            <textarea name="name" rows="8" cols="80" placeholder="团队成员"></textarea>
            <div class="projectKind">
              <span>项目类别</span>
              <el-select v-model="projectKind" placeholder="请选择">
                <el-option
                  v-for="(projectKind, index) in projectKinds"
                  :label=projectKind
                  :value=index>
                </el-option>
              </el-select>
              <!-- <select name="" v-model="projectKind">
                <option v-for="(projectKind, index) in projectKinds" :value=index>{{projectKind}}</option>
              </select> -->
            </div>
          </div>
          <div class="time">
            <div class="">
              <span class="date">项目状态(可多选)</span>
            </div>
            <div>
              <div class="">
                <input type="checkbox" name="time" id="time1" value=""><label for="time1">已上线</label>
                <input type="checkbox" name="time" id="time2" value=""><label for="time2">有公众微信号</label>
                <input type="checkbox" name="time" id="time3" value=""><label for="time3">即将上线</label>
                <input type="checkbox" name="time" id="time4" value=""><label for="time4">开发中</label>
                <input type="checkbox" name="time" id="time5" value=""><label for="time5">换方向</label>
                <input type="checkbox" name="time" id="time6" value=""><label for="time6">初始阶段</label>
              </div>
            </div>
          </div>
          <div class="upload">
            <textarea name="name" rows="8" cols="80" placeholder="项目简介(200字以内)"></textarea>
            <div class="uploadRight">
              <div class="uploadleft">
                <div class="">
                  <img src="" alt="">
                </div>
              </div>
              <div class="a-upload">
                <a href="javascript:;"><input type="file" value="上传文件"><span>上传</span><br><span>商务计划书</span></a>
              </div>
            </div>
          </div>
          <div class="">
            <h5>在项目报名中如遇任何问题，请发“项目名称+姓名+手机”为主题的邮件，附件附上项目计划书，到5andia@tongji.edu.cn，我们
会第一时间和你取得联系。</h5>
          </div>
          <div class="tj">
            <a href="javascript:;">提交</a>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '../header'
import footer from '../footer'
// import calendar from './calendar.vue'
export default {
  name: 'area',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      campus: ['四平校区', '嘉定校区'],
      places: '',
      place: '',
      select: '',
      collage: '',
      projectKind: '',
      projectKinds: ['电商', '游戏', '社交', '教育', '金融', '大数据', '硬件', '技术', '新材料', '新能源', '医疗', '通讯', '其他'],
      collages: ['本科生', '研究生', '博士生', '毕业三年内', '毕业三年以上', '教师'],
      places1: ['活动大厅', '会议室1', '会议室2', '会议室3', '会议室4', '移动木制舞台'],
      places2: ['暴风影音会议室', '乐视TV会议室(可与暴风影音会议室合借)', '秋千会议区', '沙发会议区', '大师椅会议区', '户外舞台']
    }
  },
  methods: {
    selectCampus: function (value) {
      if (value === 0) {
        this.places = this.places1
      } else {
        this.places = this.places2
      }
    },
    selectPlace: function (value) {
      console.log(value)
    }
  },
  created () {
    this.places = this.places1
  },
  components: {
    'v-footer': footer,
    'v-header': header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.area{
  width: 1200px;
  background: #fff;
  overflow: hidden;
  margin: 0 auto;
}
.reserve{
  width: 865px;
  margin: 0px auto 100px;
}
.projectKind{
  float: right;
}
.place textarea{
  border-radius: 6px;
  background-color: rgb( 238, 238, 238 );
  width: 395px!important;
  height: 98px!important;
  resize: none;
  padding-top: 10px;
}
.reserveHeader{
  font-size: 18px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
  margin-bottom: 20px;
}
.reserveHeader h2{
  font-size: 22.5px;
}
.weixin{
  margin-right: 0!important;
}
.card h2{
  font-size: 22.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 0, 0, 0 );
}
input,select,textarea{
  height: 30px;
  padding-left: 10px;
  outline: none;
  height: 42px;
  background: #2d2d2d;
  background: rgba(45,45,45,.15);
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #3d3d3d;
  border: 1px solid rgba(255,255,255,.15);
  -moz-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0,0,0,.1)
}
select{
  position: relative;
  /*top: -5px;*/
  width: 296px;
  height: 30px;
}
input::webkit-input-placeholder{
  color: red;
}
input:-moz-placeholder{
  color: red
}
input::-moz-placeholder{
  color: red;
}
input:-ms-input-placeholder{
  color: red;
}
.card input{
  width: 296px;
  height: 38px;
  border-radius: 6px;
  background-color: rgb( 238, 238, 238 );
  outline: none;
  /*margin-right: 30px;*/
  margin: 10px 15px 10px 0;
}
.yulan{
  margin: 50px 0;
}
.yulan div{
  display: inline-block;
}
.yulan div:nth-child(1){
  position: relative;
  top:-180px;
}
.yulan div:nth-child(2) img{
  width: 350px;
}
.card span{
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: rgb( 83, 83, 83 );
  display: inline-block;
  margin-right: 30px;
}
.eventDetial h2{
  margin: 30px 0;
  font-size: 22.5px;
}
.place{
  position: relative;
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: rgb( 83, 83, 83 );
  display: block;
}
.place span{
  margin-right: 50px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
.w264{
  width: 264px!important;
}
.place input{
  border-radius: 6px;
  background-color: rgb( 238, 238, 238 );
  width: 296px;
  height: 38px;
}
.upload textarea{
  /*position: absolute;*/
  padding-left: 10px;
  padding-top: 10px;
  right: 140px;
  top: 0;
  resize: none;
  border-radius: 6px;
  background-color: rgb( 238, 238, 238 );
  width: 395px;
  height: 160px;
  outline: none;
  background: #2d2d2d;
  background: rgba(45,45,45,.15);
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #3d3d3d;
  border: 1px solid rgba(255,255,255,.15);
  -moz-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1) inset;
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0,0,0,.1)
}
.date{
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: rgb( 83, 83, 83 );
  line-height: 0.001;
  margin-right: 50px;
}
.time{
  margin: 20px 0;
}
.time input{
  height: auto!important;
}
.time>div{
  display: inline-block;
}
.time label{
  font-size: 14px;
  font-family: "Adobe Heiti Std";
  color: rgb( 83, 83, 83 );
  line-height: 0.001;
  margin-right: 30px;
}
.upload{
  /*width: 300px;*/
  overflow: hidden;
  position: relative;
}
.uploadleft{
  border-radius: 6px;
  width: 165px;
  height: 165px;
  float: left;
}
.uploadleft+div{
  float: left;
}
.uploadRight{
    background-color: #e2e2e2;
    float: right;
  /*position: absolute;*/
  /*right: 0;*/
}
.uploadleft>div{
  margin: 5px;
  height: 95%;
  background-color: #fff;
}
.a-upload {
    padding: 4px 10px;
    height: 160px;
    width: 112px;
    line-height: 40px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: #888;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.a-upload a{
  color:#ff9b3c!important;
  position: relative;
  top: 30px;
}

.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
    height: 100%;
}

/*.a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}*/
h5{
  font-size: 13.75px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 1px solid;
  margin:20px auto;
  /*line-height: 0.001;*/
}
.tj{
  text-align: right;
}
.tj a{
  font-family: "Adobe Heiti Std";
  color: #fff;
  text-align: center;
  border-radius: 20px;
  line-height: 39px;
  display: inline-block;
  width: 223px;
  height: 39px;
  background-color: rgb(245,97,1)
}
.tj button:hover{
  cursor: pointer;
}
.tj button{
  /*padding: 10px;*/
  border-radius: 30px;
  outline: none;
  background-color: rgb( 254, 108, 0 );
  width: 223px;
  height: 39px;
  color: #fff;
  font-size: 18px;
}
</style>
