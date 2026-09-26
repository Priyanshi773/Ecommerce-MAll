import axios from "axios";

const API = axios.create({
    baseURL: "https://ecommerce-mall-final.onrender.com", 
  withCredentials: true,
});

export default API;