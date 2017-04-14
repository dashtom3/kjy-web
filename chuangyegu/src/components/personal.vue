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
            <el-button type="primary" v-on:click="editUserPersonal = true">修改个人资料</el-button>
          </div>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 1">
          <el-table
            :data="buttProjectlist"
            border
            style="width: 100%">
            <el-table-column
              prop="projectName"
              label="对接项目名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="对接形式">
            </el-table-column>
            <el-table-column
              prop="address"
              label="申请对接日期">
            </el-table-column>
            <el-table-column
              prop="address"
              label="状态">
            </el-table-column>
          </el-table>
          <a href="/project" class="goUrl">对接项目</a>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 2">
          <el-table
            :data="applyProjectlist"
            border
            style="width: 100%">
            <el-table-column
              prop="projectName"
              label="项目名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="审核对接日期">
            </el-table-column>
            <el-table-column
              prop="status"
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
          <a href="/applyProject" class="goUrl">申请项目</a>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 3">
          <el-table
            :data="event"
            border
            style="width: 100%">
            <el-table-column
              prop="applyUnit"
              label="活动名称">
            </el-table-column>
            <el-table-column
              prop="useDate"
              label="活动参加日期">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态">
            </el-table-column>
          </el-table>
          <a href="/active" class="goUrl">报名活动</a>
        </div>
        <div class="activeDetailContent againtable" v-if="isActive === 4">
          <el-table
            :data="areaList"
            border
            style="width: 100%">
            <el-table-column
              prop="eventName"
              label="活动名称">
            </el-table-column>
            <el-table-column
              prop="applyCount"
              label="报名人数">
            </el-table-column>
            <el-table-column
              prop="useDate"
              label="活动日期">
            </el-table-column>
            <el-table-column
              prop="status"
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
          <a href="/area" class="goUrl">场地预约</a>
        </div>
      </div>
      <el-dialog title="修改个人信息" v-model="editUserPersonal">
        <el-form ref="form" :model="userinfo" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="userinfo.name"></el-input>
          </el-form-item>
          <el-form-item label="学院">
            <el-input v-model="userinfo.college"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="userinfo.major"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="userinfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="userinfo.email"></el-input>
          </el-form-item>
          <el-form-item label="你的意向">
            <el-checkbox-group v-model="intentionArray">
              <el-checkbox label="投资项目" name="intentionArray"></el-checkbox>
              <el-checkbox label="了解现状" name="intentionArray"></el-checkbox>
              <el-checkbox label="收集创意" name="intentionArray"></el-checkbox>
              <el-checkbox label="寻找对接项目" name="intentionArray"></el-checkbox>
              <el-checkbox label="发布课题" name="intentionArray"></el-checkbox>
              <el-checkbox label="入住创业谷" name="intentionArray"></el-checkbox>
              <el-checkbox label="其他合作" name="intentionArray"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">确 定</el-button>
          </el-form-item>
        </el-form>
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
  name: 'personal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editUserPersonal: false,
      kindlists: [{ val: '个人资料' }, { val: '我对接的项目' }, { val: '我申请的项目' }, { val: '活动报名' }, { val: '场地预约' }],
      isActive: 0,
      userinfo: '',
      intentionArray: global.userMsg.intentionArray,
      event: null,
      applyProjectlist: null,
      areaList: null,
      buttProjectlist: null,
      type: ['企业', '个人', '老师', '学生']
    }
  },
  created: function () {
    if (global.getToken() == null) {
      this.$router.push('/login')
      alert(global.content.alert)
    }
    this.getMsg('eventApply/getAppliedEventList?token=', this.event)
    this.getMsg('project/getUserProjectList?token=', this.applyProjectlist)
    this.getMsg('event/getEventList?token=', this.areaList)
    this.getMsg('project/getButtProjectList?token=', this.buttProjectlist)
  },
  mounted () {
    this.userinfo = global.getUser()
  },
  methods: {
    edit (row) {
      console.log(row)
    },
    delete (row) {
      console.log(row)
    },
    getMsg (url, obj) {
      var self = this
      axios.get(global.baseUrl + url + global.getToken())
      .then((res) => {
        for (let i in res.data.data) {
          res.data.data[i].status = self.filterStatus(res.data.data[i].status)
          if (res.data.data[i].demandType) {
            res.data.data[i].demandType = self.filterDemandType(res.data.data[i].demandType)
          }
        }
        obj = res.data.data
      })
    },
    filterStatus (value) {
      var status = ''
      switch (value) {
        case 11:
          status = '审核中'
          break
        case 2:
          status = '通过审核'
          break
      }
      return status
    },
    filterDemandType (value) {
      var type = ''
      switch (value) {
        case 1:
          type = '人才'
          break
        case 2:
          type = '导师'
          break
        case 3:
          type = '企业'
          break
      }
      return type
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
.goUrl{
  padding: 10px;
  background-color: rgb(254,108,0);
  color: #fff;
  border-radius: 6px;
  position: relative;
  top: 20px;
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
  text-align: center;
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
