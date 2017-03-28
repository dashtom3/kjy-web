export default{
  userMsg: {},
  baseUrl: 'http://123.56.220.72:8080/cyg/api/',
  goPath: function (obj, url) {
    document.body.scrollTop = 0 + 'px'
    obj.$router.push({ name: url })
  },
  success (obj, msg, url) {
    obj.$message({
      message: msg,
      type: 'success',
      duration: '1000',
      onClose: function () {
        obj.$router.push(url)
      }
    })
  },
  error (obj, msg, url) {
    obj.$message({
      message: msg,
      duration: '1000',
      onClose: function () {
        obj.$router.push(url)
      }
    })
  }
}
