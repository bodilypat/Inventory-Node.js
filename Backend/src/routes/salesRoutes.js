//src/routes/salesRoutes.js 

const express = require('express');
const router = express.Router();

// Controller 
const salesController = require('../controllers/salesController');

// Middlewares 
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/roleMiddleware');

// validation
const { validateSale } = require('../validations/salesValidation');

/* 
    @route GET /api/sales
    @desc Get all sales
    @access Authenticated users
*/
router.get(
    '/',
    authMiddleware,
    salesController.getAllSales
);

/* 
    @route GET /api/sales/:id
    @desc Get sale by ID
    @access Authenticated users
 */
router.get(
    '/:id',
    authMiddleware,
    salesController.getSaleById
);

/* 
    @route GET /api/sales/today
    @desc Get sales for today
    @access Authenticated users
 */
router.get(
    '/today',
    authMiddleware,
    salesController.getTodaySales
);

/* 
    @route GET /api/sales/date-range
    @desc Get sales within a date range
    @access Authenticated users
 */
router.get(
    '/date-range',
    authMiddleware,
    salesController.getDateRangeSales
);

/* 
    @route GET /api/sales/customer/:name 
    @desc Get sales for a specific customer
    @access Authenticated users
 */
router.get(
    '/customer/:name',
    authMiddleware,
    salesController.getCustomerSales
);

/* 
    @routes GET /api/sales/report 
    @desc Get sales report
    @access Authenticated users
*/
router.get(
    '/report',
    authMiddleware,
    salesController.getSalesReport
);

/* 
    @route POST /api/sales
    @desc Create a new sale
    @access Authenticated users
 */

router.post(
    '/',
    authMiddleware,
    validateSale,
    salesController.createSale
);

/* 
    @route PUT /api/sales/:id
    @desc Update a sale
    @access Admin / Manager
 */
router.put(
    '/:id',
    authMiddleware,
    validateSale,
    salesController.updateSale
);

/* 
    @route DELETE /api/sales/:id
    @desc Delete a sale
    @access Admin only
 */
router.delete(
    '/:id',
    authMiddleware,
    salesController.deleteSale
);

module.exports = router;
