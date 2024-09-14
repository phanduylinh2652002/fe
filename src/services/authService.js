import axios from '../uitls/customAxios.js'

const registerApi = (data) => {
     return axios.post('/register', data)
}

const loginApi = (data) => {
     return axios.post('/login', data)
}

export { registerApi, loginApi }