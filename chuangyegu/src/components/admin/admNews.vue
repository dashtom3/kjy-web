<template>
  <div class="testProject">
    <div class="function">
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click.native="isDialogShow = !isDialogShow">发布新闻</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="新闻ID">
        </el-table-column>
        <el-table-column
          prop="title"
          label="新闻名称">
        </el-table-column>
        <!-- <el-table-column
          prop="types"
          label="阅读">
        </el-table-column> -->
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
        <!-- <el-table-column
          prop="create"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="lastUpdate"
          label="最后更新">
        </el-table-column> -->
        <!-- <el-table-column
          prop="status"
          label="新闻状态">
        </el-table-column> -->

        <el-table-column
          :context="_self"
          inline-template
          label="操作"
          width=120>
          <span>
            <el-button @click="onEditClick($index)" type="text" size="small">编辑</el-button>
            <el-button @click="onDelClick($index)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">上线</el-button>
          </span>
        </el-table-column>
      </el-table>
      <div class="adminBlock">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pages.currentPage"
          layout="prev, pager, next"
          :total="pages.totalNumber">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="发布新闻" v-model="isDialogShow" size="small">
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
        </div><p style="text-align:center">上传新闻缩略图</p></el-col>
          <el-col :span="18"><div class="grid-content bg-purple">
             <el-form-item label="新闻名称" :label-width="formLabelWidth">
               <el-input v-model="addNewsMsg.title" required auto-complete="off"></el-input>
             </el-form-item>
             <el-form-item label="新闻内容" :label-width="formLabelWidth">
               <quill-editor ref="myTextEditor"
                :content="addNewsMsg.content"
                :config="editorOption"
                @change="onEditorChange($event)">
              </quill-editor>
             </el-form-item>
           </div></el-col>
           </el-form>
             </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogShow = false">取 消</el-button>
        <el-button type="submit" @click="addNews">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import axios from 'axios'
  import global from '../../global/global'
  import tableData from './testProject.js'
  export default {
    data () {
      return {
        editorOption: {},
        input: '',
        dialogTitle: '',
        isDialogShow: false,
        tableData,
        imageUrl: '',
        addNewsMsg: {
          title: '',
          pic: '',
          content: ''
        },
        uploadUrl: global.baseUrl + 'file/upload?token=' + localStorage.token,
        formLabelWidth: '120px',
        currentPage: '1',
        pages: '',
        changePage: function (val) {
          var self = this
          axios.get(global.baseUrl + 'news/getNewsList?pageNum=' + val)
          .then((res) => {
            console.log(res)
            for (let i in res.data.data) {
              res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
            }
            self.tableData = res.data.data
            self.pages = res.data
          })
        }
      }
    },
    created () {
      var self = this
      axios.get(global.baseUrl + 'news/getNewsList')
      .then((res) => {
        console.log(res)
        for (let i in res.data.data) {
          res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
        }
        self.tableData = res.data.data
        self.pages = res.data
      })
    },
    methods: {
      // 表格内编辑按钮点击实现
      onEditClick: function (index) {
        this.dialogTitle = '编辑方案'
        this.isDialogShow = true
      },
      timeFilter: function (value) {
        return new Date(parseInt(value)).getFullYear() + '-' + (new Date(parseInt(value)).getMonth() + 1) + '-' + new Date(parseInt(value)).getDate()
      },
      handleAvatarScucess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        console.log(res)
        this.addNewsMsg.pic = res.data
      },
      // 表格内删除按钮点击实现
      onDelClick: function (index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 此处应为异步请求服务器进行数据库的操作
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      onEditorChange ({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        console.log(editor, html, text)
        this.addNewsMsg.content = html
      },
      handleCurrentChange: function (val) {
        this.changePage(val)
      },
      // 添加新闻
      addNews () {
        var self = this
        var newsMsg = new FormData()
        newsMsg.append('title', this.addNewsMsg.title)
        newsMsg.append('content', this.addNewsMsg.content)
        newsMsg.append('pic', this.addNewsMsg.pic)
        axios.post(global.baseUrl + 'news/addNews?token=' + localStorage.token, newsMsg)
        .then((res) => {
          console.log(res)
          if (res.data.callStatus === 'SUCCEED') {
            self.$message({
              message: '发布新闻成功',
              type: 'success',
              duration: '1000',
              onClose: function () {
                self.isDialogShow = false
                axios.get(global.baseUrl + 'news/getNewsList')
                .then((res) => {
                  console.log(res)
                  for (let i in res.data.data) {
                    res.data.data[i].date = self.timeFilter(res.data.data[i].date * 1000)
                  }
                  self.tableData = res.data.data
                  self.pages = res.data
                })
              }
            })
          }
        })
      }
    },
    components: {
      quillEditor
    }
  }
</script>

<style media="screen">
  .function{
    margin-bottom:10px;
  }
  .function button{
    float:right;
  }
  .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.adminBlock{
  float: right;
  margin-top: 20px;
}
</style>
