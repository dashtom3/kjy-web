<template>
  <div class="footer">
    <div class="footerone">
      <dl class="footerlogo">
        <img src="../images/logo.jpg" alt="">
      </dl>
      <dl class="">
        <dt>链接LINK</dt>
        <dd><a href="http://www.tongji.edu.cn/" target="_blank">同济大学</a></dd>
        <dd><a href="http://www.kic.net.cn/" target="_blank">创智天地</a></dd>
        <dd><a href="http://www.ypcy.org.cn/ypcy/index.jsp" target="_blank"> 创业实训基地</a></dd>
        <dd><a href="http://www.tj-ibi.com/" target="_blank"> 同济大学科技园孵化器</a></dd>
      </dl>
      <dl class="">
        <dt>合作单位</dt>
        <dd><a href="http://www.kic.net.cn/" target="_blank">创智天地</a></dd>
        <dd><a href="http://www.ypcy.org.cn/ypcy/index.jsp" target="_blank"> 创业实训基地</a></dd>
        <dd><a href="http://www.tj-ibi.com/" target="_blank"> 同济大学科技园孵化器</a></dd>
      </dl>
      <dl class="">
        <dt>合作企业</dt>
        <dd><a href="#">上海家具有限公司</a></dd>
        <dd><a href="#">一家公司</a></dd>
        <dd><a href="#">一家公司</a></dd>
      </dl>
    </div>
    <div class="footertwo">
      <dl class="footertwologo">
        <img src="../images/map.png" alt="">
      </dl>
      <dl class="">
        <dt>联系</dt>
        <dd>邮箱：venturevalley@163.com</dd>
        <dd>电话：+8602165982728</dd>
        <dd>邮编：200092</dd>
        <dd>地址：中国上海杨浦区彰武路100号</dd>
        <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 创业大楼（四平创业谷）</dd>
      </dl>
      <dl class="">
        <dt class="goDownload" v-on:click="goDownload">资料下载</dt><br>
        <dt class="goNotices" v-on:click="goNotices">通告公知</dt>
      </dl>
      <dl class="">
        <dt>关注</dt>
        <dd>微博</dd>
        <dd>人人</dd>
      </dl>
      <dl class="">
        <img src="../images/coder.png" alt="">
      </dl>
    </div>
  </div>
</template>

<script>
import global from '../global/global'
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goDownload: function () {
      global.goPath(this, 'download')
    },
    goNotices: function () {
      global.goPath(this, 'notices')
    }
  }
}
</script>

<style media="screen">
.footer{
  width: 1000px;
  margin: 0 auto;
  /*overflow: hidden;*/
  border-top: 2px solid #eaeaea;
  padding-top: 50px;
}
.footer div.footerone dl{
  float: left;
  padding-left: 150px;
}
.footer div.footertwo dl{
  float: left;
  padding-left: 80px;
}
.footer div dl dt{
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  display: inline-block;
  color: rgb( 255, 255, 255 );
  background: #000;
  padding:0 3px;
  margin-bottom: 15px;
  height: 20px;
  line-height: 20px;
}
.footer div dl dd{
  padding: 5px 0;
  font-size: 12.5px;
  font-family: '微软雅黑';
}
.footer div dl dd a{
  color: #000;
}
.footer div dl dd a:hover{
  color: #ff9b3c;
}
.footer div dl:nth-child(1){
  padding-left: 0px;
}
.footerone,.footertwo{
  overflow: hidden;
}
.footerlogo img{
  width: 80px;
}
.footertwologo img{
  width: 150px;
}
.footer div{
  margin-bottom: 50px;
}
.goDownload:hover,.goNotices:hover{
  cursor: pointer;
}
</style>
