//src/features/auth/api/authApi.js 

import axios from '@/api/axiosClient';

export const loginApi = async (credentials) => {
    try {
        const response = await axios.post('/auth/login', credentials);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export const registerApi = async (userData) => {
    try {
        const response = await axios.post('/auth/register', userData);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export const logoutApi = async () => {
    try {
        const response = await axios.post('/auth/logout');
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};

export const refreshTokenApi = async () => {
    try {
        const response = await axios.post('/auth/refresh-token');
        return response.data;
    }   
    catch (error) {
        throw error.response.data;
    }
};

export const getCurrentUserApi = async () => {
    try {
        const response = await axios.get('/auth/me');
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
};


