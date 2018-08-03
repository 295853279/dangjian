export default {
  qiniu: "/upload",
  getNews: '/newsLists/getType',//type 获取新闻列表
  newslist: '/newsLists/getId',//获取新闻详情
  Swiper: '/newsLists/getSlider',//获取轮播图
  Login: '/users/denglu',//获取登录
  Panduan:"users/panDuan",//判断登录
  getUser: '/users/userGet',//获取个人信息
  users: 'users/update',//修改个人信息
  password: "users/updatePwd", //修改密码
  outLogin: "users/tuichu",//退出
  put: "tieZis/add", // 提交审核
  interact: "messages/get",// 获取互动
  replys: "messages/reply",// 获取回复
  maps: "maps/get",// 获取地图坐标
  today: "getData",// 党史上的今天
  usersGet:"/users/usersGet",//获取党支部用户列表
  canping: "tieZis/reply",// 参评党员
  findGrzj:"/tieZis/findGrzj",
  grzj:"/tieZis/get",//个人总结
  messages: "messages/add",// 发布帖子
//  积分
  jifen: "jfs/getSum",//获取用户总积分
  mingx:"jfs/getJfs",//获取积分明细
  zjjf:"jfs/add",//增加积分

}
