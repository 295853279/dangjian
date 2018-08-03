<template>
  <div class="activity">
    <div class="activity_wrap" v-for="item in news">
      <router-link :to="'/huodong?_id='+item._id">
        <div class="img"><img :src="item.pic" alt=""></div>
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
          news:[]
        }
      },
      methods:{
        getNews(){
          this.$axios.get('getNews',{type:7}).then(res =>{
            // console.log(res.data);
            this.news = res.data
          })
        }
      },
      created(){
        this.getNews()
      }
    }
</script>

<style scoped>
  .activity{
    margin-top: 53px;
  }
  .activity_wrap{
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 10px;
    border-bottom: 1px solid #c0c0c0;
  }
  .img{
    position: absolute;
    left: 10px;
    top: 0;
    width: 80px;
    height: 80px;
  }
  .img  img{
    width: 80px;
    height: 80px;
  }
  .txt{
    font-weight: lighter;
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
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #000;
  }
  .iconfont{
    float: right;
    margin-right: 25px;
    margin-top: -15px;
    color: #000;
    font-size: 14px;
  }
  .number{
    float: right;
    margin-right: -31px;
    margin-top: -14px;
    font-size: 10px;
    color: #000;
  }
</style>
