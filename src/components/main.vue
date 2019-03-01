<template>
  <div id="main">
    
    <section>
      <router-view></router-view>
    </section>

    <div class="footer">
      <router-link to="/index" tog="span" >

          <i class="iconfont icon-yemian"></i>
          <p>首页</p>
      </router-link>
      <router-link to="/group" tog="span">
        <i class="iconfont icon-pintuanx"></i>
        <p>拼团</p>
      </router-link>
      <router-link to="/search" tog="span">
        <i class="iconfont icon-fenlei"></i>
        <p>搜索</p>
      </router-link>
      <router-link to="/cart" tog="span">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/my" tog="span">
        <i class="iconfont icon-icon-me"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
name:"Main",
data() {
  return {
   
    
  }
},
methods: {

},



};
</script>
<style scoped="">
.footer .router-link-active i{
  color: #f00;
}
.footer .router-link-active p{
  color: #f00;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#main {
  height: 100vh;
  display: flex;
flex-direction: column;
}
.footer {
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.footer i {
  display: block;
  height: 30px;
  width: 100%;
  font-size: 24px;
  color: #aaaaaa;
}
.footer p {
  font-size: 16px;
  color: #aaaaaa;
}
span {
  display: block;
}
section {
  flex: 1;
  overflow: auto;
  
}
</style>
