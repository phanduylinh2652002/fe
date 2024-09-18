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
          <!-- tour liên quan -->
          <div class="col-lg-12 pl-lg-12 ml-auto" style="margin-top: 135px;">
            <h2 class="section-title text-center mb-3" style="font-size: 45px !important; font-weight: bold;">
              Tours liên quan</h2>
            <div class="owl-carousel owl-carousel owl-3-slider second-carousel">
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate ">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>
              <div class="item item-tour-sale item-tour-relate">
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>3,450,000 đ</h3>
                    <span class="location">4,450,000 đ</span>
                    <p style="margin-top: 16px;">ĐÀ NẴNG – NGŨ HÀNH SƠN – HỘI AN – BÀ NÀ HILLS - CÙ LAO
                      CHÀM</p>
                    <p>4 ngày 3 đêm</p>
                    <p>Khởi hành: Các ngày trong tuần</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important;">(Click
                      xem chi tiết)</p>
                  </div>
                  <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid img-tour-relate">
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">QUY NHƠN – PHÚ YÊN</p>
                </div>
              </div>

            </div>
          </div>
          <!-- /tour liên quan -->
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
                  <a href="#" class="btn btn-success">ĐẶT TOUR</a>
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
const formatter = new Intl.NumberFormat('en-US')

const getDetail = async () =>{
    const res = await detailTour(route.params.id);
    if (res.success === true) {
      tour.value = res.data
    }
}

onMounted(()=>{
  getDetail()
})
</script>