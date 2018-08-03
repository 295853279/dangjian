<template>
<div class="content">
    <div class="notice" v-for="item in newslist">
      <router-link :to="'/tongzhi?_id='+item._id">
        <div class="left-img"><i class="iconfont icon-iconxx2"></i></div>
        <div class="notice-title" >{{item.title}}</div>
        <p>{{item.createTime}}</p>
      </router-link>
    </div>
  <span>没有数据了</span>
  <router-view></router-view>
  <Tab></Tab>
</div>
</template>

<script>
  import Tab from '../base/Tab.vue'
  export default {
      data(){
        return{
          newslist:[]
        }
      },
      methods:{
        getNews(){
          this.$axios.get('getNews',{type:8}).then((res)=>{
          // console.log(res.data)
           this.newslist = res.data
          })
        }
      },
    created(){
        this.getNews()
    },
    components:{
      Tab
    },
    }
</script>

<style scoped>
  .content{
    width: 100%;
    height: 576px;
    background: #fff;
    margin-top: 40px;
  }
  .notice{
    position: relative;
    width: 100%;
    height: 97px;
    display: flex;
    margin: 0 auto;
    border-bottom: 1px solid #f0e0e0;
  }
  .left-img{
    position: absolute;
    left: 18px;
    width: 35px;
    height: 37px;
    border-radius: 50%;
    box-sizing: border-box;
    background: #c50206;
  }
  .iconfont{
    font-size: 25px;
    display: block;
    color: #fff;
    margin: 4px 0 0 5px;
  }
  .notice-title{
    margin-left: 22px;
    margin-top: 20px;
    width: 247px;
    height: 40px;
    font-size: 15px;
    color: #333;
  }
  p{
    display: block;
    font-size: 10px;
    color: #424242;
    margin: 5px 0 20px -72px;
  }
  span{
    display: block;
    width: 375px;
    text-align: center;
    margin-top: 10px;
    color: #666;
    font-size: 14px;
  }
</style>
