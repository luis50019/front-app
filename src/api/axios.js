import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://back-app-85wr.onrender.com",
  withCredentials:true,
})

export default axiosInstance;