const config = require("../config.js");

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const api = (url, fn,method = "get",params) =>{
  wx.request({
    url: config.API_HOST+url,
    data: '',
    header: header ? header : { "Content-Type": "application/json" },
    method: method ? method:"get",
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      fn(res)
    },
    fail: function(res) {},
    complete: function(res) {},
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



module.exports = {
  formatTime: formatTime
}
