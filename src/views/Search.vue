<template>
  <Header />
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px">
            Danh sách tour {{route.query.searchKey}}
          </p>
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px">
            Cập nhật tour hàng ngày
          </p>
          <!--item  -->
          <div
            class="wrapper-item-tour-list"
            data-aos="fade-left"
            data-aos-delay="100"
            v-for="(tour) in tours.data"
            :key="tour.id"
          >
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <img :src="tour.image" alt="" class="img-fluid" style="width: 100%" />
              </div>
              <div class="col-lg-8">
                <p class="title-tour-list font-weight-bold font-size-p" style="margin-top: 10px">
                  <router-link
                    :to="{ name: 'detail', params: { id: tour.id } }"
                    class="title-tour-list__line"
                  >
                    {{ tour.name }}
                  </router-link>
                </p>
                <p>Hành trình: <span> {{tour.place}}</span></p>
                <p>Phương tiện: <span>{{tour.vehicle}}</span></p>
                <p>Khởi hành: <span>{{tour.dateStart}}</span></p>
                <div class="time-tour-list">
                  <div class="time-tour-list-left">
                    <span><i class="fa-solid fa-clock"></i> {{tour.quantityDate}}</span>
                  </div>
                  <div class="time-tour-list-right">
                    <p v-if="tour.discount > 0">
                      <span>
                        {{formatter.format(tour.discount)}} đ
                      </span>
                      <span style="font-size: 15px; font-weight: lighter; text-decoration: line-through;">
                                            {{formatter.format(tour.price)}} đ</span>
                    </p>
                    <p v-else>{{formatter.format(tour.price)}} đ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup lang="js">
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const tours = ref({})
const formatter = new Intl.NumberFormat('en-US')


onMounted(async () => {
  tours.value = await axios.get('http://127.0.0.1:8000/api/v1/search', {params: route.query})
})

console.log(tours)
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