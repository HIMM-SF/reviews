import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllReviews = () => api.get('/reviews');

const apis = {
  getAllReviews,
};

export default apis;
