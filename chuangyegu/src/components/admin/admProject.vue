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
          prop="id"
          label="项目ID">
        </el-table-column>
        <el-table-column
          prop="testName"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="types"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="projectID"
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
