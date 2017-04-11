<template>
  <div class="news">
    <v-header></v-header>
    <div class="newsPoster">
      <div class="poster">
        <el-carousel trigger="click" height="369px">
          <el-carousel-item
          :key="imgSrc"
          v-for="imgSrc in srcs">
            <img :src=imgSrc alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="newscon">
      <div class="newsleft">
        <h3>新闻</h3>
        <ul>
          <li v-for="newslist in newslists">
            <a href="javascript:;" v-bind:href="'/newsDetail/' + newslist.id" target=_blank>
            <p class="newstitle">{{newslist.title}}</p>
            <p class="newsintr">{{newslist.content}}</p>
            <p class="newstime">{{newslist.date}}</p>
            </a>
          </li>
        </ul>
        <div class="block">
            <page v-on:page="changePage" v-bind:args="newsArgs"></page>
        </div>
      </div>
      <div class="newsright">
        <h3>精粹要闻</h3>
        <ul>
          <li v-for="item in 3">
            <a :href="'/newsDetail/' + newslists[item-1].id" target="_blank">
              <div style="display:inline-block">
                <img src="../../images/Layer-12.png" alt="" class="goyw">
                <img :src="'http://123.56.220.72:8080/cyg/'+newslists[item-1].pic" alt="" class=ywbg><br>
              </div>
              <div class="ywtime">
                <span>{{newslists[item-1].date}}</span><br>
                <span>{{newslists[item-1].content}}</span>
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
import img1 from '../../images/poster.png'
import axios from 'axios'
import global from '../../global/global'
import page from '../page'
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      srcs: [img1, img1],
      newsArgs: {
        ifImage: null,
        numPerPage: 6,
        pageNum: 1,
        totalPage: -1
      },
      newslists: []
    }
  },
  created () {
    this.getNewsList(this.newsArgs)
  },
  methods: {
    changePage: function (value) {
      this.newsArgs.pageNum = value
      this.getNewsList(this.newsArgs)
    },
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
    },
    getNewsList: function (args) {
      var self = this
      axios.get(global.baseUrl + 'news/getNewsList?' + global.getHttpData(args))
      .then((res) => {
        // console.log(res)
        self.newslists = res.data.data
        self.newsArgs.pageNum = res.data.currentPage
        self.newsArgs.totalPage = res.data.totalPage
        for (let i in self.newslists) {
          self.newslists[i].date = self.timeFilter(self.newslists[i].date * 1000)
          self.newslists[i].content = self.newslists[i].content.replace(/<[^>]+>/g, '')
          self.newslists[i].content = self.newslists[i].content.replace(/&nbsp;/g, '')
        }
      })
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    page
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news{
  /*width: 1200px;*/
  margin: 0 auto;
  background-color: #fff;
}
.newsPoster{
  background-color: #000;
}
.block{
  margin: 30px 0;
}
.newscon{
  width: 1000px;
  margin: 0 auto;
}
h3{
  color: rgb( 254, 108, 0 );
  font-size: 18px;
  font-weight: normal;
}
.newsleft{
  width: 600px;
  display: inline-block;
  list-style: disc!important;
}
.newsleft h3 {
  padding: 10px 0px 10px 0px;
  letter-spacing: 3px;
  font-weight: normal;
}

.newsleft ul{
  border-top:2px solid rgb( 254, 108, 0 )
}
.newsleft ul li{
  margin: 20px 0 0 35px;
}
.newsleft ul li a p{
  line-height: 35px;
}
.newsleft ul li:hover a p.newstitle{
  color:rgb( 254, 108, 0 );
}
.newsright ul li:hover a div .ywbg{
  filter:gray;
  -webkit-filter:grayscale(100%);
}
.newsright{
  width: 300px;
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
  margin-top: 100px;
}
.newspages{
  clear: both;
  text-align: center;
  margin:0 auto;
  margin-bottom: 50px;
}
.newspages ul li{
  float: left;
}
.newstitle{
  font-size: 16px;
  color: #000;
  font-weight: bold;
  color: rgba( 0, 0, 0, 0.8 );
  position: relative;
}
.newstitle:before{
  content: '';
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background-color: #000;
  position: absolute;
  left: -35px;
  top: 10px;
}
.newsintr{
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  font-size: 14px;
  color: rgba( 0, 0, 0, 0.651 );
}
.newstime{
  font-size: 12px;
  color: rgb( 254, 108, 0 );
}
.ywbg{
  width: 198px;
  height: 85px;
}
.newsright ul li a{
  position: relative;
}
.goyw{
  width: 84px;
  height: 29px;
  position: absolute;
  top: -5px;
  left:58px;
  display: none;
}
.newsright ul li:hover a img.goyw{
  display: block;
  transition: display 5s;
}
.newsright ul li{
  margin: 20px 0;
}
.ywtime{
  display: none;
  position: relative;
  left: 10px;
  width: 95px;
  height: 85px;
  vertical-align: top;
  overflow: hidden;
}
.ywtime span{
  font-size: 9.73px;
  color:rgb( 254, 108, 0 );
}
.newsright ul li:hover .ywtime{
  display: inline-block;
}
</style>
