<template>
  <div class='app-container'>
      <mt-header fixed title="综合信息管理平台"></mt-header>
     <div class="main">
        <transition>
          <router-view></router-view>
        </transition>
     </div>
     <div class="navIcon">
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-xuwei" to="/home">
              <span class="mui-icon mui-icon-home"></span>
              <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-xuwei" to="/member">
              <span class="mui-icon mui-icon-contact"></span>
              <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-xuwei" to="/shopingcar">
              <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge">0</span></span>
              <span class="mui-tab-label">购物车</span>
            </router-link>
          
            <router-link class="mui-tab-item-xuwei" to="/search">
              <span class="mui-icon mui-icon-search"></span>
              <span class="mui-tab-label">搜索</span>
            </router-link>
          </nav>
     </div>
   </div>
</template>


<script>
 
</script>
<style lang="scss" scoped>
   .app-container{
     padding-top: 40px;
     padding-bottom: 40px;
     overflow-x: hidden;
   }
   .v-enter{
     opacity: 0;
     transform: translateX(100%);
   }
   .v-leave-to{
     opacity: 0;
     transform: translateX(-100%);
     position: absolute;
   }
   .v-enter-active,
   .v-leave-active{
     transition: all 0.5s ease;
   }
   .main{
     width: 100%;
     height:auto;
   }
   .navIcon{
     width: 100%;
     height:20px;
   }
   
.mui-bar-tab .mui-tab-item-xuwei.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-xuwei {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-xuwei .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-xuwei .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>