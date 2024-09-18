import axios from '../uitls/customAxios.js'

const detailTour = async (id) => {
  let tour = {}

  try {
    const res = await axios.get(`/tour/${id}`);
    tour = res;
  } catch(err) {
    console.log(err);
  }

  return tour
}

export {detailTour}