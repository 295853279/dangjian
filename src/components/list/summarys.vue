<template>
  <div class="content">
    <div class="wrap">
      <el-upload
        action="http://upload-z1.qiniup.com"
        list-type="picture-card"
        :on-success="upload"
        :data="{token:token}"
        :on-remove="handleRemove"
        :on-preview="handlePictureCardPreview">

        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="pic" alt="">
      </el-dialog>
    </div>
    <div class="foot">
      <mt-button class="tjsh" @click="put">提交审核</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        token:"",
        pic:"",
        type:""
      };
    },
    methods: {
      mste(){
        this.$axios.post('zjjf',{jfName:"上传心得总结",jfNum:5}).then(res =>{
          // console.log(res.data);
        })
      },
      put(){
        // console.log(this.pic);
        this.$axios.post('put',{pic:this.pic,type:2}).then(res =>{
          // console.log(res);
          if(res.ret==true){
            Toast({
              message: "提交成功",
              position: 'bottom',
              duration: 2000
            })
            // this.$router.go(0)
          }else {
            Toast({
              message: "提交失败",
              position: 'bottom',
              duration: 2000
            })
          }
          this. mste()
        })
      },
      getToken(){
        this.$axios.qiniuGet().then(res =>{
          // console.log(res.data);
          this.token = res.data
        })
      },
      upload(res){
        this.pic = "http://image.yaojunrong.com/"+res.key
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    created(){
      this.getToken()
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 53px;
  }
  .wrap{
    margin-left: 10px;
  }
  .el-upload .el-upload--picture-card {
    width: 178px;
    height: 178px;
  }

  .el-icon-plus{
    position: relative;
    bottom: 10px;
  }
  .foot{
    position: absolute;
    bottom: 70px;
    width: 100%;
    text-align: center;
  }
  .tjsh{
    background: #c50206;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 14px;
    width: 60%;

  }
</style>
