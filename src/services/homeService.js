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

const listTours = async () => {
  let tours = {}

  try {
    const res = await axios.get('/limitTours');
    tours = res;
  } catch(err) {
    console.log(err);
  }

  return tours
}

const info = async () => {
  let info = {}

  try {
    const res = await axios.get('/info');
    info = res;
  } catch(err) {
    console.log(err);
  }

  return info
}

const tourDomestic = async () => {
  let tours = {}

  try {
    const res = await axios.get('/tourDomestic');
    tours = res;
  } catch(err) {
    console.log(err);
  }

  return tours
}

export { getTour, listTours, info, tourDomestic }