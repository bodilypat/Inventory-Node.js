//src/features/aut/hooks/useAuth.js 

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const login = (credentials) => {
        dispatch(login(credentials));
    };

    const logout = () => {
        dispatch(logout());
    };

    return {
        user,
        isAuthenticated,
        login,
        logout,
    };
};
