<template>
  <div class="box">
    <div class="contente">
      <br>
      <p class="firhead">评议须知</p>
      <p class="txt">在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
      <div class="content_s">
        <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
        <p>2、参加“两学一做”学习教育情况；</p>
        <p>3、参加党的组织生活、按要求交纳党费；</p>
        <p>4、学习情况、业务能力提高情况；</p>
        <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
        <p>6、联系群众、关心群众、服务群众情况；</p>
        <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
      </div>
    </div>
    <div class="fotter_wrap">
      <div class="footer_right">
        <select name="dzb" id="" class="abc" v-model="dzb">
          <option value="4" class="pl">请选择</option>
          <option value="0" >信息工程学院教工第一党支部</option>
          <option value="1" >信息工程学院教工第二党支部</option>
          <option value="2" >信息工程学院学生党支部</option>
          <option value="3" >信息工程学院学生流动党支部（北京）</option>
        </select>
      </div>
      <div class="right">
        <mt-button class="next" @click="dzbChange">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Taost} from 'mint-ui'
  export default {
      data(){
        return{
          dzb:"4"
        }
      },
      methods:{
        dzbChange() {
          // console.log(this.dzb);
          if (this.dzb == 4) {
            return
          } else {
            this.$router.push({path: "/canpdy", query: {dzb:this.dzb}})
          }
        }
      }
  }
</script>

<style scoped>
  .box{
    position: fixed;
    top: 13px;
    width: 100%;
    height: 100%;
  }
  .contente{
    position: relative;
    top: 0;
  }
  .firhead{
    text-align: center;
    font-size: 16px;
  }
  .txt{
    font-size: 16px;
    margin: 15px 10px;
    text-align: left;
    color: #606060;
  }
  .content_s p{
    text-align: left;
    margin: 10px;
    color: #606060;
    font-size: 15px;
  }
  .fotter_wrap{
    display: flex;
    justify-content: space-around;
  }
  .footer_right{
    width: 187px;
    height: 46px;

  }
  .footer_right .abc{
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 100%;
    background: #c50206;
    padding-left: 28px;
    color: #fff;
    font-size: 16px;
  }
  .next{
    background: #c50206;
    color: #fff;
    font-size: 16px;
    width: 93px;
    height: 46px;
  }
</style>
