<template>
  <div id="index">
    <div class="denglu_">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
       
    <div class="lunbo">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../static/img/25.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/18.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/21.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="fenlei">
      <ul>
        <li >
          <router-link to="/brand" tog="span">
         <i class="iconfont icon-pinpai"></i>
          <p>品牌</p>
      </router-link> 
        </li>
         <li >
          <router-link to="/list" tog="span">
         <i class="iconfont icon-xiangshui2"></i>
          <p>女香</p>
      </router-link> 
        </li>
         <li >
          <router-link to="/list" tog="span">
          <i class="iconfont icon-xiangshui"></i>
          <p>男香</p>
      </router-link> 
        </li>
         <li >
          <router-link to="/list" tog="span">
          <i class="iconfont icon-xiangshui1"></i>
          <p>Q版</p>
      </router-link> 
        </li>
     
  
      </ul>
    </div>
    <div class="jiange"></div>
    <div class="hot">
      <h2>Hot 热销优选</h2>
      <p>热销-优选商品</p>
      <ul>
        <li v-for="(item,i) in info" :key="i">
          <router-link :to="'/detail/'+item.id">
          <img :src="'../../static/img/'+(i+15)+'.jpg'" alt>
          <p>￥{{item.price}}</p>
         </router-link>
        </li>
       
      </ul>
    </div>
    <div class="jiange"></div>
    <div class="qianggou">
      <h2>限时抢购</h2>
      <p>全场包邮</p>
      <div>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1"><i>10:00</i><p>去抢购</p></mt-tab-item>
          <mt-tab-item id="2"><i>12:00</i><p>去抢购</p></mt-tab-item>
          <mt-tab-item id="3"><i>14:00</i><p>去抢购</p></mt-tab-item>

        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
              <ul class="love">
        <li v-for="(item,i) in info" :key="i">
          <router-link :to="'/detail/'+item.id">
          <img :src="'../../static/img/'+(i+1)+'.jpg'" alt>
          <span>{{item.detail}}</span>
          <p>￥{{item.price}}</p>
         </router-link>
        </li>
       
      </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
                   <ul class="love">
        <li v-for="(item,i) in info" :key="i">
          <router-link :to="'/detail/'+item.id">
          <img :src="'../../static/img/'+(i+5)+'.jpg'" alt>
          <span>{{item.detail}}</span>
          <p>￥{{item.price}}</p>
         </router-link>
        </li>
       
      </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
                    <ul class="love">
        <li v-for="(item,i) in info" :key="i">
          <router-link :to="'/detail/'+item.id">
          <img :src="'../../static/img/'+(i+10)+'.jpg'" alt>
          <span>{{item.detail}}</span>
          <p>￥{{item.price}}</p>
         </router-link>
        </li>
       
      </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="love">
      <div class="love-h">猜你喜欢</div>
        <ul>
           <li v-for="(item,i) in info1" :key="i" tag="div">
          <router-link :to="'/detail/'+item.id">
          <img :src="'../../static/img/'+(i+5)+'.jpg'" />
          <span>{{item.detail}}</span>
          <p>￥{{item.price}}</p>
         </router-link>
        </li>
        </ul>
   
      <div class="love-h">我是有底线的</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Mock from "mockjs";
//import data3 from "../data/data3";
export default {
  name: "Index",
  data() {
    return {
      info:"",
      selected:"1",
      value:'',
      info1:''
      
    }
  },
  mounted() {
    var _this=this;
    axios({url: "http://localhost:3000/users/list"})
    .then(function(data){
     
      var data1=data.data.slice(0,4)
      var data2=data.data.slice(4,10)
      _this.info=data1;
      _this.info1=data2;
    }) 
  },
};
</script>
<style scoped="">
a{text-decoration: none;}
li{
  list-style: none;
}
#index {
  overflow: auto;
}
i{
    font-style: normal;
    
}

.mint-search{
  width: 100%;
  height: 50px;
}
.lunbo {
  height: 150px;
}
* {
  margin: 0;
  padding: 0;
}
.fenlei {
  height: 60px;
  width: 100%;
}
.fenlei ul {
    padding-top: 10px;
  height: 50px;
  width: 100%;
}
.fenlei li {
  float: left;
  width: 25%;
  list-style: none;
}
.fenlei li a{
  color: #666;
}
.jiange {
  width: 100%;
  height: 20px;
  background: #eaeaea;
}
.hot h2 {
  line-height: 30px;
  padding-top: 15px;
}
.hot img {
  width: 60px;
  height: 60px;
}
.hot p {
  font-size: 14px;
}
.hot {
  width: 100%;
  height: 180px;
}
.hot ul {
  width: 100%;
  height: 80px;
}
.hot ul li {
  width: 25%;
  float: left;
  padding-top: 20px;
}
.qianggou h2 {
  line-height: 30px;
  padding-top: 15px;
}
.qianggou i{
  font-size: 14px;
}
.qianggou p {
  font-size: 14px;
}
.love {
  width: 100%;
}
.love-h {
  width: 100%;
  height: 30px;
  background: #eaeaea;
  font-size: 14px;
  line-height: 30px;
}
.love li {
  float: left;
  width: 49%;
  height: 250px;
  list-style: none;
  border-bottom: 5px solid #eaeaea;
   border-collapse:collapse; 
}
.love li img {
  width: 100%;
  height: 150px;
}


 #main   .footer a span i{
    color:#f00;
}
.footer a span p{
    color:#f00;
}
</style>