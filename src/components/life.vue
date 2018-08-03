<template>
    <div class="life">
        <div class="life_img">
          <img class="image" src="../assets/timg.jpg" alt="">
        </div>
        <div class="item_a">
          <div class="item1" @click="zzxx"><img class="images" src="../assets/icon1.png" alt=""><span>政治学习</span></div>
          <div class="item1" @click="sixiang"><img class="images" src="../assets/icon2.png" alt=""><span>思想汇报</span></div>
          <div class="item1" @click="xinde"><img class="images" src="../assets/icon3.png" alt=""><span>心得总结</span></div>
        </div>
        <div class="item_b">
        <div class="item1" @click="piyi"><img img class="images" src="../assets/icon4.png" alt=""><span>民主评议</span></div>
          <div class="item1" @click="zzz"><img img class="images" src="../assets/icon5.png" alt=""><span>流动党员找组织</span></div>
          <div class="item1"></div>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        zzxx(){
          this.$router.push({path:"/politicalstudy"})
        },
        zzz(){
          this.$router.push({path:"/zhaozuzhi"})
        },
        sixiang(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/thinking"})
            }
          })
        },
        xinde(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/summarys"})
            }
          })
        },
        piyi(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/appraisal"})
            }
          })
        },
      }
    }
</script>

<style scoped>
  .life_img .image{
    display: block;
    width: 100%;
    margin-top: 43px;
  }
  .item_a{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .item_b{
    display: flex;
    justify-content: space-around;
    margin-top: 56px;
  }
  .item1{
    width: 80px;
    height: 80px;
  }
  .item1 .images {
    display: block;
    width: 80px;
  }
  .item1 span{
    display: block;
    text-align: center;
    color: #666;
    font-size: 14px;
  }

</style>
