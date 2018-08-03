<template>
<div class="box">
    <router-link to="xiugaigeren" class="abc">编辑</router-link>
  <div class="list">
    <div class="list_item">
      <span>头像</span>
      <img :src="user.headPic">
    </div>
    <div class="a"><mt-field label="姓名" placeholder=""  >{{user.userName}}</mt-field></div>
    <div class="a"><mt-field label="身份证" placeholder="">{{user.shenFen}}</mt-field></div>
    <div class="a"><mt-field label="家庭住址" placeholder="">{{user.homePlace}}</mt-field></div>
    <div class="a"><mt-field label="工作地址" placeholder="">{{user.workPlace}}</mt-field></div>
    <div class="a"><mt-field label="民族" placeholder="" >{{user.minZu}}</mt-field></div>
    <div class="a"><mt-field label="微信号" placeholder="" >{{user.wx}}</mt-field></div>
    <div class="a"><mt-field label="qq号" placeholder="">{{user.qq}}</mt-field></div>
    <div class="a"><mt-field label="性别" placeholder="">{{user.sex}}</mt-field></div>
    <div class="a"><mt-field label="最高学历" placeholder="" >{{user.edu}}</mt-field></div>
    <div class="a"><mt-field label="职称" placeholder="" >{{user.zhicheng}}</mt-field></div>
    <div class="a"><mt-field label="薪资水平" placeholder="" >{{user.gongZi}}</mt-field></div>
    <div class="a"><mt-field label="入党时间" >{{user.ruDangTime}}</mt-field></div>
    <div class="a"><mt-field label="最后缴纳党费时间"  >{{user.lastTime}}</mt-field></div>
    <div class="a"><mt-field label="所属党支部" placeholder="">{{user.dzb}}</mt-field></div>
  </div>
</div>
</template>

<script>

  export default {
    data(){
      return{
        user:{}
      }
    },
    methods:{
      userGet(){
        this.$axios.get("getUser").then(res=>{
          if(res.data.dzb == 0){
            res.data.dzb ="信息工程学院教工第一党支部"
          }
          if(res.data.dzb == 1){
            res.data.dzb ="信息工程学院教工第二党支部"
          }
          if(res.data.dzb == 2){
            res.data.dzb ="信息工程学院学生第一党支部"
          }
          if(res.data.dzb == 3){
            res.data.dzb ="信息工程学院学生流动党支部（北京）"
          }
          if(res.data.shenFen ==0){
            res.data.shenFen="积极分子"
          }
          if(res.data.shenFen ==1){
            res.data.shenFen="预备党员"
          }
          if(res.data.shenFen ==2){
            res.data.shenFen="正式党员"
          }
          this.user =res.data
          // console.log(this.formData)

        })
      },
    },
    created(){
      this.userGet()
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
