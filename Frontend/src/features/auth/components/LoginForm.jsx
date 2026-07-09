//File: src/features/auth/components/LoginForm.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

import "../styles/auth.css";

const LoginForm = ({
    onSubmit,
    loading = false,
    error = "",
}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData((prov) => ({
            ...prov,
            [name]: value,
        }));
    };

    const submitSubmit = (e) => {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>

            {error && (
                <div className="autu-alert">
                    {error}
                </div>
            )}

            {/* Email */}
            <div className="auth-group">
                <label htmlFor="email" className="auth-label">
                    Email Address 
                </label>

                <div className="auth-input-wrapper">
                    <Mail className="auth-input-icon" size={18} />

                    <Input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="auth-input"
                        required
                    />
                </div>
            </div>

            {/* Password */}
            <div className="auth-group">
                <label htmlFor="password" className="auth-label">
                    Password 
                </label>

                <div className="auth-input-wrapper">
                    <LockKeyhole className="auth-input-icon" size={18} />

                    <input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        className="auth-input auth-password"
                        required 
                    />

                    <Button 
                        type="button"
                        className="auth-password-toggle"
                        onClick={() => setShowPassword((prev) => !prov)}
                        aria-label={
                            showPassword ? "Hide password" : "Show password"
                        }
                    >

                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </Button>
                </div>
            </div>

            {/* Forgot Password */}
            <div className="auth-links">
                <Link 
                    to="/forgot-password"
                    className="auth-link"
                >
                    Forgot Password?
                </Link>
            </div>

            {/* Submit */}
            <Button 
                type="submit"
                disabled={loading}
                className="auth-button"
            >
                {loading ? "Signing in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;

