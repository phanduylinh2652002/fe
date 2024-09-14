<template>
  <div class="main">

    <!-- Sign up form -->
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">ĐĂNG KÝ</h2>
            <form @submit="register" class="register-form" id="register-form">
              <div class="form-group">
                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <Field type="text" name="name" id="name" placeholder="Họ và tên"  rules="required" />
                <span class="text-danger">{{ errors.name }}</span>
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <Field type="email" name="email" id="email" placeholder="Email" rules="required|email"/>
                <span class="text-danger">{{ errors.email }}</span>
              </div>
              <div class="form-group">
                <label for="password"><i class="zmdi zmdi-lock"></i></label>
                <Field type="password" name="password" id="pass" placeholder="Mật khẩu" rules="required|min:8"/>
                <span class="text-danger">{{ errors.password }}</span>
              </div>
              <div class="form-group">
                <label for="password_confirmation"><i class="zmdi zmdi-lock-outline"></i></label>
                <Field type="password" name="password_confirmation" id="password_confirmation" placeholder="Nhập lại mật khẩu"  rules="required|confirmed:@password"/>
                <span class="text-danger">{{ errors.password_confirmation }}</span>
              </div>
              <div class="form-group form-button">
                <input type="submit" name="register" id="register" class="form-submit" value="Đăng ký" />
                <router-link :to="{name: 'login'}" class="btn-login-return">Đăng nhập</router-link>
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure><img src="../assets/images/signup-image.jpg" alt="sing up image"></figure>
            <!-- <a href="#" class="signup-image-link">I am already member</a> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Field, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { registerApi } from '@/services/authService.js'

const { handleSubmit, errors } = useForm({});
const router = useRouter()

const register = handleSubmit(async (data) => {
     data.role_id = 1
     const res = await registerApi(data)
      if (res.success === true) {
        await router.push({ name: 'login' })
      }
})
</script>