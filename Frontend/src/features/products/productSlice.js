//src/features/products/productSlice.js 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productService from './productService';

/* Async Actions */
export const fetchProducts = createAsyncThunk(
    'products/fetchAll', 
    async (_, { rejectWithValue }) => {
        try {
            const products = await productService.fetchProducts();
            return products;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

/* Fetch single product */
export const fetchProductById = createAsyncThunk(
    'products/fetchById',
    async (id, { rejectWithValue }) => {
        try {
            const product = await productService.fetchProductById(id);
            return product;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

/* Create product */
export const createProduct = createAsyncThunk(
    'products/create',
    async (productData, { rejectWithValue }) => {
        try {
            const newProduct = await productService.createProduct(productData);
            return newProduct;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

/* Update product */
export const updateProduct = createAsyncThunk(
    'products/update',
    async ({ id, ...productData }, { rejectWithValue }) => {
        try {
            const updatedProduct = await productService.updateProduct(id, productData);
            return updatedProduct;
        } catch (error) {   
            return rejectWithValue(error);
        }
    }
);

/* Delete product */
export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id, { rejectWithValue }) => {
        try {
            await productService.deleteProduct(id);
            return id; // Return the deleted product ID for state update
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

/* Initial State */
const initialState = {
    products: [],
    currentProduct: null,
    loading: false,
    error: null,
};

/* Slice */
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearCurrentProduct(state) {
            state.currentProduct = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.products.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(p => p.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export const { clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;

