<template>
    <div class="box" ref="window">
<div class="login_box" >
<h2>电商后台管理</h2>
<el-form ref="ruleForm" :model="loginForm" :rules="rules" >
    <el-form-item prop="username">
        <el-input placeholder="亲输入账号"  prefix-icon="el-icon-user" v-model="loginForm.username">
        </el-input>
    </el-form-item>
    <el-form-item prop="password">
        <el-input placeholder="亲输入密码"  prefix-icon="el-icon-lock" v-model="loginForm.password">
        </el-input>
    </el-form-item>
    <el-form-item class="btn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info">重置</el-button>
    </el-form-item>
</el-form>
</div>
    </div>
</template>

<script>
import { LoginApi } from '@/http/api'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  mounted() {
    let html = document.documentElement || document.body
    this.$refs.window.style.height = html.clientHeight + 'px'
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (!valid) return false
        const res = await LoginApi(this.loginForm)
        console.log(res)
        this.$router.push("/home")
      })
    }
  }
}
</script>

<style scoped >
.box {
  width: 100%;
  background: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  min-width: 300px;
  background: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 30px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
