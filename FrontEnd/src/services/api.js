import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ganti dengan URL backend Anda jika berbeda
});

export default api;
