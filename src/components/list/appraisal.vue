<template>
  <div class="box">
    <div class="item">
      <router-link to="/one"><mt-button @click="goGrzj">个人总结</mt-button></router-link>
      <router-link to="/appraisals"><mt-button @click="goMzpy">民主评议</mt-button></router-link>
    </div>
  </div>
</template>

<script>
  import {Taost} from 'mint-ui';
    export default {
       data(){
          return{

          }
       },
      methods:{
        goMzpy(){
          this.$router.push("/appraisals")
        },
        goGrzj(){
          this.$axios.get("findGrzj").then(res =>{
            // console.log(res);
            if (res.code == 200){
              this.$router.push("/one")
            } else {
              if (res.data.check == "false"){
                this.$router.push("/grzjs")
              }
              if (res.data.check == "true"){
                Toast({
                  messages:res.msg,
                  position:'bottom',
                  duration:5000
                })
              }
            }
          })
        }
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    margin-top: 43px;
  }
  .item{
    width: 197px;
    height: 150px;
    position: fixed;
    top: 200px;
    left: 92px;
}
  .item button{
    width: 190px;
    height: 47px;
    background: #f34738;
    color: #fff;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
