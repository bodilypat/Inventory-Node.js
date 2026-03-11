//src/features/pages/ProductList.jsx 

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm';

import { fetchProducts, createProduct, deleteProduct } from '../productSlice';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';  

const productList = () => {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts()).then((response) => {
            setProducts(response.payload);
        });
    }, [dispatch]);

    const handleCreate = (data) => {
        dispatch(createProduct(data)).then((response) => {
            setProducts((prev) => [...prev, response.payload]);
            setShowForm(false);
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id)).then(() => {
            setProducts((prev) => prev.filter((product) => product.id !== id));
        });
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Input
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: '300px' }}
                />
                <Button onClick={() => setShowForm(true)}>Add Product</Button>
            </div>

            {showForm && (
                <ProductForm onSubmit={handleCreate} onClose={() => setShowForm(false)} />
            )}
            <ProductTable products={filteredProducts} onDelete={handleDelete} />
        </div>
    );
}

export default productList;