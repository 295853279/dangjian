<template>
<div class="login">
  <div class="wrap">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div action="" class="da">
      <div class="text">
        <input type="text"  placeholder="身份证号" v-model="formData.userId">
      </div>
      <div class="pwd">
        <input type="password" placeholder="密码" v-model="formData.pwd">
      </div>
      <div class="goon">
        <mt-button size="large" @click="login">登录</mt-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
  export default {
    name:"login",
    data(){
      return {
        formData:{
          userId:'',
          pwd :''
        }
      }
    },
    methods:{
      zjjf(){
        this.$axios.post('zjjf',{jfName:"登录",jfNum:5}).then(res =>{
          // console.log(res);
        })
      },
      login(){
        this.$axios.post("Login",this.formData).then(res =>{
          if(res.code == 400){
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 2000
            })
            return
          }
          if(res.code == 200){
            Toast({
              message: "登录成功",
              position: 'bottom',
              duration: 2000
            })
            this.zjjf()
            this.$router.push({path: "/my"});
            this.$router.go(0)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #c7000a;
    height: 725px;
    width: 100%;
  }
/*.login .go{*/
    /*position: fixed;*/
    /*!*top: 12px;*!*/
    /*margin: 0 169px;*/
    /*color: #fff;*/
    /*font-size: 18px;*/
/*}*/
  .logo img{
    display: block;
    width: 203px;
    height: 48px;
   padding: 77px 0 22px 77px;
  }
  .da{
    width: 300px;
    height: 155px;
    margin: 0 65px;
  }
  input{
    display: block;
    width: 300px;
    height: 41px;
    margin-top: 10px;
    margin-left: -30px;
    border-radius: 5px;
    border: 1px solid gold;
    background: #c7000a;
    font-size: 16px;
    color: #fff;
  }
  button {
    width: 300px;
    height: 41px;
    margin-left: -30px;
    margin-top: 10px;
    background: #e3584e;
    font-size: 14px;
    color: #fff;
    border:none;
  }

</style>



























