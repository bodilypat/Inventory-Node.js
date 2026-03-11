//src/features/auth/pages/Login.jsx 

import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import './Login.css';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirect to dashboard or home page after successful login
        } catch (error) {
            console.error('Login failed:', error);
            // Show error message to user
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;


