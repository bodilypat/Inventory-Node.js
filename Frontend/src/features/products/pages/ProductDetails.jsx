//src/features/products/pages/ProductDetials.jsx 

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProductById, deleteProduct } from '../productsSlice';

import Button from '@/components/Button';
import Card from '@/components/Card';

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { selectedProduct, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    const handleDelete = () => {
        dispatch(deleteProduct(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!selectedProduct) return <p>Product not found</p>;

    return (
        <Card>
            <h2>{selectedProduct.name}</h2>

            <p><strong>SKU</strong>: {selectedProduct.sku}</p>
            <p><strong>Category</strong>: {selectedProduct.description}</p>
            <p><strong>Price</strong>: ${selectedProduct.price.toFixed(2)}</p>
            <p><strong>Stock</strong>: {selectedProduct.stock}</p>

            <div style={{ marginTop: '20px' }}>
                <Button>Edit</Button>
                <Button onClick={handleDelete} color="red">Delete Product</Button>
            </div>

        </Card>
    );
};
export default ProductDetails;
