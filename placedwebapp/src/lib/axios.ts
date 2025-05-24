import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

// Add interceptors here if needed
// api.interceptors.request.use(...)
// api.interceptors.response.use(...)

export default api; 