//src/features/auth/authService.js 

import { loginApi, registerApi, fetchCurrentUser } from '../../api/authApi';

export const login = async (credentials) => {
    const response = await loginApi(credentials);
    return response.data;
}

export const register = async (userData) => {
    const response = await registerApi(userData);
    return response.data;
}

export const getCurrentUser = async () => {
    const response = await fetchCurrentUser();
    return response.data;
}
