// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{
      id:1,
      img_url:"http://127.0.0.1:3000/img/goods1.png",
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货'
    },
    scaleCart: false,
    totalNum: 0,
    hasCarts: false,
    num:1,
    show:false,
    curIndex:0

  },
  addCount(){
    var num=this.data.num;
    num++;
    this.setData({
      num:num
    })
  },
  addToCart(){
    var self=this;
    var num=this.data.num;
    var total = this.data.totalNum;
    this.setData({
      show:true
    })
    setTimeout(function(){
      self.setData({
        show: false,
        scaleCart: true
      }) 
      setTimeout(function(){
        self.setData({
          scaleCart:false,
          hasCarts: true,
          totalNum: num + total
        }) 
      },200)
    },300)
  },
  handlePress(e){
    console.log(e);
    var index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchtab:function(e){

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