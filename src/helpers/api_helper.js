import axios from 'axios'
import accessToken from './jwt-token-access/accessToken'

//pass new generated access token here
const token = accessToken

//apply base url for axios
let API_URL = 'http://102.130.119.106:7777'
//API_URL = 'http://localhost:7777'

// const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL
})

axiosApi.defaults.headers.common['Authorization'] = token

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

const headers = () => {
  return {
    Authorization:
      localStorage.getItem('authUser') &&
      `${localStorage.getItem('authUser')?.type} ${localStorage.getItem('authUser')?.token}`
  }
}

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response.data)
}

export async function post(url, data, config = {}) {
  const endpoint = `${API_URL}${url}`
  return axiosApi.post(endpoint, { ...data }, { ...config }).then((response) => response.data)
  return fetch(endpoint, { method: 'post', headers: headers() }).then((res) => {
    console.log(res, 'res')
    return res.data
  })
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data)
}

export async function upload(url, file) {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response = await axiosApi.post(url, formData, {
      headers: {
        ...headers(),
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log('File upload response:', response.data)
  } catch (error) {
    console.error('File upload failed:', error)
  }
}
