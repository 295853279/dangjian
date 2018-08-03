<template>
    <div class="box" v-html="day">

    </div>
</template>

<script>
    export default {
        data(){
          return{
              day:""
          }
        },
      methods:{
        Panduan(){
          this.$axios.get('Panduan').then(res =>{
            if (res.code == 200){
              this.$axios.post('zjjf',{jfName:"党史上的今天",jfNum:0.1}).then(resss =>{
                // console.log(resss.data);
              })
            }
          })
        },
          today(){
            this.$axios.get('today',{_id:this.$route.query._id}).then(res =>{
              // console.log(res.data);
              this.day = res.data
            })
          }
      },
      created(){
        this.today()
        this.Panduan()
      }
    }
</script>

<style scoped>
  .box{
    margin-top: 53px;
    width: 355px;
    padding: 10px;
    font-size: 14px;
  }

</style>
