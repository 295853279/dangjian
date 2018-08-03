// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import { Field } from 'mint-ui';
import { Radio } from 'mint-ui';
import Axios from './util/Axios'
// import BaiduMap from 'vue-baidu-map';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Cell } from 'mint-ui';






Vue.use(ElementUI);
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'GBmzIpvPkdA8YzDPtIN6XiF20j2ugx9V'
// })
Vue.component(Radio.name, Radio);
Vue.config.productionTip = false;
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);
Vue.component(Cell.name, Cell);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
