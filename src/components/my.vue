<template>
    <div id="my">
        <div class="header">个人中心</div>
        <div class="my-zhanghao">
            <i class="shezhi iconfont icon-shezhi" ></i>
            <div class='my-img'>
                <img src="../../static/img/16.jpg" alt="">
                <p  class="denglu"  @click="denglu()">{{name}}</p>
                <p>银卡</p>
            </div>
            <p class="xiaoxi">消息</p>
        </div>
        <div class="dingdan">
            <div class="dingdan-h"><i class="iconfont icon-dingdan"></i><p>我的订单</p> <b>全部订单></b> </div>
            <div class="dingdan-li">
                <ul>
                    <li>
                        <i class="iconfont icon-daifukuan"></i>
                        <p>待付款</p>
                    </li>
                     <li>
                        <i class="iconfont icon-pintuan"></i>
                        <p>待拼团</p>
                    </li>
                     <li>
                        <i class="iconfont icon-daishouhuo"></i>
                        <p>待收货</p>
                    </li>
                     <li>
                        <i class="iconfont icon-daipingjia"></i>
                        <p>待评价</p>
                    </li>
                     <li>
                        <i class="iconfont icon-tuihuanhuo"></i>
                        <p>待换货</p>
                    </li>
                </ul>
            </div>
        </div>
         <div class="dingdan">
            <div class="dingdan-h"><i class="iconfont icon-daifukuan"></i><p>我的钱包</p> <b>全部订单></b> </div>
            <div class="dingdan-li">
                <ul>
                    <li>
                        <i >0</i>
                        <p>余额</p>
                    </li>
                     <li>
                        <i >0</i>
                        <p>红包</p>
                    </li>
                     <li>
                        <i>0</i>
                        <p>积分</p>
                    </li>
                     <li>
                        <i >0</i>
                        <p>优惠券</p>
                    </li>
                   
                </ul>
            </div>
        </div>
         <div class="dingdan3">
            <div class="dingdan3-li">
                <ul>
                    <li>
                        <i class="iconfont icon-shoucang"></i>
                        <p>收藏的商品</p>
                    </li>
                     <li>
                        <i class="iconfont icon-pintuan"></i>
                        <p>拼团频道</p>
                    </li>
                     <li>
                        <i class="iconfont icon-liulanjilu"></i>
                        <p>浏览记录</p>
                    </li>
                     <li>
                        <i class="iconfont icon-tubiaozhizuo--"></i>
                        <p>微信客服</p>
                    </li>
                </ul>
            </div>
        </div>
         <div class="loginout" @click="tuichu()">退出</div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'My',
    data() {
        return {
            name:''
        }
    },
    methods: {
        tuichu(){
           localStorage.removeItem("user");
             location.reload();
           },
           denglu(){
               this.$router.push("/login")
           }
            
        
    },
    mounted() {
        
       // console.log(this.name) 
           if(localStorage.getItem("user")==null){
         this.name="请先登陆"
       }else{
        this.name= localStorage.getItem("user")  
       } 
        
    },
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}

.loginout{
    width: 100%;
    height: 40px;
    background: #b11134;
    position: fixed;
    bottom: 65px;
    font-size: 26px;
    line-height: 40px;
    color: aliceblue;
}

.denglu{
    color: rgb(145, 9, 9);
    font-size: 20px;
}


.header{
    height: 50px;
}
.header {
  height: 50px;
  font-size: 30px;
   
}

* {
  margin: 0;
  padding: 0;
}
.my-img img{
    margin-top: 20px;
width: 25%;
height: 80px;
border-radius:50%; 
}
.my-zhanghao{
    width: 100%;
    height: 150px;
    position: relative;
    background: #eaeaea;
    border-radius:0 0 60% 60%; 
}
.my-zhanghao .xiaoxi {
position: absolute;
      top: 20px;
      right:20px;
}
  .my-zhanghao .shezhi {
      position: absolute;
      top: 20px;
      left: 20px;

}  
.dingdan{
    width: 100%;
    overflow: hidden;
    height: 120px;

}
.dingdan-h{
    line-height: 40px;
    width: 100%;
    height: 40px;
}
.dingdan-h i{
    float: left;
}
.dingdan-h p{
    float: left;
}
.dingdan-h b{
    float: right;
}
.dingdan-li{
    width: 100%;
    height: 70px;
}
.dingdan-li ul{
    padding-top: 20px;
    width: 100%;
    height: 50px;
 display: flex;
    justify-content: space-around;
    border-bottom: 10px solid #eeeeee;
}
.dingdan-li ul li{
    height: 70px;
    list-style: none;
}



.dingdan3{
    width: 100%;
    overflow: hidden;
    height: 70px;

}

.dingdan3-li{
    width: 100%;
    height: 50px;
    padding-top: 20px;
   

}
.dingdan3-li ul{
    width: 100%;
    height: 70px;
 display: flex;
    justify-content: space-around;
}
.dingdan3-li ul li{
    height: 70px;
    list-style: none;
}
i{
    font-size: 20px;
    font-style: normal;
}
</style>