<template>
  <div id="cart">
    <div class="header">购物车</div>
    <div>
      <ul>
        <li v-for="(item,i) in cart" :key="i" class="cart">
          <input type="checkbox" @click="xuanze(item.price,item.number)" >
          <img :src="'../../static/img/'+(i+2)+'.jpg'">
          <div class="cart-w">
            <p>{{item.detail}}</p>
            <i>￥{{item.price}}</i>
            <div class="cart-w1">
              <span>
                <p @click="jian([item.id,item.number])">-</p>
                <p>{{item.number}}</p>
                <p @click="add([item.id,item.number])">+</p>
              </span>
              <i class="iconfont icon-lajitong" @click="del(item.id)"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="count">
      <div class="count_l">
        <input type="checkbox" v-model="danjia">全选
      </div>

      <div class="count_c" >总计:￥
       {{sum1}}
      </div>
      <div class="count_r">结算</div>
    </div>
    <div class="tuijian">
      <h4>推荐商品</h4>

      <ul>
        <li v-for="(item,i) in info" :key="i">
          <router-link :to="'/detail/'+item.id">
            <img :src="'../../static/img/'+(i+18)+'.jpg'">
            <span>{{item.detail}}</span>
            <p>￥{{item.price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      info: "",
      cart: "",
      sum1:"",
      danjia:''
    };
  },
  mounted() {
    var user = localStorage.getItem("user");
    var _this = this;

    axios({
      url: "http://localhost:3000/users/list"
    }).then(function(data) {
      // console.log(data.data);
      var data1 = data.data.slice(6, 12);
      _this.info = data1;
    });
    axios({
      url: "http://localhost:3000/users/list_cart",
      params: { user: user }
    }).then(function(data) {
      console.log(data.data);

      _this.cart = data.data;
    });
  },
  methods: {
    del(e) {
      // console.log(e);

      axios({
        url: "http://localhost:3000/users/delete_cart",
        params: { id: e }
      }).then(function(data) {
        location.reload();
      });
    },
    add(e) {
      var id = e[0];
      var num = parseInt(e[1]) + 1;

      // console.log(id, num);
      axios({
        url: "http://localhost:3000/users/change_cart",
        params: { id: id, number: num }
      }).then(function(data) {
       // console.log(data);
      });
      location.reload();
    },
    jian(e) {
      var id = e[0];
      var num = parseInt(e[1]);
      if (num > 1) {
        num = num - 1;
      } else alert("不能再少了");

     // console.log(id, num);
      axios({
        url: "http://localhost:3000/users/change_cart",
        params: { id: id, number: num }
      }).then(function(data) {
       // console.log(data);
      });
       location.reload();
    },
    xuanze(a,b){
      this.sum1=a*b;
      console.log(e)
      console.log(this.sum)
         
    },
    //   sum2(e){
    //   this.sum1=e;      
    // }
  },
  computed: {
         
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.header {
  height: 50px;
  font-size: 30px;
  border-bottom: 10px solid #eaeaea;
}

* {
  margin: 0;
  padding: 0;
}
#cart .cart {
  width: 100%;
  height: 150px;
  /* overflow: hidden; */
  text-align: left;
}
.cart input {
  width: 20px;
  height: 20px;
  float: left;
  margin: 20px 5px 0 5px;
}
.cart img {
  float: left;
  width: 40%;
  height: 100px;
  margin-top: 25px;
}
.cart-w {
  width: 45%;
  float: left;
  padding-left: 15px;
  padding-top: 25px;
}
.cart-w p {
  float: left;
}
.cart-w1 {
  width: 100%;
}
.cart-w1 span p {
  width: 15px;
  float: left;
  border: 1px solid #444;
  padding: 3px 5px;
}
.cart-w .cart-w1 i {
  width: 20%;
  line-height: 30px;
  float: right;
}
.cart-w i {
  display: block;
  width: 100%;
  line-height: 30px;
}

#cart .tuijian {
  width: 100%;
  text-align: left;
}
.tuijian h4 {
  width: 100%;
  height: 30px;
  background: #eaeaea;
  font-size: 14px;
  line-height: 30px;
}
.tuijian li {
  float: left;
  width: 49%;
  height: 250px;
  list-style: none;
  border-bottom: 5px solid #eaeaea;
  border-collapse: collapse;
}
.tuijian li:first-child {
  border-right: 5px solid #eaeaea;
}
.tuijian li img {
  width: 100%;
  height: 150px;
}
.tuijian li:last-child td {
  border-bottom: none;
}

.count {
  width: 100%;
  height: 60px;
  position: fixed;
  background: pink;
  bottom: 65px;
}
.count div {
  float: left;
  line-height: 60px;
  width: 32%;
}
.count .count_l input {
  width: 20px;
  height: 20px;
  /* float: left; */
}
.count .count_r {
  background: #d60d0d;
  border-radius: 30px;
}
</style>