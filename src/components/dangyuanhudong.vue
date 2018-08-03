<template>
  <div class="content">
    <ul>
      <li class="item" v-for="item in inct">
        <div class="image">
          <div><img src="http://oowantxlb.bkt.clouddn.com/upload/front/bb869a657338f32a582fa7068ae0e544.png" alt=""></div>
          <div class="content_left">
            <div class="txt">{{item.userName}}</div>
            <div class="time">
              <i class="iconfont icon-shijian"></i>
              <span>{{item.createTime}}</span>
              <i class="iconfont icon-shengyin"></i>
              <span>公开</span>
            </div>
          </div>
          <div class="lxyz">党员互动</div>
        </div>
        <div class="zcwd">{{item.content}}</div>
        <div class="nis">
          <router-link :to="'/huifu?_id='+item._id">
          <span class="hf">
            <i class="iconfont icon-web-icon-"></i>
            <span>回复</span>
          </span>
          </router-link>
        </div>
      </li>
    </ul>
    <div class="dj">
      <mt-button class="jia" @click="btn"><i class="iconfont icon-jiahao2"></i></mt-button>
    </div>
    <div class="sty" v-show="isShow">
      <form action="" class="htc">
        <textarea  cols="30" rows="10" v-model="content"></textarea>
        <input id="btns" @click="messages" class="fa"type="submit" value="发布">
        <input class="qu" @click="btn" type="button" value="取消">
      </form>
    </div>
  </div>
</template>

<script>

    export default {
        data(){
            return{
              inct:"",
              isShow:false,
              content:""
            }
        },
      methods:{
        //绑定隐藏界面
        btn(){
          this.isShow = !this.isShow;
        },
        //发布帖子
        messages(){
          this.$axios.post('messages',{content:this.content,type:1}).then(res =>{
            // console.log(res);
          })
        },
        interact(){
            this.$axios.get('interact',{_id:this.$route.query._id}).then(res =>{
              // console.log(res.data);
              this.inct = res.data
            })
          }
      },
      created(){
          this. interact()
          // this.messages()
      }
    }
</script>

<style scoped>
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 0;
    overflow: auto;
    background: #f0f0f0;
  }
  .item{
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    font-size: 16px;
    height: 107px;
    margin-bottom: 10px;
  }
  .image{
    width: 33px;
    height: 33px;
    border-radius: 50%;
    overflow: hidden;
  }
  .image img{
    width: 100%;
    height:33px;
  }
  .content_left{
    float: left;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 0;
  }
  .txt{
    font-size: 18px;
    color: #333;
    position: absolute;
    top: 15px;
    left: 58px;
  }
  .time{
    font-size: 12px;
    margin-right: 5px;
    position: absolute;
    top: 40px;
    left: 60px;
  }
 .time .iconfont{
   font-size: 12px;
 }
 .zcwd{
   margin: 20px auto;
   width: 343px;
   height: 30px;
   font-size: 20px;
   color: #444;

 }
  .lxyz{
    position: absolute;
    top: 18px;
    right: 16px;
    border: 1px solid red;
    border-radius: 15%/50%;
    font-size: 12px;
    color: red;
    padding: 4px 8px;
  }
  .nis{
    position: absolute;
    right: 15px;
    bottom: 17px;
  }
  .nis .iconfont{
    font-size: 20px;
  }
  .jia{
    z-index: 999;
    position: fixed;
    right: 10px;
    bottom: 71px;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    padding: 0;
  }
  .jia .iconfont{
    font-size: 55px;
    color: red;
    padding: 0;
  }
  .sty{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5)
  }
  .sty .htc{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 160px;
    background: #f1f1f1;
  }
  .sty textarea{
    position: fixed;
    bottom:50px;
    left: 9px;
    width: 95%;
    height: 100px;
    border-radius: 5px;
    border: none;
    outline:none;
  }
  .sty .fa{
    position: fixed;
    bottom: 10px;
    left: 15px;
    width: 34px;
    height: 30px;
    background: #ef473a;
    border: none;
    outline:none;
    border-radius: 5px;
    color: #fff;
  }
  .sty .qu{
    position: fixed;
    bottom: 10px;
    right: 1px;
    width: 34px;
    height: 30px;
    border: none;
    outline:none;
    border-radius: 5px;
    background:  #f8f8f8;
    color: #444;
  }
</style>




