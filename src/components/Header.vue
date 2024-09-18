<template>
  <nav class="site-nav">
    <div class="container">
      <div class="site-navigation d-flex justify-content-between">
        <a href="/" class="logo m-0">SkyTour <span class="text-primary">.</span></a>

        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-right">
          <li class="active"><a href="/">Trang chủ</a></li>
          <li class="has-children">
            <a href="#">Địa điểm</a>
            <ul class="dropdown">
              <li v-for="(item, index) in categories.data" :key="index">
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </li>
          <li><a href="services.html">Tin tức</a></li>
          <li class="has-children">
            <a href="#">Tour của tôi</a>
            <ul class="dropdown">
              <li><a href="">Chưa thanh toán</a></li>
              <li><a href="">Đã thanh toán</a></li>
            </ul>
          </li>
          <li class="has-children" v-if="user">
            <a href="#">{{ user.name }}</a>
            <ul class="dropdown">
              <li><router-link to="/logout">Logout</router-link></li>
            </ul>
          </li>
          <li v-else><router-link to="/login" >Đăng nhập</router-link></li>
        </ul>

        <a href="#"
           class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
           data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>

      </div>
    </div>
  </nav>
</template>
<script setup>
import { getCategories } from '@/services/categoryService.js'
import { ref, onMounted } from 'vue';

const user = JSON.parse(localStorage.getItem('user'))
const categories = ref({});
onMounted(async () => {
  categories.value = await getCategories();
});
</script>
<style lang="css" scoped>
.site-nav .site-navigation .site-menu > li > a {
  color: white;
}
.container {
  background: #6998AB
}
</style>