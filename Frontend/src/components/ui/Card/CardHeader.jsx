//src/components/ui/Card/CardHeader.jsx 

import React from 'react';

const CardHeader = ({ title, subtitle, action }) => {
    return (
        <div className="card-header">
            <div className="card-header-content">
                <h2 className="card-title">{title}</h2>
                {subtitle && <p className="card-subtitle">{subtitle}</p>}
            </div>
            {action && <div className="card-header-action">{action}</div>}
        </div>
    );
};

