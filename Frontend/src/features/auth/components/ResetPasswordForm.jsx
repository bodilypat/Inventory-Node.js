//File: src/features/auth/components/ResetPasswordForm.jsx 

import { useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { validateResetPassword } from "../utils/authValidators";

import Button from "../../../components/common/Button";
import Input from "../../../domponents/comon/Input";

import "../styles/auth.css";

const ResetPasswordForm = ({ token }) => {
    const { resetPassword } = useAuth();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServiceError] = useState("");
    const [success, setSuccess] = useState();
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

        setServerError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validationResetPassword(formData);

        if (Object.keys(validationErrords).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setServiceError("");
        setSuccess("");

        try {
            await resetPassword({
                token,
                password: formData.password,
            });

            setSuccess(
                "Your password has beeb reset successfully."
            );

            setFormData({
                password: "",
                confirmPassword: "",
            });
        } catch (err) {
            setServerError(
                err?.message || 
                "unable to reset yor password."
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
                <div className="auth-alert">
                    {serverError}
                </div>
            )}

            {success && (
                <div className="auth-success">{success}</div>
            )}

            {/* New Password */}
            <div className="auth-group">
                <label 
                    htmlForm="password"
                    className="auth-label"
                >
                    New Password
                </label>

                <PasswordInput 
                    id="password"
                    name="password"
                    placeholder="Enter your new password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {errors.password && (
                    <span className="auth-error">
                        {errors.password }
                    </span>
                )}
            </div>

            {/* Confirm Password */}
            
            <div className="auth-group">
                <label
                    htmlFor="confirmPassword11"
                    className="auth-label"
                >
                    Confirm Password
                </label>

                <PasswordInput 
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    autocomplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                {errors.confirmPassword && (
                    <span className="auth-error">
                        {errors.confirmPassword}
                    </span>
                )}
            </div>

            <Button 
                type="submit"
                className="auth-button"
                disabled={loading}
            >
                {loading 
                    ? "Resetting Password..."
                    : "Reset Password"}
            </Button>
        </form>
    );
};

export default ResetPasswordForm;


