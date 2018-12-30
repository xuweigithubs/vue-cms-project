 /* jshint esversion: 6 */
import Vue from 'vue';
import app from './App.vue';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import router from  './router.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(router);
import {Header,Swipe,SwipeItem,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.http.options.root='http://192.168.15.89:8080/crm';
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
});