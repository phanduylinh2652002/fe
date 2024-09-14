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

export { getCategories }