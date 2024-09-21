import axios from '../uitls/customAxios.js'

const getCategories = async () => {
  let categoriesData = {};

  try {
    const response = await axios.get('/categories');
    categoriesData = { data: response };
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  return categoriesData;
};

const detailCategory = async (id) => {
  let category = {}

  try {
    const res = await axios.get(`/category/${id}`);
    category = res;
  } catch(err) {
    console.log(err);
  }

  return category
}

export { getCategories, detailCategory }