//src/controllers/purchaseController.js 

const purchaseService = require('../services/purchaseService');

exports.createPurchase = async (req, res, next) => {
    try {
        const purchase = await purchaseService.createPurchase(req.body);

        res.status(201).json({
            success: true,
            message: 'Purchase created successfully',
            data: purchase
        });

    } catch (error) {
        next(error);    
    }
};

exports.getPurchases = async (req, res, next) => {
    try {
        const purchases = await purchaseService.getPurchases();

        res.status(200).json({
            success: true,
            message: 'Purchases retrieved successfully',
            data: purchases
        });
    } catch (error) {
        next(error);
    }
};

exports.getPurchaseById = async (req, res, next) => {
    try {
        const purchase = await purchaseService.getPurchaseById(req.params.id);

        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Purchase retrieved successfully',
            data: purchase
        });
    } catch (error) {
        next(error);
    }
};

exports.updatePurchase = async (req, res, next) => {
    try {
        const purchase = await purchaseService.updatePurchase(req.params.id, req.body);
        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Purchase updated successfully',
            data: purchase
        });
    } catch (error) {
        next(error);
    }
};

exports.deletePurchase = async (req, res, next) => {
    try {
        const purchase = await purchaseService.deletePurchase(req.params.id);
        if (!purchase) {
            return res.status(404).json({
                success: false,
                message: 'Purchase not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Purchase deleted successfully',
            data: purchase
        });
    } catch (error) {
        next(error);
    }
};


