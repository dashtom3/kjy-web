<template>
  <div class="photoWall">
    <v-header></v-header>
    <div class="photos">
      <div class="y2016">
        <h2>2016</h2>
        <ul>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
        </ul>
        <div class="block" style="margin:30px 0;">
          <!-- <span class="demonstration">页数较少时的效果</span> -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="y2017">
        <h2>2017</h2>
        <ul>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li>
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li  @click="dialogVisible = true">
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li  @click="dialogVisible = true">
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
          <li  @click="dialogVisible = true">
            <a href="javascript:;"><img src="../images/active_02.png" alt=""></a>
            <a href="javascript:;" class="big">
              <p class="photoDate">2015-06-12</p>
              <p class="photoIntr">图片内容简介巴拉巴 拉了巴拉巴拉来吧来 吧</p>
            </a>
          </li>
        </ul>
        <div class="block" style="margin:30px 0;">
          <!-- <span class="demonstration">页数较少时的效果</span> -->
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>这是一即将显示的大图片</span>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
    <!-- <div class="showclick">
      <div class="clickimg">
        <img src="../images/active_02.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="iconexit">×</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible: false,
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange: function (val) {
      console.log(val)
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photoWall{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.photos{
  width: 1000px;
  margin: 0 auto;
}
h2{
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  font-size: 30px;
}
.y2016>ul,.y2017>ul{
  border-top:2px solid rgb( 254, 108, 0 );
  padding-top: 50px;
  overflow: hidden;
}
.y2016>ul li,.y2017>ul li{
  float: left;
  overflow: hidden;
  position: relative;
}
.y2016 ul li a img,.y2017 ul li a img{
  width: 250px;
}
.y2017{
  clear: both;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
}
.big{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  display: none;
}
.big p{
  color: #ffffff;
  padding: 10px 10px 0 20px;
}
.y2016 ul li:hover a.big,.y2017 ul li:hover a.big{
  display: block;
}
.pages{
  text-align: right;
}
.showclick{
  position: fixed;
  top: 0;
  width: 1200px;
  height: 100%;
  background:rgba(0, 0, 0, 0.5);
  color: #fff;
}
.clickimg{
  width: 500px;
  height: 300px;
  margin: 400px auto;
  position: relative;
}
.iconexit:hover{
  cursor: pointer;
}
.iconexit{
  position: absolute;
  top: -25px;
  font-size: 60px;
}

</style>
