//src/features/products/components/ProductForm.jsx 

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/usi/Input';
import Select from '@/components/ui/Select';

const ProductForm = ({ initialData = {}, categories = [], onSubmit  }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        sku: '',
        status: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                price: initialData.price || '',
                stock: initialData.stock || '',
                category: initialData.category || '',
                sku: initialData.sku || '',
                status: initialData.status || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
            />
            <Input
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                type="number"
            />
            <Input
                label="Stock Quantity"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                type="number"
            />
            <Select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
                placeholder="Select category"
            />
            <Input
                label="SKU"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="Enter SKU"
            />
            <Select
                label="Status"
                name="status"   
                value={formData.status}
                onChange={handleChange}
                options={[
                    { value: 'active', label: 'Active' },
                    { value: 'inactive', label: 'Inactive' },
                ]}
                placeholder="Select status"
            />
            <Button type="submit" className="w-full">   Save Product</Button>
        </form>
    );
}

export default ProductForm;


