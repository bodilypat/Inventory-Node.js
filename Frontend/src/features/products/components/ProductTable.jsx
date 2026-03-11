//src/features/products/components/ProductTable.jsx 

import React from 'react';
import Button from '@/components/ui/Button';

const ProductTable = ({ 
    products, 
    onEdit, 
    onDelete 
}) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <table className="prodcut-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>{product.status}</td>       
                            <td>
                                <Button onClick={() => onEdit(product)}>Edit</Button>
                                <Button onClick={() => onDelete(product.id)} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    );
};

export default ProductTable;
