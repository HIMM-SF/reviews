import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
})

export const getAllReviews = () => api.get(`/reviews`);

const apis = {
    getAllReviews
}

export default apis;