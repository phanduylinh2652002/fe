<template>
  <HeaderComponent/>
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px;">TIN TỨC</p>
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px;">
            Cập nhật tin tức hàng ngày
          </p>
          <!--item  -->
          <div class="wrapper-item-tour-list" data-aos="fade-left" data-aos-delay="100"  v-for="news in listNews">
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <img :src="news.image" alt="" class="img-fluid" style="width: 100%">
              </div>
              <div class="col-lg-8">
                <p class="title-tour-list font-weight-bold font-size-p" style="margin-top: 10px;">
                  <router-link :to="{ name: 'news.show', params: { id: news.id } }" class="title-tour-list__line">
                    {{ news.name }}
                  </router-link>
                </p>
                <p>Ngày đăng: <span>{{news.date}}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
const listNews = ref<Array<{ id: number, name: string, image: string, description: string }>>([])
onMounted(() => {
  getNews()
});
const getNews = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/news')
    listNews.value = response.data
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}
</script>

<style scoped>
.title-tour-list__line{
  text-decoration: none !important;
  color: black;
}
.row .justify-content-center{
  background-color: white !important;
  border-radius: 17px;
  margin: 0 !important;
}
</style>