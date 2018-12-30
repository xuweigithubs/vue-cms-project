<template>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
						<div class="mui-media-body">
						   <h1>{{item.title}}</h1>	 
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.addTimeStr}}</span>
                                <span>点击次数:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
</template>
<script>
import {Toast} from 'mint-ui';
export default{
        data(){
            return {
                newsList:[]
            }
        }
        ,
        created(){
           this.getNewsList();
        },
        methods:{
            getNewsList(){
                    this.$http.jsonp('mobileactiveimage/selectNewByConditionJsonP.action',{
                        params:{
                            operatorType:'111'
                        },
                        jsonp:"callbackparam"
                    }).then(
                        result=>{
                            this.newsList=result.body;
                        }
                    );

            }
        }
    }
</script>

<style lang="scss" scoped>
        .mui-table-view{
            li{
                 h1{font-size:14px;}
                .mui-ellipsis{
                    font-size:12px;
                    color:#226aff;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
 </style>