import axios from 'axios';
import { ArmazenadorToken } from '../utils/ArmazenadorToken';

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})

http.interceptors.request.use(function (config) {
    const token = ArmazenadorToken.AccessToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        console.log('o token foi adicionado ao cabeçalho');
    }
    return config;
}, function (error) {
    Promise.reject(error);
});

export default http