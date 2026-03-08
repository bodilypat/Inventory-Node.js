//src/routes/index.js 

const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const supplierRoutes = require('./supplierRoutes');
const productRoutes = require('./productRoutes');
const salesRoutes = require('./salesRoutes');
const purchaseRoutes = require('./purchaseRoutes');
const stockRoutes = require('./stockRoutes');
const logRoutes = require('./logRoutes');
const settingRoutes = require('./settingRoutes');

// Register routes
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/products', productRoutes); 
router.use('/sales', salesRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/stock', stockRoutes);
router.use('/logs', logRoutes);
router.use('/settings', settingRoutes);

module.exports = router;

