<template>
    <HeaderComponent/>
    <div class="untree_co-section">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="title-tou__p">{{ newsData.name }}</p>
  
            <div class="owl-single dots-absolute owl-carousel">
              <img :src="newsData.image" alt="News Image" class="img-fluid">
            </div>
  
            <div class="custom-block point-special-tour" data-aos="fade-up">
              <div class="custom-accordion" id="accordion_1">{{ newsData.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import HeaderComponent from '@/components/Header.vue';
  import FooterComponent from '@/components/Footer.vue';
  
  const route = useRoute();
  const id = route.params.id;
  
  const newsData = ref({
    name: '',
    image: '',
    description: ''
  });
  
  const getNewsById = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/v1/news/${id}`);
      newsData.value = response.data.data;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    console.log(newsData.value);
    
  };
  
  onMounted(() => {
    getNewsById();
  });
  </script>
  
  <style scoped>
  .untree_co-section {
    margin: 20px;
  }
  
  .owl-single {
    margin-top: 20px;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>
  