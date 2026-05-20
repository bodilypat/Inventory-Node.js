//src/modules/products/product.routes.js 
import express from "express";

import * as productController from "./product.controller.js";

import {
    createProductValidation,
    updateProductValidation,
    productQueryValidation,
} from "./product.validation.js"

const router = express.Router();

/* Validation Middleware */
const validation = (schema, source = "body") => {
    return (req, res, next) => {
        const data = req[source];

        const { error, value } = schema.validate(data, {
            abortEarly: false 
            stripUnknown: true,
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",

                error: error.details.map((error) => ({
                    field: error.path.join("."),
                    message: error.message,
                })),
            });
        }

        req[source] = value;
        
        next();
    };
};

/* Product Routes 
* @route POST/api/v1/products 
* @desc Create Product
*/
router.post(
    "/",
    validate(createProductValidation),
    productController.creaeProduct
);

/* 
* @route GET/api/v1/products
* @desc Get All Product
*/

router.get(
    "/",
    validate(productQueryValidation, "query"),
    productController.getProducts
);

/* 
* @route GET/api/v1/products/Low-stock
* @desc Get Low Stock Products
*/
router.get(
    "/low-stock",
    productController.getLowStockProducts
);

/* 
* @route GET/api/v1/products/:id
* @desc Get Product By ID
*/

router.get(
    "/:id",
    productController.getProductById
);

/* 
* @route PATCH/api/v1/products/:id 
* @desc Update Product 
*/
router.patch(
    "/:id",
    validation(updateProductValidation),
    productController.updateProduct 
);

/* 
* @route PATCH/api/v1/products/:id/stock
* @desc Update Product Stock
*/
router.patch(
    "/id/stock",
    productController.updateProductStock
);

/* 
* @route DELETE/api/v1/products/:id 
* @desc Delete Product 
*/

router.delete(
    "/:id",
    productController.deleteProduct 
);

export default router;

