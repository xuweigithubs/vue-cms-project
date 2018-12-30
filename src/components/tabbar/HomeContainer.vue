<template>
       <div class='root'>
           <div class='swipe'>
                <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in lunboTuList" :key="item.id">
                                <img :src="item.imageurl" alt=""/>
                        </mt-swipe-item>
                </mt-swipe>
             </div>
             <div class='mui-grid'>
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/newsList">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid1.png" alt=""/>
                                        <div class="mui-media-body">新闻资讯</div>
                                </router-link>
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/picShare">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid2.png" alt=""/>
                                        <div class="mui-media-body">图片分享</div>
                                </router-link>
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/goShopping">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid3.png" alt=""/>
                                        <div class="mui-media-body">商品购买</div>
                                </router-link>
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="//feedBack">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid4.png" alt=""/>
                                        <div class="mui-media-body">留言反馈</div>
                                </router-link>
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/videoZone">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid5.png" alt=""/>
                                        <div class="mui-media-body">视频专区</div>
                                </router-link>
                                <router-link class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" to="/home/contractUs">
                                        <img src="http://192.168.15.89:8080/crm/mobileActiveImages/grid6.png" alt=""/>
                                        <div class="mui-media-body">联系我们</div>
                                </router-link>
                        </ul>  
              </div>   
       </div>
      
</template>
<script>
    import $ from "jquery";
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return {
                lunboTuList:[]
            }
        }
        ,
        created(){
           this.getLunboTu();
        },
        methods:{
            getLunboTu(){
                    let self=this;
                    console.log("圖片信息",);
                    $.ajax({ 
                            url: 'http://192.168.15.89:8080/crm/mobileactiveimage/selectByConditionJsonP.action', 
                            type: 'GET', 
                            async:false,
                            dataType: 'JSONP', 
                            jsonp: 'callbackparam',  
                            jsonpCallback:'jsonpCallback',
                            success: function (res) {
                                self.lunboTuList=res;
                                console.log("圖片信息",);
                            },
                            error:function (textStatus) {
                                console.log("信息:",textStatus);
                            }
                    }) 

            }
        }
    }
</script>

<style lang="scss" scoped>
  .swipe{
      height:200px;
      width: 100%;
      float: left;   
  }
  .root{
      height: 100%;
      width:100%; 
     
  }     
  .mui-grid{
      height: auto;
      width: 100%;
      float: left;    
  }
  .mint-swipe-items-wrap>div:nth-child(1){
          background-color: red;
  }
  .mint-swipe-items-wrap>div:nth-child(2){
          background-color: blue;
  }
  .mint-swipe-items-wrap>div:nth-child(3){
          background-color: green;
  }
  .swipe img{
      width: 100%;
      height: 100%;
  }
  .mui-grid-view.mui-grid-9 {
    margin: 0;
    padding: 0;
    border: none;
    background-color:white;
    width: 100%;
    height: 100%;
    float: left;
   
}
.mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;  
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    padding: 11px 15px;
    vertical-align: top;
    border:none;
}

</style>