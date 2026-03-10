//src/components/ui/Pagination/Pagination.jsx 

import React from 'react';
import "./Pagination.css";

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange
}) => {
    const pages = [];

    for(let  i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePage = (page) => {
        if(page < 1 || page > totalPages ) return;
        onPageChange(page);
    };

    return (
        <div className="pagination">

            <button
                className="pagination-btn"
                onClick={() => handlePage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePage(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="pagination-btn"
                onClick={() => handlePage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
