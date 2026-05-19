//src/modules/categories/category.routes.js 
import express from "express";

import * as categoryController from "./category.controller.js";

const router = express.Router();

router.post(
    "/",
    categoryController.createCategory 
);

router.get(
    "/",
    categoryController.getCategories 
);

router.get(
    "/:id",
    categoryController.getCategoryById 
);

router.patch(
    "/:id",
    categoryController.updateCategory 
);

router.delete(
    "/:id",
    categoryController.deleteCategory 
);

export default router;



