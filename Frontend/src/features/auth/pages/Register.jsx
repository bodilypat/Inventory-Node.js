//File: src/features/auth/pages/Register.jsx 

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../components/AuthCard";
import RegisterForm from "../components/Registerform";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

import "../styles/auth.css";

const Register = () => {
    const navigate = useNavigate();

    const { register } = useAuth();

    const [formData, setFormatData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, value] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormatData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            return "Full name is required.";
        }

        if (!formData.email.trim()) {
            return "Email is required";
        }

        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(formData.email)) {
            return "Please enter a valid email address.";
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);

            await register({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
            });

            navigate("/login");
        } catch (err) {
            setError(
                err?.reponse?.data?.message ||
                "Registration failed. please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1>Create Account</h1>
                    <p>Create your inventory management account.</p>
                </div>

                {error && (
                    <div className="register-error">
                        {error}
                    </div>
                )}

                <form 
                    className="register-form"
                    onSubmit={handleSubmit}
                >
                    <Input 
                        label="Full Name"
                        type="text"
                        value={formData.fullName}
                        placeholder="Enter your Email"
                        onChange={handleChange}
                        autoComplete="email"
                    />

                    <Input 
                        label="Password"
                        type="password"
                        name="password"
                        value={formdData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        autoComplete="new-password"
                    />

                    <Input
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleChange}
                        autoComplete="new-password"
                        required 
                    />

                    <Button 
                        type="submit"
                        disabled={loading}
                    >
                        {loading 
                            ? "Creating Account..."
                            : "Register"}
                    </Button>
                </form>

                <div className="register-footer">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;


