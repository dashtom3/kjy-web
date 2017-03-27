<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-radio-group v-model="verify" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">未审核</el-radio>
          <el-radio :label="3">已通过</el-radio>
          <el-radio :label="4">未通过</el-radio>
        </el-radio-group><br>
        <el-radio-group v-model="kinds" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">活动大厅</el-radio>
          <el-radio :label="3">会议室1</el-radio>
          <el-radio :label="4">会议室2</el-radio>
          <el-radio :label="5">会议室3</el-radio>
          <el-radio :label="6">会议室4</el-radio>
          <el-radio :label="7">移动木制舞台</el-radio>
          <el-radio :label="8">暴风影音会议室</el-radio>
          <el-radio :label="9">乐视TV会议室</el-radio>
          <el-radio :label="10">秋千会议区</el-radio>
          <el-radio :label="11">沙发会议区</el-radio>
          <el-radio :label="12">大师椅会议区</el-radio>
          <el-radio :label="13">户外舞台</el-radio>
        </el-radio-group><br>
        <el-radio-group v-model="sources" @change="select">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">8:00-10:00</el-radio>
          <el-radio :label="3">10:00-12:00</el-radio>
          <el-radio :label="4">12:00-13:30</el-radio>
          <el-radio :label="5">13:30-15:00</el-radio>
          <el-radio :label="6">15:00-17:00</el-radio>
          <el-radio :label="7">17:00-18:30</el-radio>
          <el-radio :label="8">18:30-20:00</el-radio>
          <el-radio :label="9">20:00-22:00</el-radio>
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
          prop="testName"
          label="活动名称">
        </el-table-column>
        <el-table-column
          prop="types"
          label="活动场地">
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="活动日期">
        </el-table-column>
        <el-table-column
          prop="create"
          label="活动时间">
        </el-table-column>
        <el-table-column
          prop="status"
          label="申请人姓名">
        </el-table-column>
        <el-table-column
          prop="status"
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
    </div>
  </div>
</template>

<script>
import tableData from './testProject.js'
export default {
  data () {
    return {
      input: '',
      verify: 1,
      demand: 1,
      kinds: 1,
      sources: 1,
      tableData
    }
  },
  methods: {
    handleClick: function () {
      alert('click')
    },
    select: function () {
      console.log(this.verify, this.demand, this.kinds, this.sources)
    }
  }
}
</script>

<style media="screen">

</style>
