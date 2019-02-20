// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      name:'',
      phone:'',
      detail:''
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    // 获取本地缓存
    wx.getStorage({
      key: 'address',
      success:function(res){
        console.log(res);
        self.setData({
          address:res.data
        })
      }

    })
  },
// 填写完成进行提交
  formSubmit(e) {
    var value = e.detail.value;
    if(value.name&&value.phone&&value.detail){
      // 存储到本地
      wx.setStorage({
        key: 'address',
        // 储存的内容
        data: value,
        success(){
          // console.log(res);
          wx.navigateBack()
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})