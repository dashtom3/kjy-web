<template>
  <div class="admin">
    <div class="adminCon">
      <h3>管理员登录</h3>
      <div class="username">
        <input type="text" name="" v-model="adminName" value="" placeholder="用户名">
      </div>
      <div class="password">
        <input type="password" name="" v-model="adminPassword" value="" placeholder="密码">
      </div>
      <div class="login">
        <a href="javascript:;" v-on:click="adminLogin">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import global from '../../global/global'
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      adminName: '',
      adminPassword: ''
    }
  },
  methods: {
    adminLogin () {
      if (this.adminName !== '' && this.adminPassword !== '') {
        var adminMsg = new FormData()
        adminMsg.append('loginName', this.adminName)
        adminMsg.append('password', this.adminPassword)
        axios.post(global.baseUrl + 'user/login?type=0', adminMsg)
        .then((res) => {
          if (res.data.callStatus === 'SUCCEED') {
            global.setToken(res.data.token)
            // localStorage.token = res.data.token
            localStorage.time = ((Date.parse(new Date())) / 1000) + 1800
            // localStorage.username = res.data.data.username
            global.userMsg = res.data.data
            global.success(this, '登录成功', '/admUser')
          } else {
            global.error(this, '账户或密码不正确', '/admin')
          }
        })
      } else {
        global.error(this, '账户或密码不正确', '/admin')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin{
  margin: 0;
    padding: 0;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-size: 14px;
    background: #1f2d3d;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
.adminCon{
  border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #f9fafc;
    margin: 180px auto;
    border: 2px solid #8492a6;
    width: 350px;
    padding: 35px 35px 15px;
}
h3{
  margin: 0 auto 40px;
text-align: center;
color: #505458
}
.username,.password{
  margin-bottom: 22px;
}
.login{
  width: 100%;
  text-align: center;
  background-color: #20a0ff;
  border-color: #20a0ff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.login a{
  color: #fff;
  display: block;
  width: 100%;
  line-height: 1;
white-space: nowrap;
cursor: pointer;
border: 1px solid #bfcbd9;
text-align: center;
box-sizing: border-box;
margin: 0;
padding: 10px 15px;
font-size: 14px;
border-radius: 4px
}
.login a:hover{
  background: #4db3ff;
    border-color: #4db3ff;
    color: #fff;
}
input{
  background-color: #fff;
border-radius: 4px;
border: 1px solid #bfcbd9;
color: #1f2d3d;
display: block;
font-size: inherit;
height: 36px;
line-height: 1;
padding: 3px 10px;
transition: border-color .2s cubic-bezier(.645,.045,.355,1);
width: 95%;
}
</style>
