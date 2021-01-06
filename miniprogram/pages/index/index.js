Page({
  startAccounts(){
    wx.showLoading({
      title: '旅行即将开始'
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.navigateTo({
        url: '../accountBooks/accountBooks'
      })
    }, 600);

  }
})