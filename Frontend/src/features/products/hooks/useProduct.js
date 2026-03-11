//src/features/products/hooks/useProduct.js

import { useDispatch, useSelector } from 'react-redux';

import {
    fetchProducts,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../productsSlice';

export const useProduct = () => {

    const dispatch = useDispatch();

    const {
        products,
        selectedProduct,
        loading,
        error,
    } = useSelector((state) => state.products);

    const loadProducts = () => {
        dispatch(fetchProducts());
    };

    const loadProductById = (id) => {
        dispatch(fetchProductById(id));
    };

    const addProduct = (product) => {
        dispatch(createProduct(product));
    };

    const editProduct = (id, product) => {
        dispatch(updateProduct({ id, product }));
    };

    const removeProduct = (id) => {
        dispatch(deleteProduct(id));
    };  

    return {
        products,
        selectedProduct,
        loading,
        error,

        loadProducts,
        loadProductById,
        addProduct,
        editProduct,
        removeProduct,
    };
};


