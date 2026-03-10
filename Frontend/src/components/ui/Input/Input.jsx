//src/components/ui/Input/Input.jsx

import React from 'react';
import './Input.css';

const Input = ({ 
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    error,
    helperText,
    disabled = false,
    size = "md",
    leftIcon,
    rightIcon,
    className = "",
    ...props 
}) => {
    return (
        <div className={`input-container ${size} ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <div className={`input-wrapper ${error ? 'error' : ''}`}>
                {leftIcon && <span className="input-icon left">{leftIcon}</span>}
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    name={name} 
                    disabled={disabled} 
                    className={`input-field ${leftIcon ? 'with-left-icon' : ''} ${rightIcon ? 'with-right-icon' : ''}`} 
                    {...props} 
                />
                {rightIcon && <span className="input-icon right">{rightIcon}</span>}
            </div>
            {error && <span className="input-error">{error}</span>}
            {helperText && <span className="input-helper-text">{helperText}</span>}
        </div>
    );
};

export default Input;

