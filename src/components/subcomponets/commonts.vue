<template>
    <div class="ctm_container">
        <h3>评论子组件</h3>
        <hr>
        <textarea v-model="message" placeholder="请输入要BB的内容(最多可以吐槽120次)" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="addCommounts">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in commounts" :key="item.createdateStr">
             <div class="cmt_item">
                  <div class="cmt-title">
                      第{{i+1}}楼&nbsp;&nbsp;发表时间:{{item.createdateStr}}
                  </div>
                  <div class="cmt-body">
                      {{item.commount}}
                  </div>
             </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<style  lang="scss" scoped>
   .ctm_container{
      h3{
         font-size:18px;
      }
      textarea{
        font-size:14px;
        height: 85px;
        margin: 0;
      }
   }
  .cmt-list{
       margin: 10px 0;
      .cmt_item{
          font-size: 13px;
          .cmt-title{
              line-height: 30px;
              background-color: #ccc
          }
          .cmt-body{
               line-height: 35px;
               text-indent: 2em;
          }
      }
  }
</style>
<script>
    import $ from "jquery";
    import {Toast} from 'mint-ui';
    export default{
        data:function () {
            return {
                pageIndex:1,//默认展示第一页
                commounts:[],
                message:""
            }
        },
        mounted(){
            this.getCommountsInfo();
        },
        methods:{
            //获取首页评论
            getCommountsInfo(){
                this.$http.jsonp('commount/selectPageByConditionJsonP.action',{
                    params:{
                        page:this.pageIndex,
                        rows:5,
                        id:this.id,
                        commounttype:1
                    },
                    jsonp:"callbackparam"
                 }
                ).then(result=>{
                    this.commounts=this.commounts.concat(result.body);
                });
             }
             //加载更多评论
           ,getMore(){
                this.pageIndex++;
                this.getCommountsInfo();
            },
            //添加评论
            //添加评论
            addCommounts(){
                    let self=this;
                    $.ajax({ 
                            url: 'http://192.168.15.89:8080/crm/commount/operateCommountJsonPData.action', 
                            type: 'POST', 
                            async:true,
                            dataType: 'JSONP', 
                            data:{
                                operatorType:"add",
                                commount:this.message.trim(),
                                buinessprocessid:this.id,
                                parentid:2
                            },
                            jsonp: 'callbackparam',  
                            jsonpCallback:'jsonpCallback',
                            success: function (res) {
                               var cmt={
                                    commounttype:1,
                                    parentid:3,
                                    customerid:"默认用户",
                                    buinessprocessid:this.id,
                                    createdate:Date.now(),
                                    commount:self.message.trim()
                                 }
                                 self.commounts.unshift(cmt);
                                 self.message='';
                            },
                            error:function (textStatus) {
                                console.log("信息:",textStatus);
                            }
                    }) 
            }
        },
        props:["id"]
     }
</script>