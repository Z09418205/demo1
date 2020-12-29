<template>
  <div class="reg">
    <h1>用户注册</h1>
    <el-steps class="step"
              :active="active"
              finish-status="success">
      <el-step title="设置用户名"></el-step>
      <el-step title="填写账号信息"></el-step>
      <el-step icon="el-icon-circle-check"
               title="注册成功"></el-step>
    </el-steps>
    <el-form ref="form"
             label-width="90px"
             class="highForm">
      <div class="form1"
           v-if="active == 0">
        <el-input placeholder="请输入你的手机号码"
                  v-model="phonenum"
                  class="input-with-select">
          <el-select v-model="select"
                     slot="prepend"
                     placeholder="+86">
            <el-option label="+60"
                       value="1"></el-option>
            <el-option label="+65"
                       value="2"></el-option>
            <el-option label="+1"
                       value="3"></el-option>
          </el-select>
        </el-input>
        <br><br><br>
        <el-input placeholder="请输入验证码"
                  v-model="ver">
          <template slot="prepend"><i class="el-icon-s-comment"></i></template>
          <el-button slot="append">获取验证码</el-button>
        </el-input>
        <el-button class="ntbt"
                   @click="next">下一步</el-button>
      </div>
      <div class="form2"
           v-if="active == 1">
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="会员名"
                        prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="pass">
            <el-input type="password"
                      v-model="ruleForm.pass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPass">
            <el-input type="password"
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form3"
           v-if="active == 2">
        <p>恭喜你，注册成功</p>
        <el-button class="hmbt"
                   @click="switchTo('./Homepage')"
                   type="success">开启购物之旅</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import HomePage from './HomePage'
var storage = window.localStorage
var x = [{
  name: '',
  password: ''
}]
var data = JSON.stringify(x)
storage.setItem('user', data)
export default {
  name: 'Register',
  components: {
    HomePage
  },
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else if (this.check() === 0) {
        return callback(new Error('用户名已存在'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      active: 0,
      phonenum: '',
      ver: '',
      select: '',
      ruleForm: {
        username: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    next () {
      if (this.phonenum !== '' && this.ver !== '' && this.active++ > 2) this.active = 0
      if (this.phonenum === '') alert('手机号码不能为空')
      if (this.ver === '') alert('请输入验证码')
    },
    submitForm (formName) {
      var storage = window.localStorage
      var udata = storage.getItem('user')
      var user = JSON.parse(udata)
      var ulist = {
        username: this.ruleForm.username,
        password: this.ruleForm.pass
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.active++
          user.push(ulist)
          console.log(user)
          var d = JSON.stringify(user)
          storage.setItem('user', d)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    check () {
      var storage = window.localStorage
      var udata = storage.getItem('user')
      var user = JSON.parse(udata)
      var len = user.length
      var i = 0
      var flag = 1
      for (i = 0; i < len; i++) {
        if (user[i].username === this.ruleForm.username) {
          flag = 0
          break
        }
      }
      if (flag === 0) {
        return 0
      }
    }
  }
}
</script>
<style>
.reg {
  width: 60%;
  height: 100%;
  position: relative;
  top: 50px;
  left: 300px;
}
.step {
  position: relative;
  top: 50px;
}
.ntbt {
  position: relative;
  left: 150px;
  top: 50px;
}
.form1 {
  width: 50%;
  height: 100%;
  position: relative;
  margin: auto;
  margin-top: 150px;
}
.form2 {
  width: 50%;
  height: 100%;
  position: relative;
  margin: auto;
  margin-top: 150px;
}
.form3 {
  width: 30%;
  height: 100%;
  position: relative;
  margin: auto;
  margin-top: 150px;
}
.form3 p {
  color: green;
  font-size: 30px;
  margin: auto;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.hmbt {
  position: relative;
  top: 50px;
  left: 50px;
}
</style>
