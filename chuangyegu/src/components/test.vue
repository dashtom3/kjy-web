<template>
<div>
  <el-row :gutter="100">
    <vue-summernote ref="editer"></vue-summernote>
  </el-row>
</div>
</template>

<script>
// import axios from 'axios'
// import global from '../global/global'
export default {
  name: 'app',
  data () {
    return {
      src: ''
    }
  },
  mounted () {
    const self = this
    const editer = self.$refs.editer
    editer.$on('onImageUpload', function (files) {
      console.log(files[0])
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
    })
    editer.$on('onChange', function (contents) {
      console.log('onChange:', contents)
    })
  }
}
</script>
