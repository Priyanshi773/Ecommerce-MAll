import axios from "axios";

const API = axios.create({
    baseURL: "https://ecommerce-mall.onrender.com/api", 
  withCredentials: true,
});

export default API;