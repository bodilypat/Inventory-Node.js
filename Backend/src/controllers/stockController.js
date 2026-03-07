//src/controllers/stockController.js 

const stockService = require('../services/stockService');

exports.createStock = async (req, res, next) => {

    try {

        const stock = await stockService.createStock(req.body);

        res.status(201).json({
            success: true,
            message: 'Stock created successfully',
            data: stock
        });
    } catch (error) {
        next(error);
    }
};

exports.getStock = async (req, res, next) => {

    try {
        const stock = await stockService.getStockById(req.params.id);
        if (!stock) {
            return res.status(404).json({
                success: false,
                message: 'Stock not found'
            });
        }   
        res.status(200).json({
            success: true,
            message: 'Stock retrieved successfully',
            data: stock
        });
    } catch (error) {
        next(error);
    }   
};

exports.updateStock = async (req, res, next) => {
    try {
        const stock = await stockService.updateStock(req.params.id, req.body);
        if (!stock) {
            return res.status(404).json({
                success: false,
                message: 'Stock not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Stock updated successfully',
            data: stock
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteStock = async (req, res, next) => {
    try {
        const stock = await stockService.deleteStock(req.params.id);
        if (!stock) {
            return res.status(404).json({
                success: false,
                message: 'Stock not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Stock deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllStocks = async (req, res, next) => {
    try {
        const stocks = await stockService.getAllStocks();
        res.status(200).json({
            success: true,
            message: 'Stocks retrieved successfully',
            data: stocks
        });
    } catch (error) {
        next(error);
    }
};


