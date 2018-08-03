<template>
  <div class="box">
    <div @click="baocun" class="abc"><button>保存</button></div>
    <div class="list">
      <div class="list_item">
        <span>头像</span>
        <label>
        <input type="file" @change="upload" name="file" class="file" id="file">
        <img :src="formData.headPic">
        </label>
      </div>
      <div class="a"><mt-field label="姓名" placeholder="" v-model="formData.userName"></mt-field></div>
      <div class="a"><mt-field label="身份证" placeholder="" v-model="formData.shenFen"></mt-field></div>
      <div class="a"><mt-field label="家庭住址" placeholder="" v-model="formData.homePlace"></mt-field></div>
      <div class="a"><mt-field label="工作地址" placeholder="" v-model="formData.workPlace"></mt-field></div>
      <div class="a"><mt-field label="民族" placeholder="" v-model="formData.minZu"></mt-field></div>
      <div class="a"><mt-field label="微信号" placeholder="" v-model="formData.wx"></mt-field></div>
      <div class="a"><mt-field label="qq号" placeholder=""v-model="formData.qq"></mt-field></div>
      <div class="a"><mt-field label="性别" placeholder=""v-model="formData.sex"></mt-field></div>
      <div class="a"><mt-field label="最高学历" placeholder="" v-model="formData.edu"></mt-field></div>
      <div class="a"><mt-field label="职称" placeholder="" v-model="formData.zhicheng"></mt-field></div>
      <div class="a"><mt-field label="薪资水平" placeholder="" v-model="formData.gongZi"></mt-field></div>
      <div class="a"><mt-field label="入党时间" placeholder="Input birthday" type="date" v-model="formData.ruDangTime"></mt-field></div>
      <div class="a"><mt-field label="最后缴纳党费时间" placeholder="Input birthday" type="date" v-model="formData.lastTime"></mt-field></div>
      <div class="a"><mt-field label="所属党支部" placeholder="" v-model="formData.dzb"></mt-field></div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from "axios";
  export default {
    data(){
      return{
        formData:{
          userName:"",
          headPic:"",
          homePlace:"",
          minZu:"",
          workPlace:"",
          wx:"",
          qq:"",
          edu:"",
          zhicheng:"",
          gongZi:"",
          ruDangTime:"",
          lastTime:"",
          shenFen:"",
          dzb:"",
        } ,
        token:"" ,
      }
    },
    methods:{

      upload($event){
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file",file)
        form.append("token",this.token)
        axios.post("https://upload-z1.qiniup.com",form,{headers:{"Content-Type":"multipart/form-daya"}}).then(res=>{
          this.formData.headPic = "http://image.yaojunrong.com/"+res.data.key
        })
      },
      userGet(){
        this.$axios.get("getUser").then(res=>{
          this.formData =res.data
          //   console.log(this.formData)

        })
      },
      //保存修改信息
      baocun(){
        this.$axios.post("users",this.formData).then(res=>{
          if(res.code ==500 ||res.code ==400){
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
          }
          if(res.code==200){
            Toast({
              message: res.msg,
              position: 'bottom',
              duration: 5000
            });
            setTimeout(()=>{
              this.$router.push("/gerenxinxi")
            },1000)
          }
        })

      },
      getToken() {
        this.$axios.qiniuGet().then(res => {
          this.token = res.data;
          // console.log(this.token)
        })
      },

    },
    created(){
      this.userGet()
      this.getToken()
    }

  }
</script>

<style scoped>
  .abc{
    width: 50px;
    height: 43px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    background: #c50206;
    font-size: 17px;
    color: #fff;
    line-height: 43px;
  }
  .abc button{
    width: 100%;
    height: 100%;
    background: #c50206;
    font-size: 17px;
    color: #fff;
    border: none;
    outline: none;
  }
  label{
    float: right;
  }
  input{
    border: none;
    outline: none;
    display: none;
  }
  .list_item{
    margin-top: 53px;
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #e0e0e0;
  }
  .list_item span{
    font-size: 16px;
    display: block;
    margin-left: 10px;

  }
  .list_item img{
    width: 28px;
    height: 28px;
    float: right;
    margin-right: 10px;
    margin-top: -20px;
  }
  .sex input{

  }
  .dang{
    padding-left: 7px;
    height: 40px;
    padding-top: 8px;
    font-size: 16px;
  }
  .a{
    border-bottom: 1px solid #e0e0e0;
  }
</style>
