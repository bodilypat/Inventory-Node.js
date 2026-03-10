//src/components/ui/Table/Table.jsx

import React from 'react';
import "./Table.css";

const Table = ({ 
    children,
    className = "", 
}) => {
    return (
        <div className="table-container">
            <table className={`table ${className}`}>
                {children}
            </table>
        </div>
    );
};

