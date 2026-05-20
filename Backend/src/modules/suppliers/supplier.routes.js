//src/modules/suppliers/supplier.routes.js 
import express from  "express";

import * as supplierController from "./supplier.controller.js";

const router = express.Router();

router.post(
    "/",
    supplierController.createSupplier
);

router.get(
    "/",
    supplierController.getSuppliers
);

router.get(
    "/:id",
    supplierController.updateSupplier
);

router.patch(
    "/:id",
    supplierController.updateSupplier 
);

router.delete(
    "/:id",
    supplierController.deleteSupplier
);

export default router;

