//src/modules/suppliers/supplier.controller.js 

import * as supplierService from "./supplier.service.js";

export const createSupplier = async (
    req,
    res,
    next 
) => {
    try {
        const supplier = await supplierService.createSupplier(
            req.body
        );

        res.status(201).json({
            success: true,
            data: supplier,
        });
    } catch (error) {
        next(error);
    }
};

export const getSuppliers = async (
    req,
    res,
    next
) => {
    try {
        const suppliers = await supplierService.getSuppliers(
            req.query
        );

        res.status(200).json({
            success: true,
            data: suppliers,
        });
    } catch (error) {
        next(error);
    }
};

