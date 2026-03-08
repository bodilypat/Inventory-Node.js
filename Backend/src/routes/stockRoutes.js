//src/routes/stockRoutes.js 

const express = require('express');
const router = express.Router();

// Controller 
const stockController = require('../controllers/stockController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

/* 
    @routes GET /api/stock
    @desc Get all stock movements
    @access Authenticated users
*/
router.get(
    '/', 
    authMiddleware, 
    stockController.getAllStockMovements
);

/* 
    @routes GET /api/stock/product/:productId
    @desc Get stock movements for a specific product
    @access Authenticated users
*/
router.get(
    '/product/:productId', 
    authMiddleware, 
    stockController.createStockMovement
);

/* 
    @route GET /api/stock/current
    @desc Get current stock levels
    @access Authenticated users
*/
router.get(
    '/current',
    authMiddleware,
    stockController.getCurrentStockLevels
);

/* 
    @route GET /api/stock/low
    @desc Get low stock alerts
    @access Authenticated users
*/
router.get(
    '/low',
    authMiddleware,
    stockController.getLowStockAlerts
);

/* 
    @route GET /api/stock/out-of-stock 
    @desc Get out-of-stock products
    @access Authenticated users
*/
router.get(
    '/out-of-stock',
    authMiddleware,
    stockController.getOutOfStockProducts
);

/* 
    @route GET /api/stock/history
    @desc Get stock movement history
    @access Authenticated users
*/
router.get(
    '/history',
    authMiddleware,
    stockController.getStockMovementHistory
);

/* 
    @route GET /api/stock/report
    @desc Get stock report (e.g., movements within a date range)
    @access Authenticated users
*/
router.get(
    '/report',
    authMiddleware,
    stockController.getStockReport
);

/* 
    @route GET /api/stock/move/:id
    @desc Get stock movement details
    @access Authenticated users
*/
router.get(
    '/move/:id',
    authMiddleware,
    stockController.getStockMovementDetails
);

/* 
    @route POST /api/stock/move 
    @desc Create stock movement (Manual IN/OUT)
    @access Amin / Manager 
*/
router.post(
    "/move",
    authMiddleware,
    roleMiddleware(['Admin', 'Manager']),
    stockController.createStockMovement
);

module.exports = router;

