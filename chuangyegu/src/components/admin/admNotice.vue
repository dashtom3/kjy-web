<template>
  <div class="testUser">
    <div class="function">
      <el-row>
        <el-col>
          <el-button type="primary" v-on:click="addNoticesAlert">发布公告</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        border
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
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="onEditClick(scope.row.id)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="onDelClick(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="admimBlock">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="noticeArgs.pageNum"
          layout="prev, pager, next"
          :page-count="noticeArgs.totalPage">
        </el-pagination>
      </div>

      <!-- 发布公告 -->
      <div class="alertBg" v-show="newsMsgShow">
      <div :title="alertTitle" size="small" class="alertBgContent">
        <el-row type="flex" class="row-bg" justify="space-between">
        <el-form :model="addNewsMsg">
          <el-col :span="5"><div class="grid-content bg-purple">
            <el-upload
              class="avatar-uploader"
              :action=uploadUrl
              :show-file-list="false"
              :on-success="handleAvatarScucess">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div><p style="text-align:center">上传公告缩略图</p></el-col>
            <el-col :span="18"><div class="grid-content bg-purple">
               <el-form-item label="公告名称" width="120px">
                 <el-input v-model="addNewsMsg.title" required auto-complete="off"></el-input>
               </el-form-item>
               <el-form-item label="公告内容" width="120px">
                 <vue-summernote ref="editer"></vue-summernote>
                 <!-- <quill-editor ref="myTextEditor"
                  :content="addNewsMsg.content"
                  :config="editorOption"
                  @change="onEditorChange($event)"
                  >
                </quill-editor> -->
               </el-form-item>
             </div></el-col>
             </el-form>
               </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="newsMsgShow = false">取 消</el-button>
          <el-button type="button" v-if="addNewShow" v-on:click="addNews">确 定</el-button>
          <el-button type="button" v-if="editNewShow">确 定</el-button>
        </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import global from '../../global/global'
import VueSummernote from 'vue-summernote'
import Vue from 'vue'

// 载入bootstrap.js
require('bootstrap')
// 载入bootstrap以及summernote的样式
// 这里需要你的脚手架工具具有加载css的能力
require('bootstrap/dist/css/bootstrap.min.css')
require('summernote/dist/summernote.css')

// 这里设置summernote的初始化选项
// 可参考 http://summernote.org/deep-dive/#initialization-options
Vue.use(VueSummernote, {
  dialogsFade: true
})
export default {
  data () {
    return {
      input: '',
      tableData: null,
      newsMsgShow: false,
      alertTitle: '添加公告',
      addNewShow: true,
      editNewShow: false,
      uploadUrl: global.baseUrl + 'file/upload?token=' + localStorage.token,
      imageUrl: '',
      editorOption: {},
      addNewsMsg: {
        title: null,
        pic: null,
        content: null
      },
      noticeArgs: {
        numPerPage: 10,
        pageNum: 1,
        totalPage: null
      }
    }
  },
  mounted () {
    const self = this
    const editer = self.$refs.editer
    editer.$on('onImageUpload', function (files) {
      console.log(files[0])
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
    })
    editer.$on('onChange', function (contents) {
      console.log('onChange:', contents)
    })
  },
  created () {
    this.getNoticeList(this.noticeArgs)
  },
  methods: {
    getNoticeList (args) {
      var self = this
      axios.get(global.baseUrl + 'notice/getNoticeList?' + global.getHttpData(args))
      .then((res) => {
        // console.log(res)
        for (let i in res.data.data) {
          res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
          res.data.data[i].updateDate = self.timeFilter(res.data.data[i].updateDate * 1000)
        }
        self.tableData = res.data.data
        self.noticeArgs.pageNum = res.data.currentPage
        self.noticeArgs.totalPage = res.data.totalPage
      })
    },
    handleClick: function () {
      alert('click')
    },
    handleAvatarScucess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.addNewsMsg.pic = res.data
    },
    timeFilter: function (value) {
      return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
    },
    // 分页
    handleCurrentChange (val) {
      this.noticeArgs.pageNum = val
      this.getNoticeList(this.noticeArgs)
    },
    // 文本框内容
    onEditorChange ({ editor, html, text }) {
      console.log(editor, html, text)
      this.addNewsMsg.content = html
    },

    // 发布公告
    addNoticesAlert () {
      this.alertTitle = '添加公告'
      this.newsMsgShow = true
      if (this.addNewsMsg.id) {
        this.addNewsMsg.id = null
      }
      this.addNewsMsg.title = null
      this.addNewsMsg.content = null
      this.addNewsMsg.pic = null
    },
    addNews () {
      this.editNewShow = false
      this.addNewShow = true
      var self = this
      axios.post(global.baseUrl + 'notice/addNotice', global.postHttpDataWithToken(this.addNewsMsg))
      .then((res) => {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          self.noticeArgs.pageNum = 1
          self.$message({
            message: '发布公告成功',
            type: 'success',
            duration: '1000',
            onClose: function () {
              self.newsMsgShow = false
              self.getNoticeList(self.noticeArgs)
            }
          })
        }
      })
    },

    // 修改公告
    onEditClick: function (noticeId) {
      this.addNewsMsg.id = noticeId
      this.alertTitle = '修改公告'
      this.newsMsgShow = true
      this.editNewShow = true
      this.addNewShow = false
      var self = this
      axios.get(global.baseUrl + 'notice/getById?noticeId=' + noticeId)
      .then((res) => {
        console.log(res)
        res.data.data.content = res.data.data.content.replace(/src="/gi, 'src="http://123.56.220.72:8080/cyg/')
        self.addNewsMsg = res.data.data
      })
    },

    // 删除公告
    onDelClick: function (noticeId) {
      var self = this
      axios.post(global.baseUrl + 'notice/deleteNotice?noticeId=' + noticeId + '&token=' + global.getToken())
      .then((res) => {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          global.success(self, '删除成功', '')
          self.getNoticeList(self.noticeArgs)
        }
      })
    }
  }
}
</script>

<style media="screen">
.alertBg{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 999;
}
.alertBgContent{
  width: 50%;
  position: absolute;
  top: 10%;
  left: 20%;
  margin: 20px auto;
  background: #fff;
}
.alertBgContent .el-form{
  padding: 20px;
}
.alertBgContent .el-upload__input{
  display: none
}
.modal-backdrop{
  z-index: 99;
}
</style>
