//src/components/ui/Select/Select.jsx

import React from "react";
import "./Select.css";

const Select = ({
    label, 
    name,
    value,
    options = [],
    placeholder = "Select an option",
    onChange,
    error,
    helperText,
    disabled = false,
    size = "medium",
    className = "",
    ...props 
}) => {
    return (
        <div className={`select-container ${className}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`select ${size} ${error ? "error" : ""}`}
                {...props}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {helperText && <p className="helper-text">{helperText}</p>}
        </div>
    );
};

export default Select;
