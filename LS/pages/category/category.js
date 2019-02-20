// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { id: 'guowei', name: "果味" },
      { id: 'shucai', name:" 蔬菜" },
      { id: 'chaohuo', name: "炒货" },
      { id: 'dianxin', name: "点心" },
      { id: 'cucha', name: "粗茶" },
      { id: 'danfan', name: "淡饭" }
    ],
    newList:[
      {lid: 'guowei', img_url:"http://127.0.0.1:3000/img/c1.png", taste:"果味",
      details:[
        { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" },
        { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
        { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
        { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
        { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
        { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" }
      ]},
      {lid:'shucai', img_url: "http://127.0.0.1:3000/img/c1.png", taste: "蔬菜",
        details: [
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "3个" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "4个" }
      ]},
      {lid:'chaohuo', img_url: "http://127.0.0.1:3000/img/c1.png", taste: "炒货",
        details: [
          { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" },
          { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
          { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
          { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" }
      ]},
      {
        lid: 'dianxin', img_url: "http://127.0.0.1:3000/img/c1.png", taste: "点心",
        details: [
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "3个" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "4个" }
      ]},
      {lid: 'cucha', img_url: "http://127.0.0.1:3000/img/c1.png", taste: "粗茶",
        details: [
          { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" },
          { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
          { thumbnail: "http://127.0.0.1:3000/img/c3.png", name: "红枣", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/c4.png", name: "奇异果", count: "2个" },
          { thumbnail: "http://127.0.0.1:3000/img/c2.png", name: "梨花带雨", count: "3个" }
      ]},
      {lid: 'danfan', img_url: "http://127.0.0.1:3000/img/c1.png", taste: "淡饭",
        details: [
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "3个" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list2.png", name: "芹菜", count: "半斤" },
          { thumbnail: "http://127.0.0.1:3000/img/list3.png", name: "小米", count: "500g" },
          { thumbnail: "http://127.0.0.1:3000/img/list1.png", name: "瓜子", count: "4个" }
      ]}
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei' 
  },

  switchTab:function(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)    
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