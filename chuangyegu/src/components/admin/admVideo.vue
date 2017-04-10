<template>
  <div class="testProject">
    <div class="function">
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click.native="addNewsAlert">发布视频</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="table">
      <el-table
        :data="videoList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="视频ID">
        </el-table-column>
        <el-table-column
          prop="title"
          label="视频名称">
        </el-table-column>
        <el-table-column
          prop="src"
          label="视频地址">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
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

      <!-- 分页 -->
      <div class="adminBlock">
        <el-pagination
          @current-change="changePage"
          :current-page="videoArgs.pageNum"
          layout="prev, pager, next"
          :page-count="videoArgs.totalPage">
        </el-pagination>
      </div>
      <el-dialog title="确定删除该视频吗？" v-model="deleteVideoAlert" size="tiny">
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteVideoAlert = false">取 消</el-button>
          <el-button type="primary" @click="deleteVideo">确 定</el-button>
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
        alertTitle: '添加视频',
        deleteVideoAlert: false,
        videoList: null,
        videoArgs: {
          numPerPage: 10,
          pageNum: 1,
          totalPage: -1
        },
        videoMsg: {
          moocId: null
        }
      }
    },
    created () {
      this.getVideoList(this.videoArgs)
    },
    methods: {
      getVideoList (args) {
        var self = this
        axios.get(global.baseUrl + 'mooc/getMoocList?' + global.getHttpData(args))
        .then((res) => {
          self.videoList = res.data.data
          self.videoArgs.pageNum = res.data.currentPage
          self.videoArgs.totalPage = res.data.totalPage
        })
      },
      changePage (val) {
        this.videoArgs.pageNum = val
        this.getVideoList(this.videoArgs)
      },

      // 删除视频
      onDelClick: function (moocId) {
        this.deleteVideoAlert = true
        this.videoMsg.moocId = moocId
      },
      deleteVideo () {
        this.deleteVideoAlert = false
        var self = this
        axios.post(global.baseUrl + 'mooc/delete', global.postHttpDataWithToken(this.videoMsg))
        .then((res) => {
          if (res.data.callStatus === 'SUCCEED') {
            global.success(self, '删除成功', '')
            self.getVideoList(this.videoArgs)
          }
        })
      }
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
