import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8800/api/",
  headers: { "Content-Type": "application/json" },
});
