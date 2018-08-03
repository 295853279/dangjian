<template>
  <div id="app">
    <Myheader></Myheader>
    <router-view></router-view>
  </div>
</template>

<script>

    import Myheader from './base/Myheader'
    export default {
    name: 'App',
    components:{
      Myheader
    }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  li{list-style-type: none;}
  a{text-decoration: none;}
  /*.content{*/
    /*position: fixed;*/
    /*width: 100%;*/
    /*top: 40px;*/
    /*bottom: 50px;*/
    /*overflow: auto;*/
  /*}*/
</style>
