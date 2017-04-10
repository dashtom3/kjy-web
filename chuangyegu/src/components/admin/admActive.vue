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
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        border>
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
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="adopt(scope.row.id)">通过</el-button>
            <el-button
              size="small"
              type="danger"
              @click="nopass(scope.row.id)">不通过</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="admimBlock">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="activeArgs.pageNum"
          layout="prev, pager, next"
          :page-count="activeArgs.totalPage">
        </el-pagination>
      </div>

      <!-- 提示框 -->
      <el-dialog :title="eventAlertTitle" v-model="eventAlert" size="tiny">
        <span slot="footer" class="dialog-footer" style="text-align:center;">
          <el-button @click="eventAlert = false">取 消</el-button>
          <el-button type="primary" @click="passEvent" v-if="passShow">确 定</el-button>
          <el-button type="primary" @click="noPassEvent" v-if="noPassShow">确 定</el-button>
        </span>
      </el-dialog>
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
      selectUrl: '',
      pages: '',
      eventAlert: false,
      passShow: false,
      noPassShow: false,
      delShow: false,
      eventAlertTitle: '',
      activeMsg: {
        eventId: null,
        status: null
      },
      activeArgs: {
        numPerPage: 10,
        pageNum: 1,
        totalPage: null,
        status: null,
        useTimeId: null,
        rentalPlace: null
      }
    }
  },
  created () {
    this.getActivelist(this.activeArgs)
  },
  methods: {
    getActivelist (args) {
      var self = this
      axios.get(global.baseUrl + 'event/getEventList?token=' + global.getToken() + '&' + global.getHttpData(args))
      .then((res) => {
        for (let i in res.data.data) {
          res.data.data[i].status = self.selectStatus(res.data.data[i].status)
        }
        self.tableData = res.data.data
        self.activeArgs.pageNum = res.data.currentPage
        self.activeArgs.totalPage = res.data.totalPage
      })
      return false
    },
    handleCurrentChange (val) {
      this.activeArgs.pageNum = val
      this.getActivelist(this.activeArgs)
    },
    handleClick: function () {
      alert('click')
    },
    // 设置活动状态
    eventOption (msg) {
      var self = this
      axios.post(global.baseUrl + 'event/verify', global.postHttpDataWithToken(this.activeMsg))
      .then((res) => {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          self.eventAlert = false
          global.success(self, msg, '')
          self.getActivelist(this.activeArgs)
        }
      })
    },

    // 通过活动
    adopt (eventId) {
      this.eventAlert = true
      this.passShow = true
      this.noPassShow = false
      this.delShow = false
      this.eventAlertTitle = '确认通过吗？'
      this.activeMsg.eventId = eventId
      this.activeMsg.status = 2
    },
    passEvent () {
      this.eventOption('通过成功')
    },

    // 不通过活动
    nopass (eventId) {
      this.eventAlert = true
      this.passShow = false
      this.noPassShow = true
      this.delShow = false
      this.eventAlertTitle = '确认不通过吗？'
      this.activeMsg.eventId = eventId
      this.activeMsg.status = 3
    },
    noPassEvent () {
      this.eventOption('设置成功')
    },

    // 筛选
    select: function () {
      this.activeArgs.pageNum = 1
      this.activeArgs.status = null
      this.activeArgs.rentalPlace = null
      this.activeArgs.useTimeId = null
      if (this.verify !== 0) {
        this.activeArgs.status = this.verify
      }
      if (this.kinds !== 0) {
        this.activeArgs.rentalPlace = this.kinds
      }
      if (this.sources !== 0) {
        this.activeArgs.useTimeId = this.sources
      }
      this.getActivelist(this.activeArgs)
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
