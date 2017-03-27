<template>
  <div class="testProject">
    <div class="function">
      <el-row>
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="请输入方案ID名称"
              icon="search"
              v-model="input">
            </el-input>
          </div>
        </el-col> -->
        <el-col :span="24">
          <el-button type="primary" @click.native="onNewClick">发布新闻</el-button>
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
          prop="testName"
          label="新闻名称">
        </el-table-column>
        <el-table-column
          prop="types"
          label="阅读">
        </el-table-column>
        <el-table-column
          prop="projectID"
          label="发布时间"
          width=180>
        </el-table-column>
        <el-table-column
          prop="create"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="lastUpdate"
          label="最后更新"
          width=150>
        </el-table-column>
        <el-table-column
          prop="status"
          label="新闻状态">
        </el-table-column>

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
      <div class="block" style="margin:30px 0">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <el-dialog :title="dialogTitle" v-model="isDialogShow" size="small">
      <el-row type="flex" class="row-bg" justify="space-between">
      <el-form :model="form">
        <el-col :span="5"><div class="grid-content bg-purple">
          <el-upload
            class="avatar-uploader"
            action="//jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarScucess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div><p style="text-align:center">上传新闻缩略图</p></el-col>
          <el-col :span="18"><div class="grid-content bg-purple">
             <el-form-item label="新闻名称" :label-width="formLabelWidth">
               <el-input v-model="form.name" auto-complete="off"></el-input>
             </el-form-item>
             <el-form-item label="新闻内容" :label-width="formLabelWidth">
               <quill-editor ref="myTextEditor"
                :content="content"
                :config="editorOption"
                @change="onEditorChange($event)">
              </quill-editor>
             </el-form-item>
           </div></el-col>
           </el-form>
             </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isDialogShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tableData from './testProject.js'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        content: '',
        editorOption: {},
        input: '',
        dialogTitle: '',
        isDialogShow: false,
        tableData: tableData,
        imageUrl: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        currentPage: 1
      }
    },
    methods: {
      // 表格内编辑按钮点击实现
      onEditClick: function (index) {
        this.dialogTitle = '编辑方案'
        this.isDialogShow = true
      },
      handleAvatarScucess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
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
      onNewClick: function () {
        this.dialogTitle = '发布新闻'
        this.isDialogShow = true
      },
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      },
      handleCurrentChange: function (val) {
        console.log(val)
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
</style>
