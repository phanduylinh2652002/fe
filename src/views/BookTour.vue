<template>
  <Header />
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
              <p>{{tour.name}} - Giá người lớn x <span>{{ customer.quantity_OldPerson }}</span></p>
            </td>
            <td>
             <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount * customer.quantity_OldPerson) }} đ
                  </span>
              <span v-else>
                    {{ formatter.format(tour?.price * customer.quantity_OldPerson) }} đ
                  </span>
            </td>
          </tr>
          <tr>
            <td>
              <p>{{tour.name}} - Giá trẻ em x <span>{{ customer.quantity_YoungPerson ?? 0 }}</span></p>
            </td>
            <td>
              <span v-if="tour.discount > 0">
                    {{ formatter.format(tour?.discount/2 * (customer.quantity_YoungPerson ?? 0)) }} đ
                  </span>
              <span v-else>
                    {{ formatter.format(tour?.price/2 * (customer.quantity_YoungPerson ?? 0)) }} đ
                  </span>
            </td>
          </tr>
          <tr>
            <td>
              <p>{{tour.name}} - Giá trẻ nhỏ x <span>{{ customer.quantity_Children ?? 0 }}</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <p>{{tour.name}} - Giá trẻ sơ sinh x <span>{{ customer.quantity_Infant ?? 0 }}</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>Tạm tính</td>
            <td>{{formatter.format(total)}} đ</td>
          </tr>
          <tr>
            <td style="font-weight: bold;">Tổng</td>
            <td style="font-weight: bold; font-size: 17px;">{{formatter.format(total)}}</td>
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
import Header from '@/components/Header.vue'

const tour = ref({})
const customer = ref({})
const route = useRoute()
const router = useRouter()
const formatter = new Intl.NumberFormat('en-US')
const total = ref()

onMounted(async () => {
  tour.value = (await detailTour(route.params.id)).data
  customer.value = JSON.parse(localStorage.getItem('tour'))
  if (tour.value.discount > 0) {
    total.value = tour.value?.discount * customer.value.quantity_OldPerson + tour.value?.discount/2 * (customer.value.quantity_YoungPerson ?? 0)
  }
  else {
    total.value = tour.value?.price * customer.value.quantity_OldPerson + tour.value?.price/2 * (customer.value.quantity_YoungPerson ?? 0)
  }
})

const handlePayment = async () =>{
  const user = JSON.parse(localStorage.getItem('user'))
  const data = { customer: customer.value, tour: tour.value, total: total.value,user: user}
  const res = await bookTour(data)

  if (res.success === true) {
    await router.push({ name: 'success' })
  }
}
</script>