<template>
<div class="box">
  <div class="wrap">
    <div class="img_wrap" @click="getUser">
      <img :src="user.headPic" alt="">
      <div class="ddlu">{{user.userName}}</div>
    </div>
  </div>
<div class="list">
  <div class="content" @click="geren">
    <img src="../assets/person.png" class="abc">
    <p>个人信息</p>
    <img src="../assets/right.png" class="abd">
  </div>
</div>
  <div class="list">
    <div class="content" @click="jjfen">
      <img src="../assets/lxjf.png" class="abc">
      <p>个人量化积分</p>
      <img src="../assets/right.png" class="abd">
    </div>
  </div>
  <div class="list">
    <div class="content" @click="xiu">
      <img src="../assets/xgmm.png" class="abc">
      <p>修改密码</p>
      <img src="../assets/right.png" class="abd">
    </div>
  </div>
  <div class="list">
    <div class="content" to="/">
      <img src="../assets/person.png" class="abc">
      <p>党费缴纳</p>
      <img src="../assets/right.png" class="abd">
    </div>
  </div>
  <button @click="out">退出登录</button>
  <router-view></router-view>
  <Tab></Tab>
</div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import Tab from '../base/Tab.vue'
  export default {
      components:{
        Tab
      },
      data(){
          return{
            outt:"",
            user:{
              userName:"您还没有登录，请登录"
            }
          }
      },
      methods:{
        wsp(){
          this.$axios.get('getUser').then(res =>{
            // console.log(res.data);
            this.user = res.data
            if (res.code == 200){

            }
          })
        },
        getUser(){
          this.$axios.get("Panduan").then(res=>{
            // console.log(res.data)
            // this.user = res.data;
            if (res.code == 200){
              this.wsp()
            }
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
          })
        },
        geren(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/gerenxinxi"})
            }
          })
        },
        jjfen(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/jifen"})
            }
          })
        },
        xiu(){
          this.$axios.get('Panduan').then(res =>{
            // console.log(res);
            if (res.code == 400){
              this.$router.push({path:"/login"})
            }
            if (res.code == 200){
              this.$router.push({path:"/pass"})
            }
          })
        },
          out(){
            this.$axios.get("outLogin").then(res =>{
              // console.log(res.data);
              this.outt = res.data
              Toast({
                message: "退出登录",
                position: 'bottom',
                duration: 2000
              })
              this.$router.go(0)
            })
          }
      },
    created(){
        this.wsp()
    }
    }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 155px;
    background: #c50206;
    margin-top: 40px;
  }
  .wrap .img_wrap{
    margin: 0 auto;
    padding-top: 40px;
    width:69px;
    height: 69px;
  }
 .img_wrap img{
    display: block;
    border-radius: 50%;
    width:69px;
    height: 69px;
  }
  .img_wrap a{
    width: 120px;
    margin-left: -23px;
    color: #fff;
    font-size: 12px;
  }
  .list{
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid #e0e0e0;
    }
  .list .content{
    width: 99%;
    height: 40px;
  }
  .list .abc{
    width: 32px;
    height: 32px;
    position: absolute;
    left: 10px;
  }
  .list p{
    position: absolute;
    left: 55px;
    font-size: 16px;
    color: #666;
  }
  .list .abd{
    position: absolute;
    right: 15px;
    margin-top: 8px;
    width: 7.67px;
    height: 12px;
  }
  button{
    display: block;
    width: 95%;
    height: 47px;
    margin: 40px 10px;
    border: none;
    border-radius: 4px;
    background: #ef4939;
    font-size: 18px;
    color: #fff;
  }
  .ddlu{
    font-size: 13px;
    color: #fff;
    width: 200px;
    position: fixed;
    right: 85px;
    text-align: center;
  }
</style>
