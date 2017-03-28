<template>
  <div class="active">
    <v-header></v-header>
    <div class="activeCon">
      <div class="activeTitle">
        <h2>活动预约</h2>
      </div>
      <div class="activeDate">
        <ul>
          <li v-for="n in 16">
          <!-- <li v-for="n in 16" v-on:click="getActiveDetial(active.id)"> -->
            <div class="activePage" :class="{isactive: isExist(startDate+(n-1)*86400000)}">
              <span class="lt">&lt;</span>
              <span>{{startDate+(n-1)*86400000 | week}}<p>{{startDate+(n-1)*86400000 | time}}</p></span>
              <span class="gt">&gt;</span>
              <p class="activeIntr">{{state[1]}}</p>
            </div>
          </li>
        </ul>
        <div class="block" style="margin:30px 0;">
          <!-- <span class="demonstration">页数较少时的效果</span> -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <el-dialog title="活动详情" v-model="activeAlert">
        <div class="activePage alertDiv">
          <span class="lt">&lt;</span>
          <span>周一<p>2016-12-12</p></span>
          <span class="gt">&gt;</span>
          <!-- <a href="javascript:;" class="qx">×</a> -->
        </div>
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import global from '../global/global'
import axios from 'axios'
import Vue from 'vue'
Vue.filter('week', function (value) {
  var num = new Date(parseInt(value)).getDay()
  var date
  switch (num) {
    case 0:
      date = '星期日'
      break
    case 1:
      date = '星期一'
      break
    case 2:
      date = '星期二'
      break
    case 3:
      date = '星期三'
      break
    case 4:
      date = '星期四'
      break
    case 5:
      date = '星期五'
      break
    case 6:
      date = '星期六'
      break
  }
  return date
})
export default {
  name: 'active',
  data () {
    return {
      activeAlert: false,
      currentPage: 1,
      actives: '',
      state: ['暂无活动安排', '此处有活动请戳~'],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      startDate: '',
      xingqi: ''
    }
  },
  created () {
    var self = this
    // var start = Date.parse(new Date())
    var start = Date.parse(new Date('2017-03-16'))
    this.startDate = start
    // axios.get(global.baseUrl + 'event/getEventList?startDate=' + this.format(start) + '&endDate=' + this.format(new Date(start).setDate(new Date(start).getDate() + 17)))
    // .then((res) => {
    //   console.log(res)
    //   self.actives = res.data.data
    // })
    axios.get(global.baseUrl + 'event/getEventList?startDate=2017-03-16&endDate=2017-03-31')
    .then((res) => {
      console.log(res)
      self.actives = res.data.data
    })
  },
  methods: {
    handleCurrentChange: function (val) {
      console.log(val)
    },
    format (val) {
      var month = new Date(val).getMonth() + 1
      var date = new Date(val).getDate()
      if (month < 10) {
        month = '0' + month
      }
      if (date < 10) {
        date = '0' + date
      }
      return new Date(val).getFullYear() + '-' + month + '-' + date
    },
    isExist (val) {
      val = this.format(val)
      for (let i in this.actives) {
        console.log(this.actives[i].useDate.match(val))
        if (this.actives[i].useDate.match(val)) {
          return true
        } else {
          return false
        }
      }
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
.activeCon{
  width: 866px;
  margin: 50px auto;
}
.alertDiv span,.alertDiv p{
  color: rgb(254,108,0)!important;
}
.activeTitle h2{
  font-size: 22.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
}
.activePage{
  text-align: center;
}
.activeDate{
  margin: 30px 10px;
}
.activeDate ul{
  overflow: hidden;
}
.activeDate ul li{
  background-color: rgb( 238, 238, 238 );
  width: 206px;
  height: 155px;
  float: left;
  margin: 2px;
  border-radius: 6px;
  overflow:hidden;
  /*background: url('../images/noactive.png')*/
}
.activeDate ul li div{
  position: relative;
  height: 100%;
}
.activeDate ul li:hover{
  cursor: pointer;
}
.activeDate ul li div span.lt,.activeDate ul li div span.gt{
  position: absolute;
}
.activeDate ul li div span.lt{
  left:30px;
}
.activeDate ul li div span.gt{
  right: 30px;
}
.activePage span{
  display: inline-block;
}
.activePage span,.activePage p{
  font-size: 12.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 255, 255, 255 );
}
.activePage span.lt,.activePage span.gt{
  font-size: 22.5px;
}
.activePage p.activeIntr{
  font-size: 17.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 191, 191, 191 );
}
.isactive{
  background-color: #fe6c00;
}
.isactive p{
  color: #fff!important;
}
.alertActiveDetial{
  border-radius: 9px;
  background-color: rgba( 255, 255, 255, .8);
  width: 348px;
  height: 441px;
  position: fixed;
  left: 40%;
  top:35%;
}
.alertActiveDetial span,.alertActiveDetial p{
  color: #fe6c00;
}
.alertActiveDetial ul{
  text-align: left;
  margin-left: 30px;
}
.alertActiveDetial span.lt,.alertActiveDetial span.gt{
  position: absolute;
}
.alertActiveDetial span.lt{
  left: 90px;
}
.alertActiveDetial span.gt{
  right: 90px;
}
.qx{
  font-size: 30px;
  position: absolute;
  right: 10px;
  color: #fe6c00;
}
</style>
