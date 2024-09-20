<template>
  <Header/>
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="title-tou__p">{{ tour?.name }}</p>
          <div class="custom-block point-special-tour" data-aos="fade-up">
            <h2 class="section-title"><i class="fa-solid fa-book"></i> Điểm nhấn hành trình</h2>
            <div class="custom-accordion" id="accordion_1">
              <div class="accordion-item">
                <!-- <div id="collapse" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1"> -->
                <div class="accordion-body" v-html="tour?.description">
                </div>
                <!-- </div> -->
              </div> <!-- .accordion-item -->

            </div>
          </div>
          <div class="custom-block point-special-tour" data-aos="fade-up">
            <h2 class="section-title"><i class="fa-solid fa-calendar"></i> Lịch trình</h2>
            <div class="custom-accordion" id="accordion_1" v-html="tour?.trip">
            </div>
          </div>
        </div>
        <div class="col-lg-4" style="margin-top: 60px;">
          <div class="custom-block custom-block-sticky" data-aos="fade-up" data-aos-delay="100">
            <h2 class="section-title">{{ tour?.name }}</h2>
            <table class="table table-dark table-hover">
              <tbody>
              <tr>
                <th>Mã tour</th>
                <td>{{ tour?.id }}</td>
              </tr>
              <tr>
                <th>Thời gian:</th>
                <td>{{ tour?.quantityDate }}</td>
              </tr>
              <tr>
                <th>Khởi hành:</th>
                <td>{{ tour?.dateStart }}</td>
              </tr>
              <tr>
                <th>Vận Chuyển:</th>
                <td>{{ tour?.vehicle }} </td>
              </tr>
              <tr>
                <th>Xuất phát:</th>
                <td>{{ tour?.locationStart }}</td>
              </tr>
              </tbody>
            </table>
            <div class="wrapper-booking-tour">
              <p>Giá từ:
                <span v-if="tour?.discount > 0" style="font-size: 25px; font-weight: bold; color: #fff;">{{ formatter.format(tour?.discount) }} đ</span>
                <span style="text-decoration: line-through;"> {{ formatter.format(tour?.price) }} đ</span>
              </p>
              <div class="btn-booking-tour">
                <div class="btn-booking-tour__a">
                  <router-link :to="{name: 'formCustomer', params: {id: `${tour?.id}`}}" class="btn btn-success">ĐẶT TOUR</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { detailTour } from '@/services/tourService.js'
import { onMounted, ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute();
const tour = ref(null)
const tourRelate = ref({})
const formatter = new Intl.NumberFormat('en-US')

const getDetail = async () =>{
    const res = await detailTour(route.params.id);
    if (res.success === true) {
      tour.value = res.data
      tourRelate.value = res.tour_relate
    }
}

onMounted(()=>{
  getDetail()
})
</script>