<template>
  <div class="box">
    <div class="header">
      <img class="image" src="../assets/logos.png" alt="">
      <div class="wrap"v-show="Show" @click="busst">登录</div>
    </div>
    <div class="slider">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in swiper" :key="item.index">
              <router-link :to="item.type">
                <img :src="item.pic">
                <span>{{item.title}}</span>
              </router-link>
            </mt-swipe-item>
        </mt-swipe>
    </div>

    <!-- 主菜单 -->
    <div class="main-menu">
      <div class="row">
       <div class="menu-item" @click="xin">
          <div>
            <img src="../assets/icon_01.png" >
          </div>
          <div class="menu-btn-title">
            信工新闻眼
          </div>
        </div>
        <div class="menu-item" @click="life">
          <div>
            <img src="../assets/icon_03.png" >
          </div>
          <div class="menu-btn-title">
            掌上组织生活
          </div>
        </div>
        <div class="menu-item" @click="panduan">
          <div>
            <img src="../assets/icon_05.png" >
          </div>
          <div class="menu-btn-title">
            党员云互动
          </div>
        </div>
      </div>
      <div class="row">
       <div  class="menu-item" @click="yidian">
          <div>
            <img src="../assets/icon_04.png" >
          </div>
          <div class="menu-btn-title">
            党建一点通
          </div>
        </div>
        <div  class="menu-item" @click="liang">
          <div>
            <img src="../assets/icon_06.png" >
          </div>
          <div class="menu-btn-title">
            党员亮身份
          </div>
        </div>
        <div  class="menu-item" @click="mins">
          <div>
            <img src="../assets/icon_02.png" >
          </div>
          <div class="'menu-btn-title?_id='+item._id">
            党史上的今天
          </div>
        </div>
      </div>
    </div>
    <div class="banners">
      <img src="../assets/banner02.png" alt="">
    </div>
    <div class="footer-meun">
      <div class="meun-left">

      </div>
      <div class="meun-right">
        <div class="mini">
          <router-link to="/study"></router-link>
          <router-link to="/anytimephoto"></router-link>
        </div>
        <div class="mini">
          <router-link to="/system" class="ms"></router-link>
          <router-link to="/activity" class="ms"></router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>
<script>
  import Tab from '../base/Tab.vue'
  export default {
    name: 'carrousel',
    components:{
      Tab
    },
    data(){
      return{
        swiper:[],
        src:"",
        Show:true
      }
    },
    methods:{
      isShow(){
        this.$axios.get('Panduan').then(res =>{
          this.Show =res.data
          if (res.code == 200){
            this.Show = false
          }
        })

      },
      busst(){
        this.$axios.get('Panduan').then(res =>{
          // console.log(res);
          if (res.code == 400){
            this.$router.push({path:"/login"})
          }
        })
      },
      xin(){
        this.$router.push({path:"/news"})
      },
      life(){
        this.$router.push({path:"/life"})
      },
      yidian(){
        this.$router.push({path:"/fist"})
      },
      liang(){
        this.$router.push({path:"/stauts"})
      },
      mins(){
        this.$router.push({path:"/today"})
      },
      panduan(){
        this.$axios.get('Panduan').then(res =>{
          // console.log(res);
          if (res.code == 400){
            this.$router.push({path:"/login"})
          }
          if (res.code == 200){
            this.$router.push({path:"/dangyuanhudong"})
          }
        })
      },
      Swiper(){
        this.$axios.get('Swiper').then((res)=>{
          // console.log(res.data);
          for (var i=0;i<res.data.length;i++){
            if (res.data[i].type == 0){
              res.data[i].type = "/newslist?_id="+res.data[i]._id
            }
            if (res.data[i].type == 1){
              res.data[i].type = "/zhengzhixuexi?_id="+res.data[i]._id
            }
            if (res.data[i].type == 2){
              res.data[i].type = "/yidiantong?_id="+res.data[i]._id
            }
            if (res.data[i].type == 3){
              res.data[i].type = "/liangshenfen?_id="+res.data[i]._id
            }
            if (res.data[i].type == 4){
              res.data[i].type = "/xuexi?_id="+res.data[i]._id
            }
            if (res.data[i].type == 5){
              res.data[i].type = "/phone?_id="+res.data[i]._id
            }
            if (res.data[i].type == 6){
              res.data[i].type = "/zhidu?_id="+res.data[i]._id
            }
            if (res.data[i].type == 7){
              res.data[i].type = "/huodong?_id="+res.data[i]._id
            }
            if (res.data[i].type == 8){
              res.data[i].type = "/tongzhi?_id="+res.data[i]._id
            }
          }
          this.swiper = res.data;
        })
      }
    },
    created(){
      this.Swiper()
      this.isShow()
    }
  }
</script>

<style scoped>
  .box{
    position: relative;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 14.78rem;
  }
  .header {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #c50206;
    height: 44px;
  }

  .image {
    position: fixed;
    top: 0;
    padding: 5px 0 5px 5px;
    width: 146px;
    height: 36px;
  }

  .wrap  {
    position: absolute;
    right: 10px;
    top: 1px;
    font-size: 17px;
    color: #fff;
    line-height: 44px;
  }
  /*轮播图样式*/
  .slider{
    width: 100%;
    height: 3.9rem;
  }
  .slider a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .slider img{
    display: block;
    width: 100%;
    height:100%;
  }

  .slider span{
    display: block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: rgba(0,0,0,.5);
    font-size: 0.24rem;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 5px;
  }
  /* 主菜单样式 Stader*/
  .main-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3.96rem;
   background: url("../assets/bt_bg.png") no-repeat;
  -webkit-background-size: 100%;
  background-size: 100%;
  }

.menu-item {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  flex: 1;
  text-align: center;
    }
.row {
    display: flex;
    height: 2rem;
    }
.menu-item img {
      height: 1rem;
      width: 1rem;
    }
    /* 主菜单样式End */
.banners{
  width: 100%;
  height: 2.6rem;
  margin-bottom: 62px;
}
.banners img{
  display: block;
  width: 100%;
  height: 100%;
}


.footer-meun{
  display: flex;
  background: url(../assets/tese.png) no-repeat;
  height:3.3rem;
  -webkit-background-size: 100%;
  background-size: 100%;
  margin-top: 4px;
  position: relative;
  bottom: 62px;
}
.meun-left{
  flex: 1;
}
.meun-right{
  flex: 2;
}
.mini{
  display: flex;
  height: 50%;
}
.mini a{
  flex: 1;
  height: 100%;
}

</style>













































































