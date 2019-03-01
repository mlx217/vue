<template>
  <div id="brand">
    <div class="header">
      <p @click="go()">< 返回</p>
      <h1>所有品牌</h1>
    </div>
    <div class="zimu">
      <p>A</p>
    </div>
    <ul>
        <li  v-for="item in info" :key="item.id">
             <mt-cell :title="item.product">
      <img slot="icon" :src="item.image" width="60" height="30">
        </mt-cell>
        </li>
    </ul>
    <div class="zimu">
      <p>B</p>
    </div>
    <ul>
        <li  v-for="item in info" :key="item.id">
             <mt-cell :title="item.product">
      <img slot="icon" :src="item.image" width="60" height="30">
        </mt-cell>
        </li>
    </ul>
    <div class="zimu">
      <p>C</p>
    </div>
    <ul>
        <li  v-for="item in info" :key="item.id">
             <mt-cell :title="item.product">
      <img slot="icon" :src="item.image" width="60" height="30">
        </mt-cell>
        </li>
    </ul>
    
 
  </div>
</template>
<script>
import axios from "axios";
// import Mock from "mockjs";
// import data2 from "../data/data2";
export default {
  name: "Brand",
  data() {
    return {
      info: ""
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  mounted() {
    var _this = this;
    axios({url: "http://localhost:3000/users/list"})
    .then(function(data){
      _this.info=data.data;
     // console.log(data3)
    })
  }
};
</script>
<style scoped>
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
.zimu {
  height: 20px;
  width: 100%;
  background: #eaeaea;
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
