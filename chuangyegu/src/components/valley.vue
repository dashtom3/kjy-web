<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contactTitle">
      <h2>同创谷 </h2>
    </div>
    <div class="map-present">
      <div id="demoComponent" class="demo-component">
        <baidu-map class="map" id="demoComponent" :center="{lng: 116.9255627668, lat: 34.2809806341}" :zoom="5" :dragging="false">
          <!-- <bm-info-window :position="{lng: 121.6273150409, lat: 38.9197117560}" title="Info Window Title" :show="dalian" @mouseover="dalian = true">
            <p>123123</p>
          </bm-info-window> -->
          <!-- <bm-info-window :position="{lat: 30.6611640680, lng: 104.0839942718}" title="Info Window Title" :show="true">
            <p>123123</p>
          </bm-info-window> -->
          <bm-marker :position="{lng: 121.6273150409, lat: 38.9197117560}" :label="{content: content, opts: {offset: {width: 0, height: -180}}}">
          </bm-marker>
          <bm-marker :position="{lat: 30.6611640680, lng: 104.0839942718}" :label="{content: '', opts: {offset: {width: 20, height: 10}}}" @mouseover="move" @mouseout="out"></bm-marker>
        </baidu-map>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '2d12993ce41407db4050140fe342d9ba'
})
export default {
  name: 'valley',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: ''
    }
  },
  methods: {
    move () {
      this.content = '<div style="width:300px;height:173px;background-color:rgba(0,0,0,.5)"><img src="static/img/mapImg.4fc7aa6.png" style="display:inline-block;"><p style="font-size:14px;color:#fff;width:160px;display:inline-block;vertical-align:top;word-wrap:break-word;word-break:break-all;line-height:30px;position:relative;left:15px;">成都创业谷创建于2010年<br>9月30号，至今已经举办<br>300多场活动</p></div>'
    },
    out () {
      this.content = ''
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
.BMapLabel{
  display: none!important;
}
.contact{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
#demoComponent{
  height: 100%;
}
.map-present{
  width: 866px;
  height: 670px;
  margin: 50px auto;
}
.contactTitle{
  width: 865px;
  margin: 0 auto;
}
.contactTitle h2{
  font-size: 18px;
  color: rgb( 254, 108, 0 );
  border-bottom: 1px solid;
  padding: 10px 0px 10px 0px;
  letter-spacing: 3px;
  font-weight: normal;
}
.contactCon{
  width: 800px;
  margin: 50px auto;
}
.contactConImg{
  text-align: center;
}
.contactConAddr p{
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: rgb( 0, 0, 0 );
}
.contactConAddr p.tj{
  font-size: 17.5px;
}
.contactConAddr p.tj{
  margin-bottom: 30px;
}
.contactConAddr p.jd{
  margin-top: 30px;
}
.contactConTitle{
  font-size: 17.5px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  line-height: 25px;
}
.companyAbout{
  margin: 35px 0 40px 0;
}
.companyAbout p{
  font-family: "Adobe Heiti Std";
  font-size: 15px;
  line-height: 25px;
}
</style>
