//src/components/ui/Spinner/Spinner.jsx 

import React from 'react';
import './Spinner.css';

const Spinner = ({
    size = 'medium',
    variant = 'primary',
    center = false,
    className = '',
}) => {
    return (
        <div 
            className={`spinner spinner-${size} spinner-${variant} ${center ? "spinner-center" : ""} ${className}`}
        >
            <div className={`spinner spinner-${size} spinner-${variant}`}></div>
        </div>
    );
};

export default Spinner;
