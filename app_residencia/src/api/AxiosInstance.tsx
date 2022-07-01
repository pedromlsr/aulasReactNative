import axios from "axios";

const AxiosInstance = axios.create({
   baseURL: 'http://192.168.0.32:8080/comercio-seguro',
})

export default AxiosInstance