<template>
  <div class="personal">
    <v-header></v-header>
    <div class="personalCon">
      <h2>个人中心 User Center</h2>
      <div class="personalMsg">
        <div class="kindlists">
          <a href="javascript:;" v-for="(kindlist, index) in kindlists" :class="{active: isActive === index}" v-on:click="isActive = index">{{kindlist.val}}</a>
        </div>
      </div>
      <div class="personalCon">
        <div class="activeDetailContent" v-if="isActive === 0">
          <div class="w210">
            <label for="">用户性质：</label><span>{{type[userinfo.identity-1]}}</span>
          </div>
          <div class="w210">
            <label for="">学号：</label><span>{{userinfo.idNumber}}</span>
          </div>
          <div class="w210">
            <label for="">姓名：</label><span>{{userinfo.name}}</span>
          </div>
          <div class="w210">
            <label for="">学院：</label><span>{{userinfo.college}}</span>
          </div>
          <div class="w210">
            <label for="">专业：</label><span>{{userinfo.major}}</span>
          </div>
          <div class="w210">
            <label for="">联系电话：</label><span>{{userinfo.phone}}</span>
          </div>
          <div class="w210">
            <label for="">电子邮箱：</label><span>{{userinfo.email}}</span>
          </div>
          <div class="w210">
            <label for="">你的意向：</label><span>{{userinfo.intention}}</span>
          </div>
          <div class="w210">
            <label for="">注册时间：</label><span>{{userinfo.registTime | time}}</span>
          </div>
          <div class="w160">
            <el-button type="primary">修改个人资料</el-button>
          </div>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 1">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 2">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="项目名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="审核对接日期">
            </el-table-column>
            <el-table-column
              prop="address"
              label="状态">
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="edit(scope.row)">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="delete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 3">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 4">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import global from '../global/global'
export default {
  name: 'personal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      kindlists: [{ val: '个人资料' }, { val: '我对接的项目' }, { val: '我申请的项目' }, { val: '活动报名' }, { val: '场地预约' }],
      isActive: 0,
      userinfo: global.getUser(),
      type: ['企业', '个人', '老师', '学生'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created: function () {
    if (global.getToken() == null) {
      this.$router.push('/login')
      alert(global.content.alert)
    }
  },
  methods: {
    edit (row) {
      console.log(row)
    },
    delete (row) {
      console.log(row)
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
.activeDetailContent div label,.activeDetailContent div span{
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: rgba( 0, 0, 0, 0.8 );
  text-transform: uppercase;
}
.w160{
  text-align: center;
  margin: 20px auto;
  clear: both;
}
.w160 button{
  width: 160px;
  border-radius: 10px;
  background-color: rgb( 254, 108, 0 );
  border:none;
  height: 40px;
}
.activeDetailContent div span{
  font-weight: normal;
}
.w210{
  width: 250px;
  /*margin-left: 70px;*/
  margin: 20px 0 20px 70px;
  float: left;
}
.cf{
  clear: both;
  margin-left: 70px;
}
.activeDetailContentTitle{
  font-family: "Microsoft YaHei";
  color: rgb( 254, 108, 0 );
  /*margin:0;*/
  text-align: center;
}
.personal{
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
}
.personalCon{
  width: 1000px;
  margin: 0 auto;
}
.personalCon>h2{
  font-size: 25px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
  margin-bottom: 30px;
}
h3{
  margin: 20px 0 20px;
}
.activeDetailContent{
  width: 709px;
  min-height: 407px;
  margin: 60px auto;
  border-width: 1px;
  border-color: rgb( 0, 0, 0 );
  border-style: solid;
  border-radius: 11px;
  box-shadow: 2.5px 4.33px 10px 0px rgb( 202, 202, 202 );
}
.againtable{
  border: none;
}
.personal{
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
}
.personalCon{
  width: 1000px;
  margin: 0 auto;
}
.personalCon>h2{
  font-size: 25px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
  margin-bottom: 30px;
  padding-bottom: 20px;
}
.kindlists{
  width: 800px;
  margin: 50px auto;
  text-align: center;
}
.kindlists a{
  display: inline-block;
  padding: 10px;
  color: #fff;
  background-color: rgb(0,0,0);
  position: relative;
  margin-right: 60px;
}
.kindlists a.active{
  background-color: rgb(254,108,0);
  color: #fff;
}
.kindlists a::after{
  content: '';
  display: inline-block;
  width: 60px;
  height: 1px;
  background-color: rgb(254,108,0);
  position: absolute;
  top: 20px;
  right: -60px;
}
.kindlists a:last-child{
  margin-right: 0px;
}
.kindlists a:last-child::after{
  width: 0px;
}
h3{
  margin: 20px 0 20px;
}
</style>
