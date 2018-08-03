<template>
  <div class="box">
    <div class="list" v-for="item in number">
      <span class="txt">{{item.jfName}}</span>
      <span class="time">{{item.createTime}}</span>
      <span class="number">{{item.jfNum}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            number:""
          }
        },
      methods:{
          num(){
            this.$axios.get('mingx').then(res =>{
              // console.log(res);
              this.number = res.data
            })
          }
      },
      created(){
          this.num()
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    margin-top: 43px;
  }
  .list {
    position: relative;
    width: 100%;
    height: 79px;
    border-bottom: 1px solid #666;
  }
    .txt{
      padding-left: 15px;
      font-size: 18px;
      color: #444;
      position: absolute;
      top: 18px;
    }
  .time{
    margin-left: 15px;
    font-size: 14px;
    color: #444;
    position: absolute;
    top: 46px;
  }
  .number{
    position: absolute;
    right: 10px;
    bottom: 30px;
    font-size: 10px;
    color: red;
  }
</style>
