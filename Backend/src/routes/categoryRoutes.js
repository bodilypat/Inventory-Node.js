//src/routes/categoryRoutes.js 

const express = require('express');
const router = express.Router();

// Controller 
const categoryController = require('../controllers/categoryController');

// Middleware 
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Validation 
const { validateCategory } = require('../validation/categoryValidation');

/* 
    * @routes POST/api/categories/
    * @desc Get all categories
    * @access Authenticated users
*/
router.get(
    '/', 
    authMiddleware, 
    categoryController.getAllCategories
);

/* 
    * @routes GET/api/categories/
    * @desc a category by ID
    * @access Authenticated users
*/
router.get(
    '/:id', 
    authMiddleware, 
    categoryController.getCategoryById
);

/* 
    * @routes POST/api/categories/
    * @desc Create a new category
    * @access Admin only
*/
router.post(
    '/', 
    authMiddleware, 
    roleMiddleware(['Admin','Manager']), 
    validateCategory, 
    categoryController.createCategory
);

/* 
    * @routes PUT/api/categories/:id
    * @desc Update an existing category
    * @access Admin / Manager
*/
router.put(
    '/:id', 
    authMiddleware, 
    roleMiddleware(['Admin','Manager']),
    validateCategory, 
    categoryController.updateCategory
);

/* 
    * @routes DELETE/api/categories/:id
    * @desc Delete a category
    * @access Admin only
*/
router.delete(
    '/:id', 
    authMiddleware, 
    roleMiddleware(['Admin']), 
    categoryController.deleteCategory
);

module.exports = router;


