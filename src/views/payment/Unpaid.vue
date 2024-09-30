<template>
    <HeaderComponent/>
    <div class="untree_co-section">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 35px;">CHƯA THANH TOÁN</p>
            <p class="title-tou__p" data-aos="fade-up" data-aos-delay="500" style="font-size: 12px;">
              Hóa đơn chưa thanh toán của bạn
            </p>
            <!--item  -->
            <div class="wrapper-item-tour-list" data-aos="fade-left" data-aos-delay="100"  v-for="bills in listBill">
              <div class="row justify-content-center">
                <div class="col-lg-4">
                  <img :src="bills.image" alt="" class="img-fluid" style="width: 100%">
                </div>
                <div class="col-lg-8">
                  <p class="title-tour-list font-weight-bold font-size-p" style="margin-top: 10px;">
                    <router-link :to="{ name: 'news.show', params: { id: bills.tour_id } }" class="title-tour-list__line">
                      {{ bills.price }}
                    </router-link>
                  </p>
                  <p>Ngày đăng: <span>{{bills.date_start}}</span></p>
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
  import { getBillUnpaid } from '@/services/paymentService';

  const listBill = ref([]);

  onMounted(async () => {
    listBill.value = await getBillUnpaid();
  });

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