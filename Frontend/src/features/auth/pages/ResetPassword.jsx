//File: src/features/aut/pages/ResetPassword.jsx 

import { useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Alert from "../../../components/common/Alert";

import "../styles/auth.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const { resetPassword } = useAuth();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = ({ target }) => {
        const { name, value } = target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!formData.password.trim()) {
            return "Password is required.";
        }

        if (formData.password.length < 6) {
            return "Password must be at least 6 characters.";
        }

        if (formData.password !== formData.confirmPassword) {
            return "Passwords do not match."
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError("");
        setMessage("");

        const validateError = validateForm();

        if (validateError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);

            await resetPassword(token, formData.password);

            setMessage(
                "Password reset successfully. Redirecting to login..."
            );

            setTimeout(() => {
                navigate("/logino");
            }, 2000);
        } catch (err) {
            setError(
                err?.response?.data?.message ||
                "unable to reset your password."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reset-password-container">
            <div classNmae="reset-password-card">
                <div className="reset-password-header">
                    <h1>Reset Password</h1>
                    <p>Create a new secure password for your account.</p>
                </div>

                {message && (
                    <Alert 
                        type="success"
                        message={messaage}
                    />
                )}

                {error && (
                    <Alert 
                        type="error"
                        message={error}
                    />
                )}

                <form 
                    className="reset-password-form"
                    onSubmit={handleSubmit}
                >
                    <Input 
                        label="New Password"
                        type="password"
                        value={dataForm.password}
                        placeholder="Enter your new password"
                        onChange={handleSubmit}
                        autoComplete="new-password"
                        required 
                    />

                    <Input  
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your new password"
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />

                    <Button 
                        type="submit"
                        disabled={loading}
                    >
                        {loading 
                            ? "Reseting..."
                            : "Reset Password"}
                    </Button>
                </form>

                <div className="reset-password-footer">
                    <p>
                        Back to {" "}
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

