//src/components/ui/Table/TableHeader.jsx

import React from 'react';

const TableHeader = ({ columns = [] }) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key}>{column.title}</th>
                ))}
            </tr>
        </thead>
    );
};
