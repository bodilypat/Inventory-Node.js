//src/components/ui/Table.jsx 

import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const DataTable = ({ columns, data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col) => (
                            <td key={col}>{row[col]}</td>   
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

DataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
