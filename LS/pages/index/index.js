// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/banner1.jpg" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/banner2.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/banner3.jpg" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/banner4.jpg" }  
    ],
    newlist:[
      {id:1,name:"瓜子", img_url:"http://127.0.0.1:3000/img/list1.png",                 weight:"100g",price:0.01},
      {id:2,name:"芹菜", img_url:"http://127.0.0.1:3000/img/list2.png",
      weight:"半斤",price:0.02},
      {id:3,name:"素米", img_url:"http://127.0.0.1:3000/img/list3.png",
      weight:"375g",price:0.03},
      {id:4,name:"瓜子", img_url: "http://127.0.0.1:3000/img/list1.png", 
      weight: "100g", price: 0.01 },
      {id:5,name:"芹菜", img_url: "http://127.0.0.1:3000/img/list2.png",
        weight: "半斤", price: 0.02},
      {id:6,name:"素米", img_url: "http://127.0.0.1:3000/img/list3.png",
        weight: "375g", price: 0.03},
      {id:7,name:"素米", img_url: "http://127.0.0.1:3000/img/list3.png",
        weight:"375g", price: 0.03},
      {id:8,name:"瓜子",img_url: "http://127.0.0.1:3000/img/list1.png",
        weight: "100g", price: 0.01},
      {id:9,name:"芹菜", img_url: "http://127.0.0.1:3000/img/list2.png",
        weight: "半斤", price: 0.02},
      {id:10,name:"素米", img_url: "http://127.0.0.1:3000/img/list3.png",
        weight: "375g", price: 0.03}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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