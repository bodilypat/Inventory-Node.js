//src/controllers/supplierController.js 

const supplierService = require('../services/supplierService');

exports.createSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);

        res.status(201).json({
            success: true,
            message: 'Supplier created successfully',
            data: supplier
        });

    } catch (error) {
        next(error);
    }
};

exports.getSuppliers = async (req, res, next) => {
    try {
        const suppliers = await supplierService.getSuppliers();
        res.status(200).json({
            success: true,
            message: 'Suppliers retrieved successfully',
            data: suppliers
        });
    } catch (error) {
        next(error);
    }
};

exports.getSupplierById = async (req, res, next) => {
    try {
        const supplier = await supplierService.getSupplierById(req.params.id);

        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Supplier retrieved successfully',
            data: supplier
        });
    } catch (error) {
        next(error);
    }
};

exports.updateSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.updateSupplier(req.params.id, req.body);

        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }   
        res.status(200).json({
            success: true,
            message: 'Supplier updated successfully',
            data: supplier
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.deleteSupplier(req.params.id);

        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Supplier deleted successfully',
            data: supplier
        });
    } catch (error) {
        next(error);
    }
};

