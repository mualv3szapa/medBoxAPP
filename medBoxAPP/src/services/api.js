import axios from "axios";

const api = axios.create({
  // baseURL: "http://172.16.39.129:3000/",
  baseURL: "http://10.0.0.102:3000/",
  // baseURL: "http://192.168.15.5:3000/",
});

export default api;
