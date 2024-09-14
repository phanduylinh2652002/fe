<template>
  <div class="main">
    <!-- Sing in  Form -->
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure><img src="../assets/images/signin-image.jpg" alt="sing up image"></figure>
            <router-link :to="{name: 'register'}" class="signup-image-link btn-login-return" >Tạo tài khoản</router-link>
          </div>

          <div class="signin-form">
            <h2 class="form-title">ĐĂNG NHẬP</h2>
            <form class="register-form" id="login-form" @submit="login">
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <Field type="text" name="email" id="email" placeholder="Email" rules="required|email"/>
                <span class="text-danger">{{ errors.email }}</span>
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <Field type="password" name="password" id="your_pass" placeholder="Mật khẩu" rules="required|min:8"/>
                <span class="text-danger">{{ errors.password }}</span>
              </div>
              <div class="form-group">
                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                <label for="remember-me" class="label-agree-term"><span><span></span></span>Nhớ mật khẩu</label>
              </div>
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Đăng nhập" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

import { Field, useForm } from 'vee-validate'
import { loginApi } from '@/services/authService.js'
import { useRouter } from 'vue-router'

const { handleSubmit, errors } = useForm({});
const router = useRouter()

const login = handleSubmit(async (data) => {
  console.log(data)
  const res = await loginApi(data)
  if (res.success === true) {
    localStorage.setItem('token', res.access_token);
    await router.push({ name: 'home' })
  }
})
</script>