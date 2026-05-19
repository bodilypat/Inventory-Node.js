//src/app/routes.js 
import express from "express";

/* Features modules */
import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/users/user.routes.js";
import productRoutes from "../modules/products/product.routes.js";
import categoryRoutes from "../modules/categories/category.routes.js";
import supplierRoutes from "../modules/suppliers/supplier.routes.js";
import saleRoutes from "../modules/sales/sales.routes.js"
import purchaseRoutes from "../modules/purchases/purchase.routes.js";
import inventoryRoutes from "../modules/inventory/inventory.routes.js";
import logRoutes from "../modules/logs/log.routes.js";
import settingRoutes from "../modules/settings/settings.routes.js";

const router = express.Router();

/* MODULE ROUTES */
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/suppliers", supplierRoute);

router.use("/sales", salesRoutes);
router.use("/purchases", purchaseRoutes);

router.use("/logs", logRoutes);
router.use("/settings", settingRoutes);

/* Default API route */
router.get("/", (req, res) => {
    res.json({
        message: "Inventory Management API", 
        version: "1.0.0"
    });
});

export default router;
