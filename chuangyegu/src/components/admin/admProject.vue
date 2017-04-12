<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <span>审核：</span>
        <el-radio-group v-model="verify" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">未处理</el-radio>
          <el-radio :label="3">已处理</el-radio>
          <el-radio :label="4">未通过</el-radio>
        </el-radio-group><br>
        <span>需求：</span>
        <el-radio-group v-model="demand" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">找人才</el-radio>
          <el-radio :label="3">找导师</el-radio>
          <el-radio :label="4">找资金</el-radio>
        </el-radio-group><br>
        <span>类型：</span>
        <el-radio-group v-model="kinds" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">农林、畜牧、食品及相关产业</el-radio>
          <el-radio :label="3">生物医药</el-radio>
          <el-radio :label="4">化工技术和环境科学</el-radio>
          <el-radio :label="5">信息技术和电子商务</el-radio>
          <el-radio :label="6">材料</el-radio>
          <el-radio :label="7">机械能源</el-radio>
          <el-radio :label="8">文化创意组和服务咨询</el-radio>
        </el-radio-group><br>
        <span>来源：</span>
        <el-radio-group v-model="sources" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">学生</el-radio>
          <el-radio :label="3">导师</el-radio>
          <el-radio :label="4">个人</el-radio>
          <el-radio :label="5">机构</el-radio>
        </el-radio-group>
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="projectLists"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="项目ID">
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="applyTime"
          label="申请时间">
        </el-table-column>
        <el-table-column
          prop="create"
          label="对接人数">
        </el-table-column>
        <el-table-column
          prop="status"
          label="项目状态">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              type="danger"
              @click="onDelClick(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="adminBlock">
        <el-pagination
          @current-change="changePage"
          :current-page="projectMsg.pageNum"
          layout="prev, pager, next"
          :page-count="projectMsg.totalPage">
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
      verify: 1,
      demand: 1,
      kinds: 1,
      sources: 1,
      projectLists: null,
      projectMsg: {
        status: null,
        demand: null,
        projectType: null,
        source: null,
        pageNum: 1,
        totalPage: null
      }
    }
  },
  created () {
    this.getProjectLists(this.projectMsg)
  },
  methods: {
    onDelClick: function (id) {
      console.log(id)
    },
    select: function () {
      console.log(this.verify, this.demand, this.kinds, this.sources)
    },
    getProjectLists (args) {
      var self = this
      axios.get(global.baseUrl + 'project/getProjectList?' + global.getHttpData(args))
      .then((res) => {
        for (let i in res.data.data) {
          res.data.data[i].applyTime = self.timeFilter(res.data.data[i].applyTime * 1000)
        }
        self.projectLists = res.data.data
        self.projectMsg.pageNum = res.data.currentPage
        self.projectMsg.totalPage = res.data.totalPage
      })
    },
    changePage (val) {
      this.projectMsg.pageNum = val
      this.getProjectLists(this.projectMsg)
    },
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
    }
  }
}
</script>

<style media="screen">
.adminBlock{
  float: right;
  margin-top: 20px;
}
</style>
