<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-radio-group v-model="verify" @change="select">
          <el-radio :label="0">全部</el-radio>
          <el-radio :label="1">未审核</el-radio>
          <el-radio :label="2">已通过</el-radio>
          <el-radio :label="3">未通过</el-radio>
        </el-radio-group><br>
        <el-radio-group v-model="kinds" @change="select">
          <el-radio :label="0">全部</el-radio>
          <el-radio label="活动大厅">活动大厅</el-radio>
          <el-radio label="会议室1">会议室1</el-radio>
          <el-radio label="会议室2">会议室2</el-radio>
          <el-radio label="会议室3">会议室3</el-radio>
          <el-radio label="会议室4">会议室4</el-radio>
          <el-radio label="移动木制舞台">移动木制舞台</el-radio>
          <el-radio label="暴风影音会议室">暴风影音会议室</el-radio>
          <el-radio label="乐视TV会议室">乐视TV会议室</el-radio>
          <el-radio label="秋千会议区">秋千会议区</el-radio>
          <el-radio label="沙发会议区">沙发会议区</el-radio>
          <el-radio label="大师椅会议区">大师椅会议区</el-radio>
          <el-radio label="户外舞台">户外舞台</el-radio>
        </el-radio-group><br>
        <el-radio-group v-model="sources" @change="select">
          <el-radio :label="0">全部</el-radio>
          <el-radio :label="1">8:00-10:00</el-radio>
          <el-radio :label="2">10:00-12:00</el-radio>
          <el-radio :label="3">12:00-13:30</el-radio>
          <el-radio :label="4">13:30-15:00</el-radio>
          <el-radio :label="5">15:00-17:00</el-radio>
          <el-radio :label="6">17:00-18:30</el-radio>
          <el-radio :label="7">18:30-20:00</el-radio>
          <el-radio :label="8">20:00-22:00</el-radio>
        </el-radio-group>
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入用户ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col> -->
        <!-- <el-col :span="20">
          <el-button type="primary">新建用户测试</el-button>
        </el-col> -->
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="eventName"
          label="活动名称">
        </el-table-column>
        <el-table-column
          prop="rentalPlace"
          label="活动场地">
        </el-table-column>
        <el-table-column
          prop="useDate"
          label="活动日期">
        </el-table-column>
        <el-table-column
          prop="useTime"
          label="活动时间">
        </el-table-column>
        <el-table-column
          prop="contactName"
          label="申请人姓名">
        </el-table-column>
        <el-table-column
          prop="applyCount"
          label="报名人数">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick" type="text" size="small">通过</el-button>
            <el-button type="text" size="small">不通过</el-button>
          </span>
        </el-table-column>
      </el-table>
      <div class="admimBlock">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pages.currentPage"
          layout="prev, pager, next"
          :total="pages.totalNumber">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import global from '../../global/global'
export default {
  data () {
    return {
      input: '',
      verify: 0,
      demand: 0,
      kinds: 0,
      sources: 0,
      tableData: null,
      pages: '',
      changePage: function (val) {
        var self = this
        axios.get(global.baseUrl + 'event/getEventList?token=' + localStorage.token + '&pageNum=' + val)
        .then((res) => {
          console.log(res)
          for (let i in res.data.data) {
            res.data.data[i].status = self.selectStatus(res.data.data[i].status)
          }
          self.tableData = res.data.data
          self.pages = res.data
        })
      }
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'event/getEventList?token=' + localStorage.token)
    .then((res) => {
      console.log(res)
      for (let i in res.data.data) {
        res.data.data[i].status = self.selectStatus(res.data.data[i].status)
      }
      self.tableData = res.data.data
      self.pages = res.data
    })
  },
  methods: {
    handleCurrentChange (val) {
      this.changePage(val)
    },
    handleClick: function () {
      alert('click')
    },
    // 筛选
    select: function () {
      var url = 'token=' + localStorage.token
      if (this.verify !== 0) {
        url += '&status=' + this.verify
      }
      if (this.kinds !== 0) {
        url += '&rentalPlace=' + this.kinds
      }
      if (this.sources !== 0) {
        url += '&useTimeId=' + this.sources
      }
      var self = this
      axios.get(global.baseUrl + 'event/getEventList?' + url)
      .then((res) => {
        console.log(res)
        for (let i in res.data.data) {
          res.data.data[i].status = self.selectStatus(res.data.data[i].status)
        }
        self.tableData = res.data.data
        self.pages = res.data
      })
    },
    selectStatus (val) {
      var state
      switch (val) {
        case 1:
          state = '审核中'
          break
        case 2:
          state = '已通过'
          break
        case 3:
          state = '不通过'
          break
      }
      return state
    }
  }
}
</script>

<style media="screen">

</style>
