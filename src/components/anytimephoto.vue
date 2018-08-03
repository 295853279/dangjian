<template>

      <div class="wrap">
        <div class="wrap1" v-for="item in newslist">
          <router-link :to="'/phone?_id='+item._id">
            <div class="img"><img :src="item.pic" alt=""></div>
            <div class="txt">{{item.title}}</div>
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
            this.$axios.get('getNews',{type:5}).then(res =>{
              // console.log(res.data);
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
    .wrap{
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
  }
    .wrap1{
      display: flex;
      flex: 1;
      width: 50%;
      justify-content: space-around;
    }
    img{
      width: 155.5px;
      height: 116.63px;
    }
    .txt{
      width: 155.5px;
      height: 37px;
      font-size: 13px;
    }
</style>
