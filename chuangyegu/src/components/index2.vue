<template>
  <div class="index">
    <v-header></v-header>
    <div class="posterCon">
      <div class="poster">
        <el-carousel height="679px" trigger="click">
          <el-carousel-item
          :key="i"
          v-for="i in 3">
            <img :src=images[i-1] alt="">
            <img :src=vs[i-1] alt="" class="vImg">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div class="newsCenter">
      <div class="newsCenterTitle">
        <img src="../images/newscenter.png" alt="">
      </div>
      <div class="goAll">
          <a v-bind:href="'/news'" target=_blank>
            <span>ALL</span>
            <img src="../images/gonews.png" alt="">
          </a>
      </div>
      <div class="newsContents">
        <ul>
          <li v-for="newslist in newslists">
            <ol>
              <li>
                <div class="newint" style="margin-right:50px;">
                  <span>{{newslist[0].date | time}}</span><br>
                  <span v-html="newslist[0].content.slice(0,100)"></span>
                </div>
                <div class="gonews">
                  <a v-bind:href="'/newsDetail/' + newslist[0].id" target=_blank>
                    <img src="../images/Layer-13.png" alt="">
                  </a>
                </div>
                <div class="img">
                  <img :src=newslist[0].pic alt="">
                </div>
              </li>
              <li>
                <div class="gonews">
                  <a v-bind:href="'/newsDetail/' + newslist[0].id" target=_blank style="position:relative"><img src="../images/Layer-12.png" alt="" style="position:relative;" class="r80"></a>
                </div>
                <div class="img">
                  <img :src=newslist[1].pic alt="">
                </div>
                <div class="newint" style="margin-left:50px;">
                  <span>{{newslist[1].date | time}}</span><br>
                  <span v-html="newslist[1].content.slice(0,100)"></span>
                </div>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <div class="newsCenter" style="overflow:hidden">
      <div class="service s2 s1">
        <a href="javascript:;">
          <img src="../images/Layer-12.png" alt="" class="gologo" style="top:240px;width:155px;">
        </a>
      </div>
      <div class="service s3">
        <a href="javascript:;" v-on:click="goApplyProject">
        </a>
      </div>
      <div class="service s4">
        <a href="javascript:;" v-on:click="goArea">
        </a>
      </div>
      <div class="service s6" style="float:right;position:relative;right:35px;">
        <a href="javascript:;" v-on:click="goServices">
        </a>
      </div>
      <div class="service s2 s5">
        <a href="javascript:;" v-on:click="goActive">
        </a>
      </div>
      <div class="service s2 s7" style="float:right;position:relative;right:35px;">
        <a href="javascript:;">
          <img src="../images/Layer-12.png" alt="" class="gologo" style="width:155px;top:250px;">
        </a>
      </div>
      <div class="service s19">
        <a href="javascript:;" v-on:click="goPhotoWall">
        </a>
      </div>
      <div class="service s20">
        <a href="javascript:;" v-on:click="goDownload">
        </a>
      </div>
      <div class="service s14" style="clear:both;position:absolute;top:527px;">
        <a href="javascript:;" v-on:click="goNotices">
        </a>
      </div>
    </div>
    <!-- 项目对接 -->
    <div class="newsCenter">
      <div class="newsCenterTitle">
        <img src="../images/project.png" alt="">
      </div>
      <div class="projectContents">
        <div class="">
          <a href="javascript:;" v-on:click="goProject">
            <span>PROJECT DOCKING</span>
            <img src="../images/docking.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 慕课 -->
    <div class="newsCenter">
      <div class="newsCenterTitle">
        <img src="../images/mooc.png" alt="">
      </div>
      <div class="goAll">
          <a v-bind:href="'/newsDetail'" target=_blank>
            <span>MORE</span>
            <img src="../images/gonews.png" alt="">
          </a>
      </div>
      <div class="video">
        <video src="https://misc.rrcimg.com/pc/two_anniversary.mp4" controls>
        </video>
      </div>
    </div>
    <!-- 合作联系 -->
    <div class="newsCenter">
      <div class="newsCenterTitle">
        <img src="../images/contact.png" alt="">
      </div>
      <div class="friends">
        <div class="company">
            <a v-bind:href="'/company'" target=_blank>
              <span></span>
              <p>COMPANY</p>
              <p>企业合作</p>
            </a>
        </div>
        <div class="about">
            <a v-bind:href="'/about'" target=_blank>
              <span></span>
              <p>ABOUTS US</p>
              <p>关于我们</p>
            </a>
        </div>
        <div class="phone">
            <a href="javascript:;" v-on:click="goContact">
              <span></span>
              <p>CONTACT US</p>
              <p>联系我们</p>
            </a>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import Vue from 'vue'
import img1 from '../images/poster.png'
import v1 from '../images/v1.png'
import v2 from '../images/v2.png'
import v3 from '../images/v3.png'
import Carousel from 'vue-m-carousel'
import global from '../global/global'
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images: [img1, img1, img1],
      vs: [v1, v2, v3],
      newslists: []
    }
  },
  created () {
    Vue.nextTick(function () {
      var btn = document.querySelectorAll('.carousel-indicators .carousel-dot')
      for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = ''
      }
    })
    var self = this
    axios.get(global.baseUrl + 'news/getNewsList')
    .then((res) => {
      console.log(res)
      var items = res.data.data
      for (let i in items) {
        if (items[i].pic === '') {
          items.splice(i, 1)
        }
      }
      for (let i in items) {
        items[i].pic = 'http://123.56.220.72:8080/cyg/' + items[i].pic
        items[i].date = items[i].date * 1000
        items[i].content = items[i].content.replace(/<[^>]+>/g, '')
        items[i].content = items[i].content.replace(/&nbsp;/g, '')
        // items[i].content = items[i].content.substr(0, 49)
      }
      var item1 = items.slice(0, 2)
      var item2 = items.slice(2, 4)
      var item3 = items.slice(4, 6)
      self.newslists.push(item1)
      self.newslists.push(item2)
      self.newslists.push(item3)
    })
  },
  methods: {
    goNews: function () {
      global.goPath(this, 'news')
    },
    goProject: function () {
      global.goPath(this, 'project')
    },
    goCompany: function () {
      global.goPath(this, 'company')
    },
    goAbout: function () {
      global.goPath(this, 'about')
    },
    goContact: function () {
      global.goPath(this, 'contact')
    },
    goApplyProject: function () {
      global.goPath(this, 'applyProject')
    },
    goArea: function () {
      global.goPath(this, 'area')
    },
    goServices: function () {
      global.goPath(this, 'services')
    },
    goActive: function () {
      global.goPath(this, 'active')
    },
    goPhotoWall: function () {
      global.goPath(this, 'photoWall')
    },
    goNotices: function () {
      global.goPath(this, 'notices')
    },
    goDownload: function () {
      global.goPath(this, 'download')
    },
    goVideos: function () {
      global.goPath(this, 'videos')
    },
    // 新闻详情
    goNewsDetial (newsid) {
      document.body.scrollTop = 0 + 'px'
      this.$router.push({ name: 'newsDetail', params: {id: newsid} })
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    Carousel
  }
}
</script>

<style media="screen">
.newsCenter{
  margin:20px auto;
}

.el-carousel__button{
  border-radius: 20px;
  width: 13px!important;
  height: 13px!important;
  background-color: #fff!important;
}
.is-active .el-carousel__button{
  width: 18px!important;
  height: 18px!important;
}
.projectContents{
  background: url('../images/projectbg.png') no-repeat;
  height: 580px;
}
.newsDetialConLeft .newsintr img{
  max-width: 600px;
}
.vImg{
  position:absolute;
  top:50px;
  right:350px;
}
.newsCenterTitle img{
  width: 156px;
}
.newsContents ul li{
  position: relative;
  margin: 10px
}
.r80{
  right: 110px!important;
}
.posterCon{
  width: 100%;
  background: #000;
}
.poster{
  width: 1200px;
  margin: 0 auto;
}
.newsContents ul{
  overflow: hidden;
  width: 1070px;
  margin: auto;
}
.newsContents ul li div.gonews{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: none;
}
.newsContents ul>li ol>li:hover .gonews{
  display: block;
}
.newsContents ul>li ol>li:hover{
  cursor: pointer;
}
.newsContents ul>li ol>li:hover .img img{
  filter: gray;
  -webkit-filter: grayscale(100%);
}
.newsContents ul li div.gonews a{
  width: 100%;
  height: 100%;
  display: block;
}
.newint{
  background-color: rgba( 241, 158, 194, .1 );
  /*opacity: 0.102;*/
  width: 159px;
  height: 129px;
  text-align: left;
  position: relative;
  /*top: -55px;*/
  overflow: hidden;
}
.newint,.img{
  display: inline-block;
}
.newint{
  opacity: 0;
}
.newsContents ul>li ol>li:hover .newint{
  opacity: 1;
  transition: opacity .5s;
}
.newint span:nth-child(1){
  font-family: "FZLTXHK";
  color: rgb( 254, 108, 0 );
  text-align: center;
  font-size: 15px;
  display: inline-block;
  margin-bottom: 10px;
}
.newint span:last-child{
  font-size: 11.25px;
  font-family: "HiraginoSansGB";
  color: rgb( 0, 0, 0 );
  text-align: left;
}
.service{
  width: 388px;
  height: 256px;
}
.service a{
  display: block;
  width: 100%;
  height: 100%;
}
.s2{
  height: 530px;
}
.s1{
  background: url('../images/newactive_02.jpg');
}
.s3{
  background: url('../images/active_03.png') no-repeat;
}
.s3:hover{
  background: url('../images/hover_03_03.png') no-repeat;
}
.s4{
  background: url('../images/active_04.png') no-repeat;
}
.s4:hover{
  background: url('../images/hover_03_06.jpg') no-repeat;
}
.s5{
  background: url('../images/active_09.png') no-repeat;
}
.s5:hover{
  background: url('../images/hover-1_03.png') no-repeat;
}
.s6{
  background: url('../images/active_06.png') no-repeat;
}
.s6:hover{
  background: url('../images/hover_03.png') no-repeat;
}
.s7{
  background: url('../images/newactive_05.png');
}
.s19{
  background: url('../images/active_19.png') no-repeat;
}
.s19:hover{
  background: url('../images/hover_02.png') no-repeat;
}
.s20{
  background: url('../images/active_20.png') no-repeat;
}
.s20:hover{
  background: url('../images/hover_03_11.jpg') no-repeat;
}
.s14{
  background: url('../images/active_14.png') no-repeat;
}
.s14:hover{
  background: url('../images/hover_06.png') no-repeat;
}
.newsContents ul li div.gonews a img{
  width: 125px;
  top: 45px;
  right: 80px;
  position: absolute;
  z-index: 999;
}
.index{
  /*width: 1200px;*/
  background-color: #fff;
  margin: -20px auto 0;
}
.newsCenter{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.goAll{
  position: absolute;
  top: 35px;
  right: 30px;
}
.goAll:hover a span{
  color: #ff9b3c;
  transition: color .5s;
}
.goAll a span{
  position: absolute;
  top: 8px;
  left:25px;
  color: #fff;
  font-size: 15px;
}
.newsContents ul li{
  float: left;
}
.projectContents{
  position: relative;
}
.newsCenter{
  margin:50px auto;
}
.projectContents div{
  position: absolute;
  left: 4%;
  right: 0;
  top: 40%;
}
.newsContents ul li .img{
  height: 125px;
  overflow: hidden;
}
.newsContents ul li .img img{
  width: 280px;
  /*height: 125px;*/
}
.projectContents div a span{
  position: absolute;
  color: #ff9b3c;
  top: -25px;
  left: 0;
  right: 0;
}
.friends div{
  display: inline-block;
  width: 33%;
  font-size: 18.75px;
  font-family: "FZLTXHK";
}
.friends div a p{
  color: #000;
}
.video video{
  width: 800px;
  margin: 0 auto;
}
.friends div a span{
  display: inline-block;
  width: 130px;
  margin-bottom: 45px;
  height: 125px;
}
.company span{
  background: url("../images/contant_03.png") no-repeat;
}
.company a {
  outline: 0;
}
.company:hover span{
  background: url('../images/friendHover_03.png') no-repeat;
}
.about span{
  background: url("../images/contant_05.png") no-repeat;
}
.about a {
  outline: 0;
}
.about:hover span{
  background: url('../images/friendHover_05.png') no-repeat;
}
.phone a {
  outline: 0;
}
.phone span{
  background: url("../images/contant_07.png") no-repeat;
}
.phone:hover span{
  background: url('../images/friendHover_07.png') no-repeat;
}
.service{
  float: left;
  width: 388px;
  position: relative;
}
.newsCenterTitle{
  margin-bottom: 50px;
}
.gologo{
  position: absolute;
  left: 120px;
  top:50px;
  opacity: 0;
}
.s1:hover .gologo{
  opacity: 1;
  transition: opacity .5s
}
.s7:hover .gologo{
  opacity: 1;
  transition: opacity .5s;
}
.service a img{
  width: 388px;
}
</style>
