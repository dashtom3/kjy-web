<template>
  <div class="login">
    <v-header></v-header>
    <div class="loginDiv">
      <div class="loginCon">
        <div class="loginConLeft">
          <p>Build the Last Kilometer Project</p>
          <p>from University Campus</p>
          <p>to the Science</p>
          <p>and Technology Park</p>
        </div>
        <div class="fromData">
          <span>登录用户</span>
          <div class="selectLogin">
            <button type="button" name="button" v-for="(loginKind, index) in selectLogin" :class="{'active':loginKind.active,'unactive':!loginKind.active}" v-on:click="selectKind(loginKind, index)">{{loginKind.data}}</button>
          </div>
          <div class="xn" v-show="xn">
            <form method="post" action="http://tjis.tongji.edu.cn:58080/amserver/UI/Login?goto=http://www.baidu.com"&gotoOnFail=http://www.baidu.com">
              <div class="loginInput">
                <input type="text" v-model="xnMessages.loginName" placeholder="账号" name="Login.Token1"><br>
                <input type="password" v-model="xnMessages.password" name="Login.Token2" placeholder="密码">
              </div>
              <div class="sub">
                <a href="javascript:;" v-on:click="xnLogin"><input type="submit" value="登录"></a>
              </div>
            </form>
          </div>
          <div class="xw" v-show="xw">
            <div class="loginInput">
              <input type="text" v-model="xwname" value="" placeholder="账号"><br>
              <input type="password" v-model="xwpassword" placeholder="密码">
            </div>
            <div class="sub">
              <a href="javascript:;" v-on:click="xwLogin">登录</a>
              <a href="javascript:;" class="reg">注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import Vue from 'vue'
import axios from 'axios'
import global from '../global/global'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectLogin: [
        { data: '校内登录', val: 0 },
        { data: '校外登录', val: 1 }
      ],
      xn: true,
      xw: false,
      active: false,
      loginName: '',
      xnMessages: {
        loginName: '',
        password: ''
      },
      xwname: '',
      xwpassword: ''
    }
  },
  created () {
    Vue.set(this.selectLogin[0], 'active', true)
  },
  methods: {
    selectKind: function (item, index) {
      if (index === 1) {
        this.xn = false
        this.xw = true
      } else {
        this.xn = true
        this.xw = false
      }
      var self = this
      this.$nextTick(function () {
        self.selectLogin.forEach(function (ele) {
          Vue.set(ele, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
    },
    // 校内登录
    xnLogin () {
      var self = this
      var xnMsg = new FormData()
      xnMsg.append('loginName', this.xnMessages.loginName)
      xnMsg.append('password', this.xnMessages.password)
      axios.post(global.baseUrl + 'user/login?type=1', xnMsg)
      .then((res) => {
        if (res.data.callStatus === 'SUCCEED') {
          global.success(self, '登陆成功', '/index')
          localStorage.token = res.data.token
          localStorage.time = Date.parse(new Date()) / 1000 + 1800
        }
      })
    },
    // 校外登陆
    xwLogin () {
      var xwMsg = new FormData()
      xwMsg.append('loginName', this.xwname)
      xwMsg.append('password', this.xwpassword)
      xwMsg.append('type', '2')
      axios.post(global.baseUrl + 'user/login?type=2', xwMsg)
      .then(function (res) {
        console.log(res)
      })
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
.loginDiv{
  width: 100%;
  background-color: #000;
}
.loginCon{
  width: 1200px;
  margin: 20px auto 70px;
  height: 520px;
  background: url('../images/poster.png') no-repeat;
  position: relative;
}
.loginConLeft{
  position: absolute;
  left: 90px;
  top: 30%;
}
.loginConLeft p{
    font-size: 22.5px;
    font-family: "HelveticaNeue";
    color: rgb( 254, 108, 0 );
    line-height: 2.3;
}
.fromData{
  position: absolute;
  right: 85px;
  top:20%;
}
.fromData span{
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  font-family: "Adobe Heiti Std";
  color: rgb( 255, 255, 255 );
}
.selectLogin{
  margin-bottom: 20px;
}
.selectLogin button{
  border-width: 1.25px;
  border-color: rgb( 255, 255, 255 );
  border-style: solid;
  border-radius: 6px;
  background-color: rgb( 255, 255, 255 );
  width: 100.5px;
  height: 37.5px;
  margin-right: 15px;
  font-size: 15px;
  font-family: "Adobe Heiti Std";
  color: rgb( 191, 191, 191 );
  outline: none;
}
.selectLogin button.active{
  color: #fff;
  background-color: rgb( 254, 108, 0 );
  border-color: rgb( 254, 108, 0 );
}
.selectLogin button:hover{
  cursor: pointer;
}
input{
  -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 6px;
    border: 2px solid rgb( 254, 108, 0 );
    box-sizing: border-box;
    color: #1f2d3d;
    display: block;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    width: 362.5px;
    height: 50.5px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.sub{
  position: absolute;
  right: 0;
}
.sub a{
  display: block;
  color:#fff;
  width: 125px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin:20px 0;
  background: url('../images/Layer-9.png') no-repeat;
}
input[type="submit"]{
  display: block;
    color: #fff;
    width: 125px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 20px 0;
    background: url('../images/Layer-9.png') no-repeat;
    outline: none;
    border: none;
    position: relative;
    top: -3px;
}
.sub a.reg{
  position: relative;
  left: -230px;
}
</style>
