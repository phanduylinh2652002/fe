<template>
  <div class="untree_co-section">
    <div class="container my-5 d-flex justify-content-center">
      <div class="col-lg-6">
        <p class="title-tou__p">ĐƠN HÀNG CỦA BẠN</p>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th>Chi Phí Tour</th>
            <th>Tạm tính</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p> - Giá người lớn x <span>{{ customer.quantity_YoungPerson }}</span></p>
            </td>
            <td>
             <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount * customer.quantity_YoungPerson) }} đ
                  </span>
              <span v-else>
                    {{ formatter.format(tour?.price * customer.quantity_YoungPerson) }} đ
                  </span>
            </td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ em x <span>{{ customer.quantity_OldPerson }}</span></p>
            </td>
            <td>
              <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount/2 * customer.quantity_OldPerson) }} đ
                  </span>
              <span v-else>
                    {{ formatter.format(tour?.price/2 * customer.quantity_OldPerson) }} đ
                  </span>
            </td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ nhỏ x <span>{{ customer.quantity_Children }}</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ sơ sinh x <span>{{ customer.quantity_Infant }}</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>Tạm tính</td>
            <td>
              </td>
          </tr>
          <tr>
            <td style="font-weight: bold;">Tổng</td>
            <td style="font-weight: bold; font-size: 17px;"></td>
          </tr>
          </tbody>

        </table>
        <div class="d-flex justify-content-between">
          <router-link :to="{ name: 'formCustomer', params: { id: tour.id } }" class="btn btn-primary">Quay lại</router-link>
          <div class="d-flex">
              <button type="submit" class="btn btn-primary" @click="handlePayment">Thanh toán tại quầy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { bookTour, detailTour } from '@/services/tourService.js'
import { useRoute, useRouter } from 'vue-router'

const tour = ref({})
const customer = ref({})
const route = useRoute()
const router = useRouter()
const formatter = new Intl.NumberFormat('en-US')

onMounted(async () => {
  tour.value = (await detailTour(route.params.id)).data
  customer.value = JSON.parse(localStorage.getItem('tour'))
})

const handlePayment = async () =>{
  const res = await bookTour(customer.value)

  if (res.success === true) {
    await router.push({ name: 'home' })
  }
}
</script>

<script>
var myHeader = document.querySelector(".site-nav");
myHeader.classList.add("site-nav__color");
</script>