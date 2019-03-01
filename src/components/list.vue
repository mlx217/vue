<template>
  <div id="list">
    <div class="header">
      <p @click="go()">< 返回</p>
      <h1>女香</h1>
    </div>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">综合</mt-tab-item>
        <mt-tab-item id="2">新品</mt-tab-item>
        <mt-tab-item id="3">销量</mt-tab-item>
        <mt-tab-item id="4">价格</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected" >
        <mt-tab-container-item id="1">
          <div class="brand-detail">
            <ul>
              <li v-for="(item,i) in info" :key="i" >
                <router-link :to="'/detail/'+item.id">
                <img src="../../static/img/1.jpg" alt>
                <div class="brand-detail-w">
                  <p>{{item.detail}}</p>
                  <i>￥{{item.price}}</i>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <div class="brand-detail">
            <ul>
             <li v-for="(item,i) in info1" :key="i" >
                <router-link :to="'/detail/'+item.id">
                <img src="../../static/img/2.jpg" alt>
                <div class="brand-detail-w">
                  <p>{{item.detail}}</p>
                  <i>￥{{item.price}}</i>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
         <div class="brand-detail">
            <ul>
                <li v-for="(item,i) in info2" :key="i" >
                <router-link :to="'/detail/'+item.id">
                <img src="../../static/img/3.jpg" alt>
                <div class="brand-detail-w">
                  <p>{{item.detail}}</p>
                  <i>￥{{item.price}}</i>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
         <div class="brand-detail">
            <ul>
                 <li v-for="(item,i) in info3" :key="i" >
                <router-link :to="'/detail/'+item.id">
                <img src="../../static/img/4.jpg" alt>
                <div class="brand-detail-w">
                  <p>{{item.detail}}</p>
                  <i>￥{{item.price}}</i>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name:'List',
    methods: {
        go(){
          this.$router.go(-1)  
        }
        
    },
    data(){
      return{
        selected:'1',
         info:'',
         info1:'',
         info2:'',
         info3:'',
         value:""
      }    
  },
   mounted() {
       var _this=this;
    axios({ 
      url:"http://localhost:3000/users/list"
      }).then(function(data) {
     // console.log(data.data)
      _this.info=data.data;
       _this.info1=data.data.slice(7,12);
        _this.info2=data.data.slice(5,12);
         _this.info3=data.data.slice(3,12);
    });
   }  
}
</script>

<style scoped>
a{text-decoration: none}
#brand {
  text-align: left;
}
.header {
  height: 50px;
}
.header p {
  float: left;
  line-height: 50px;
}
.header h1 {
  float: left;
  padding-left: 20%;
}
* {
  margin: 0;
  padding: 0;
}
.mint-search {
  height: 50px;
}
.mint-navbar {
  margin-top: 5px;
  color: #111;
  height: 40px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.brand-detail ul li {
  height: 150px;
  width: 100%;
  list-style: none;
  overflow: hidden;
}
.brand-detail ul li img {
  height: 130px;
  width: 50%;
  float: left;
}
.brand-detail-w p {
  margin-top: 20px;
  font-size: 20px;
}
.brand-detail-w i {
  line-height: 40px;
  font-size: 20px;
  color: #f00;
  font-style: normal;
}
</style>
