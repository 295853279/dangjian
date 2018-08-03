<template>
  <div class="box" v-html="news">

  </div>
</template>

<script>
  export default {
    data() {
      return{
        news:""
      }
    },
    methods:{
      Panduan(){
        this.$axios.get('Panduan').then(res =>{
          if (res.code == 200){
            this.$axios.post('zjjf',{jfName:"特色活动",jfNum:0.1}).then(resss =>{
              // console.log(resss.data);
            })
          }
        })
      },
      getid(){
        this.$axios.get('newslist',{_id:this.$route.query._id}).then(res =>{
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
    position: relative;
    top: 53px;
    font-size: 16px;
  }
</style>
