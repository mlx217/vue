<template>
  <div id="login">
    <mt-header fixed title="登陆" class="login-h"></mt-header>
    <mt-field class="login-user" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

    <mt-field class="login-psw" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <p>
      如未注册，请先点击
      <b @click="zhuce()">注册</b>
      
    </p>
  
    <mt-button type="primary" size="large" @click="denglu()">登陆</mt-button>
    
   
    
  </div>
</template>
<script>
 import axios from 'axios';
export default {
   
  name: "Login",
  data() {
    return {
      title: "huanying",
      phone: "",
      password: "",
      username: ""
    }
  },
  methods: {
       zhuce(){
         this.$router.push("/regist")
       },



    denglu() {

         localStorage.setItem("user",this.username)   

      var _this = this;
      axios({
        url: "http://localhost:3000/users/login",
        // method: "post",
        data: {
        //  username: this.username,
          password: this.password,
          username: this.username
        }
      }).then(function(data) {
        //console.log(data.data);
        if (data.data == 0) {
          alert("用户名或密码错误！");
        }else{
          		
            _this.$router.push("/index")
        }
        // if (data.data == 1) {
         
        // }
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
b{
  color: #00f;
}
#login {
  overflow: hidden;
  position: relative;
}
p {
  margin-bottom: 20px;
  float: left;
  color: #ccc;
}
.login-h {
  font-size: 25px;
  background: #fff;
  color: #000;
  border-bottom: 1px solid #ccc;
  height: 60px;
}
.login-user {
  border-top: 0;
  border-bottom: #333 1px solid;
  padding-top: 65px;
}
.login-psw {
  border-bottom: #333 1px solid;
}
</style>
