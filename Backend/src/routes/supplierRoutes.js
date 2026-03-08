//src/routes/supplierRoutes.js 

const express = require('express');
const router = express.Router();

// Controller 
const supplierController = require('../controllers/supplierController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Validation
const { validateSupplier } = require('../validators/supplierValidator');

/* 
    @route GET / API/suppliers
    @desc Get all suppliers
    @access Authenticated users
*/
router.get(
    '/', 
    authMiddleware, 
    supplierController.getAllSuppliers
);

/* 
    @route GET / API/suppliers/:id
    @desc Get a supplier by ID
    @access Authenticated users
*/
router.get(
    '/:id', 
    authMiddleware, 
    supplierController.getSupplierById
);
/* 
    @route POST / API/suppliers 
    @desc Create a new supplier
    @access Admin / Manager 
*/
router.post(
    '/', 
    authMiddleware, 
    roleMiddleware(['admin', 'Manager']), 
    validateSupplier, 
    supplierController.createSupplier
);
/* 
    @route PUT / API/suppliers/:id
    @desc Update  supplier 
    @access Admin / Manager
*/
router.put(
    '/:id', 
    authMiddleware, 
    roleMiddleware(['admin', 'Manager']), 
    validateSupplier, 
    supplierController.updateSupplier
);
/* 
    @route DELETE / API/suppliers/:id
    @desc Delete supplier
    @access Admin only
*/
router.delete(
    '/:id', 
    authMiddleware, 
    roleMiddleware(['admin']), 
    supplierController.deleteSupplier
);

module.exports = router;

