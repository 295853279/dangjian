import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
// import My from '../components/My'
// import Notice from '../components/Notice'




Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home',name:'Home',component:Home},
    {
      path:'/Notice',
      name:'Notice',
      meta:{
        title:'通知早知道'
      },
      component:() => import("@/components/Notice")
    },
    {
      path:'/My',
      name:'My',
      meta:{
        title:'我的党建'
      },
      component:() => import("@/components/My")
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录'
      },
      component:() => import("@/components/login")
    },
    {
      path:'/news',
      name:'news',
      meta:{
        title:'信工新闻眼'
      },
      component:() => import("@/components/news")
    },
    {
      path:'/newslist',
      name:'newslist',
      meta:{
        title:'信工新闻眼'
      },
      component:() => import("@/components/list/newslist")
    },

    {
      path:'/life',
      name:'life',
      meta:{
        title:'掌上组织生活'
      },
      component:() => import("@/components/life")
    },
    {
      path:'/dangyuanhudong',
      name:'dangyuanhudong',
      meta:{
        title:'党员云互动'
      },
      component:() => import("@/components/dangyuanhudong")
    },
    {
      path:'/huifu',
      name:'huifu',
      meta:{
        title:'党员云互动'
      },
      component:() => import("@/components/list/huifu")
    },
    {
      path:'/today',
      name:'today',
      meta:{
        title:'党史上的今天'
      },
      component:() => import("@/components/today")
    },
  {
    path:'/fist',
    name:'fist',
    meta:{
      title:'党建一点通'
    },
    component:() => import("@/components/fist")
  },
    {
      path:'/yidiantong',
      name:'yidiantong',
      meta:{
        title:'党建一点通'
      },
      component:() => import("@/components/list/yidiantong")
    },
    {
      path:'/stauts',
      name:'stauts',
      meta:{
        title:'党员亮身份'
      },
      component:() => import("@/components/stauts")
    },
    {
      path:'/liangshenfen',
      name:'liangshenfen',
      meta:{
        title:'党员亮身份'
      },
      component:() => import("@/components/list/liangshenfen")
    },
    {
      path:'/study',
      name:'study',
      meta:{
        title:'随时随地学'
      },
      component:() => import("@/components/study")
    },
    {
      path:'/xuexi',
      name:'xuexi',
      meta:{
        title:'随时随地学'
      },
      component:() => import("@/components/list/xuexi")
    },
    {
      path:'/anytimephoto',
      name:'anytimephoto',
      meta:{
        title:'随时随地拍'
      },
      component:() => import("@/components/anytimephoto")
    },
    {
      path:'/phone',
      name:'phone',
      meta:{
        title:'随时随地拍'
      },
      component:() => import("@/components/list/phone")
    },
    {
      path:'/system',
      name:'system',
      meta:{
        title:'制度建设'
      },
      component:() => import("@/components/system")
    },
    {
      path:'/zhidu',
      name:'zhidu',
      meta:{
        title:'制度建设'
      },
      component:() => import("@/components/list/zhidu")
    },
    {
      path:'/activity',
      name:'activity',
      meta:{
        title:'特色活动'
      },
      component:() => import("@/components/activity")
    },
    {
      path:'/huodong',
      name:'huodong',
      meta:{
        title:'特色活动'
      },
      component:() => import("@/components/list/huodong")
    },
    {
      path:'/politicalstudy',
      name:'politicalstudy',
      meta:{
        title:'政治学习'
      },
      component:() => import("@/components/list/politicalstudy")
    },
    {
      path:'/zhengzhixuexi',
      name:'zhengzhixuexi',
      meta:{
        title:'政治学习'
      },
      component:() => import("@/components/list/zhengzhixuexi")
    },
    {
      path:'/thinking',
      name:'thinking',
      meta:{
        title:'思想报告'
      },
      component:() => import("@/components/list/thinking")
    },
    {
      path:'/summarys',
      name:'summarys',
      meta:{
        title:'心得总结'
      },
      component:() => import("@/components/list/summarys")
    },
    {
      path:'/appraisal',
      name:'appraisal',
      meta:{
        title:'掌上组织生活'
      },
      component:() => import("@/components/list/appraisal")
    },
    {
      path:'/one',
      name:'one',
      meta:{
        title:'个人总结'
      },
      component:() => import("@/components/list/one")
    },
    {
      path:'/grzjs',
      name:'grzjs',
      meta:{
        title:'个人总结'
      },
      component:() => import("@/components/list/grzjs")
    },
    {
      path:'/appraisals',
      name:'appraisals',
      meta:{
        title:'民主评议'
      },
      component:() => import("@/components/list/appraisals")
    },
    {
      path:'/canpdy',
      name:'canpdy',
      meta:{
        title:'参评党员'
      },
      component:() => import("@/components/list/canpdy")
    },
    {
      path:'/mzpy',
      name:'mzpy',
      meta:{
        title:'民主评议'
      },
      component:() => import("@/components/list/mzpy")
    },
    {
      path:'/zhaozuzhi',
      name:'zhaozuzhi',
      meta:{
        title:'流动找组织'
      },
      component:() => import("@/components/list/zhaozuzhi")
    },
    {
      path:'/tongzhi',
      name:'tongzhi',
      meta:{
        title:'通知早知道'
      },
      component:() => import("@/components/list/tongzhi")
    },
    {
      path:'/gerenxinxi',
      name:'gerenxinxi',
      meta:{
        title:'个人信息'
      },
      component:() => import("@/components/wodedangjian/gerenxinxi")
    },
    {
      path:'/xiugaigeren',
      name:'xiugaigeren',
      meta:{
        title:'修改个人信息'
      },
      component:() => import("@/components/wodedangjian/xiugaigeren")
    },
    {
      path:'/jifen',
      name:'jifen',
      meta:{
        title:'个人量化积分'
      },
      component:() => import("@/components/wodedangjian/jifen")
    },
    {
      path:'/jifenmingxi',
      name:'jifenmingxi',
      meta:{
        title:'积分明细'
      },
      component:() => import("@/components/wodedangjian/jifenmingxi")
    },
    {
      path:'/pass',
      name:'pass',
      meta:{
        title:'修改密码'
      },
      component:() => import("@/components/wodedangjian/pass")
    }

  ]
})
