<template>
<div class="wrap">
  <div id="content">

  </div>
 </div>
</template>

<script>
    export default {
        data(){
          return{
            map:null,
            mapss:[]
          }
        },
        methods:{
            maps(){
              this.$axios.get('maps').then(res =>{
                // console.log(res.data);
                this.mapss = res.data
              })
            },
            initMap(){
              var mp = new BMap.Map('content');
              mp.centerAndZoom(new BMap.Point(116.477112,39.998299),5);
              for(var i=0;i<this.mapss.length;i++){
                // console.log(i)
                var marker = new BMap.Marker(new BMap.Point(this.mapss[i].jd,this.mapss[i].wd));
                mp.addOverlay(marker);
                var label = new BMap.Label(this.mapss[i].text,{offset:new BMap.Size(20,-10)});
                marker.setLabel(label);

              }

              // var marker = new BMap.Marker(new BMap.Point(114.03234,33.053141));
              // mp.addOverlay(marker);
              // var label = new BMap.Label("信息工程学院学生党支部 支部书记：曹圣溥 电话：15536768534",{offset:new BMap.Size(20,-10)});
              // marker.setLabel(label);
              //
              // var marker = new BMap.Marker(new BMap.Point(114.03234,33.053141));
              // mp.addOverlay(marker);
              // var label = new BMap.Label("信息工程学院党总支 支部书记：曹圣溥 电话：15536768534",{offset:new BMap.Size(20,-30)});
              // marker.setLabel(label);

              var top_right_navigation = new BMap.NavigationControl({
                anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_ZOOM,offset:new BMap.Size(20,63)});
              mp.addControl(top_right_navigation);
              var geolocationControl = new BMap.GeolocationControl();
              mp.addControl(geolocationControl);
            }
        },
          created(){
            this.maps();
            // this.$nextTick(() =>{
            //
            // })
            setTimeout(()=>{
              this.initMap();
            },2000)

        }
    }
</script>

<style scoped>
  .wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  #content{
    width:100%;
    height: 100%;
  }
</style>
