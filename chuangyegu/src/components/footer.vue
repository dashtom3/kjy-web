<template>
  <div class="footer">
    <div class="footerone">
      <dl class="footerlogo">
        <img src="../images/logo.jpg" alt="">
      </dl>
      <dl class="">
        <dt>链接LINK</dt>
        <dd><a href="http://www.tongji.edu.cn/" target="_blank">同济大学</a></dd>
        <dd><a href="http://youth.tongji.edu.cn/index.php?classid=4807" target="_blank">共青团同济大学委员会</a></dd>
        <dd><a href="javascript:;" target="_blank">成都同创谷</a></dd>
        <dd><a href="javascript:;" target="_blank">大连同创谷</a></dd>
        <dd><a href="javascript:;">同济创业谷·加佳国际</a></dd>
        <dd><a href="javascript:;">青年众创空间</a></dd>
      </dl>
      <dl class="">
        <dt>合作单位</dt>
        <dd><a href="http://blog.thexnode.com/" target="_blank">XNODE</a></dd>
        <dd><a href="http://www.tusstar.com/" target="_blank">启迪之星</a></dd>
        <dd><a href="http://www.weipujishu.com/" target="_blank">微谱</a></dd>
        <dd><a href="http://www.tj-ibi.com/" target="_blank">同济科技孵化器</a></dd>
      </dl>
      <dl class="">
        <dt>合作联盟</dt>
        <dd><a href="http://www.bauhiniavalley.com/" target="_blank">紫荆谷</a></dd>
        <dd><a href="http://www.naiseducation.com/" target="_blank">国际创业者暑期学校</a></dd>
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
        <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 中国上海市嘉定区曹安公路</dd>
        <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4800号朋园3号楼（嘉定创业谷）</dd>
      </dl>
      <dl class="link">
        <dt class="goDownload"><a href="download" target="_blank">资料下载</a></dt><br>
        <dt class="goNotices"><a href="notices" target="_blank">通告公知</a></dt>
      </dl>
      <dl class="">
        <dt>关注</dt>
        <dd><a href="http://weibo.com/u/3431109114" target="_blank">微博</a></dd>
        <dd><a href="http://page.renren.com/601840580?checked=true" target="_blank">人人</a></dd>
      </dl>
      <dl class="">
        <img src="../images/coder.png" alt="">
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style media="screen">
.footer{
  width: 1000px;
  margin: 0 auto;
  /*overflow: hidden;*/
  border-top: 1px solid #eaeaea;
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
.goDownload:hover a,.goNotices:hover a{
  color: #fff;
}
.link a{
  color: #fff;
}
</style>
