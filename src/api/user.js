import axiosInstance from "./axios.js";

export const registerUser = (data)=> axiosInstance.post('/register',data);
export const login =(data)=>axiosInstance.post('/login',data);
export const profile =(data)=> axiosInstance.get('/',data);
export const logout =()=>axiosInstance.post('/logout');
export const validateSession =()=> axiosInstance.get('/verify');



