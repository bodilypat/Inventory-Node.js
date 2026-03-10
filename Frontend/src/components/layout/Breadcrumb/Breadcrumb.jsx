//src/components/layout/Breadcrumb/Breadcrumb.jsx 

import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="breadcrumb">
            {items.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                    {item}
                    {index < items.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;






