<template>
  <div id="Login">
    <router-view></router-view>
    <div class="logm">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <br>
        <el-tab-pane label="密码登录"
                     name="first">
          <el-input placeholder="会员名/邮箱/手机号"
                    v-model="input1">
            <template slot="prepend"><i class="el-icon-user-solid"></i></template>
          </el-input>
          <br><br><br>
          <el-input placeholder="请输入密码"
                    v-model="input2"
                    show-password>
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
          <br><br>
          <el-button class="lgbt"
                     type="primary"
                     @click="checkuser()">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="短信登录"
                     name="second">
          <el-input placeholder="请输入手机号"
                    v-model="input3">
            <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
          </el-input>
          <br><br><br>
          <el-input placeholder="请输入验证码"
                    v-model="input4">
            <template slot="prepend"><i class="el-icon-s-comment"></i></template>
            <el-button slot="append">获取验证码</el-button>
          </el-input>
          <br><br>
          <el-button class="lgbt"
                     type="primary"
                     @click="switchTo('./Homepage')">登录</el-button>
        </el-tab-pane>
      </el-tabs>
      <a class="reg"
         @click="switchTo('./Register')">免费注册</a>
    </div>
  </div>
</template>
<script>
import Register from './Register'
import HomePage from './HomePage'

export default {
  name: 'Login',
  components: {
    Register,
    HomePage
  },
  data () {
    return {
      activeName: 'first',
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    checkuser () {
      let i = 0
      let flag = 0

      var storage = window.localStorage
      var json = storage.getItem('user')
      var jsonObj = JSON.parse(json)
      var len = jsonObj.length
      for (i = 0; i < len; i++) {
        if (jsonObj[i].username === this.input1 && jsonObj[i].password === this.input2) {
          flag = 1
          this.$store.state.currentuser = jsonObj[i]
          this.switchTo('/HomePage')
          break
        } else if (this.$store.state.currentuser === null && jsonObj[i].username !== this.input1 && jsonObj[i].password !== this.input2) {
          flag = 0
        }
      }
      if (flag === 1) {
        alert('登陆成功')
      } else if (flag === 0) {
        alert('登陆失败,请重新登陆')
      }
    }
  }
}
</script>
<style>
#Login {
  position: relative;
  top: 50px;
}
.logm {
  position: relative;
  width: 340px;
  height: 500px;
  top: 100px;
  margin-left: 70%;
}
.lgbt {
  position: relative;
  left: 140px;
}
.reg {
  position: relative;
  left: 200px;
  top: 30px;
  font-size: 13px;
}
</style>
