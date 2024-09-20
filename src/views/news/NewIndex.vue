<template>
    <HeaderComponent/>
    <div class="untree_co-section">
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="navation">
                        <p>
                            <a href="index.html">Trang chủ</a>
                            <span><i class="fa-solid fa-angles-right"></i></span>
                            <a href="danhmuc.html">Tin tức</a>
                            <span></span>
                        </p>
                    </div>
                    <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px;">TIN TỨC</p>
                    <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px;">
                        Cập nhật tin tức hàng ngày
                    </p>
                    <!--item  -->
                    <div class="wrapper-item-tour-list" data-aos="fade-left" data-aos-delay="100"  v-for="news in listNews">
                        <div class="row justify-content-center">
                            <div class="col-lg-4">
                                <img :src="news.image" alt="" class="img-fluid">
                            </div>
                            <div class="col-lg-8">
                                <p class="title-tour-list font-weight-bold font-size-p" style="margin-top: 10px;">
                                    <a :href="`chitiet.html?id=${news.id}`" class="title-tour-list__line">{{ news.name }}</a>
                                </p>
                                <p class="description">
                                    {{ truncatedDescription(news.description) }}
                                    <span v-if="news.description.length > 300">
                                        <a href="#" @click.prevent="showMore(news)">...Xem thêm</a>
                                    </span>
                                </p>
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
        console.log(listNews.value)
    } catch (error) {
        console.error('Error fetching news:', error)
    }
}

const truncatedDescription = (description: string) => {
    const maxLength = 300;
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
}

const showMore = (news: any) => {
    alert(news.description);
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
