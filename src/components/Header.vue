<template>
  <div id="header">
    <div class="front">
      <a class="login"
         v-if="$store.state.currentuser=== null"
         @click="switchTo('/Login')">亲，请登录</a>
      <a class="register"
         v-if="$store.state.currentuser === null"
         @click="switchTo('/Register')">免费注册</a>
      <a class="logcom"
         v-if="$store.state.currentuser !== null">你好，{{ $store.state.currentuser.username }}</a>
      <a class="out"
         v-if="$store.state.currentuser !== null"
         @click="logout">[退出登录]</a>
    </div>
    <div class="behind">
      <el-dropdown v-if="$store.state.currentuser !== null">
        <span class="el-dropdown-link"
              @click="switchTo('/ShopCar')">
          <i class="el-icon-shopping-cart-1"></i>
          购物车<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <a class="homepage"
         @click="switchTo('/HomePage')">商城首页</a>
    </div>
  </div>
</template>
<script>
import Login from './Login'
import HomePage from './HomePage'
import Register from './Register'
import ShopCar from './ShopCar'
export default {
  name: 'Header',
  components: {
    Login,
    HomePage,
    Register,
    ShopCar

  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    },
    logout () {
      this.$store.state.currentuser = null
      alert('账号已退出')
    }
  }
}
</script>
<style>
#header {
  width: 100%;
  height: 40px;
  background-color: rgb(214, 218, 221);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  float: left;
}
a {
  margin-left: 0px;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 10px;
  color: #000;
  margin-left: 50px;
}
.el-icon-arrow-down {
  font-size: 10px;
}
.login {
  font-size: 10px;
  color: rgb(228, 90, 10);
  text-decoration: none;
  margin-left: 0px;
}
.register {
  font-size: 10px;
  color: black;
  text-decoration: none;
  margin-left: 10px;
}
.register:hover {
  font-size: 10px;
  color: rgb(228, 90, 10);
  text-decoration: none;
}
.logcom {
  font-size: 10px;
  color: black;
  text-decoration: none;
}
.out {
  font-size: 10px;
  color: black;
  text-decoration: none;
}
.out:hover {
  font-size: 10px;
  color: rgb(228, 90, 10);
  text-decoration: none;
}
.homepage {
  font-size: 10px;
  color: black;
  text-decoration: none;
  margin-left: 50px;
}
.homepage:hover {
  font-size: 10px;
  color: rgb(228, 90, 10);
  text-decoration: none;
}
.front {
  width: 30%;
  height: 30px;
  position: relative;
  margin-left: 250px;
  float: left;
}
.behind {
  width: 50%;
  height: 30px;
  position: relative;
  float: left;
}
</style>
