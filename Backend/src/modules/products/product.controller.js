//src/modules/products/product.controller.js 
import * as productService from "./product.service.js";

export const createProduct = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json({
            success: true,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

export const getProducts = async (req, res, next) => {
    try {
        const product = await productService.getProducts(req.query);

        res.status(200).json({
            success: true,
            data: productService,
        });
    } catch (error) {
        next(error);
    }
};

