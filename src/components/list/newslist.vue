<template>
  <div class="box">
    <div class="wrap" v-html=" news">

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        news:""
      }
    },
    methods:{
      Panduan(){
        this.$axios.get('Panduan').then(res =>{
          if (res.code == 200){
            this.$axios.post('zjjf',{jfName:"信工新闻眼",jfNum:0.1}).then(resss =>{
              // console.log(resss.data);
            })
          }
        })
      },
      getid(){
        this.$axios.get("newslist",{_id:this.$route.query._id}).then(res=>{
          // console.log(res.data);
          this.news = res.data.content
        })
      }
    },
    created(){
      this.getid()
      this.Panduan()
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    margin-top: 53px;
    font-size: 16px;
  }
</style>
