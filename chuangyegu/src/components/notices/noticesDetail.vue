<template>
  <div class="newsDetial">
    <v-header></v-header>
    <div class="newsDetialCon">
      <div class="newsDetialConLeft">
        <div class="newsheader">
          <p class="newstitle">{{noticeContent.title}}</p>
          <p class="newsauto"><span class="newsdata">{{noticeContent.date}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div class="newsintr">
          <p v-html="noticeContent.content"></p>
        </div>
      </div>
      <div class="newsDetialConRight">
        <h2>精粹要闻</h2>
        <ul>
          <li><a href="javascript:;">
            <div style="display:inline-block">
              <img src="../../images/Layer-12.png" alt="" class="goyw">
              <img src="../../images/news.png" alt="" class=ywbg><br>
            </div>
            <div class="ywtime">
              <span>2017-12-12</span><br>
              <span>这是新闻介绍</span>
            </div>
            </a>
          </li>
          <li><a href="javascript:;">
            <div style="display:inline-block">
              <img src="../../images/Layer-12.png" alt="" class="goyw">
              <img src="../../images/news.png" alt="" class=ywbg><br>
            </div>
            <div class="ywtime">
              <span>2017-12-12</span><br>
              <span>这是新闻介绍</span>
            </div>
            </a>
          </li>
          <li><a href="javascript:;">
            <div style="display:inline-block">
              <img src="../../images/Layer-12.png" alt="" class="goyw">
              <img src="../../images/news.png" alt="" class=ywbg><br>
            </div>
            <div class="ywtime">
              <span>2017-12-12</span><br>
              <p>这是新闻介绍这是新闻介绍这是新闻介绍</p>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '../header'
import footer from '../footer'
import axios from 'axios'
import global from '../../global/global'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      noticeid: this.$route.params.id,
      noticeContent: ''
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'notice/getById?noticeId=' + this.noticeid)
    .then((res) => {
      console.log(res)
      res.data.data.date = self.timeFilter(res.data.data.date * 1000)
      res.data.data.content = res.data.data.content.replace(/src="/gi, 'src="http://123.56.220.72:8080/cyg/')
      self.noticeContent = res.data.data
    })
  },
  methods: {
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
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
.newsDetial{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.newsDetialCon{
  width: 1000px;
  margin: 0 auto;
  overflow: hidden!important;
  min-height: 800px!important;
}
.newsDetialConLeft{
  width: 600px;
  float: left;
}
.newsDetialConRight{
  width: 300px;
  float: right;
}
.newsheader{
  margin-bottom: 50px;
}
.newsheader .newstitle{
  font-size: 20px;
  font-family: "Adobe Heiti Std";
  color: rgb( 0, 0, 0 );
}
.newsauto span{
  font-size: 12.5px;
  font-family: "FZLTXHK";
  color: rgb( 254, 108, 0 );
}
.newsintr p{
  font-size: 15.01px;
  font-family: "Adobe Heiti Std";
  color: rgb( 0, 0, 0 );
  line-height: 30px;
}
h2{
  font-family: "Adobe 黑体 Std";
  color: rgb( 254, 108, 0 );
  font-size: 15px;
}
.newsDetialConRight{
  width: 300px;
  float: right;
  position: relative;
  top: 100px;
}
.ywbg{
  width: 250px;
}
.newsDetialConRight ul li a{
  position: relative!important;
}
.goyw{
  width: 84px;
  height: 29px;
  position: absolute;
  top: -40px;
  left:50px;
  display: none;
}
.newsDetialConRight ul li:hover a img.goyw{
  display: block;
  /*transition: display 5s;*/
}
.newsDetialConRight ul li{
  margin: 20px 0;
}
.ywtime{
  display: none;
  position: relative;
  left: 10px;
  width: 95px;
  height: 85px;
  overflow: hidden;
  font-size: 9.73px;
  font-family: '[FZLTXHK]';
}
.newsDetialConRight ul li:hover .ywtime{
  display: inline-block;
}
.ywbg{
  width: 198px;
  height: 85px;
}
</style>
