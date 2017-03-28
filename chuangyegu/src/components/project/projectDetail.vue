<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contactTitle">
      <h2>项目对接 Project</h2>
    </div>
    <div class="projectCon">
      <div class="projectConTitle">
        <p>这是项目详情标题</p>
        <p><span>人才对接数: 0</span><span>导师对接数: 0</span><span>企业对接数: 0</span><span>资金对接总数: 0</span></p>
      </div>
      <div class="projectUser projectMsg">
        <p class="projectMsgTitle">立项人信息</p>
        <p>
          <span>姓名: 李子林</span><span>学院: 同济大学艺术学院</span><span>专业: 其他</span><span>学号: 001</span><br>
          <span>联系电话: 12121212</span><span>Email: 123456</span>
        </p>
      </div>
      <div class="projectMsg">
        <p class="projectMsgTitle">项目情况</p>
        <p><span>项目类型: </span><span>类型一&nbsp;&nbsp;</span><span>类型二</span></p>
        <p><span>申请时间: </span><span>2016-12-12</span></p>
        <p><span>是否已成立公司: </span><span>否</span></p>
      </div>
      <div class="projectMsg">
        <p class="projectMsgTitle">项目简介</p>
        <p><span>个性宣传: </span><span>你好你好你好你好</span></p>
      </div>
      <div class="projectMsg projectDetialIntr">
        <p class="projectMsgTitle">项目介绍</p>
        <p><span class="w120">项目背景及前瞻性: </span><span class="w700">你好你好你好你好</span></p>
        <p><span class="w120">项目市场性: </span><span class="w700">你好你好你好你好</span></p>
        <p><span class="w120">项目优势: </span><span class="w700">你好你好你好你好</span></p>
        <p><span class="w120">项目人员需求详情: </span><span class="w700">你好你好你好你好</span></p>
        <p><span class="w120">项目汇报模式: </span><span class="w700">你好你好你好你好</span></p>
        <p><span class="w120">资金开发情况及用途: &nbsp;</span><span class="w700">你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</span></p>
      </div>
      <div class="projectMsg">
        <p class="projectMsgTitle">项目组成人员情况</p>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="collage"
            label="学院"
            width="180">
          </el-table-column>
          <el-table-column
            prop="major"
            label="专业">
          </el-table-column>
          <el-table-column
            prop="studentId"
            label="学号">
          </el-table-column>
          <el-table-column
            prop="kind"
            label="岗位类型">
          </el-table-column>
        </el-table>
      </div>
      <div class="projectMsg">
        <p class="projectMsgTitle">项目需求</p>
      </div>
      <div class="projectMsg">
        <p class="projectMsgTitle">项目推进时间表(要求以月为单位,作为项目的考核标准)</p>
        <p><span>项目总时间：六个月</span></p>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="dateTime"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务介绍">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '../header'
import footer from '../footer'
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [{
        dateTime: '2016',
        collage: '汽车学院',
        major: '软件',
        studentId: '21',
        name: '王小虎',
        kind: '科研',
        money: '100'
      }, {
        collage: '汽车学院',
        major: '软件',
        studentId: '21',
        name: '王小虎',
        kind: '科研'
      }, {
        collage: '汽车学院',
        major: '软件',
        studentId: '21',
        name: '王小虎',
        kind: '科研'
      }, {
        collage: '汽车学院',
        major: '软件',
        studentId: '21',
        name: '王小虎',
        kind: '科研'
      }]
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.contactTitle{
  width: 865px;
  margin: 0 auto;
}
.contactTitle h2{
  font-size: 22.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
}
.projectCon{
  width: 865px;
  margin: 30px auto;
  /*text-align: center;*/
}
.projectConTitle{
  text-align: center;
  font-size: 22px;
  color: rgb(254,108,0);
}
.projectConTitle span{
  font-size: 12.5px;
  font-family: "Microsoft YaHei";
  color: rgba( 0, 0, 0, .8);
  display: inline-block;
  margin: 20px 50px;
}
.projectConTitle span:before{
  content: '';
  position: relative;
  top: -2px;
  left: -10px;
  border-radius: 8px;
  display: inline-block;
  background-color: rgb( 254, 108, 0 );
  width: 8px;
  height: 8px;
}
.projectMsg p{
  margin: 15px 0;
  overflow: hidden;
}
.projectMsg p span{
  font-size: 12.5px;
  font-family: "Microsoft YaHei";
  color: rgba( 0, 0, 0, 0.8 );
}
.projectUser p span{
  display: inline-block;
  width: 25%;
  margin: 10px 0;
}
p.projectMsgTitle{
  font-size: 19px;
  font-family: "Microsoft YaHei";
  color: rgb( 0, 0, 0);
  margin: 20px 0;
}
.w120{
  width: 120px;
  display: inline-block;
  float: left;
  text-align: right;
}
.w700{
  display: inline-block;
  float: right;
  width: 735px;
}
.projectMsg{
  padding-left: 10px;
}
.projectMsgTitle{
  position: relative;
}
.projectMsgTitle:before{
  content: '';
  background-color: rgb( 254, 108, 0 );
  width: 35px;
  display: block;
  height: 14px;
  position: absolute;
  opacity: .8;
  /*top: 8px;*/
  left: -15px;
}
</style>
