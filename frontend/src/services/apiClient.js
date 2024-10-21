import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",   //change as per backend host
});

export default apiClient;
