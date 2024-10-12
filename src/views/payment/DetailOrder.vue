<template>
  <Header />
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="title-tou__p">{{ bill.order?.tour?.name }}</p>
          <div class="custom-block point-special-tour" data-aos="fade-up">
            <h2 class="section-title"><i class="fa-solid fa-book"></i> Điểm nhấn hành trình</h2>
            <div class="custom-accordion" id="accordion_1">
              <div class="accordion-item">
                <!-- <div id="collapse" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1"> -->
                <div class="accordion-body" v-html="bill.order?.tour?.description"></div>
                <!-- </div> -->
              </div>
              <!-- .accordion-item -->
            </div>
          </div>
          <div class="custom-block point-special-tour" data-aos="fade-up">
            <h2 class="section-title"><i class="fa-solid fa-calendar"></i> Lịch trình</h2>
            <div class="custom-accordion" id="accordion_1" v-html="bill.order?.tour?.trip"></div>
          </div>
        </div>
        <div class="col-lg-4" style="margin-top: 60px">
          <div class="custom-block custom-block-sticky" data-aos="fade-up" data-aos-delay="100">
            <h2 class="section-title">{{ bill.order?.tour?.name }}</h2>
            <table class="table table-dark table-hover">
              <tbody>
                <tr>
                  <th>Mã tour</th>
                  <td>{{ bill.order?.tour?.id }}</td>
                </tr>
                <tr>
                  <th>Phương tiện:</th>
                  <td>{{ bill.order?.tour?.vehicle }}</td>
                </tr>
                <tr>
                  <th>Xuất phát:</th>
                  <td>{{ bill.order?.tour?.locationStart }}</td>
                </tr>
                <tr>
                  <th>Hướng dẫn viên:</th>
                  <td>{{ bill.order?.tour?.guide.name }}</td>
                </tr>
                <tr>
                  <th>Người đặt:</th>
                  <td>{{ bill.order?.tour?.guide.name }}</td>
                </tr>
                <tr>
                  <th>Số lượng người lớn</th>
                  <td>{{ bill.order?.quantity_oldPerson }}</td>
                </tr>
                <tr v-if="bill.order?.quantity_youngPerson > 0">
                  <th>Số lượng người trẻ em</th>
                  <td>{{ bill.order?.quantity_youngPerson }}</td>
                </tr>
                <tr v-if="bill.order?.quantity_children > 0">
                  <th>Số lượng người trẻ nhỏ</th>
                  <td>{{ bill.order?.quantity_children }}</td>
                </tr>
                <tr v-if="bill.order?.quantity_infant > 0">
                  <th>Số lượng người trẻ sơ sinh</th>
                  <td>{{ bill.order?.quantity_infant }}</td>
                </tr>
                <tr>
                  <th>Tổng tiền</th>
                  <th>{{ formatter.format(bill.total) }} đ</th>
                </tr>
              </tbody>
            </table>
            <div class="wrapper-booking-tour">
              <p v-if="bill.order?.tour?.discount > 0">
                Giá từ:
                <span style="font-size: 25px; font-weight: bold; color: #fff"
                  >{{ formatter.format(bill.order?.tour?.discount) }} đ</span
                >
                <span style="text-decoration: line-through">
                  {{ formatter.format(bill.order?.tour?.price) }} đ</span
                >
              </p>
              <p v-else>
                <span style="font-size: 25px; font-weight: bold; color: #fff"
                  >{{ formatter.format(bill.order?.tour?.price) }} đ</span
                >
              </p>
              <div class="btn-booking-tour">
                <div class="btn-booking-tour__a">
                  <router-link
                    :to="{ name: 'formCustomer', params: { id: `${bill.order?.tour?.id}` } }"
                    class="btn btn-success"
                    >ĐẶT LẠI</router-link
                  >
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
<script setup>
import { useRoute } from 'vue-router'
import { detailOrder } from '@/services/paymentService.js'
import { onMounted, ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute();
const bill = ref({})
const formatter = new Intl.NumberFormat('en-US')

const getDetail = async () =>{
  bill.value = await detailOrder(route.params.id);
  console.log(bill)
}

onMounted(()=>{
  getDetail()
})

</script>