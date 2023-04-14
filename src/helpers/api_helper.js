import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = "http://localhost:7777"

// const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

const headers = () => {
  return ({
    Authorization: localStorage.getItem('authUser') && `${localStorage.getItem('authUser')?.type} ${localStorage.getItem('authUser')?.token}`
  })
}

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  const endpoint = `${API_URL}${url}`
  // return axiosApi
  //   .post(url, { ...data }, { ...config })
  //   .then(response => response.data)
  return fetch(endpoint, { method: 'post', headers: headers() }).then((res) => {
    console.log(res, 'res')
    return res.data
  })
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
