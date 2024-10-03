<template>
  <HeaderComponent />
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px">
            ĐÃ THANH TOÁN
          </p>
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px">
            Hóa đơn đã thanh toán của bạn
          </p>
          <!--item  -->
          <div
            class="wrapper-item-tour-list"
            data-aos="fade-left"
            data-aos-delay="100"
            v-for="bills in listBill"
          >
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <img :src="'http://127.0.0.1:8000/images/' + bills.order.tour.image" alt="" class="img-fluid" style="width: 100%" />
              </div>
              <div class="col-lg-8">
                <p class="title-tour-list font-weight-bold font-size-p" style="margin-top: 10px">
                  <router-link
                    :to="{ name: 'detail', params: { id: bills.order.tour.id } }"
                    class="title-tour-list__line"
                  >
                    {{ bills.order.tour.name }}
                  </router-link>
                </p>
                <p>Hành trình: <span> {{bills.order.tour.place}}</span></p>
                <p>Phương tiện: <span>{{bills.order.tour.vehicle}}</span></p>
                <p>Khởi hành: <span>{{bills.order.tour.dateStart}}</span></p>
                <div class="time-tour-list">
                  <div class="time-tour-list-left" style="background-color: #198754; color: white">
                    <span>Đã thanh toán</span>
                  </div>
                  <div class="time-tour-list-right">
                    <p v-if="bills.order.tour.discount > 0">
                      <span>
                        {{formatter.format(bills.order.tour.discount)}} đ
                      </span>
                      <span style="font-size: 15px; font-weight: lighter; text-decoration: line-through;">
                                            {{formatter.format(bills.order.tour.price)}} đ</span>
                    </p>
                    <p v-else>{{formatter.format(bills.order.tour.price)}} đ
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
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import { onMounted, ref } from 'vue';
import { getBillPaid } from '@/services/paymentService';

const listBill = ref({});
const formatter = new Intl.NumberFormat('en-US')


onMounted(async () => {
  listBill.value = await getBillPaid();
});
</script>

<style scoped>
.title-tour-list__line {
  text-decoration: none !important;
  color: black;
}
.row .justify-content-center {
  background-color: white !important;
  border-radius: 17px;
  margin: 0 !important;
}
</style>