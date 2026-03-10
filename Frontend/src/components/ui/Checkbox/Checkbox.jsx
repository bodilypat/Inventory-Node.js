//src/components/ui/Checkbox/Checkbox.jsx

import React from 'react';
import './Checkbox.css';

const Checkbox = ({ 
    label,
    name,
    checked = false,
    onChange,
    disabled = false,
    error,
    helperText,
    className= "",
    ...props 
}) => {
    return (
        <div className={`checkbox-container ${className}`}>
            <label className={`checkbox-label ${disabled ? 'disabled' : ''}`}>
                <input 
                    type="checkbox" 
                    name={name} 
                    checked={checked} 
                    onChange={onChange} 
                    disabled={disabled} 
                    className="checkbox-input"
                    {...props}
                />
                <span className="checkbox-custom"></span>
                {label && <span className="checkbox-text">{label}</span>}
            </label>
            {error && <div className="checkbox-error">{error}</div>}
            {helperText && <div className="checkbox-helper">{helperText}</div>}
        </div>
    )
};

