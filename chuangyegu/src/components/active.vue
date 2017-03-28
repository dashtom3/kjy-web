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
            <div class="activePage">
              <span class="lt">&lt;</span>
              <span>星期一<p>{{startDate}}</p></span>
              <span class="gt">&gt;</span>
              <p class="activeIntr">暂无活动安排</p>
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
export default {
  name: 'active',
  data () {
    return {
      activeAlert: false,
      currentPage: 1,
      actives: '',
      weeks: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
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
      startDate: ''
    }
  },
  created () {
    var self = this
    var start = new Date()
    this.startDate = start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate()
    // var end = new Date(start.setDate(start.getDate() + 17))
    // var endDate = end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate()
    axios.get(global.baseUrl + 'event/getEventList?startDate=2016-03-12&endDate=2016-03-28')
    .then((res) => {
      console.log(res)
      self.actives = res.data.data
      // for (let i in self.actives) {
      //
      // }
    })
  },
  methods: {
    handleCurrentChange: function (val) {
      console.log(val)
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
