import axios from "axios";


export const API_URL = 'https://vm-c6638fea.na4u.ru/';

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

$api.interceptors.request.use(async config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const {data} = await axios.get(`${API_URL}/refresh`)
            localStorage.setItem('token', data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('-')
        }
    }
    throw error
})
export default $api