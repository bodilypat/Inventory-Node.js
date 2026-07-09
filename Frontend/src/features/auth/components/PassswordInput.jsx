// src/features/auth/components/PasswordInput.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { LockKeyhole, Eye, EyeOff } from "lucide-react";

import "../styles/auth.css";

const PasswordInput = ({
    id,
    name,
    value,
    onChange,
    placeholder = "Enter password",
    autoComplete = "current-password",
    disabled = false,
    required = false,
    className = "",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={`auth-input-wrapper ${className}`.trim()}>
            <LockKeyhole
                size={18}
                className="auth-input-icon"
            />

            <input
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                disabled={disabled}
                required={required}
                className="auth-input auth-password"
            />

            <button
                type="button"
                className="auth-password-toggle"
                onClick={togglePasswordVisibility}
                disabled={disabled}
                aria-label={
                    showPassword
                        ? "Hide password"
                        : "Show password"
                }
                aria-pressed={showPassword}
            >
                {showPassword ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
            </button>
        </div>
    );
};

PasswordInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
};

export default PasswordInput;
