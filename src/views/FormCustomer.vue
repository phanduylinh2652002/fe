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
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <p class="title-tou__p">THÔNG TIN LIÊN HỆ</p>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="text" class="form-control" id="fullname" name="name"
                         rules="required"
                         placeholder="Họ tên"
                  />
                </div>
                  <span class="text-danger">{{ errors.fullname }}</span>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="tel" class="form-control" id="phone" name="phone" rules="required"
                         placeholder="Điện thoại"
                  />
                  <span class="text-danger">{{ errors.phone }}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="number" class="form-control" id="numberAdult" name="quantity_OldPerson"
                         placeholder="Người lớn"
                  />
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="number" class="form-control" id="numberChildrenBig"
                         min="0" max="30" name="quantity_YoungPerson"
                         placeholder="Trẻ em(5 - 11 tuổi)"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <label class="text-black" for="numberChildrenNormal"></label>
                  <Field type="number" class="form-control" id="numberChildrenNormal" min="0" max="30" name="quantity_Children"
                         placeholder="Trẻ nhỏ( 2 - 5 tuổi):"
                  />
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="number" class="form-control" id="numberChildrenSmall" min="0" max="30" name="quantity_Infant"
                    placeholder="Trẻ Sơ sinh(nhỏ hơn 2 tuổi)"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="email" class="form-control" id="email" name="email" rules="required"
                         placeholder="Email"
                  />
                </div>
                  <span class="text-danger">{{ errors.email }}</span>
              </div>
              <div class="col-6 mt-3">
                <div class="form-group">
                  <Field type="date" class="form-control" id="dateStart"  name="date" rules="required"/>
                </div>
                  <span class="text-danger">{{ errors.date }}</span>
              </div>
            </div>
            <div class="form-group mt-3">
              <Field name="note" as="textarea" class="form-control" id="note" cols="10" rows="2"
                placeholder="Ghi Chú"
              />
              <span class="text-danger">{{ errors.note }}</span>
            </div>

            <button v-if="token" type="button" class="btn btn-primary" @click="BookTour">Đặt tour</button>
            <router-link v-else to="/login" class="btn btn-primary">Đăng nhập để đặt tour</router-link>
          </div>
        </div>
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
import { useRoute, useRouter } from 'vue-router'
import { Field, useForm } from 'vee-validate'

const route = useRoute()
const router = useRouter()
const tour = ref({})
const token = ref(null)
const formatter = new Intl.NumberFormat('en-US')
const { handleSubmit, errors } = useForm({});

onMounted(async () => {
  tour.value = (await detailTour(route.params.id)).data
  token.value=localStorage.getItem('token')
})

const BookTour = handleSubmit(async (data) => {
  localStorage.setItem('tour', JSON.stringify(data))
  await router.push({ name: 'bookTour', params: { id: tour.value.id } })
})

</script>