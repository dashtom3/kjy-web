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
          prop="id"
          label="企业名称">
        </el-table-column>
        <el-table-column
          prop="testName"
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="types"
          label="联系人姓名">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="注册时间">
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
      <!-- 个人 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-show="personal">
        <el-table-column
          prop="id"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="testName"
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="types"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="注册时间">
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
          prop="testName"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="types"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="注册时间">
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
          prop="testName"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="types"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          prop="testUser"
          label="注册时间">
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
    </div>
  </div>
</template>

<script>
import tableData from './testProject.js'
export default {
  data () {
    return {
      input: '',
      radio2: 1,
      company: true,
      personal: false,
      teacher: false,
      student: false,
      tableData
    }
  },
  methods: {
    handleClick: function () {
      alert('click')
    },
    radioKind: function (index) {
      console.log(index)
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

</style>
