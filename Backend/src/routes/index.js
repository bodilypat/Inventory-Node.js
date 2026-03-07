//src/routes/index.js 

const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));
router.use('/categories', require('./categoryRoutes'));
router.use('suppliers', require('./supplierRoutes'));
router.use('/products', require('./productRoutes'));
router.use('sales', require('./salesRoutes'));
router.use('/purchases', require('./purchaseRoutes'));
router.use('/stock', require('./stockRoutes'));
router.use('/logs', require('./logRoutes'));
router.use('/settings', require('./settingsRoutes'));

module.exports = router;

