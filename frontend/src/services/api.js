import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL
});

export const getMenu = () => api.get('/menu');
export const placeOrder = (order) => api.post('/orders/place', order);
export const askAi = (query) => api.get('/ai/ask', { params: { query } });

export default api;
