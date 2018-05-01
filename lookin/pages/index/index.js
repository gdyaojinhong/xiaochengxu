const util = require('../../utils/util.js');
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hidden: false,
    currentTab:0,
    list:"",
    windowHeight:"",
    windowWidth:"",
    topStories:""


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
          list: res.data.others,
          hidden: true
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    // 请求精选数据
    util.api("news/latest", function (res) {

      var arr = res.data;
      console.log(arr)
      // 获取当前现有数据进行保存
      var list = this_.datalist;
      console.log(list);
      // 重新写入数据
      this_.setData({
        datalist: list,
        topStories: arr.top_stories,
        dataListDateCount: 1
      });
    });
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
