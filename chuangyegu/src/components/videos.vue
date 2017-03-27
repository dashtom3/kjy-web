<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contactTitle">
      <h2>慕课视频 MOOC</h2>
    </div>
    <div class="downloads">
      <ul>
        <li>
          <a download>
            <span class="downloadLeft">创业谷2017春季学期报名表创业谷2017春季学期报名表创业谷2017春季学期报名表创业谷2017春季学期报名表</span>
            <span class="downloadright">2017-11-11</span>
          </a>
          <video src="https://misc.rrcimg.com/pc/two_anniversary.mp4" controls>
          </video>
        </li>
        <li>
          <a download>
            <span class="downloadLeft">创业谷2017春季学期报名表</span>
            <span class="downloadright">2017-11-11</span>
          </a>
          <video src="https://misc.rrcimg.com/pc/two_anniversary.mp4" controls>
          </video>
        </li>
      </ul>
      <div class="moreVideos">
        <a href="javascript:;"></a>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.contact{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.contactTitle{
  width: 865px;
  margin: 0 auto;
}
.contactTitle h2{
  font-size: 22.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
}
.downloads ul{
  width: 720px;
  margin: 50px auto;
}
.downloads ul li a span{
  font-size: 19.99px;
  font-family: "Adobe Heiti Std";
  color: rgba( 0, 0, 0, 0.8 );
}
.downloads ul li a span.downloadright{
  float: right;
  font-size: 15px;
  font-family: "HelveticaNeue";
  color: rgb( 254, 108, 0 );
}
.downloads ul li a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.downloads ul li a:hover{
  cursor: pointer;
}
.downloadLeft{
  display: inline-block;
  width: 600px;
  line-height: 30px;
}
.downloadLeft:before{
  content: '·';
  font-size: 30px;
  position: absolute;
  left: -25px;
}
.downloads ul li{
  margin: 20px 0;
}
video{
  width: 100%;
  margin: 20px 0;
}
.moreVideos{
  text-align: center;
  margin-bottom: 50px;
}
.moreVideos a{
  text-align: center;
  color: #fff;
  display: block;
  width: 155px;
  height: 43px;
  margin: 0 auto;
  background: url('../images/more.png');
}
</style>
