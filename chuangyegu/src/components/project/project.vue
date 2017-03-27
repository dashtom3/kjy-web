<template>
  <div class="project">
    <v-header></v-header>
    <div class="projectTitle">
      <h2>项目对接 Project</h2>
    </div>
    <div class="filter">
      <dl>
        <dt>需求&nbsp;&nbsp;&nbsp;&nbsp;>>>&nbsp;&nbsp;&nbsp;&nbsp;</dt>
        <dd v-for="(demand, index) in demands"><a href="javascript:;" :class="{'active':demand.active,'unactive':!demand.active}" v-on:click="selectDemand(demand, index)">{{demand.data}}</a></dd>
      </dl>
      <dl>
        <dt>类型&nbsp;&nbsp;&nbsp;&nbsp;>>>&nbsp;&nbsp;&nbsp;&nbsp;</dt>
        <dd v-for="(type, index) in types"><a href="javascript:;" :class="{'active':type.active,'unactive':!type.active}" v-on:click="selectType(type, index)">{{type.data}}</a></dd>
      </dl>
      <dl>
        <dt>来源&nbsp;&nbsp;&nbsp;&nbsp;>>>&nbsp;&nbsp;&nbsp;&nbsp;</dt>
        <dd v-for="(source, index) in sources"><a href="javascript:;" :class="{'active':source.active,'unactive':!source.active}" v-on:click="selectSource(source, index)">{{source.data}}</a></dd>
      </dl>
    </div>
    <div class="projectCon">
      <ul>
        <li><span>项目名称</span><span style="line-height:33px;">更新时间</span></li>
        <li><span class="projectName">
          [<i>NO.1</i>]<b>这是一个项目对接这是一个项目对接</b>
          <table class="tab_cont">
              <tbody>
                <tr class="tr_hidden tr122">
                  <td class="color999">
                      需求：人才&nbsp;&nbsp;| 项目来源：个人  &nbsp;&nbsp;|&nbsp;&nbsp;项目类型：文化创意组和服务咨询</td>
                </tr>
                <tr style="height:10px"></tr>
                <tr class="tr_hidden tr122">
                  <td class="case_info">随着微信平台的人气暴涨，微信宣传已经成为了商家不惜花重金打造的一块宣传宝地。但是基础的微信功能并不能满足商家的需要，进阶的功能又需要一定的后台开发能力。本项目就将致力于帮助用户快速建立优质的、个性化的微信平台。商家在我们提供的投票、抽奖、预约、微网站...</td>
                  <td align="center" valign="top">&nbsp;</td>
                </tr>
              </tbody>
            </table>
        </span><span class="dateState">2016-12-12<br>
            <a href="javascript:void(0)" class="state">已截止</a>
        </span>
        </li>
        <li><span class="projectName">
          [<i>NO.1</i>]<b>这是一个项目对接这是一个项目对接</b>
          <table class="tab_cont">
              <tbody>
                <tr class="tr_hidden tr122">
                  <td class="color999">
                      需求：人才&nbsp;&nbsp;| 项目来源：个人  &nbsp;&nbsp;|&nbsp;&nbsp;项目类型：文化创意组和服务咨询</td>
                </tr>
                <tr style="height:10px"></tr>
                <tr class="tr_hidden tr122">
                  <td class="case_info">随着微信平台的人气暴涨，微信宣传已经成为了商家不惜花重金打造的一块宣传宝地。但是基础的微信功能并不能满足商家的需要，进阶的功能又需要一定的后台开发能力。本项目就将致力于帮助用户快速建立优质的、个性化的微信平台。商家在我们提供的投票、抽奖、预约、微网站...</td>
                  <td align="center" valign="top">&nbsp;</td>
                </tr>
              </tbody>
            </table>
        </span><span class="dateState">2016-12-12<br>
            <a href="javascript:void(0)" class="state">已截止</a>
        </span>
        </li>
      </ul>
      <div class="block" style="margin-bottom:30px;">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '../header'
import footer from '../footer'
import Vue from 'vue'
export default {
  name: 'project',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      demands: [
        { data: '全部', val: 0 },
        { data: '找人才', val: 1 },
        { data: '找导师', val: 2 },
        { data: '找资金', val: 3 }
      ],
      types: [
        { data: '全部', val: 0 },
        { data: '农林、畜牧、食品及相关产业', val: 1 },
        { data: '生物医药', val: 2 },
        { data: '化工技术和环境科学', val: 3 },
        { data: '信息技术和电子商务', val: 4 },
        { data: '材料', val: 5 },
        { data: '机械能源', val: 6 },
        { data: '文化创意组和服务咨询', val: 7 }
      ],
      sources: [
        { data: '全部', val: 0 },
        { data: '学生', val: 1 },
        { data: '导师', val: 2 },
        { data: '个人', val: 3 },
        { data: '机构', val: 4 }
      ],
      active: false
    }
  },
  created () {
    Vue.set(this.demands[0], 'active', true)
    Vue.set(this.types[0], 'active', true)
    Vue.set(this.sources[0], 'active', true)
  },
  methods: {
    selectDemand: function (item, index) {
      var self = this
      this.$nextTick(function () {
        self.demands.forEach(function (item) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
    },
    selectType: function (item, index) {
      var self = this
      this.$nextTick(function () {
        self.types.forEach(function (item) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
    },
    selectSource: function (item, index) {
      var self = this
      this.$nextTick(function () {
        self.sources.forEach(function (item) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
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
.project{
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fff;
}
.projectTitle{
  width: 900px;
  margin: 0 auto;
}
.projectTitle h2{
  font-size: 22.51px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  /*line-height: 0.001;*/
  border-bottom: 2px solid;
}
.tab_cont{
  display: none;
}
i{
  font-style: normal;
  font-size: 18.75px;
  font-family: "Adobe Heiti Std";
  color: #fe6c00;
}
b{
  font-size: 18.76px;
  font-family: "Adobe Heiti Std";
  color: rgba( 0, 0, 0, 0.8 );
}
.filter{
  width: 800px;
  margin: 20px auto;
}
.filter dl{
  clear: both;
  margin: 20px auto;
  overflow: hidden;
}
dt{
  font-size: 18.08px;
  font-family: "Adobe Heiti Std";
  color: rgb( 0, 0, 0 );
  text-align: center;
  font-weight: bold;
}
.filter dt,dd{
  float: left;
}
dd{
  margin-right: 10px;
  margin-top: 3px;
  border-radius: 16px;
  background-color: rgb( 238, 238, 238 );
  width: 82px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  overflow: hidden;
}
dd a{
  width: 100%;
  height: 100%;
  display: block;
}
.filter dl:nth-child(2) dd:nth-child(3){
  width: 245px;
}
.filter dl:nth-child(2) dd:nth-child(5),.filter dl:nth-child(2) dd:nth-child(6){
  width: 186px;
}
.filter dl:nth-child(2) dd:nth-child(8){
  width: 114px;
}
.filter dl:nth-child(2) dd:nth-child(9){
  width: 198px;
}
.filter dl:nth-child(2) dt{
  height: 100px;
}
.filter dl:nth-child(2) dd{
  margin-bottom: 20px;
}
.filter dl a{
  color: #fff;
  font-size: 13.56px;
  font-family: "Adobe Heiti Std";
}
.filter dl a.active{
  background-color: rgb( 254, 108, 0 );
}
.projectCon{
  width: 800px;
  margin: 0 auto;
}
.projectCon ul{
  margin-bottom: 50px;
}
.projectCon ul li{
  overflow: hidden;
  position: relative;
}
.projectCon ul li:hover{
  cursor: pointer;
}
.projectCon ul li:hover table{
  display: block;
}
.projectCon ul li:hover .state{
  display: inline-block;
}
.projectCon ul li:nth-child(1){
  border-radius: 16px;
  background-color: rgb( 254, 108, 0 );
  height: 33px;
  line-height: 33px;
  color: #fff;
  overflow: hidden;
  margin-bottom: 45px;
}
.projectCon ul li:nth-child(1) span{
  font-size: 20px!important;
  font-family: "Adobe Heiti Std";
  color: rgb( 255, 255, 255 )!important;
}
.projectCon ul li span:nth-child(1){
  float: left;
  padding-left: 25px;
  font-size: 20px;
  width: 80%;
  font-family: "Adobe Heiti Std";
  color: rgba( 0, 0, 0, 0.8 );
}
.projectName:before{
  content: '·';
  font-size: 35px;
  position: absolute;
  left: -10px;
  top: -15px;
}
.projectCon ul li span:nth-child(2){
  float: right;
  padding-right: 25px;
  font-size: 16px;
  line-height: 40px;
}
table,th,tr{
  width: 100%
}
th{
  border-radius: 16px;
  background-color: rgb( 254, 108, 0 );
  height: 33px;
  line-height: 33px;
  color: #fff;
}
th td:nth-child(1){
  padding-left: 25px;
}
th td:nth-child(2){
  padding-right: 25px;
}
table tr:nth-child(1) td{
  font-size: 12.5px;
  font-weight: 600;
  font-family: "FZLTXHK";
  color: rgb( 0, 0, 0 );
}
table tr:nth-child(2) td{
  font-size: 12px;
  line-height: 28px;
  font-family: "微软雅黑";
  color: #888;
}
.state{
  display: inline-block;
  background-color: rgb( 238, 238, 238 );
  width: 100px;
  text-align: center;
  line-height: 29px;
  height: 29px;
  display: none;
  color:#fff;
}
.case_info{
  font-size: 11.25px;
}
</style>
