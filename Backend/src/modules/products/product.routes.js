//src/modules/products/product.routes.js 

import express from "express";

import * as productController from "./product.controller.js";

const router = express.Router();

router.post("/", productController.createProduct);

router.get("/", productController.getProduct);

router.get("/:id", productController.getProductById);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

export default router;


