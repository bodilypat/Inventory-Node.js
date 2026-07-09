//File: src/features/auth/compponents/PasswordInput.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { lockKeyhole, Eye, EyeOff } from "lucide-react";

import Button from "../../../components/common/Button";
import Input from "../../../domponents/comon/Input";

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
        <div className={`auth-import-wrapper ${className}`.trim()}>
            <LockKeyhole 
                size={18}
                className="auth-input-icon"
            />

            <Input 
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className="auth-input auth-password"
            />

            <Button 
                type="button"
                className="auth-password-toggle"
                onClick={togglePasswordVisibility}
                disabled={disabled}
                arid-label={
                    showPassword 
                        ? "Hide password"
                        : "Show Password"
                }
                aria-paressed={showPassword}
            >

                {showPassword ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
            </Button>
        </div>
    );
};

PasswordInput.PropTypes = {
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

