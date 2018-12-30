<template>
        <div class="newsContainer">
              <h3 class="title">
                  {{newInfo.title}}
              </h3>
              <p class="subtitle">
                  <span> 发表日期:{{newInfo.addTimeStr}}</span>
                  <span>点击:100次</span>
              </p>
              <hr>
              <div class="newsInfoContent" v-html="newInfo.abstractcontent">
                   
              </div>
              <comment-box :id="this.id"></comment-box>
        </div>
  </template>
  <script>
        import {Toast} from 'mint-ui';
        import comment from "../subcomponets/commonts.vue";
        export default{
                data(){
                    return {
                       id:this.$route.params.id,
                       newInfo:{}
                    }
                }
                ,
                mounted(){ 
                     this.getNewsInfo();
                },
                methods:{
                    getNewsInfo(){
                        this.$http.jsonp('mobileactiveimage/selectNewByConditionJsonP.action',{
                             params:{
                                jsonpCallback:"jsonpCallback"
                             },
                             jsonp:"callbackparam"
                        }).then(
                           result=>{
                                this.newInfo=result.body[0];
                           }
                        );
        
                    }
                },
                components:{
                     "comment-box":comment
                }
            }
 </script>
<style lang="scss">
        .newsInfoContent{
            width:100px solid red !important;
        }
       .newsContainer{
           padding: 0px 4px;
       
       }
       .title{
              font-size: 16px;
              text-align:center;
              margin:15px 0;
              color:red;
          }
          .subtitle{
             font-size: 13px;
             color: #226aff;
             display: flex;
             justify-content:space-between
          }
        
    .newsInfoContent img{
              width: 80% !important;
              float: right !important;
          }
</style>