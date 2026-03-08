//src/routes/productRoutes.js 

const express = require('express');
const router = express.Router();

// Constrollers 
const productController = require('../controllers/productController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Validation
const { validateProduct } = require('../validators/productValidator');

/* 
    @route GET / API/products
    @desc Get all products
    @access Authenticated users
*/
router.get(
    '/', 
    authMiddleware, 
    productController.getAllProducts
);

/* 
    @route GET/api/products/:id 
    @desc Get product by ID
    @access Authenticated users
 */
router.get(
    '/:id',
    authMiddleware,
    productController.getProductById
);

/* 
    @route GET /api/products/search
    @desc Search products
    @access Authenticated users
 */
router.get(
    '/search',
    authMiddleware,
    productController.searchProducts
);

/* 
    @route GET /api/products/low-stock
    @desc Get products with low stock
    @access Authenticated users
 */
router.get(
    '/low-stock',
    authMiddleware,
    productController.getLowStockProducts
);

/* 
    @route GET /api/products/category/:categoryId
    @desc Get products by category
    @access Authenticated users
 */
router.get(
    '/category/:categoryId',
    authMiddleware,
    productController.getProductsByCategory
);

/* 
    @route GET /api/products/supplier/:supplierId
    @desc Get products by supplier
    @access Authenticated users
 */
router.get(
    '/supplier/:supplierId',
    authMiddleware,
    productController.getProductsBySupplier
);

/* 
    @route POST /api/products
    @desc Create a new product
    @access Admin / Manager
 */
router.post(
    '/',
    authMiddleware,
    roleMiddleware(['admin', 'Manager']),
    validateProduct,
    productController.createProduct
);

/* 
    @route PUT /api/products/:id
    @desc Update a product
    @access Admin / Manager
 */
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware(['admin', 'Manager']),
    validateProduct,
    productController.updateProduct
);

/* 
    @route DELETE /api/products/:id
    @desc Delete product
    @access Admin only
 */
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    productController.deleteProduct
);

module.exports = router;




