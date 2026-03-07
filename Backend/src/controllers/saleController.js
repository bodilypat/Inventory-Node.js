//src/controllers/saleController.js 

const salesService = require('../services/salesService');

exports.createSale = async (req, res, next) => {
    try {

        const sale = await salesService.createSale(req.body);

        res.status(201).json({
            success: true,
            message: 'Sale created successfully',
            data: sale
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllSales = async (req, res, next) => {
    try {

        const sales = await salesService.getAllSales();

        res.status(200).json({
            success: true,
            message: 'Sales retrieved successfully',
            data: sales
        });
    } catch (error) {
        next(error);
    }
};

exports.getSaleById = async (req, res, next) => {
    try {
        const sale = await salesService.getSaleById(req.params.id);

        if (!sale) {
            return res.status(404).json({
                success: false,
                message: 'Sale not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Sale retrieved successfully',
            data: sale
        });
    } catch (error) {
        next(error);
    }
};

exports.updateSale = async (req, res, next) => {
    try {
        
        const updatedSale = await salesService.updateSale(req.params.id, req.body);

        if (!updatedSale) {
            return res.status(404).json({
                success: false,
                message: 'Sale not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Sale updated successfully',
            data: updatedSale
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteSale = async (req, res, next) => {
    try {
        const deleted = await salesService.deleteSale(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Sale not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Sale deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};





