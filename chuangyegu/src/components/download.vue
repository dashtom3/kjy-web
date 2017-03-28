<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contactTitle">
      <h2>资料下载 Downloads</h2>
    </div>
    <div class="downloads">
      <ul>
        <li v-for="datalist in datalists.data">
          <a :href="'http://chuangyegu.tongji.edu.cn/'+datalist.url" :download=datalist.name>
            <span class="downloadLeft">{{datalist.name}}</span>
            <span class="downloadright">{{datalist.createTime*1000 | time}}</span>
          </a>
        </li>
      </ul>
      <div class="block" style="margin:30px 0">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="datalists.currentPage"
          layout="prev, pager, next"
          :total="datalists.totalNumber">
        </el-pagination>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datalists: '',
      changePage: function (val) {
        var self = this
        axios.get(global.baseUrl + 'file/material/getMaterialList?pageNum=' + val)
        .then((res) => {
          console.log(res)
          self.datalists = res.data
        })
      }
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'file/material/getMaterialList')
    .then((res) => {
      console.log(res)
      self.datalists = res.data
    })
  },
  methods: {
    handleCurrentChange: function (val) {
      this.changePage(val)
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
.downloads{
  width: 720px;
  margin: 0 auto;
}
.downloads ul{
  width: 720px;
  margin: 50px auto;
}
.downloads ul li a span{
  font-size: 19.99px;
  font-family: "Adobe Heiti Std";
  color: rgba( 0, 0, 0, 0.8 );
}
.downloads ul li a span.downloadright{
  float: right;
  font-size: 15px;
  font-family: "HelveticaNeue";
  color: rgb( 254, 108, 0 );
}
.downloads ul li a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.downloads ul li a:hover{
  cursor: pointer;
}
.downloadLeft{
  display: inline-block;
  width: 600px;
  line-height: 30px;
}
.downloadLeft:before{
  content: '·';
  font-size: 30px;
  position: absolute;
  left: -25px;
}
.downloads ul li{
  margin: 20px 0;
}
</style>
