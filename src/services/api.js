import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333" || "https://foodexplorer-api-7qqb.onrender.com"
});