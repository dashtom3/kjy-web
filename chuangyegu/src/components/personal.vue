<template>
  <div class="personal">
    <v-header></v-header>
    <div class="personalCon">
      <h2>个人中心 User Center</h2>
      <div class="personalMsg">
        <h3>身份信息</h3>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
import global from '../global/global'
export default {
  name: 'personal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    if (global.getToken() == null) {
      this.$router.push('/login')
      alert(global.content.alert)
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
.personal{
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
}
.personalCon{
  width: 1000px;
  margin: 0 auto;
}
.personalCon>h2{
  font-size: 25px;
  font-family: "Adobe Heiti Std";
  color: rgb( 254, 108, 0 );
  border-bottom: 2px solid;
  margin-bottom: 30px;
}
h3{
  margin: 20px 0 20px;
}
</style>
