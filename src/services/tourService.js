import axios from '../uitls/customAxios.js'

const detailTour = (id) => {
  return axios.get(`/tour/${id}`)
}

export {detailTour}