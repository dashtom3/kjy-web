<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入用户ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col>
        <el-col :span="20">
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
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="readPoint"
          label="阅读">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="管理者">
        </el-table-column>
        <el-table-column
          prop="date"
          label="更新时间">
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
      tableData: null,
      pages: '',
      changePage: function (val) {
        var self = this
        axios.get(global.baseUrl + 'notice/getNoticeList?pageNum=' + val)
        .then((res) => {
          console.log(res)
          for (let i in res.data.data) {
            res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
            res.data.data[i].updateDate = self.timeFilter(res.data.data[i].updateDate * 1000)
          }
          self.tableData = res.data.data
          self.pages = res.data
        })
      }
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'notice/getNoticeList')
    .then((res) => {
      console.log(res)
      for (let i in res.data.data) {
        res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
        res.data.data[i].updateDate = self.timeFilter(res.data.data[i].updateDate * 1000)
      }
      self.tableData = res.data.data
      self.pages = res.data
    })
  },
  methods: {
    handleClick: function () {
      alert('click')
    },
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
    },
    handleCurrentChange (val) {
      this.changePage(val)
    }
  }
}
</script>

<style media="screen">

</style>
