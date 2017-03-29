<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-radio-group v-model="radio2" @change="radioKind(radio2)">
          <el-radio :label="1">企业</el-radio>
          <el-radio :label="2">个人</el-radio>
          <el-radio :label="3">老师(校内)</el-radio>
          <el-radio :label="4">学生(校内)</el-radio>
        </el-radio-group>
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
      <!-- 企业 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-show="company">
        <el-table-column
          prop="companyName"
          label="企业名称">
        </el-table-column>
        <el-table-column
          prop="loginName"
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="contactName"
          label="联系人姓名">
        </el-table-column>
        <el-table-column
          prop="registTime"
          label="注册时间">
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick(id)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>

      <!-- 个人 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-show="personal">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="loginName"
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="registTime"
          label="注册时间">
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick(id)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>

      <!-- 老师 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-show="teacher">
        <el-table-column
          prop="id"
          label="工号">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="registTime"
          label="注册时间">
        </el-table-column>
        <el-table-column
          :context="_self"
          inline-template
          label="操作">
          <span>
            <el-button @click="handleClick(id)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </span>
        </el-table-column>
      </el-table>

      <!-- 学生 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-show="student">
        <el-table-column
          prop="id"
          label="学号">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="registTime"
          label="注册时间">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              type="text"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="text"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
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
import tableData from './testProject.js'
import axios from 'axios'
import global from '../../global/global'
export default {
  data () {
    return {
      input: '',
      radio2: 1,
      company: true,
      personal: false,
      teacher: false,
      student: false,
      tableData,
      pages: '',
      changePage: function (val) {
        var self = this
        axios.get(global.baseUrl + 'user/getUserList?token=' + localStorage.token + '&identity=' + this.radio2 + '&pageNum=' + val)
        .then((res) => {
          console.log(res)
          for (let i in res.data.data) {
            res.data.data[i].registTime = self.timeFilter(res.data.data[i].registTime)
          }
          self.tableData = res.data.data
          self.pages = res.data
        })
      }
    }
  },
  created () {
    var self = this
    axios.get(global.baseUrl + 'user/getUserList?token=' + localStorage.token + '&identity=' + this.radio2)
    .then((res) => {
      console.log(res)
      for (let i in res.data.data) {
        res.data.data[i].registTime = self.timeFilter(res.data.data[i].registTime)
      }
      self.tableData = res.data.data
      self.pages = res.data
    })
  },
  methods: {
    handleCurrentChange (val) {
      this.changePage(val)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
    },
    radioKind: function (index) {
      console.log(index)
      this.radio2 = index
      this.changePage(1)
      if (index === 1) {
        this.company = true
        this.personal = false
        this.teacher = false
        this.student = false
      } else if (index === 2) {
        this.company = false
        this.personal = true
        this.teacher = false
        this.student = false
      } else if (index === 3) {
        this.company = false
        this.personal = false
        this.teacher = true
        this.student = false
      } else {
        this.company = false
        this.personal = false
        this.teacher = false
        this.student = true
      }
    }
  }
}
</script>

<style media="screen">
.admimBlock{
  float: right;
  margin-top: 20px;
}
</style>
