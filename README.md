1. 做一款小程序
2. 写一篇文章
3. 腾讯云   BASS    Backend as service
  大前端    SDK 存
  投中一篇  

- 小程序基本架构是pages
右键先建文件文件夹 。wxml + wxss +  js + json

  startAccounts(){
    wx.showloading+ .hideLoading 小程序的内置api
    .wx 小程序的内置api
  }
  手机端图片，响应方案  background-size: ;
  background-size: cover;   剪裁
  background-size: contain;    
  1. 背景图片与盒子大小可能不一致；
  3. cover| contain
## 2021.01.07
- flex 布局的使用
  元素比较简单，用` flex-direction: column `去搞定
  align-item: 纵轴 水平方向
  margin auto 顺时针
  百分比用的好
- 小程序，有大小限制，2m
  图片不方便在images里面，
  链接的方式？ 服务器里，云开发来解决。存储

- 使用了header 和footer 代替了div标签。语义化标签
  html语义化更好。对百度的蜘蛛会更友好，有利于seo搜索引擎优化

  富勒烯 + flex-direction：column flex：1主体内容

  - vant 框架 解决了开发中的常用问题
    1. 页面布局 row + col
    2. 常用组件
    pannel button 

- MVVM 思想
  js data里面的数据叫Model
  wxml view 
  VM {{}} 视图模型层
  
- 小程序开发指令
  wx:if
  wx:for images
  wx:key 优化 index
  a = 1  a = 2
  [item]  ,修改数组中的一个属性，不需要把整个数组改变，用太多内存MVVM wx:key= "index" 给每一行分配一个key
  id key？
  一定要用，用什么呢？inde不是最佳
  