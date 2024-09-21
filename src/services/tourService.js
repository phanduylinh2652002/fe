import axios from '../uitls/customAxios.js'

const detailTour = (id) => {
  return axios.get(`/tour/${id}`)
}

const bookTour = (data) => {
  return axios.post('/bookTour', data)
}

export {detailTour, bookTour}