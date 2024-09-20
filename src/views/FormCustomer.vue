<template>
  <Header />
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <p class="title-tou__p">Tour đã đặt</p>
            <img :src="tour.image" alt="Image" class="img-fluid" />
        </div>
        <div class="col-lg-6" style="margin-top: 50px">
          <div class="custom-block" data-aos="fade-up" data-aos-delay="100">
            <h2 class="section-title"></h2>
            <table class="table table-dark table-hover">
              <tbody>
                <tr>
                  <th>Mã tour</th>
                  <td>{{ tour.id }}</td>
                </tr>
                <tr>
                  <th>Thời gian:</th>
                  <td>{{tour.quantityDate}}</td>
                </tr>
                <tr>
                  <th>Khởi hành:</th>
                  <td>{{tour.dateStart}}</td>
                </tr>
                <tr>
                  <th>Vận Chuyển:</th>
                  <td>{{tour.vehicle}}</td>
                </tr>
                <tr>
                  <th>Xuất phát:</th>
                  <td>{{tour.locationStart}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-12">
          <p class="title-tou__p text-center">BẢNG GIÁ</p>
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Người lớn(Trên 11 tuổi)</th>
                <th>Trẻ em(5 - 11 tuổi)</th>
                <th>Trẻ nhỏ(2 - 5 tuổi)</th>
                <th>Sơ sinh( < 2 tuổi)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount) }} đ
                  </span>
                  <span v-else>
                    {{ formatter.format(tour?.price) }} đ
                  </span>
                </td>
                <td>
                  <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount/2) }} đ
                  </span>
                  <span v-else>
                    {{ formatter.format(tour?.price/2) }} đ
                  </span>
                </td>
                <td>0 đ</td>
                <td>0 đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- thanh toán -->
      <form class="contact-form" data-aos="fade-up" data-aos-delay="200" action="{{route('orderTour', $tours->tour_id)}}" method="post">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <p class="title-tou__p">THÔNG TIN LIÊN HỆ</p>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="fullname">Họ và tên</label>
                  <input type="text" class="form-control" id="fullname" name="customer_name">
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="phone">Điện Thoại</label>
                  <input type="tel" class="form-control" id="phone" name="customer_phone">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="numberAdult">Người lớn</label>
                  <input type="number" class="form-control" id="numberAdult" name="quantity_OldPerson">
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="numberChildrenBig">Trẻ em(5 - 11 tuổi):</label>
                  <input type="number" class="form-control" id="numberChildrenBig" min="0" max="30" name="quantity_YoungPerson">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="numberChildrenNormal">Trẻ nhỏ( 2 - 5 tuổi):</label>
                  <input type="number" class="form-control" id="numberChildrenNormal" min="0" max="30" name="quantity_Children">
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="numberChildrenSmall">Trẻ Sơ sinh(nhỏ hơn 2 tuổi):</label>
                  <input type="number" class="form-control" id="numberChildrenSmall" min="0" max="30" name="quantity_Infant">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="customer_email">
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <input type="date" class="form-control" id="dateStart"  name="date">
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <label class="text-black" for="note">Nội dung ghi chú</label>
              <textarea name="note" class="form-control" id="note" cols="10" rows="2"></textarea>
            </div>
            @if(auth()->check())
            <button type="submit" class="btn btn-primary">Đặt tour</button>
            @else
            <a href="{{url('login')}}" type="submit" class="btn btn-primary">Đăng nhập để đặt tour</a>
            @endif
          </div>
        </div>
      </form>
      <!-- /thanh toán -->
    </div>
  </div>
  <Footer />
</template>
<script setup lang="js">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { detailTour } from '@/services/tourService.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tour = ref({})
const formatter = new Intl.NumberFormat('en-US')

onMounted(async () => {
  tour.value = (await detailTour(route.params.id)).data
})
</script>