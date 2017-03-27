export default{
  baseUrl: 'http://123.56.220.72:8080/cyg/api/',
  goPath: function (obj, url) {
    document.body.scrollTop = 0 + 'px'
    obj.$router.push({ name: url })
  }
}
