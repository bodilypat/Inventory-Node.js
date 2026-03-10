//src/components/ui/Loader/Loader.jsx 

import React from 'react';
import "./Loader.css";

const Loader = ({
    message = "Loading...",
    fullscreen = false,
    className = "",
}) => {
    return (
        <div className={`loader ${fullscreen ? "fullscreen" : ""} ${className}`}>
            <div className="spinner"></div>
            <p>{message}</p>
        </div>
    );
};

export default Loader;



