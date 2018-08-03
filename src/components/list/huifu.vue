<template>
  <div class="content">
      <div class="item">
        <div class="image">
          <div><img src="http://oowantxlb.bkt.clouddn.com/upload/front/bb869a657338f32a582fa7068ae0e544.png" alt=""></div>
          <div class="content_left">
            <div class="txt">{{red.userName}}</div>
            <div class="time">
              <i class="iconfont icon-shijian"></i>
              <span>{{red.createTime}}</span>
            </div>
          </div>
        </div>
        <div class="zcwd">{{red.content}}</div>
      </div>
    <div class="item"  style="background: #e0e0e0;" v-for="item in red.reply" :key="item.index">
      <div class="image">
        <div><img :src="item.image" alt=""></div>
        <div class="content_left">
          <div class="txt">{{item.people}}</div>
          <div class="time">
            <i class="iconfont icon-shijian"></i>
            <span>{{item.time}}</span>
          </div>
        </div>
      </div>
      <div class="zcwd">{{item.text}}</div>
    </div>
    <div class="no">还没有数据</div>
    <div class="comment">
      <input type="text" placeholder="评论内容" v-model="text">
      <mt-button size="small" @click="reply">评论</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data(){
        return{
          red:{},
          text:""
        }
    },
    methods:{
      reply(){
        this.$axios.post('replys',{text:this.text,_id:this.$route.query._id}).then(res =>{
          // console.log(res);

          if(res.ret==true){
            Toast({
              message: "回复成功",
              position: 'bottom',
              duration: 2000
            })
            this.$router.go(0)
          }else {
            Toast({
              message: "回复失败",
              position: 'bottom',
              duration: 2000
            })
          }
        })
      },
      interact(){
        this.$axios.get('interact',{_id:this.$route.query._id}).then(res =>{
          // console.log(res.data);
          this.red = res.data[0]
          // console.log(res.data[0].reply);
        })
      }
    },
    created(){
      this. interact()
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
    margin: 12px 10px;
    padding: 16px;
    font-size: 16px;
    height: 84px;
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
    font-size: 16px;
    color: #444;
  }
  .no{
    font-size: 14px;
    width: 100%;
    height: 20px;
    text-align: center;
    padding: 10px 0;
  }
  .comment{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: #fff;
  }
  .comment input{
    display: block;
    width: 296px;
    height: 29px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid red;
    margin-left: 8px;
    margin-top: 9px;
    outline:none;
    padding-left: 10px;
  }
  .comment button{
    background: #c50206;
    position: absolute;
    right: 12px;
    bottom: 10px;
    width: 37px;
    height: 30px;
    font-size: 12px;
    color: #fff;
    padding: 2px 4px 1px;
    min-width: 28px;
    min-height: 30px;
    line-height: 25px;
    text-align: center;
  }
</style>
