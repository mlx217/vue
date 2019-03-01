<template>
  <div id="group">
      <div class="header">拼团</div>
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
    <div class="jingxuan">
      <p>精选商品</p>
    </div>
    <div class="jingxuan-img" >       
      <div class="img-1" v-for="(item,i) in info3" :key="i">
        <router-link :to="'/detail/'+item.id" tag="div">
        <img src="../../static/img/26.jpg">
        <div class="img1-w">
          <span>{{item.product}}伊丽莎白雅顿白茶香水</span>
          <p>清新花香淡雅</p>
          <i>去看看></i>
        </div>
        </router-link>
      </div>
      <div class="img-2">
          <ul>
           <li v-for="(item,i) in info2" :key="i" >
          <router-link :to="'/detail/'+item.id" tag="div">
          <img :src="'../../static/img/'+(i+5)+'.jpg'" />
          <div class="img2-w">
            <span >{{item.product}}清新花香淡雅清新花香淡雅</span>
            <p>清新花香淡雅</p>
             <i>去看看></i>
             </div>
          
         </router-link>
        </li>
        </ul>
        <!-- <ul>
          <li>
            <img src="../../static/img/28.jpg" alt>
            <div class="img2-w">
              <span>伊丽莎白雅顿白茶香水</span>
              <p>清新花香淡雅</p>
              <i>去看看></i>
            </div>
          </li>

        </ul> -->
      </div>
    </div>
<div class="group-two">
  <ul>
           <li v-for="(item,i) in info1" :key="i" tag="div">
          <router-link :to="'/detail/'+item.id" tag="div">
          <img :src="'../../static/img/'+(i+5)+'.jpg'" />
            <span class="group-1">{{item.product}}</span>
             <span class="group-2"><p >单买价</p><p class="group-11">￥{{item.price}}</p><i>2人团</i></span>
            <span class="group-3"><p>￥{{item.price}}</p><i>去开团</i></span>
         </router-link>
        </li>
        </ul>


</div>


  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Group",
  data() {
    return {
      info1:'',
      info2:'',
      info3:''
    };
  },
   mounted() {
    var _this=this;
    axios({url: "http://localhost:3000/users/list"})
    .then(function(data){
     
      var data1=data.data.slice(2,4)
      var data2=data.data.slice(4,10)
       var data3=data.data.slice(1,2)
      _this.info2=data1;
      _this.info1=data2;
      _this.info3=data3;
     // console.log(data3)
    })
    
  },

};
</script>
<style scoped>
.header{
  height: 50px;
  font-size: 30px;
}
#group {
  overflow: auto;
}
.lunbo {
  height: 150px;
}
* {
  margin: 0;
  padding: 0;
}
.jingxuan {
  height: 40px;
  width: 100%;
  background: #eaeaea;
  line-height: 40px;
}
.jingxuan p {
  float: left;
  padding-left: 5px;
}
.jingxuan-img {
  width: 100%;
  height: 150px;
  border-bottom: 5px solid #eaeaea;
}
.img-1 {
  width: 50%;
  float: left;
}
.img-1 img {
  width: 100%;
  height: 150px;
}
.img-2 {
  width: 50%;
  float: left;
}
.img-2 li {
  list-style: none;
  height: 75px;
}
.img-2 img {
  width: 25%;
  float: left;
  height: 75px;
  padding: 0 5px;
}
.img-1 {
  position: relative;
  height: 150px;
  overflow: hidden;
}
.img1-w {
  width: 60%;
  position: absolute;
  top: 20px;
  right: 0;
  height: 120px;
}
.img1-w span {
  color: #ff0000;
}
.img1-w p {
  font-size: 12px;
  color: #666;
  line-height: 50px;
}
.img1-w i {
  padding: 0 15px;
  line-height: 20px;
  color: #f00;
  font-style: normal;
  border: 1px solid #f00;
  border-radius: 10px;
  font-size: 14px;
}
.img2-w span {
  color: #ff0000;
  font-size: 13px;
}
.img2-w p {
  font-size: 12px;
  color: #666;
  line-height: 16px;
}
.img2-w i {
  padding: 0 10px;
  line-height: 16px;
  color: #f00;
  font-style: normal;
  border: 1px solid #f00;
  border-radius: 10px;
  font-size: 12px;
}
.group-two{
    width: 100%;
    overflow: hidden;

}
.group-two li img{
    width: 100%;
    height: 120px;
}
.group-two li{
    width: 50%;
    float: left;
}
.group-two li span{
    height: 30px;
    padding: 5px;

}
.group-two li p{
    float: left;
    padding-left: 5px;

}
.group-two li i{
    float: right;
    padding-right: 5px;
    font-style:normal;
    }
    .group-1{
        font-size: 16px;
    }
    .group-2{
        font-size: 14px;
    }
    .group-2 i{
        color: #f00;
    }
    .group-3{
        font-size: 16px;
    }
     .group-3 p{
         color: #f00;
         /* float: left; */
     }
    .group-3 i{
background: #f00;
color: #fff;
border-radius: 10px;
    }
    .group-11{
        text-decoration: line-through;
    }
</style>
