<template>
  <div id="detail">
    <div class="header">
      <p @click="go()"><返回</p>
      <h1>详情</h1>
    </div>
    <section>
      <div class="brand-detail">
        <img src="../../static/img/20.jpg" alt>
        <div class="brand-detail-w">
          <p>{{info.product}}</p>
          <p>{{info.detail}}</p>
          <i>￥{{info.price}}</i>
          <!-- <button>购物车</button> -->
        </div>
      </div>
    </section>

    <div class="cart">
      <span>
        <i class="iconfont icon-shoucang"></i>收藏
      </span>
      <span @click="cart()">加入购物车</span>
      <span @click="cart()">立即购买</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import QS from "qs";
export default {
  name: "Detail",
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    var Id = this.$route.params.id;
    // console.log(Id)
    var _this = this;
    axios({
      url: "http://localhost:3000/users/detail",
      params: { id: Id }
    }).then(function(data) {
     // console.log(data.data[0]);
      _this.info = data.data[0];
    });
  },
    methods: {
    go() {
      this.$router.go(-1);
    },
    cart() {
      var user=localStorage.getItem("user")
      var _this=this;
      //console.log(this.info.detail)
      
      axios({
          url: "http://localhost:3000/users/cart",
        method:"post",
        data:QS.stringify({
          id: _this.$route.params.id,
          product: _this.info.product,
          price: _this.info.price,
          detail: _this.info.detail,
          number: "1",
          user:user
        }) 
      }).then(function(data) {   
        _this.$router.push("/cart")	
        console.log(data.data)	
       
      });
    }
  },
};
</script>

<style scoped>
#detail {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
section {
  flex: 1;
}
.header {
  height: 50px;
  border-bottom: 1px solid #eaeaea;
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

.brand-detail {
  height: 600px;
  width: 100%;
  list-style: none;
  overflow: hidden;
}
.brand-detail img {
  height: 400px;
  width: 100%;
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
  float: left;
}
.cart {
  line-height: 60px;
  width: 100%;
  background: #eaeaea;
  display: flex;
}
.cart span {
  width: 33.3%;
}
.cart span:nth-child(2) {
  background: #a12121;
  color: #fff;
}
.cart span:nth-child(3) {
  background: #1313b8;
  color: #fff;
}
</style>
