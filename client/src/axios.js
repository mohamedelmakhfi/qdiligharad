import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8092', 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling or additional logic (optional)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle response errors
//     if (error.response && error.response.status === 401) {
//       // For example: handle unauthorized access (e.g., redirect to login)
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
