import axios from "axios";
const URL_BASE = "https://back-app-85wr.onrender.com";
//const URL_BASE = "http://localhost:4040";
const axiosInstance = axios.create({
  baseURL:URL_BASE,
  withCredentials:true,
})

export default axiosInstance;