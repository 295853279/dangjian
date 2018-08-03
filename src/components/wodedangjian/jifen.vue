<template>
<div class="box">
  <div class="wrap">
    <img src="data:image/png;base64,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" alt="">
    <div class="number">{{fen}}</div>
  </div>
  <div class="mingxi_st">
    <router-link to="/jifenmingxi">
      <img src="@/assets/lxjf.png" class="abc">
      <p>积分明细</p>
      <img src="@/assets/right.png" class="abd">
    </router-link>
  </div>
  <div class="item1">
    <span>积分规则</span>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpccUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBsUCBv////nm5swjJvfd3fC+v9hbXtE6PfXW1vLHyNNGSd9ydf76+uusrvPLzPvx8emfockPE9dPUtAvM8cIDNheYd59f/3299tiZPLNzuibnTBbRCQAAAASdFJOUwAkPfGYthDm1hwtp8P8eNCIAZY/GtYAAADNSURBVBjTPVDbloIwDMxCS6sIuJNC5eoiqOvq/3/f9oLOQ5IzmSTtEHkkQqepFsk3bdhJbDh8RWavsIzWGDsuSJOgUWgNc9NNbAakXpejffBcD23d8TTg4MZwa5jnJ/P9xGwWJHSEqwJGX4wQJHGOjKl7Fy0q0vjZmItPDZSj+kCdfvlNSYQut3H+7E6WWGPbhPSHI+2KuMyG2N2wJxKovWC4uzBfkbvXZxr+/GNymitUFj6pgfVl+8sKqM2KTBTRmyLP6ONYKatKllHyD7X3FKdXkqvkAAAAAElFTkSuQmCC" alt="">
  </div>
  <div class="list">
    <div class="item">
      <span class="item_le">登陆APP</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">完善个人信息</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">查看积分</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">按时交纳党费</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">查看通知</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">了解学院动态</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">上交思想汇报经审核通过</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">上交思想汇报经审核通过</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">主动学习相关文件</span>
      <span class="icn" >53</span>
    </div>
    <div class="item">
      <span class="item_le">认真撰写心得总结并上交，经审核通过</span>
      <span class="icn">50</span>
    </div>
    <div class="item">
      <span class="item_le">提交个人总结，并参与评议</span>
      <span class="icn" >15</span>
    </div>
    <div class="item">
      <span class="item_le">积极参与互动</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">学习党建知识</span>
      <span class="icn">25</span>
    </div>
    <div class="item">
      <span  class="item_le">学习党史</span>
      <span class="icn">55</span>
    </div>
    <div class="item">
      <span class="item_le">创先争优事迹</span>
      <span class="icn">35</span>
    </div>
    <div class="item">
      <span class="item_le">学党章，学习近平总书记系列讲话</span>
      <span class="icn">5</span>
    </div>
    <div class="item">
      <span class="item_le">用镜头记录两学一做过程中令人感动的人和事</span>
      <span class="icn">56</span>
    </div>
    <div class="item">
      <span class="item_le">关注并积极参与特色活动</span>
      <span class="icn" >115</span>
    </div>
    <div class="item">
      <span class="item_le">制度化、常态化建设</span>
      <span class="icn" >15</span>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      data(){
          return{
              fen:""
          }
      },
      methods:{
          jifen(){
            this.$axios.get('jifen').then(res =>{
              // console.log(res);
              this.fen = res.data
            })
          }
      },
      created(){
        this.jifen()
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .wrap{
    position: relative;
    top: 42px;
    width: 100%;
  }
  .wrap img {
    display: block;
    width: 100%;
    height: 144px;
  }
  .wrap .number{
    position: absolute;
    top: 66px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .mingxi_st{
    position: relative;
    top: 42px;
    padding-top: 14px;
    width: 100%;
    height: 30px;
    line-height: 14px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  .mingxi_st a{
    margin-bottom: 5px;
  }
  .mingxi_st .abc{
    width: 32px;
    height: 32px;
    position: absolute;
    left: 10px;
    top: 5px;
  }
  .mingxi_st p{
    position: absolute;
    top: 13px;
    left: 55px;
    font-size: 16px;
    color: #666;
  }
  .mingxi_st .abd{
    position: absolute;
    top: 15px;
    right: 15px;
    width: 7.67px;
    height: 12px;
  }
  .item1{
    position: relative;
    top: 42px;
    width: 100%;
    height: 34px;
    font-size: 14px;
    background: rgb(238,238,238);
  }
  .item1 span{
    margin-left: 10px;
    line-height: 34px;
    color: rgb(153,153,153)
  }
  .item1 img{

    position: absolute;
    right: 10px;
    top: 9px;
  }
  .list{
    width: 100%;
    position: relative;
    top: 43px;
  }
  .item {
    display: block;
    position: relative;
    padding-left: 10px;
    width:97.333%;
    height: 34px;
    line-height: 7px;
    border-bottom: 1px solid #e0e0e0;
  }
  .item .item_le{
    display: block;
    width: 80%;
    line-height: 34px;
    font-size: 14px;
    color: rgb(153,153,153)
  }
  .item .icn{
    display: block;
    position: absolute;
    right: 15px;
    top: 0;
    line-height: 34px;
    font-size: 14px;
    color: red
  }
</style>
