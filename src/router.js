 /* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import HomeContainer from './components/tabbar/HomeContainer.vue';

import MemberContainer from './components/tabbar/MemberContainer.vue';

import SearchContainer from './components/tabbar/SearchContainer.vue';

import ShopCarContainer from './components/tabbar/ShopCarContainer.vue';

import newList from './components/news/newslist.vue';
import newInfo from './components/news/newsInfo.vue';
import picShare from  './components/picture/pictureShare.vue';

var router=new VueRouter({
    routes:[
         {path:'/',redirect:'/home'},
         {path:'/home',component:HomeContainer},
         {path:'/member',component:MemberContainer},
         {path:'/search',component:SearchContainer},
         {path:'/shopingcar',component:ShopCarContainer},
         {path:'/home/newsList',component:newList},
         {path:'/home/newInfo/:id',component:newInfo},
         {path:'/home/picShare',component:picShare}
    ],
    linkActiveClass:'mui-active'
});
export default router;