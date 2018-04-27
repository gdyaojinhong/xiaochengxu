//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hidden:true,
    currentTab:0,
    list:"",
    windowHeight:"",
    windowWidth:""
  },
  onLoad: function () {
    var this_ = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes',
      data: '',
      header: { "Content-Type": "application/json" },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        this_.setData({
          list: res.data.others
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.getSystemInfo({
      success: function (res) {
        this_.setData({
          windowHeight: res.windowHeight
        })
      }
      

    });
  },
  swiperNav:function(e){
    console.log(e)
    var this_ = this;
    this_.setData({
      currentTab: e.currentTarget.dataset.current
    })
    
  },
  bindchange:function(e){
    console.log(e)
    var this_ = this;
    this_.setData({
      currentTab: e.detail.current
    })
  }
})
