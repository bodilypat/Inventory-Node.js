//File: src/features/auth/components/ChangePasswordForm.jsx 

import { useState} from " react";

import { useAuth } from "../hooks/useAuth";
import { validateChangePassword } from "../utils/authValidations";

import PasswordInput from "./PasswordInput";

import "../styles/auth.css";

const ChangePasswordForm = () => {
    const { changePassword } = useAuth();

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });


    const [errors, setErrors] = useState("");
    const [serverError, setServerErrror] = useState("");
    const [success, setSuccess] = useState("");
    const[loading, setLoading] = useState(false);

    const hadleChanage = ({ target }) => {
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

        setServerErrror("");
    };
    
    const handlesubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateChangePassword(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setServerErrror("");
        setSuccess("");

        try {
            await changePassword({
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            setSuccess("Password changed successfully.");

            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
 
            setErrors({});
        } catch (err) {
            setServerErrror(
                err?.message || 
                "Unable to change password."
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

            {/* Current Password */}
            
            <div className="auth-group">
                <label 
                    htnlFor="currentPassword"
                    className="auth-label"
                >
                    Current Password
                </label>

                <PasswordInput 
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Enter your current password"
                    autoComplete="current-password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                />

                {errors.currentPassword && (
                    <span className="auth-error">{errors.currentPassword}</span>
                )}
            </div>

            {/* New Password */}
            <div className="auth-group">
                <label  
                    htmlFor="newPassword"
                    className="auth-label"
                >
                    New Password
                </label>

                <PasswordInput 
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter a new password"
                    autoComplete="new-password"
                    value={formData.newPassword}
                    onChange={handleChange}
                /> 

                {errors.newPassword && (
                    <span className="auth-error">{errors.newPasswrod}</span>
                )}
            </div>

            {/* Confirm Password */}
            <div className="auth-group">
                <label 
                    htmlFor="confirmPassword"
                    className="auth-label"
                >
                    Confirm New Password
                </label>

                <PasswordInput 
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                {errors.confirmPassword && (
                    <span className="auth-error">{errors.confirmPassword}</span>
                )}
            </div>

            <Button 
                type="submit"
                className="auth-button"
                disabled={loading}
            >
                {loading 
                    ? "Updating Password..."
                    : "Change Password"}
            </Button>
        </form>
    );
};

export default ChangePasswordForm;


