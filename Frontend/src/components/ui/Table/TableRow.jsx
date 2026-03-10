//src/components/ui/Table/TableRow.jsx 

import React from 'react';

const TableRow = ({ children }) => {
    return (
        <tr className="table-row">  
            {children}
        </tr>
    );
}

export default TableRow;
