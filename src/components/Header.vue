<template>
  <nav class="site-nav">
    <div class="container">
      <div class="site-navigation d-flex justify-content-between">
        <a href="index.html" class="logo m-0">SkyTour <span class="text-primary">.</span></a>

        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-right">
          <li class="active"><a href="index.html">Trang chủ</a></li>
          <li class="has-children">
            <a href="#">Địa điểm</a>
            <ul class="dropdown">
              <li><a href="elements.html">Biển</a></li>
              <li><a href="#">Núi rừng</a></li>
              <li class="has-children">
                <a href="#">Khu vui chơi giải trí</a>
                <ul class="dropdown">
                  <li><a href="#">Công viên nước</a></li>
                  <li><a href="#">Trung tâm thương mại</a></li>
                  <li><a href="#"></a></li>
                </ul>
              </li>
              <li><a href="#">Cắm trại</a></li>
            </ul>
          </li>
          <li><a href="services.html">Dịch vụ</a></li>
          <li><a href="contact.html">Liên hệ</a></li>
          <li><router-link to="/login">Đăng nhập</router-link></li>
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

</script>
<style lang="css" scoped>
.site-nav .site-navigation .site-menu > li > a {
  color: white;
}
.container {
  background: #6998AB
}
</style>