<template>
  <div class="study">
    <div class="study_wrap" v-for="item in newslist">
      <router-link :to="'zhengzhixuexi?_id='+item._id">
        <div class="img"><img :src="item.pic" alt=""></div>
        <div class="txt"><p>{{item.title}}</p></div>
        <div class="time">
          <span class="l">{{item.createTime}}</span>
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
        this.$axios.get('getNews',{type:1}).then((res)=>{
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
  .study{
  margin-top: 53px;
  }
  .study_wrap{
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 10px;
    border-bottom: 1px solid #c0c0c0;
  }
  .img{
    position: absolute;
    left: 10px;
    top: 5px;
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
    color: #000;
    margin-left: 100px;
    font-size: 16px;
    padding-top: 5px;
  }
  .time{
    width: 265px;
    height: 13px;
    margin-left: 101px;
    margin-top: 15px;
  }
  .time span{
    color: #000;
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
  .iconfont{
    float: right;
    margin-right: 25px;
    margin-top: -15px;
    font-size: 14px;
    color: #000;
  }
  .number{
    float: right;
    margin-right: -35px;
    margin-top: -14px;
    font-size: 10px;
    color: #000;
  }
</style>
