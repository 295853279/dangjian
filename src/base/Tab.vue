<template>
  <div class="footer" v-if=" $route.name == 'Home'|| $route.name == 'My' || $route.name == 'Notice'">
      <router-link to="/home">
      <i class="iconfont icon-dangwugongkai"></i>
      <span>首页</span>
      </router-link>
      <router-link to="/notice">
      <i class="iconfont icon-weixinxiaoxi"></i>
      <span>通知早知道</span>
      </router-link>
      <router-link to="/my">
      <i class="iconfont icon-xiazai"></i>
      <span>我的党建</span>
      </router-link>
  </div>
</template>

<script>

</script>

<style>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    border: 1px solid #fafbfc;
    display: flex;
    background: #fafbfc;
  }
   a{
    flex: 1;
    display: flex;
    flex-direction: column;
    color:#aaa;
    align-items: center;
    justify-content: center;
    font-size: 14px;

  }
  .footer a.router-link-active{
       color:#c7000a;
    border-top: 1px solid #c7000a;

     }
  .iconfont{
    font-size: 25px;
  }
  .active{
    border-top: 2px solid #c7000a;
    color: #c7000a;
  }
</style>























