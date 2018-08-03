<template>
  <div class="news">
    <div class="news-wrap" v-for="item in newslist">
      <router-link :to="'/newslist?_id='+item._id">
        <div class="news-logo">
          <img :src="item.pic" alt="">
        </div>
        <div class="news-txt">{{item.title}}</div>
        <div class="news-time"><span>{{item.createTime}}</span>
          <i class="iconfont icon-yanjing"></i>
          <div class="number">{{item.count}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        newslist:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get('getNews',{type:0}).then((res)=>{
          // console.log(res.data)
          this.newslist = res.data
        })
      }
    },
    created(){
      this.getNews()
    }
  }
</script>

<style scoped>
    .news{
      width: 100%;
      margin-top: 43px;
    }
  .news .news-wrap{
    position: relative;
    width: 100%;
    height: 101px;
    border-bottom: 1px solid #c0c0c0;
  }
  .news-logo {
    position: absolute;
    left: 7px;
    top: 10px;
    width: 80px;
    height: 80px;
    background: #fff;

  }
    .news-logo img{
      width: 80px;
      height: 80px;
      color: red;
    }
  .news .news-txt{
    width: 265px;
    height: 48px;
    color: #000;
    margin-left: 100px;
    font-size: 16px;
    padding-top: 5px;
  }
    .news-time{
      width: 265px;
      height: 13px;
      margin-top: 10px;
      margin-left: 100px;
    }
    .news-time span{
      color: #000;
      display: block;
      margin-top: 10px;
      font-size: 12px;
    }
    .news-time .iconfont{
      float: right;
      margin-right: 25px;
      margin-top: -15px;
      color: #000;
      font-size: 14px;
    }
  .number{
    float: right;
    margin-right: -35px;
    margin-top: -14px;
    font-size: 10px;
    color: #000;
  }
</style>
