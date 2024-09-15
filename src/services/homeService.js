import axios from '../uitls/customAxios.js'

const getTour = async () => {
  let tours = {}

  try {
    const res = await axios.get('/tour');
    tours = res;
  } catch(err) {
    console.log(err);
  }

  return tours
}

export { getTour }