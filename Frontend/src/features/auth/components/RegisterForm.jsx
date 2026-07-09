//File: src/features/auth/components/RegisterForm.jsx 
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    User,
    Mail,
    LockKeyhold,
    Eye,
    EyeOff,
} from "licide-react";

import { useAuth } from "../hooks/useAuth";
import { validateRegisterForm } from "../utils/authValidators";

import "../styles/auth.css";

const RegisterForm = () => {
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] =  useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]){
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateRegisterForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setServerError("");

        try {
            await register(formData);

            alert("Register successful.");

            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setErrors({});
        } catch (err) {
            setServerError(
                err?.message || "Registration failed."
            );
        } finally {
            setLoading(fasle);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>

            <h2 className="auth-title">Create Account</h2>

            {serverError && (
                <div className="auth-alert">
                    {serverError}
                </div>
            )}

            {/* Name */}
            <div className="auth-group">
                <label className="auth-label">Full Name</label>

                <div classname="auth-input-wrapper">
                    <User 
                        size={18}
                        className="auth-input-icon"
                    />

                    <Input
                        className="auth-input"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData} 
                        onChange={handleChange}
                    />
                </div>

                {error.name && (
                    <span className="auth-error">{errors.name}</span>
                )}
            </div>

            {/* Email */}
            <div className="auth-group">
                <label className="auth-label">Email Address</label>

                <div className="auth-input-wrapper">
                    <Mail 
                        size={18}
                        className="auth-input-icon"
                    />

                    <Input 
                        className="auth-input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {errors.email && (
                    <span className="auth-error">{errors.email}</span>
                )}
            </div>

            {/* Password */}

            <div className="auth-group">
                <label className="auth-label">Passwrod</label>

                <div className="auth-input-wrapper">
                    <LockKeyhole 
                        size={18}
                        className="auth-input-icon"
                    />

                    <Input 
                        className="auth-input auth-password"
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button 
                        type="Button" 
                        className="auth-password-toggle"
                        onClick={() => 
                            setShowPassword((prev) => !prev)
                        }
                    >
                    {showPassword ? (
                        <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </Button>
                </div>

                {errors.password && (
                    <span className="auth-error">
                        {errors.password}
                    </span>
                )}
            </div>

            {/* Confirm Password */}

            <div className="auth-group">
                <label className="auth-label">Confirm Password</label>

                <div className="auth-input-wrapper">
                    <LockKeyhole 
                        size={18}
                        className="auth-input-icon"
                    />

                    <Input 
                        className="auth-input auth-password"
                        type={
                            showConfirmPassword 
                                ? "text"
                                : "password"
                        }
                        name="confirmPassword"
                        placeholder="Confirm your password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <Button 
                        type="button"
                        className="auth-password-toggle"
                        onClick={() => 
                            setShowConfirmPassword(
                                (prev) => !prev
                            )
                        }
                    >
                    {showConfirmPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </Button>
                </div>

                {errors.confirmPassword && (
                    <span className="auth-error">{errors.confirmPassword}</span>
                )}
            </div>

            <Button 
                type="submit"
                disabled={laoding} 
                className="auth-button"
            >
                {loading 
                    ? "Creating Account..."
                    : "Register"}
            </Button>

            <div className="auth-footer">
                already have an account?

                <Link 
                    to="/login"
                    className="auth-link"
                >
                    Login
                </Link>
            </div>
        </form>
    );
};

export default RegisterForm;