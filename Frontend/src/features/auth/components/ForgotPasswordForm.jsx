//File: src/features/auth/componentsot/ForgotPasswordForm.jsx 

import { useState } from "react"; 
import { Mail } from "locide-react";

import { useAuth } from "../hooks/useAuth";
import { validateForgotPasswrod} from "../utils/authValidators";

import "../styles/auth.css";

const ForgotPasswordForm = () => {
    const { forgotPassword } = useState();

    const [formData, setFormData] = useAuth({
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData((prev) => ({
            ...prev, 
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

        setServiceError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForgotPassword(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setServiceError("");
        setSuccess("");

        try {
            await forgotPassword(formData.email);

            setSuccess(
                "Please reset instructions have been sent to your email."
            );

            setFormData({
                email: "",
            });
        } catch (err) {
            setServerError(
                err?.message ||
                "Unable to send password reset email."
            ); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <form 
            className="auth-form"
            onSubmit={handleSubmit}
        >

            {serverError && (
                <div className="auth-alert">{serverError}</div>
            )}

            {success && (
                <div className="auth-success">
                    {success}
                </div>
            )}

            <div className="auth-group">
                <label 
                    htmlFor="email"
                    className="auth-label"
                >
                    Email Address
                </label>

                <div className="auth-input-wrapper">
                    <Mail 
                        size={18}
                        className="auth-input-icon"
                    />

                    <Input 
                        id="email"
                        className="auth-input"
                        types="email"
                        name="email"
                        placeholder="Enter your email address"
                        autpComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {errors.email && (
                    <span className="auth-error">
                        {errors.email}
                    </span>
                )}
            </div>

            <Button 
                type="button"
                className="auth-button"
                disabled={loading}
            >
                {loading 
                    ? "Sending..."
                    : "Send Reset Link"}
            </Button>
        </form>
    );
};

export default ForgotPasswordForm;

