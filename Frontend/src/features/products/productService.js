//src/features/products/productService.js 

/* Fetch all products */

export const fetchProducts = async () => {
    try {
        const response = await productApi.get('/products');
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to fetch products.";
    }
};

/* Fetch product by ID */
export const fetchProductById = async (id) => {
    try {
        const response = await productApi.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to fetch product.";
    }
};

/* Create a new product */
export const createProduct = async (productData) => {
    try {
        const response = await productApi.post('/products', productData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to create product.";
    }
};

/* Update an existing product */
export const updateProduct = async (id, productData) => {
    try {
        const response = await productApi.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to update product.";
    }
};


/* Delete a product */
export const deleteProduct = async (id) => {
    try {
        const response = await productApi.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to delete product.";
    }
};

/* Search products */
export const searchProducts = async (query) => {
    try {
        const response = await productApi.get(`/products/search`, { params: { q: query } });
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to search products.";
    }
};

/* get Low Stock roduct */
export const getLowStockProducts = async () => {
    try {
        const response = await productApi.get('/products/low-stock');
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to fetch low stock products.";
    }
};

