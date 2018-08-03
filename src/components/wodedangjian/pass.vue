<template>
  <div class="box">
    <div class="wrap">
      <div class="txt">
        <div class="item">
          原密码：
        </div>
        <div class="pas"><input style="border: none;outline:none" type="password" v-model="pwdOld"></div>
      </div>
      <div  class="txt">
        <div class="item">
          新密码：
        </div>
        <div class="pas"><input type="password" v-model="pwdNew"></div>
      </div>
      <div class="txt">
        <div class="item">
          确认密码：
        </div>
        <div class="pas"><input type="password" v-model="pwdNews"></div>
      </div>
      <mt-button  size="large" typr="danger" @click="con">确定</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import { setTime } from 'timers';
  export default {
    data(){
      return{
        pwdNew:"",
        pwdOld:"",
        pwdNews:""
      }
    },
    methods:{
      con(){0
        if (this.pwdNew!=this.pwdNews) {
          Toast({
            message: "密码确认失败",
            position: 'bottom',
            duration: 3000
          })
        }else{
          this.$axios.post('password',{pwdOld:this.pwdOld,pwdNew:this.pwdNew}).then(res =>{
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 3000
            });
            setTimeout(()=>{
              if (res.code == 200){
                this.$axios.get("outLogin").then(ress =>{
                  // console.log(ress);
                  if (ress == 200){
                    this.$router.push("/login")
                  }
                })
              }
            },2000)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    margin-top: 43px;
  }
  .wrap{
    width: 300px;
    height: 300px;
    margin: 100px auto;
  }
  .txt{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .item{
    margin-bottom: 10px;
    color: #666;

  }
  .pas{
    width: 100%;
    height: 40px;
    border: 1px solid #999;
    border-radius: 2px;
  }
  input{
    border: none;outline:none;
    line-height: 40px;
  }
  button {
    display: block;
    background: #ed493b;
    color: #fff;
    width: 300px;
    height:47px;
    margin-top: 5px;
  }
</style>
