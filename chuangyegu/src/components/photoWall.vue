<template>
  <div class="photoWall">
    <v-header></v-header>
    <div class="photos">
      <div class="photoyear">
        <h2>2016</h2>
        <ul>
          <li v-for="photoInfo in lastYearPhotoList" v-on:click="showImgAlert(photoInfo.src)">
            <a href="javascript:;"><img :src="'http://123.56.220.72:8080/cyg/'+photoInfo.src" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">{{photoInfo.date}}</p>
              <p class="photoIntr">{{photoInfo.content}}</p>
            </a>
          </li>
        </ul>
        <div class="block" style="margin:30px 0;">
          <page v-on:page="lastyearChangePage" v-bind:args="lastYearPhotoArgs" v-if="lastYearPhotoArgs.totalPage === 1"></page>
        </div>
      </div>
      <div class="photoyear">
        <h2>2017</h2>
        <ul>
          <li v-for="photoInfo in thisYearPhotoList" v-on:click="showImgAlert(photoInfo.src)">
            <a href="javascript:;"><img :src="'http://123.56.220.72:8080/cyg/'+photoInfo.src" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">{{photoInfo.date}}</p>
              <p class="photoIntr">{{photoInfo.content}}</p>
            </a>
          </li>
        </ul>
        <div class="block" style="margin:30px 0;">
          <page v-on:page="thisyearChangePage" v-bind:args="thisYearPhotoArgs" v-if="thisYearPhotoArgs.totalPage === 1"></page>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
    <el-dialog title="" v-model="imgAlert" style="text-align:center;">
      <img :src="'http://123.56.220.72:8080/cyg/'+alertImgSrc" alt="" class="alertImg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="imgAlert = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import axios from 'axios'
import global from '../global/global'
import page from './page'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgAlert: false,
      alertImgSrc: null,
      currentPage: 1,
      lastYearPhotoList: [],
      thisYearPhotoList: [],
      // photoList: [],
      lastYearPhotoArgs: {
        year: 2016,
        numPerPage: 20,
        pageNum: 1,
        totalPage: -1
      },
      thisYearPhotoArgs: {
        year: 2017,
        numPerPage: 20,
        pageNum: 1,
        totalPage: -1
      }
    }
  },
  created: function () {
    this.getPhotoList(this.lastYearPhotoArgs)
    this.getPhotoList(this.thisYearPhotoArgs)
  },
  methods: {
    getPhotoList: function (args) {
      var self = this
      axios.get(global.baseUrl + 'photoWall/getPhotoList?' + global.getHttpData(args))
      .then((res) => {
        if (args.year === 2016) {
          self.lastYearPhotoList = res.data.data
          self.lastYearPhotoList.pageNum = res.data.currentPage
          self.lastYearPhotoList.totalPage = res.data.totalPage
        } else {
          self.thisYearPhotoList = res.data.data
          self.thisYearPhotoList.pageNum = res.data.currentPage
          self.thisYearPhotoList.totalPage = res.data.totalPage
        }
      })
    },
    showImgAlert (src) {
      this.imgAlert = true
      this.alertImgSrc = src
    },
    lastyearChangePage (value) {
      this.lastYearPhotoArgs.pageNum = value
      this.getPhotoList(this.lastYearPhotoArgs)
    },
    thisyearChangePage (value) {
      this.thisYearPhotoArgs.pageNum = value
      this.getPhotoList(this.thisYearPhotoArgs)
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
.photoWall{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.photos{
  width: 1000px;
  margin: 0 auto;
}
.alertImg{
  max-width: 400px;
  max-height: 400px;
}
h2{
  color: rgb( 254, 108, 0 );
  font-size: 18px;
  padding: 10px 0px 10px 0px;
  letter-spacing: 2px;
  font-weight: normal;
}
.photoyear>ul{
  border-top:1px solid rgb( 254, 108, 0 );
  padding-top: 20px;
  overflow: hidden;
}
.photoyear>ul li{
  float: left;
  overflow: hidden;
  position: relative;
  width: 250px;
  height: 170px;
}
.photoyear ul li a img{
  width: 250px;
}
.big{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  display: none;
}
.big p{
  color: #ffffff;
  padding: 10px 10px 0 20px;
}
.photoyear ul li:hover a.big{
  display: block;
}
.pages{
  text-align: right;
}
.showclick{
  position: fixed;
  top: 0;
  width: 1200px;
  height: 100%;
  background:rgba(0, 0, 0, 0.5);
  color: #fff;
}
.clickimg{
  width: 500px;
  height: 300px;
  margin: 400px auto;
  position: relative;
}
.iconexit:hover{
  cursor: pointer;
}
.iconexit{
  position: absolute;
  top: -25px;
  font-size: 60px;
}

</style>
