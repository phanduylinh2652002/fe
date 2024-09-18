<template>
  <div id="myContainer">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <HeaderComponent />
    <div class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="intro-wrap">
              <h1 class="mb-5">
                <span class="d-block">Cùng nhau trải nghiệm </span> những chuyến đi
                <span class="typed-words"></span>
              </h1>

              <div class="row">
                <div class="col-12">
                  <form class="form">
                    <div class="row mb-2">
                      <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                        <!-- <input type="text" class="form-control" name="daterange"> -->
                        <select name="" id="province" class="form-control custom-select">
                          <option value="">Điểm xuất phát</option>
                          <option value="All">Tất cả</option>
                          <option value="HaNoi">Hà Nội</option>
                          <option value="DaNang">Đà Nẵng</option>
                          <option value="HoChiMinh">Hồ Chí Minh</option>
                        </select>
                      </div>
                      <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-6">
                        <!-- <input type="text" class="form-control" name="daterange"> -->
                        <input
                          type="text"
                          id="search-tour"
                          class="form-control"
                          placeholder="Tìm tour du lịch..."
                          style="padding-left: 10px"
                        />
                      </div>
                      <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-2 wrapper-filter">
                        <a
                          href="#demo"
                          data-toggle="collapse"
                          class="filter"
                          style="display: block"
                        >
                          <i class="fa-solid fa-sliders"></i>
                        </a>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                        <input
                          type="submit"
                          class="btn btn-primary btn-block"
                          value="Tìm kiếm tour"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="slides">
              <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid active" />
              <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid" />
              <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid" />
              <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid" />
              <img src="../assets/images/hero-slider-1.jpg" alt="Image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section" style="padding-top: 0px">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h2
              class="title-tour-sale-main section-title mb-4 aos-init"
              style="font-weight: bold; font-size: 45px !important"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              Tours hot giá sốc
            </h2>
            <p class="content-tour-sale-main aos-init" data-aos="fade-up" data-aos-duration="1000">
              Cập nhật hàng ngày các tour được hỗ trợ với mức giá hấp dẫn
            </p>
            <div class="owl-single dots-absolute owl-carousel owl-theme owl-bs main-carousel">
              <div class="item img-fluid rounded-20">
                <img :src="tourfirst.image" alt="ảnh Sky" class="img-fluid rounded-20" />
                <div class="wrapper-img-background">
                  <h3 class="text-center">{{ tourfirst.name }}</h3>
                  <p class="tour-sale-p1">{{ tourfirst.quantityDate }}</p>
                  <p class="tour-sale-p2">{{ tourfirst.place }}</p>
                  <p class="tour-sale-p3">
                    {{ tourfirst.dateStart }}
                    <span class="tour-sale-span1">
                      {{ formatter.format(tourfirst.discount) }} đ</span
                    ><span class="tour-sale-span2">{{ formatter.format(tourfirst.price) }} đ</span>
                  </p>
                  <router-link
                    :to="{ name: 'detail', params: { id: `${tourfirst.id}` } }"
                    class="btn-detail-tour-sale btn"
                    >Xem chi tiết</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 pl-lg-5 ml-auto" style="margin-top: 135px">
            <div class="owl-carousel owl-carousel owl-3-slider second-carousel d-flex">
              <div
                class="item item-tour-sale"
                v-for="(item, index) in tours"
                :key="index"
                style="margin-right: 10px"
              >
                <a class="media-thumb" href="chitiet.html">
                  <div class="media-text media-text-tour-sale">
                    <h3>{{ formatter.format(item.discount) }} đ</h3>
                    <span class="location">{{ formatter.format(item.price) }} đ</span>
                    <p style="margin-top: 16px">{{ item.place }}</p>
                    <p>{{ item.quantityDate }}</p>
                    <p>Khởi hành: {{ item.dateStart }}</p>
                    <p class="text-center" style="color: #ada9a9; font-size: 20px !important">
                      (Click xem chi tiết)
                    </p>
                  </div>
                  <img
                    :src="item.image"
                    alt="Image"
                    class="img-fluid"
                    style="height: 310px; width:"
                  />
                </a>
                <div class="tour-name-sale">
                  <h5 class="text-center">Tour</h5>
                  <p class="text-center">{{ item.locationStart }} – {{ item.locationEnd }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="untree_co-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-lg-6 text-center">
            <h2
              class="section-title text-center mb-3 aos-init title-tour-summer-main"
              style="font-size: 45px !important; font-weight: bold"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Tours du lịch hè 2024
            </h2>
            <p
              class="aos-init content-tour-summer-main"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Thật tuyệt vời khi giao quyền sắp xếp tour du lịch và kết hợp nghỉ ngơi trong thời
              gian gần 1 tháng cho SkyTour. Đặc biệt nhận được sự gần gũi, thân thiện, cảm giác như
              tình cảm gia đình ( VÔ GIÁ ). Hy vọng sẽ sớm gặp lại…
            </p>
          </div>
        </div>
        <div
          class="row align-items-stretch aos-init list-tour-summer-main"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div
            class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1"
            v-for="(item, key) in list"
            :key="key"
          >
            <div class="item item-search">
              <div class="media-thumb">
                <div class="media-text">
                  <h3>
                    <i class="fa-solid fa-money-bill"></i>
                    <template v-if="item.discount">{{ formatter.format(item.discount) }}</template>
                    <template v-else>{{ formatter.format(item.price) }}</template>
                  </h3>
                  <p class="location"><i class="fa-solid fa-location-dot"></i>{{ item.place }}</p>
                </div>
                <img :src="item.image" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section count-numbers py-5">
      <div class="container">
        <div class="row" style="text-align: center">
          <div class="col-6 col-sm-6 col-md-6 col-lg-4">
            <div class="counter-wrap">
              <div class="counter">
                <span class="" data-number="{{quantity.tours}}">{{ quantity.tours }}</span>
              </div>
              <span class="caption">Chuyến đi</span>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-6 col-lg-4">
            <div class="counter-wrap">
              <div class="counter">
                <span class="" data-number="{{quantity.customers}}">{{ quantity.customers }}</span>
              </div>
              <span class="caption">Lượt khách</span>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-6 col-lg-4">
            <div class="counter-wrap">
              <div class="counter">
                <span class="" data-number="{{quantity.tourGuide}}">{{ quantity.tourGuide }}</span>
              </div>
              <span class="caption">Hướng dẫn viên chuyên nghiệp </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section">
      <div class="container">
        <div class="row text-center justify-content-center mb-5">
          <div class="col-lg-7">
            <h2
              class="section-title text-center mb-3"
              style="font-size: 45px !important; font-weight: bold"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              Điểm đến trong nước
            </h2>
          </div>
        </div>

        <div class="owl-carousel owl-3-slider d-flex">
          <div
            class="item"
            data-aos="fade-up"
            data-aos-duration="1000"
            style="margin: 0 10px"
            v-for="(item, index) in domestic"
            :key="index"
          >
            <a class="media-thumb" href="danhmuc.html">
              <div class="media-text">
                <h3>Du lịch {{ item.locationEnd }}</h3>
                <span class="location me-5">{{ item.locationEnd }}</span>
              </div>
              <img :src="item.image" alt="Image" class="img-fluid" style="height: 568px" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-lg-6">
            <h2
              class="section-title text-center mb-3"
              style="font-weight: bold; font-size: 45px !important"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Tour du lịch Châu Âu
            </h2>
            <p>Các tour đến tham qun du lịch Châu Âu cho mùa hè này</p>
          </div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1200">
          <div
            class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
            v-for="(item, index) in eu"
            :key="index"
          >
            <div class="media-1">
              <a href="#" class="d-block mb-3">
                <img
                  :src="item.image"
                  alt="Image"
                  class="img-fluid"
                  style="height: 205px; width: 100%"
                />
              </a>
              <span class="d-flex align-items-center loc mb-2">
                <span class="icon-room mr-3"></span>
                <span style="margin-left: 15px">{{ item.locationEnd }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section testimonial-section mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <h2 class="section-title text-center mb-5">Phản hồi</h2>

            <div class="owl-single owl-carousel no-nav">
              <div class="testimonial mx-auto">
                <figure class="img-wrap">
                  <img src="../assets/images/person_2.jpg" alt="Image" class="img-fluid" />
                </figure>
                <h3 class="name">Nguyễn Quỳnh Anh</h3>
                <blockquote>
                  <p>
                    &ldquo;Tôi đã tham gia một chuyến du lịch ở Việt Nam cùng với đoàn của công ty
                    du lịch ABC. Tôi rất hài lòng với dịch vụ tour vì các hướng dẫn viên rất chuyên
                    nghiệp và thân thiện. Họ đã giúp tôi và đoàn của tôi khám phá những địa điểm đẹp
                    và thú vị nhất của Việt Nam.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div class="testimonial mx-auto">
                <figure class="img-wrap">
                  <img src="../assets/images/person_3.jpg" alt="Image" class="img-fluid" />
                </figure>
                <h3 class="name">Nguyễn Quốc Anh</h3>
                <blockquote>
                  <p>
                    &ldquo;Tôi cảm thấy rất an tâm vì họ đã giải đáp cho tôi mọi thắc mắc và đưa ra
                    những lời khuyên hữu ích. Không chỉ vậy, các hoạt động và trải nghiệm cũng rất
                    thú vị và đáng nhớ. Tôi sẽ chắc chắn giới thiệu dịch vụ cho bạn bè và người thân
                    của mình nếu họ muốn thăm Việt Nam.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div class="testimonial mx-auto">
                <figure class="img-wrap">
                  <img src="../assets/images/person_4.jpg" alt="Image" class="img-fluid" />
                </figure>
                <h3 class="name">Nguyễn Quỳnh Anh</h3>
                <blockquote>
                  <p>
                    &ldquo;Là một hướng dẫn viên, tôi sẽ luôn sẵn sàng giúp các bạn trả lời mọi thắc
                    mắc và đưa ra những lời khuyên hữu ích để chuyến du lịch của các bạn trở nên
                    thật tuyệt vời.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6">
            <figure class="img-play-video">
              <a
                id="play-video"
                class="video-play-button"
                href="https://www.youtube.com/watch?v=Au6LqK1UH8g"
                data-fancybox
              >
                <span></span>
              </a>
              <img
                src="../assets/images/hero-slider-2.jpg"
                alt="Image"
                class="img-fluid rounded-20"
              />
            </figure>
          </div>

          <div class="col-lg-5">
            <h2
              class="section-title text-left mb-4"
              style="font-weight: bold; font-size: 40px !important"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Hành trình cùng SkyTour
            </h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              Du lịch Việt Nam là một hành trình thú vị và đầy khám phá. Với những nét đẹp tự nhiên
              hùng vĩ, văn hóa đa dạng và những trải nghiệm độc đáo, Việt Nam đã trở thành một điểm
              đến hấp dẫn cho các du khách từ khắp nơi trên thế giới. Để có một chuyến du lịch tuyệt
              vời, các hướng dẫn viên chuyên nghiệp sẽ giúp bạn khám phá và tìm hiểu tất cả những
              điều thú vị mà đất nước Việt Nam mang lại.
            </p>

            <p data-aos="fade-up" data-aos-duration="1200" class="mb-4">
              Ngoài ra, các hướng dẫn viên của SkyTour còn giúp bạn giải đáp các thắc mắc và đưa ra
              những lời khuyên hữu ích về an toàn và các quy định địa phương. Họ cũng sẽ giúp bạn
              đàm phán với các nhà cung cấp dịch vụ và giải quyết các vấn đề nếu có.
            </p>

            <ul data-aos="fade-up" data-aos-duration="1200" class="list-unstyled two-col clearfix">
              <li>Hoạt động giải trí ngoài trời</li>
              <li>Hãng hàng không</li>
              <li>Cho thuê ô tô</li>
              <li>Du thuyền</li>
              <li>Khách sạn</li>
              <li>Đường sắt</li>
              <li>Travel Insurance</li>
              <li>Gói du lịch</li>
              <li>Bảo hiểm</li>
              <li>Sách hướng dẫn</li>
            </ul>

            <p data-aos="fade-up" data-aos-duration="1200">
              <a href="#" class="btn btn-primary">Bắt đầu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import { onMounted, ref } from 'vue'
import { getTour, listTours, info, tourDomestic, tourEu } from '@/services/homeService.js'

const tours = ref({})
const tourfirst = ref({})
const formatter = new Intl.NumberFormat('en-US')
const list = ref({})
const quantity = ref({})
const domestic = ref({})
const eu = ref({})

onMounted(async () => {
  tours.value = await getTour()
  list.value = await listTours()
  quantity.value = await info()
  domestic.value = await tourDomestic()
  eu.value = await tourEu()

  if (Object.keys(tours.value).length > 0) {
    tourfirst.value = tours.value[Object.keys(tours.value)[0]]
  } else {
    console.log('No tours available')
  }
})
</script>
<style lang="css" scoped>
.hero h1 {
  color: #6998ab;
}
</style>
