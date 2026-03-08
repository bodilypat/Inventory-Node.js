//src/routes/purchaseRoutes.js 

const express = require('express');
const router = express.Router();

// Controller  
const purchaseController = require('../controllers/purchaseController');

// Middlewares 
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Validation 
const { validatePurchase } = require('../middlewares/validationMiddleware');

/* 
    @route GET /api/purchases
    @desc Get all purchases
    @access Authenticated users
*/
router.get(
    '/',
    authMiddleware,
    purchaseController.getAllPurchases
);

/* 
    @route GET /api/purchases/:id
    @desc Get purchase by ID
    @access Authenticated users
 */
router.get(
    '/:id',
    authMiddleware,
    purchaseController.getPurchaseById
);

/* 
    @route GET /api/purchases/supplier/:supplierId
    @desc Get purchases by supplier ID
    @access Authenticated users
 */
router.get(
    '/supplier/:supplierId',
    authMiddleware,
    purchaseController.getPurchasesBySupplierId
);

/* 
    @route GET /api/purchases/date-range
    @desc Get purchases within a date range
    @access Authenticated users
*/
router.get(
    '/date/:date',
    authMiddleware,
    purchaseController.getPurchasesByDate
);

/* 
    @route GET /api/purchases/today
    @desc Get purchases for today
    @access Authenticated users
*/
router.get(
    '/today',
    authMiddleware,
    purchaseController.getTodayPurchases
);

/* 
    @route GET /api/purchases/report 
    @desc Get purchase report for a date range
    @access Authenticated users
*/
router.get(
    '/report',
    authMiddleware,
    purchaseController.getPurchaseReport
);

/* 
    @route POST /api/purchases
    @desc Create a new purchase
    @access Authenticated users
 */
router.post(
    '/',
    authMiddleware,
    validatePurchase,
    purchaseController.createPurchase
);

/* 
    @route PUT /api/purchases/:id
    @desc Update a purchase
    @access Authenticated users
 */
router.put(
    '/:id',
    authMiddleware,
    validatePurchase,
    purchaseController.updatePurchase
);

/* 
    @route DELETE /api/purchases/:id
    @desc Delete a purchase
    @access Authenticated users
 */
router.delete(
    '/:id',
    authMiddleware,
    purchaseController.deletePurchase
);

module.exports = router;


