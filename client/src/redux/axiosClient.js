import axios from 'axios';
import { api } from './api';

const client = axios.create({
    baseURL: api,
    withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
};

client.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;
        const data = error.response?.data || {};

        if (status === 401 && data.message === 'access_token_expired' && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then(() => client(originalRequest))
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const refreshRes = await client.post('/auth/refresh');
                const newToken = refreshRes.data?.data?.accessToken;
                processQueue(null, newToken);
                return client(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                window.location.href = '/login';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        // other 401s
        if (status === 401) {
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default client;
