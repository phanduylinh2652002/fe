<template>
  <HeaderComponent />
  <div class="untree_co-section">
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px">
            CHƯA THANH TOÁN
          </p>
          <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px">
            Hóa đơn chưa thanh toán của bạn
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
                <p>Ngày đặt: <span>{{bills.date}}</span></p>
                <div class="time-tour-list">
                  <button
                     class="time-tour-list-left"
                     style="background-color: #dc3545;
                     color: white;
                     border: none;"
                     v-if="bills.order.status === 0"
                     @click="handleCancel(bills.id)"
                  >
                    <span>Hủy tour</span>
                  </button>
                  <button
                    class="time-tour-list-left"
                    style="background-color: #0d6efd;
                     color: white;
                     border: none;"
                    v-if="bills.order.status === 3"
                  >
                    <span>Đã hủy</span>
                  </button>
                  <div class="time-tour-list-right">
                    <p>{{formatter.format(bills.total)}} đ
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
import { getBillUnpaid, cancelTour } from '@/services/paymentService';
import { useRouter } from 'vue-router'

const listBill = ref({});
const formatter = new Intl.NumberFormat('en-US')
const router = useRouter()


onMounted(async () => {
  listBill.value = await getBillUnpaid();
});

const handleCancel = async (id) =>{
  const cancel = confirm('are you sure? ')
  if (cancel) {
    const data = {id: id}
    const res = await cancelTour(data);

    if (res.success === true) {
      window.location.reload()
    }
  }
}
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