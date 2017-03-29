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
  },
  postHttpData: function (data) {
    var temp = new FormData()
    for (var i in data) {
      if (data[i] != null) {
        temp.append(i, data[i])
      }
    }
    return temp
  },
  postHttpDataWithToken: function (data) {
    var temp = this.postHttpData(data)
    temp.append('token', this.getToken())
    return temp
  },
  getHttpData: function (data) {
    var temp = ''
    for (var i in data) {
      if (data[i] != null && data[i] !== 'null') {
        temp = temp + '&' + i + '=' + data[i]
      }
    }
    return temp
  },
  getToken: function () {
    return localStorage.getItem('token')
  },
  setToken: function (token) {
    localStorage.setItem('token', token)
  },
  getUser: function () {
    return JSON.parse(localStorage.getItem('caruser'))
  },
  setUser: function (caruser) {
    localStorage.setItem('caruser', JSON.stringify(caruser))
  },
  getToday: function () {
    var today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    return today
  }
}
