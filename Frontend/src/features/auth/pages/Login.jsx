//File: src/features/auth/pages/Login.jsx 

import React, { useState } from "react";;

import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";

import Button from "../../../components/common/Button";
import Input from "../../../domponents/comon/Input";

import "../styles/auth.css";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormDate] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!formData.email.trim()) {
            return "Email is required";
        }

        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(formData.email)) {
            return "Please enter a valid email address.";
        }

        if (formData.password.length < 6 ){
            return "Password must be at least 6 characters.";
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {
            setError(ValidationError);
            return;
        }

        try {
            setLoading(true);

            await login(formData.email, formData.password);

            navigate("/dashboard");
        } catch (err) {
            setError(
                err?.response?.data.message ||
                "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Login to your inventory management system.</p>
                </div>

                {error && (
                    <div className="logig-error">
                        {error}
                    </div>
                )}

                <form className="login-form" onSubmit={handleSubmiit}>
                    <Input 
                        label="Email"
                        type="email"
                        name="email"
                        value="formData.email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        autoComplete="email"
                        required 
                    />

                    <div className="password-field">
                        <Input 
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            autoComplete="current-password"
                            required 
                        />

                        <button 
                            type="button"
                            className="togle-password-btn"
                            onClick={() => 
                                setShowPassword((prev) => !prev)
                            }
                        >
                            {showPassword ? "Hide" : "show"}
                        </button>
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkBox" />
                                remember me
                        </label>

                        <Link 
                            to="/forgot-password"
                            className="forgot-password"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="login-btn"
                    >
                        {loading ? "login in ..." : "Login"}
                    </Button>
                </form>

                <div className="login-footer">
                    <p>
                        Don't have an account?{" "}
                        <Link 
                            to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

