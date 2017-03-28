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
        <h2>新闻</h2>
        <ul>
          <li v-for="newslist in newslists"><a href="javascript:;" v-on:click="goNewsDetail(newslist.id)">
            <p class="newstitle">{{newslist.title}}</p>
            <p class="newsintr">{{newslist.content}}</p>
            <p class="newstime">{{newslist.date*1000 | time}}</p>
          </a></li>
        </ul>
        <div class="block">
          <!-- <span class="demonstration">页数较少时的效果</span> -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="aboutPages.currentPage"
            layout="prev, pager, next"
            :page-size="4"
            :total="aboutPages.totalNumber">
          </el-pagination>
        </div>
      </div>
      <div class="newsright">
        <h2>精粹要闻</h2>
        <ul>
          <li><a href="javascript:;" v-on:click="goNewsDetail">
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
          <li><a href="javascript:;" v-on:click="goNewsDetail">
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
          <li><a href="javascript:;" v-on:click="goNewsDetail">
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
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      srcs: [img1, img1],
      currentPage: 1,
      aboutPages: '',
      pages: function (val) {
        var self = this
        axios.get(global.baseUrl + 'news/getNewsList?numPerPage=4&pageNum=' + val)
        .then((res) => {
          console.log(res)
          self.aboutPages = res.data
          if (res.data.data.length >= 4) {
            self.newslists = res.data.data.slice(0, 4)
          } else {
            self.newslists = res.data.data
          }
          for (let i in self.newslists) {
            self.newslists[i].content = self.newslists[i].content.replace(/<[^>]+>/g, '')
            self.newslists[i].content = self.newslists[i].content.replace(/&nbsp;/g, '')
          }
        })
      },
      newslists: ''
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'news/getNewsList?numPerPage=4')
    .then((res) => {
      console.log(res)
      self.aboutPages = res.data
      if (res.data.data.length >= 4) {
        self.newslists = res.data.data.slice(0, 4)
      } else {
        self.newslists = res.data.data
      }
      for (let i in self.newslists) {
        self.newslists[i].content = self.newslists[i].content.replace(/<[^>]+>/g, '')
        self.newslists[i].content = self.newslists[i].content.replace(/&nbsp;/g, '')
      }
    })
  },
  methods: {
    goNewsDetail: function (newsid) {
      document.body.scrollTop = 0 + 'px'
      this.$router.push({ name: 'newsDetail', params: {id: newsid} })
    },
    handleCurrentChange: function (val) {
      this.currentPage = val
      this.pages(val)
      // console.log(val)
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
h2{
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  font-size: 22.49px;
}
.newsleft{
  width: 600px;
  float: left;
  list-style: disc!important;
}
.newsleft ul{
  border-top:2px solid rgb( 254, 108, 0 )
}
.newsleft ul li{
  margin: 20px 0;
}
.newsleft ul li a p{
  line-height: 35px;
}
.newsleft ul li:hover a p.newstitle{
  color:rgb( 254, 108, 0 );
}
.newsright{
  width: 300px;
  float: right;
  position: relative;
  top: 100px;
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
  font-size: 19.99px;
  color: #000;
  font-weight: bold;
  font-family: "Adobe Heiti Std";
  color: rgba( 0, 0, 0, 0.8 );
}
.newsintr{
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  font-size: 12.5px;
  font-family: "FZLTXHK";
  font-weight: bold;
  color: rgba( 0, 0, 0, 0.651 );
}
.newstime{
  font-size: 15px;
  font-family: "HelveticaNeue";
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
  top: -40px;
  left:50px;
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
