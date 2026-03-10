import React from "react";
import "./Button.css";

const Button = ({ 
    children,
    variant = "primary",
    size = 'md',
    type = "button",
    loading =false,
    disabled = false,
    leftIcon = null,
    rightIcon = null,
    onClick,
    className = "",
    ...props,
}) => {
    const isDisabled = disabled || loading;

    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size} ${isDisabled ? "btn-disabled" : ""} ${className}`}
            onClick={isDisabled ? null : onClick}
            disabled={isDisabled}
            {...props}
        >
            {loading && <span className="btn-spinner"></span>}

            {loading && leftIcon && (
                <span className="btn-icon btn-left-icon">{leftIcon}</span>
            )}

            <span className="btn-text">{children}</span>

            {loading && rightIcon && (
                <span className="btn-icon btn-right-icon">{rightIcon}</span>
            )}
        </button>
    );
}
export default Button;
