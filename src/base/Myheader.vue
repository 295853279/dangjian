<template>
  <div style="background: #c50206;">
  <mt-header  :title="title" fixed>
      <mt-button icon="back" @click="$router.back()" slot="left" v-if="$route.name !='Notice' && $route.name !='My'&&$route.name !='gerenxinxi'">
      </mt-button>
    <mt-button icon="back" @click="btsn" slot="left" v-if="$route.name =='gerenxinxi'">
    </mt-button>
  </mt-header>
  </div>
</template>

<script>
    export default {
        name: "myheader",
      data(){
          return{}
      },
      methods:{
          btsn(){
            this.$router.push("/My")
          }
      },
        computed: {
        title() {
          return this.$route.meta.title;
        }
      }
    }
</script>

<style>
  div .mint-header {
    height: 43px;
    background: #c50206;
  }
  .mint-header-title {
    color: #fff;
    font-size: 19px;
    font-weight: 400;
  }
</style>
