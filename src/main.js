import './assets/js/jquery-3.4.1.min.js';
import './assets/js/bootstrap.min.js';
// import './assets/js/aos.js';
import './assets/js/custom.js';
// import './assets/js/daterangepicker.js';
import './assets/js/jarallax.min.js';
// import './assets/js/moment.min.js';
import './assets/js/owl.carousel.min.js';
import AOS from 'aos'
import 'aos/dist/aos.css'
// Import Bootstrap 3 JS
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/css/aos.css';
import './assets/css/style.css';
import './assets/css/daterangepicker.css';
import './assets/css/styleLogin.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/fonts/icomoon/style.css';
import './assets/fonts/flaticon/font/flaticon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'waypoints/lib/jquery.waypoints';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Popover, Modal } from 'bootstrap'
import '@/plugins/veeValidate.js'

document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo Modal
  const modalElement = document.getElementById('myModal');
  if (modalElement) {
    const modal = new Modal(modalElement);
    // Show the modal
    modal.show();
  }

  // Khởi tạo Popover
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach((popoverTriggerEl) => {
    new Popover(popoverTriggerEl);
  });
});

import App from './App.vue'
import router from './router'
import { configure } from 'vee-validate'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AOS.init())
configure({
  validateOnInput: true,
});
app.mount('#app')
