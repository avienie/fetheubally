import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:9090",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// otomatis attach token ke setiap request kalau ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;