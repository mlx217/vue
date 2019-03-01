<template>
  <div id="regist">
    <mt-header fixed title="注册" class="login-h"></mt-header>
    <mt-field class="regist-user" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field class="login-psw" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field class="login-tel" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field class="" label="验证码" placeholder="请输入验证码" ></mt-field>
     <mt-button class="yzm"   type="primary" size="large" @click="yzm()">发送验证码</mt-button>
    <mt-button class="yzm"   type="primary" size="large" @click="zhuce()">注册</mt-button>
  </div>
</template>
<script>
import axios from "axios";
import QS from "qs"
export default {
  name: "Regisrt",
  data() {
    return {
      detail: "",
      username: "",
      password: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    zhuce() {
      var _this = this;
      axios({
        url: "http://localhost:3000/users/regist",
        method: "post",
        data:{
          username: _this.username,
          password: _this.password,
          email: _this.email,
          tel: _this.phone
        }
      }).then(function(data){
          console.log(data)
        if(data.data==0){
					alert("用户名已注册");
					
				}else{
					
          alert("注册成功");
           _this.$router.push("/login")
				//	location.href="/login";
				}
      });
    },
   yzm(){
		var code=Math.floor(Math.random()*10000) 
    console.log(code)

			},
  }
};
</script>
<style scoped>
.yzm{
  width: 30%;
  float: left;
  margin-left:40px; 
}
#regist {
  overflow: hidden;
}
.regist-user {
  padding-top: 66px;
}
.login-h {
  font-size: 25px;
  background: #fff;
  color: #000;
  border-bottom: 1px solid #ccc;
  height: 60px;
}
.login-tel {
  border-top: 0;
  border-bottom: #333 1px solid;
  margin-bottom: 20px;
}
.login-psw {
  border-bottom: #333 1px solid;
}
a {
  border-bottom: 1px solid #333;
}
</style>
