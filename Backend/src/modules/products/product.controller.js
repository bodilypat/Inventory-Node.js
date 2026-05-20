//src/modules/products/product.controller.js 

import * as productService from "./product.service.js";

/* Create Product */
export const createProduct = async (req, res, next) => {
    try {
        const product = await productService.createProduct(
            req.body 
        );

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

/* Get all Product */
export const getProducts = async (req, res, next) => {
    try {
        const result = await productService.getProducts(
            req.query 
        );

        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",

            data: result.data,
        });
    } catch (error) {
        next(error);
    }
};

/* Get Product By ID */
export const getProductById = async (
    req,
    res,
    next
) => {
    try {
        const { id } = req.params;

        const product = await productService.getProductById(id);

        return res.status(200).json({
            success: true,
            message: "Product fetched successfully"
        });
    } catch (error) {
        next(error);
    }
};

/* Update Product */
export const updateProduct = async (
    req, 
    res, 
    next
) => {
    try {
        const { id } = req.params;

        const updatedProduct = await productService.updateProduct(
            id,
            req.body
        );

        return res.status(200).json({
            success: true,
            messgage: "Product updated successfully",
            data: updateProduct,
        });
    } catch (error) {
        next(error);
    }
};

/* Delete Product */
export const deleteProduct = async (
    req, 
    res,
    next
) => {
    try {
        const { id } = req.params;

        const result = await productService.deleteProduct(id);

        return res.status(200).json({
            success: true,
            message: result.message,
        });
    } catch (error) {
        next(error);
    }
};

/* Update Product Stock */
export const updateProductStock = async (
    req,
    res,
    next 
) => {
    try {
        const { id } = req.params;

        const { quantity } = req.body;

        const updatedProduct = await productService.updateProductStock(
            id,
            quantity
        );

        return res.status(200).json({
            success: true,
            message: "Stock update successfully",
            data: updateStockProduct,
        });
    } catch (error) {
        next(error);
    }
};

/* Get Low Stock Product */
export const getLowStockProducts = async (
    req,
    res,
    next 
) => {
    try {
        const products = await  productService.getLowStockProducts();

        return res.status(200).json({
            success: true,
            message: "Low Stock products fetched successfully",
            total: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};
