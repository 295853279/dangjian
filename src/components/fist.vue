<template>
    <div class="fist">
      <div class="fist_wrap" v-for="item in newslist">
        <router-link :to="'yidiantong?_id='+item._id">
        <div class="img">
          <img :src="item.pic" alt="">
        </div>
        <div class="txt">{{item.title}}</div>
          <div class="time">
            <span class="l">{{item.createTime}}</span>
            <i class="iconfont icon-yanjing"></i>
            <span class="number">{{item.count}}</span>
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
            this.$axios.get('getNews',{type:2}).then(res =>{
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
  .fist{
    margin-top: 53px;
  }
  .fist_wrap{
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 10px;
    border-bottom: 1px solid #c0c0c0;
  }
  .img{
    position: absolute;
    left: 10px;
    top: 0px;
    width: 80px;
    height: 80px;
  }
  .img  img{
    width: 80px;
    height: 80px;
  }
  .txt{
    width: 265px;
    height: 48px;
    font-size: 14px;
    color: #000;
    margin-left: 100px;
  }
  .time{
    width: 265px;
    height: 13px;
    margin-left: 100px;
    margin-top: 10px;
  }
  .time .l{
    color: #000;
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
  .iconfont{
    color: #000;
    float: right;
    margin-right: 25px;
    margin-top: -15px;
    font-size: 14px;
  }
  .number{
    color: #000;
    float: right;
    margin-right: -31px;
    margin-top: -14px;
    font-size: 10px;
  }
</style>
