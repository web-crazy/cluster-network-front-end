import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

api.interceptors.response.use(
  (response) => response?.data,
  async (error) => Promise.reject(error)
);

export default api;
