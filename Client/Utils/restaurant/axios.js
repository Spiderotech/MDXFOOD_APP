import axios from "axios";

export const baseUrl = "http://192.168.1.6:3000/api/v1/restaurant";

const instance = axios.create({
  baseURL: baseUrl,                  
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
