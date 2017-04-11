<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.app{
  margin-top: -20px;
}
*{
  margin: 0;
  padding: 0;
}
a,a:hover{
  text-decoration: none;
}
a:focus, a:hover{
  text-decoration: none!important;
}
a:hover{
  color:#ff9b3c
}
ul li{
  list-style: none;
}
/*.app{
  background-color: #000;
}*/
</style>
