//src/modules/categories/category.routes.js 
import express from "express";

import categoryController from "./category.controller.js";

import validate from "../../middleware/validate.middleware.js";

import authMiddleware from "../../middleware/auth.middleware.js";

import roleMiddleware from "../../middleware/role.middleware.js";

import asynHandler from "../../utils/asyncHandler.js"

import {
    createCategorySchema,
    updateCategorySchema,
} from "./category.validation.js";

const router = express.Router();

/* PUBLIC ROUTES */
// GET/api/v1/categories
router.get(
    "/",
    asyncHandler(categoryController.getAll)
);

/* GET/api/v1/categories/tree */
router.get(
    "/tree",
    asyncHandler(categoryController.getCategoryTree )
);

/* Get/api/v1/categories/:id */
router.get(
    "/:id",
    asyncHandler(categoryController.getById)
);

/* PROTECTED ROUTES */
// POST/api/v1/categories 
router.post(
    "/",
    authMiddleware,
    roleMiddleware("ADMIN"),

    validate(createCategorySchema),

    asyncHandler(categoryController.create)
);

/* PUT/api/v1/categories/:id */
router.put(
    "/:id",
    autMiddleware,
    roleMiddleware("ADMIN"),
    
    validate(updateCategorySchema),

    asyncHandler(categoryController.update)
);


/* PATCH/api/v1/categories/:id/status */
router.patch(
    "/:id/status",

    authMiddleware("ADMIN"),

    asyncHandler(categoryController.updateStatus )
);

/* DELETE /api/v1/categries/:id */
router.delete(
    "/:id",

    authMiddleware,
    roleMiddleware("ADMIN"),

    asyncHandler(categoryController.delete)
);

export default router;

